import { ExecutionOperational } from '../../types/review';

interface Step3Props {
  data: Partial<ExecutionOperational>;
  onChange: (data: Partial<ExecutionOperational>) => void;
}

export default function Step3ExecutionOperational({ data, onChange }: Step3Props) {
  const handleChange = (field: keyof ExecutionOperational, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Execution & Operational Strength</h2>
        <p className="text-gray-600">Evaluate reliability, professionalism, and communication quality.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Reliability & Delivery <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.reliability || ''}
            onChange={(e) => handleChange('reliability', e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="How reliable were they in delivering on commitments and meeting deadlines?"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Professionalism <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.professionalism || ''}
            onChange={(e) => handleChange('professionalism', e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="Describe their level of professionalism in interactions and work quality..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Communication Quality <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.communication || ''}
            onChange={(e) => handleChange('communication', e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
            placeholder="How would you rate their communication frequency, clarity, and responsiveness?"
            required
          />
        </div>
      </div>
    </div>
  );
}
