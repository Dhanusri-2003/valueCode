// components/blueprint/Step4_Challenges.js
import { useState } from 'react';

export default function Step4_Challenges({ formData, setFormData, nextStep, prevStep }) {
  const [inputValue, setInputValue] = useState('');

  const addChallenge = () => {
    if (inputValue.trim() && formData.challenges.length < 5) {
      setFormData(prev => ({
        ...prev,
        challenges: [...prev.challenges, inputValue.trim()]
      }));
      setInputValue('');
    }
  };

  const removeChallenge = (index) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.filter((_, i) => i !== index)
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addChallenge();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[#8B7355] mb-2">
          Question 4 of 6 • 67%
        </div>
        <h2 className="text-2xl font-bold text-[#3E2723]">Top 5 challenges you currently have*</h2>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a challenge and press Enter"
            className="flex-1 px-4 py-3 bg-white border border-[#D7CCC8] rounded-lg text-[#3E2723] placeholder-[#A1887F] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20"
            disabled={formData.challenges.length >= 5}
          />
          <button
            onClick={addChallenge}
            disabled={!inputValue.trim() || formData.challenges.length >= 5}
            className="bg-[#8B7355] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6D4C41] disabled:opacity-50 transition-colors"
          >
            Add
          </button>
        </div>
        
        <div className="text-sm text-[#5D4037] mb-4">
          {formData.challenges.length} / 5 items added
        </div>

        <div className="space-y-2">
          {formData.challenges.map((challenge, index) => (
            <div key={index} className="flex items-center justify-between bg-white border border-[#D7CCC8] px-4 py-3 rounded-lg">
              <span className="text-[#3E2723]">{challenge}</span>
              <button
                onClick={() => removeChallenge(index)}
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
          disabled={formData.challenges.length === 0}
          className="bg-[#8B7355] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6D4C41] disabled:opacity-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}