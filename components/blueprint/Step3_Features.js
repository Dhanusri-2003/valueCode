// components/blueprint/Step3_Features.js
import { useState } from 'react';

export default function Step3_Features({ formData, setFormData, nextStep, prevStep }) {
  const [inputValue, setInputValue] = useState('');

  const addFeature = () => {
    if (inputValue.trim() && formData.features.length < 5) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, inputValue.trim()]
      }));
      setInputValue('');
    }
  };

  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addFeature();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[var(--color-electric)] mb-2">
          Question 3 of 6 • 50%
        </div>
        <h2 className="text-2xl font-bold">Top 5 features you want in the app*</h2>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a feature and press Enter"
            className="flex-1 px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
            disabled={formData.features.length >= 5}
          />
          <button
            onClick={addFeature}
            disabled={!inputValue.trim() || formData.features.length >= 5}
            className="btn-primary px-6 py-3 disabled:opacity-50"
          >
            Add
          </button>
        </div>
        
        <div className="text-sm text-[var(--color-mutedgray)] mb-4">
          {formData.features.length} / 5 items added
        </div>

        <div className="space-y-2">
          {formData.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-between bg-[var(--color-onyx)] px-4 py-3 rounded-lg">
              <span>{feature}</span>
              <button
                onClick={() => removeFeature(index)}
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
          disabled={formData.features.length === 0}
          className="btn-primary px-6 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}