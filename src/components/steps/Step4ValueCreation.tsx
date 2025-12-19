import { ValueCreation } from '../../types/review';

interface Step4Props {
  data: Partial<ValueCreation>;
  onChange: (data: Partial<ValueCreation>) => void;
}

export default function Step4ValueCreation({ data, onChange }: Step4Props) {
  const handleChange = (field: keyof ValueCreation, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Value Creation & Impact</h2>
        <p className="text-gray-600">Describe the tangible results and value created through this partnership.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Tangible Results & Outcomes <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.tangibleResults || ''}
            onChange={(e) => handleChange('tangibleResults', e.target.value)}
            rows={5}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="Provide specific examples of measurable results: revenue growth, cost savings, market expansion, valuation increases, successful exits, etc."
            required
          />
          <p className="text-xs text-gray-500 mt-1.5">
            Include specific metrics, percentages, dollar amounts, or other quantifiable outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
