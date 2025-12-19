import { Endorsement } from '../../types/review';

interface Step6Props {
  data: Partial<Endorsement>;
  onChange: (data: Partial<Endorsement>) => void;
}

export default function Step6Endorsement({ data, onChange }: Step6Props) {
  const handleChange = (field: keyof Endorsement, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Endorsement Section</h2>
        <p className="text-gray-600">Provide your overall recommendation and final thoughts.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Your Recommendation <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.recommendationText || ''}
            onChange={(e) => handleChange('recommendationText', e.target.value)}
            rows={6}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="Write your overall recommendation. Would you recommend this partner to other investors or business leaders? Why or why not?"
            required
          />
          <p className="text-xs text-gray-500 mt-1.5">
            This will be displayed prominently on the public reviews page. Please be thorough and specific.
          </p>
        </div>
      </div>
    </div>
  );
}
