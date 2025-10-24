// components/blueprint/Step2_CompanyName.js
export default function Step2_CompanyName({ formData, setFormData, nextStep, prevStep }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[var(--color-electric)] mb-2">Question 1 of 6 • 17%</div>
        <h2 className="text-2xl font-bold">What is the name of your company?*</h2>
      </div>

      <div className="mb-8">
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
          placeholder="Enter your company name"
          className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
        />
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)]">Back</button>
        <button 
          onClick={nextStep}
          disabled={!formData.companyName.trim()}
          className="btn-primary px-6 py-2 disabled:opacity-50"
        >Next</button>
      </div>
    </div>
  );
}