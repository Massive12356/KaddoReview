import { StarRatings } from '../../types/review';
import StarRating from '../StarRating';

interface Step7Props {
  data: Partial<StarRatings>;
  onChange: (data: Partial<StarRatings>) => void;
}

const ratingCategories = [
  { key: 'execution' as keyof StarRatings, label: 'Execution', description: 'Ability to deliver on commitments' },
  { key: 'professionalism' as keyof StarRatings, label: 'Professionalism', description: 'Quality of interactions and work' },
  { key: 'communication' as keyof StarRatings, label: 'Communication', description: 'Clarity and responsiveness' },
  { key: 'valueCreation' as keyof StarRatings, label: 'Value Creation', description: 'Tangible results and ROI' },
  { key: 'trust' as keyof StarRatings, label: 'Trust', description: 'Reliability and integrity' },
  { key: 'scalability' as keyof StarRatings, label: 'Scalability', description: 'Ability to grow with demand' },
];

export default function Step7StarRatings({ data, onChange }: Step7Props) {
  const handleRatingChange = (key: keyof StarRatings, value: number) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Star Ratings</h2>
        <p className="text-gray-600">Rate your experience across these key categories.</p>
      </div>

      <div className="space-y-5">
        {ratingCategories.map((category) => (
          <div key={category.key} className="bg-gray-50 p-5 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-0.5">{category.label}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <StarRating
                  rating={data[category.key] || 0}
                  size="lg"
                  interactive
                  onChange={(value) => handleRatingChange(category.key, value)}
                />
                <span className="text-sm font-medium text-gray-700 min-w-[2rem]">
                  {data[category.key] ? `${data[category.key]}.0` : '0.0'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
        <p className="text-sm text-emerald-800">
          <span className="font-semibold">Note:</span> All ratings are required before submitting your review. Click on the stars to rate each category.
        </p>
      </div>
    </div>
  );
}
