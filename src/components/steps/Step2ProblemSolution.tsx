import { ProblemSolution } from '../../types/review';

interface Step2Props {
  data: Partial<ProblemSolution>;
  onChange: (data: Partial<ProblemSolution>) => void;
}

export default function Step2ProblemSolution({ data, onChange }: Step2Props) {
  const handleChange = (field: keyof ProblemSolution, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Problem–Solution Validation</h2>
        <p className="text-gray-600">Describe the challenge and how effectively it was addressed.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            What challenge or problem were you facing? <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.challenge || ''}
            onChange={(e) => handleChange('challenge', e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="Describe the specific business challenge or problem you needed to solve..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            How effective was the solution provided? <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.effectiveness || ''}
            onChange={(e) => handleChange('effectiveness', e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="Explain how effectively the solution addressed your challenge and any measurable outcomes..."
            required
          />
        </div>
      </div>
    </div>
  );
}
