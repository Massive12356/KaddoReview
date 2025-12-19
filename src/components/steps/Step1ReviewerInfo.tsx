import { ReviewerInfo } from '../../types/review';

interface Step1Props {
  data: Partial<ReviewerInfo>;
  onChange: (data: Partial<ReviewerInfo>) => void;
}

export default function Step1ReviewerInfo({ data, onChange }: Step1Props) {
  const handleChange = (field: keyof ReviewerInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Reviewer Information</h2>
        <p className="text-gray-600">Tell us about your organization and relationship with the business.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.companyName || ''}
            onChange={(e) => handleChange('companyName', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="Your organization name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.country || ''}
              onChange={(e) => handleChange('country', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="United States"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Industry <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.industry || ''}
              onChange={(e) => handleChange('industry', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="Venture Capital"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Your Role <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.role || ''}
            onChange={(e) => handleChange('role', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="Managing Partner"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Relationship Type <span className="text-red-500">*</span>
            </label>
            <select
              value={data.relationship || ''}
              onChange={(e) => handleChange('relationship', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              required
            >
              <option value="">Select relationship</option>
              <option value="Investor">Investor</option>
              <option value="Strategic Partner">Strategic Partner</option>
              <option value="Co-Investor">Co-Investor</option>
              <option value="Limited Partner">Limited Partner</option>
              <option value="Advisor">Advisor</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Partnership Duration <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.duration || ''}
              onChange={(e) => handleChange('duration', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              placeholder="2 years"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Company Logo URL <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            type="url"
            value={data.logoUrl || ''}
            onChange={(e) => handleChange('logoUrl', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            placeholder="https://example.com/logo.png"
          />
        </div>
      </div>
    </div>
  );
}
