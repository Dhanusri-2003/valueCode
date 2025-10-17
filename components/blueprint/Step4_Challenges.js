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
        <div className="text-sm text-[var(--color-electric)] mb-2">
          Question 4 of 6 • 67%
        </div>
        <h2 className="text-2xl font-bold">Top 5 challenges you currently have*</h2>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a challenge and press Enter"
            className="flex-1 px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
            disabled={formData.challenges.length >= 5}
          />
          <button
            onClick={addChallenge}
            disabled={!inputValue.trim() || formData.challenges.length >= 5}
            className="btn-primary px-6 py-3 disabled:opacity-50"
          >
            Add
          </button>
        </div>
        
        <div className="text-sm text-[var(--color-mutedgray)] mb-4">
          {formData.challenges.length} / 5 items added
        </div>

        <div className="space-y-2">
          {formData.challenges.map((challenge, index) => (
            <div key={index} className="flex items-center justify-between bg-[var(--color-onyx)] px-4 py-3 rounded-lg">
              <span>{challenge}</span>
              <button
                onClick={() => removeChallenge(index)}
                className="text-[var(--color-mutedgray)] hover:text-red-400 text-lg"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)]">
          Back
        </button>
        <button 
          onClick={nextStep}
          disabled={formData.challenges.length === 0}
          className="btn-primary px-6 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}