import { useState } from 'react';
import { reviewService } from '../services/reviewService';
import StarRating from './StarRating';
import { Building2, Globe, Briefcase, Clock, TrendingUp, PlusCircle } from 'lucide-react';
import { Review } from '../types/review';

interface ReviewsPageProps {
  onSubmitReview: () => void;
}

export default function ReviewsPage({ onSubmitReview }: ReviewsPageProps) {
  const [reviews] = useState<Review[]>(reviewService.getAllReviews());
  const averageRatings = reviewService.getAverageRatings();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Investor Reviews</h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                Authentic feedback from investors, partners, and business leaders on real partnership experiences.
              </p>
            </div>
            <button
              onClick={onSubmitReview}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <PlusCircle className="w-5 h-5" />
              Submit Review
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-12">
            {[
              { label: 'Execution', value: averageRatings.execution },
              { label: 'Professionalism', value: averageRatings.professionalism },
              { label: 'Communication', value: averageRatings.communication },
              { label: 'Value Creation', value: averageRatings.valueCreation },
              { label: 'Trust', value: averageRatings.trust },
              { label: 'Scalability', value: averageRatings.scalability },
            ].map((category) => (
              <div key={category.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1">{category.value.toFixed(1)}</div>
                <div className="text-xs text-slate-300 mb-2">{category.label}</div>
                <StarRating rating={category.value} size="sm" />
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="text-3xl font-bold">{averageRatings.overall.toFixed(1)}</div>
              <div className="text-left">
                <StarRating rating={averageRatings.overall} size="sm" />
                <div className="text-xs text-slate-300">Overall Rating ({reviews.length} reviews)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-6">
          {reviews.map((review) => {
            const overallRating = reviewService.getOverallRating(review.starRatings);

            return (
              <div key={review.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-shrink-0">
                      {review.reviewerInfo.logoUrl ? (
                        <img
                          src={review.reviewerInfo.logoUrl}
                          alt={review.reviewerInfo.companyName}
                          className="w-20 h-20 rounded-full object-cover ring-4 ring-gray-100"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-2xl font-bold ring-4 ring-gray-100">
                          {review.reviewerInfo.companyName.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            {review.reviewerInfo.companyName}
                          </h2>
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <span className="font-medium">{review.reviewerInfo.role}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-lg border border-amber-200">
                          <span className="text-2xl font-bold text-gray-900">{overallRating.toFixed(1)}</span>
                          <StarRating rating={overallRating} size="md" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Globe className="w-4 h-4 text-emerald-600" />
                          <span>{review.reviewerInfo.country}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase className="w-4 h-4 text-emerald-600" />
                          <span>{review.reviewerInfo.industry}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building2 className="w-4 h-4 text-emerald-600" />
                          <span>{review.reviewerInfo.relationship}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          <span>{review.reviewerInfo.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
                    {[
                      { label: 'Execution', value: review.starRatings.execution },
                      { label: 'Professionalism', value: review.starRatings.professionalism },
                      { label: 'Communication', value: review.starRatings.communication },
                      { label: 'Value', value: review.starRatings.valueCreation },
                      { label: 'Trust', value: review.starRatings.trust },
                      { label: 'Scalability', value: review.starRatings.scalability },
                    ].map((category) => (
                      <div key={category.label} className="text-center">
                        <div className="text-xs font-medium text-gray-600 mb-1">{category.label}</div>
                        <StarRating rating={category.value} size="sm" />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        Recommendation
                      </h3>
                      <p className="text-gray-700 leading-relaxed italic">
                        "{review.endorsement.recommendationText}"
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {review.problemSolution.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Solution Effectiveness</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {review.problemSolution.effectiveness}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tangible Results</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {review.valueCreation.tangibleResults}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Reliability</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {review.executionOperational.reliability}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Professionalism</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {review.executionOperational.professionalism}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Communication</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {review.executionOperational.communication}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Scalability</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {review.scalabilityTrust.scalability}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Long-Term Trust</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {review.scalabilityTrust.longTermTrust}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
                    Submitted {new Date(review.submittedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
