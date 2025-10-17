// components/blueprint/Step1_Checkboxes.js
export default function Step1_Checkboxes({ formData, setFormData, nextStep }) {
  const handleCheckboxChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[var(--color-electric)] mb-2">Question 1 of 6 • 17%</div>
        <h2 className="text-2xl font-bold">Click on the checkbox if applies:</h2>
      </div>

      <div className="space-y-4 mb-8">
        {[
          { id: 'hasWebsite', label: 'Got a website' },
          { id: 'hasGoogleAccount', label: 'Got Google account' },
          { id: 'hasAIAccount', label: 'Have an AI account like OpenAI' },
          { id: 'hasTechResource', label: 'Do you have a tech person / resource' }
        ].map((item) => (
          <label key={item.id} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData[item.id]}
              onChange={() => handleCheckboxChange(item.id)}
              className="w-5 h-5 text-[var(--color-electric)]"
            />
            <span className="text-lg">{item.label}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-end">
        <button onClick={nextStep} className="btn-primary px-6 py-2">Next</button>
      </div>
    </div>
  );
}