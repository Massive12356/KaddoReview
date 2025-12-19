import { useState } from 'react';
import { ReviewFormData, Review } from '../types/review';
import { reviewService } from '../services/reviewService';
import Breadcrumbs from './Breadcrumbs';
import FormNavigation from './FormNavigation';
import Step1ReviewerInfo from './steps/Step1ReviewerInfo';
import Step2ProblemSolution from './steps/Step2ProblemSolution';
import Step3ExecutionOperational from './steps/Step3ExecutionOperational';
import Step4ValueCreation from './steps/Step4ValueCreation';
import Step5ScalabilityTrust from './steps/Step5ScalabilityTrust';
import Step6Endorsement from './steps/Step6Endorsement';
import Step7StarRatings from './steps/Step7StarRatings';
import { CheckCircle } from 'lucide-react';

const STEPS = [
  { number: 1, title: 'Reviewer Info' },
  { number: 2, title: 'Problem Solution' },
  { number: 3, title: 'Execution' },
  { number: 4, title: 'Value Creation' },
  { number: 5, title: 'Scalability' },
  { number: 6, title: 'Endorsement' },
  { number: 7, title: 'Star Ratings' },
];

interface ReviewFormProps {
  onSuccess: () => void;
}

export default function ReviewForm({ onSuccess }: ReviewFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<ReviewFormData>({
    reviewerInfo: {},
    problemSolution: {},
    executionOperational: {},
    valueCreation: {},
    scalabilityTrust: {},
    endorsement: {},
    starRatings: {},
  });

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.reviewerInfo.companyName &&
          formData.reviewerInfo.country &&
          formData.reviewerInfo.industry &&
          formData.reviewerInfo.role &&
          formData.reviewerInfo.relationship &&
          formData.reviewerInfo.duration
        );
      case 2:
        return !!(
          formData.problemSolution.challenge &&
          formData.problemSolution.effectiveness
        );
      case 3:
        return !!(
          formData.executionOperational.reliability &&
          formData.executionOperational.professionalism &&
          formData.executionOperational.communication
        );
      case 4:
        return !!formData.valueCreation.tangibleResults;
      case 5:
        return !!(
          formData.scalabilityTrust.scalability &&
          formData.scalabilityTrust.longTermTrust
        );
      case 6:
        return !!formData.endorsement.recommendationText;
      case 7:
        return !!(
          formData.starRatings.execution &&
          formData.starRatings.professionalism &&
          formData.starRatings.communication &&
          formData.starRatings.valueCreation &&
          formData.starRatings.trust &&
          formData.starRatings.scalability
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    } else {
      alert('Please fill in all required fields before proceeding.');
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleStepClick = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  const handleSubmit = () => {
    if (!validateStep(7)) {
      alert('Please complete all star ratings before submitting.');
      return;
    }

    const review: Review = {
      id: Math.random().toString(36).substr(2, 9),
      reviewerInfo: formData.reviewerInfo as Review['reviewerInfo'],
      problemSolution: formData.problemSolution as Review['problemSolution'],
      executionOperational: formData.executionOperational as Review['executionOperational'],
      valueCreation: formData.valueCreation as Review['valueCreation'],
      scalabilityTrust: formData.scalabilityTrust as Review['scalabilityTrust'],
      endorsement: formData.endorsement as Review['endorsement'],
      starRatings: formData.starRatings as Review['starRatings'],
      submittedAt: new Date().toISOString(),
    };

    reviewService.addReview(review);
    setShowSuccess(true);

    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Review Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for taking the time to share your experience. Your review has been successfully submitted.
          </p>
          <div className="text-sm text-gray-500">
            Redirecting to reviews page...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Review Submission</h1>
          <p className="text-gray-600">Share your experience with investors and business leaders</p>
        </div>

        <Breadcrumbs
          steps={STEPS}
          currentStep={currentStep}
          onStepClick={handleStepClick}
          allowBackNavigation={true}
        />

        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          {currentStep === 1 && (
            <Step1ReviewerInfo
              data={formData.reviewerInfo}
              onChange={(data) => setFormData({ ...formData, reviewerInfo: data })}
            />
          )}
          {currentStep === 2 && (
            <Step2ProblemSolution
              data={formData.problemSolution}
              onChange={(data) => setFormData({ ...formData, problemSolution: data })}
            />
          )}
          {currentStep === 3 && (
            <Step3ExecutionOperational
              data={formData.executionOperational}
              onChange={(data) => setFormData({ ...formData, executionOperational: data })}
            />
          )}
          {currentStep === 4 && (
            <Step4ValueCreation
              data={formData.valueCreation}
              onChange={(data) => setFormData({ ...formData, valueCreation: data })}
            />
          )}
          {currentStep === 5 && (
            <Step5ScalabilityTrust
              data={formData.scalabilityTrust}
              onChange={(data) => setFormData({ ...formData, scalabilityTrust: data })}
            />
          )}
          {currentStep === 6 && (
            <Step6Endorsement
              data={formData.endorsement}
              onChange={(data) => setFormData({ ...formData, endorsement: data })}
            />
          )}
          {currentStep === 7 && (
            <Step7StarRatings
              data={formData.starRatings}
              onChange={(data) => setFormData({ ...formData, starRatings: data })}
            />
          )}

          <FormNavigation
            currentStep={currentStep}
            totalSteps={STEPS.length}
            onNext={handleNext}
            onBack={handleBack}
            onSubmit={handleSubmit}
            isLastStep={currentStep === STEPS.length}
          />
        </div>
      </div>
    </div>
  );
}
