import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  onSubmit?: () => void;
  isLastStep?: boolean;
}

export default function FormNavigation({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  onSubmit,
  isLastStep = false
}: FormNavigationProps) {
  const isFirstStep = currentStep === 1;

  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
      <button
        type="button"
        onClick={onBack}
        disabled={isFirstStep}
        className={`
          flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors
          ${isFirstStep
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100'
          }
        `}
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </button>

      <div className="text-sm text-gray-500">
        Step {currentStep} of {totalSteps}
      </div>

      {isLastStep && onSubmit ? (
        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
        >
          Submit Review
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
