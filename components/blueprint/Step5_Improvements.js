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
        <div className="text-sm text-[var(--color-electric)] mb-2">
          Question 5 of 6 • 83%
        </div>
        <h2 className="text-2xl font-bold">Top 3 things you need to improve*</h2>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type an improvement area and press Enter"
            className="flex-1 px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
            disabled={formData.improvements.length >= 3}
          />
          <button
            onClick={addImprovement}
            disabled={!inputValue.trim() || formData.improvements.length >= 3}
            className="btn-primary px-6 py-3 disabled:opacity-50"
          >
            Add
          </button>
        </div>
        
        <div className="text-sm text-[var(--color-mutedgray)] mb-4">
          {formData.improvements.length} / 3 items added
        </div>

        <div className="space-y-2">
          {formData.improvements.map((improvement, index) => (
            <div key={index} className="flex items-center justify-between bg-[var(--color-onyx)] px-4 py-3 rounded-lg">
              <span>{improvement}</span>
              <button
                onClick={() => removeImprovement(index)}
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
          disabled={formData.improvements.length === 0}
          className="btn-primary px-6 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}