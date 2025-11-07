// components/blueprint/Step2_CompanyName.js
export default function Step2_CompanyName({ formData, setFormData, nextStep, prevStep }) {
  const handleBack = () => {
    // Go to homepage instead of previous step
    window.location.href = '/';
  };
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[#8B7355] mb-2">Question 1 of 6 • 17%</div>
        <h2 className="text-2xl font-bold text-[#3E2723]">What is the name of your company?*</h2>
      </div>

      <div className="mb-8">
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
          placeholder="Enter your company name"
          className="w-full px-4 py-3 bg-white border border-[#D7CCC8] rounded-lg text-[#3E2723] placeholder-[#A1887F] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20"
        />
      </div>

      <div className="flex justify-between">
        <button onClick={handleBack} className="text-[#5D4037] hover:text-[#8B7355] transition-colors">Back</button>
        <button 
          onClick={nextStep}
          disabled={!formData.companyName.trim()}
          className="bg-[#8B7355] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6D4C41] disabled:opacity-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}