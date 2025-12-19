import { ScalabilityTrust } from '../../types/review';

interface Step5Props {
  data: Partial<ScalabilityTrust>;
  onChange: (data: Partial<ScalabilityTrust>) => void;
}

export default function Step5ScalabilityTrust({ data, onChange }: Step5Props) {
  const handleChange = (field: keyof ScalabilityTrust, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Scalability & Trust</h2>
        <p className="text-gray-600">Assess their ability to scale and your confidence in the long-term partnership.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Scalability Assessment <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.scalability || ''}
            onChange={(e) => handleChange('scalability', e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="How well do they handle scaling? Can they maintain quality as demand grows?"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Long-Term Trust & Confidence <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.longTermTrust || ''}
            onChange={(e) => handleChange('longTermTrust', e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="How confident are you in continuing this partnership? Would you expand your engagement?"
            required
          />
        </div>
      </div>
    </div>
  );
}
