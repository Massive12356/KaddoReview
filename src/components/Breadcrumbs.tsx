interface Step {
  number: number;
  title: string;
}

interface BreadcrumbsProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (step: number) => void;
  allowBackNavigation?: boolean;
}

export default function Breadcrumbs({
  steps,
  currentStep,
  onStepClick,
  allowBackNavigation = true
}: BreadcrumbsProps) {
  return (
    <div className="w-full py-8">
      <div className="flex items-start justify-between max-w-4xl mx-auto px-4">
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;
          const isPending = step.number > currentStep;
          const isClickable = allowBackNavigation && (isCompleted || isCurrent);

          return (
            <div key={step.number} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                {index > 0 && (
                  <div
                    className={`flex-1 h-0.5 -ml-4 ${
                      isCompleted ? 'bg-emerald-500' : 'bg-gray-300'
                    }`}
                  />
                )}
                <button
                  onClick={() => isClickable && onStepClick(step.number)}
                  disabled={!isClickable}
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm
                    transition-all duration-200 shrink-0
                    ${isCurrent
                      ? 'bg-emerald-600 text-white ring-4 ring-emerald-100 scale-110'
                      : isCompleted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                    }
                    ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
                  `}
                >
                  {step.number}
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 -mr-4 ${
                      isCompleted ? 'bg-emerald-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
              <div
                className={`
                  mt-3 text-xs font-medium text-center px-1 leading-tight max-w-[100px]
                  ${isCurrent
                    ? 'text-emerald-700'
                    : isCompleted
                    ? 'text-emerald-600'
                    : 'text-gray-400'
                  }
                `}
              >
                {step.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
