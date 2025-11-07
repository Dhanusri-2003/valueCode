// components/blueprint/Step5_Improvements.js
import { useState } from 'react';

export default function Step5_Improvements({ formData, setFormData, nextStep, prevStep }) {
  const [inputValue, setInputValue] = useState('');

  const addImprovement = () => {
    if (inputValue.trim() && formData.improvements.length < 3) {
      setFormData(prev => ({
        ...prev,
        improvements: [...prev.improvements, inputValue.trim()]
      }));
      setInputValue('');
    }
  };

  const removeImprovement = (index) => {
    setFormData(prev => ({
      ...prev,
      improvements: prev.improvements.filter((_, i) => i !== index)
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addImprovement();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[#8B7355] mb-2">
          Question 5 of 6 • 83%
        </div>
        <h2 className="text-2xl font-bold text-[#3E2723]">Top 3 things you need to improve*</h2>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type an improvement area and press Enter"
            className="flex-1 px-4 py-3 bg-white border border-[#D7CCC8] rounded-lg text-[#3E2723] placeholder-[#A1887F] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20"
            disabled={formData.improvements.length >= 3}
          />
          <button
            onClick={addImprovement}
            disabled={!inputValue.trim() || formData.improvements.length >= 3}
            className="bg-[#8B7355] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6D4C41] disabled:opacity-50 transition-colors"
          >
            Add
          </button>
        </div>
        
        <div className="text-sm text-[#5D4037] mb-4">
          {formData.improvements.length} / 3 items added
        </div>

        <div className="space-y-2">
          {formData.improvements.map((improvement, index) => (
            <div key={index} className="flex items-center justify-between bg-white border border-[#D7CCC8] px-4 py-3 rounded-lg">
              <span className="text-[#3E2723]">{improvement}</span>
              <button
                onClick={() => removeImprovement(index)}
                className="text-[#5D4037] hover:text-red-500 text-lg transition-colors"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="text-[#5D4037] hover:text-[#8B7355] transition-colors">
          Back
        </button>
        <button 
          onClick={nextStep}
          disabled={formData.improvements.length === 0}
          className="bg-[#8B7355] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6D4C41] disabled:opacity-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}