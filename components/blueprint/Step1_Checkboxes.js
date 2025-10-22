// components/blueprint/Step1_Checkboxes.js
import { Lightbulb, Mail, Facebook, Instagram, Linkedin, Rss, Youtube, DollarSign } from 'lucide-react';

export default function Step1_Checkboxes({ formData, setFormData, nextStep }) {
  const handleCheckboxChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleBudgetChange = (event) => {
    setFormData(prev => ({ ...prev, monthlyAdSpend: event.target.value }));
  };

  const checkboxOptions = [
    { id: 'hasWebsite', label: 'Got Website', Icon: Lightbulb },
    { id: 'hasGmail', label: 'Gmail', Icon: Mail },
    { id: 'hasFacebook', label: 'Facebook', Icon: Facebook },
    { id: 'hasInstagram', label: 'Instagram', Icon: Instagram },
    { id: 'hasLinkedIn', label: 'LinkedIn', Icon: Linkedin },
    { id: 'hasPinterest', label: 'Pinterest', Icon: Rss },
    { id: 'hasYoutube', label: 'Youtube', Icon: Youtube }
  ];

  return (
    <div className="w-full">
      <div className="bg-[var(--color-onyx)] rounded-2xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-sm text-[var(--color-electric)] font-semibold mb-2">Question 1 of 6 • 17%</div>
          <h2 className="text-3xl font-extrabold text-white">Select if Applicable:</h2>
        </div>

        {/* Checkbox Section */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {checkboxOptions.map((item) => {
                const IconComponent = item.Icon;
                const isChecked = formData[item.id] || false;
                
                return (
                    <label 
                        key={item.id} 
                        className={`
                            flex items-center space-x-2 cursor-pointer p-3 rounded-xl transition-all duration-300 border
                            ${isChecked 
                                ? 'bg-[var(--color-electric)]/10 border-[var(--color-electric)] text-[var(--color-electric)] shadow-lg shadow-[var(--color-electric)]/20'
                                : 'bg-[var(--color-midnight)] border-[var(--color-mutedgray)] text-gray-300 hover:border-[var(--color-electric)]'
                            }
                        `}
                    >
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxChange(item.id)}
                            className="hidden"
                        />
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm whitespace-nowrap font-medium">{item.label}</span>
                    </label>
                );
            })}
          </div>
        </div>

        {/* Budget Section */}
        <div className="mb-8 bg-[var(--color-midnight)] rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-white flex-shrink-0">
                How much you spend on Google ads/ Social ads per month:
            </h3>
            
            <select
              value={formData.monthlyAdSpend || ''}
              onChange={handleBudgetChange}
              className="w-full md:w-48 px-4 py-3 text-lg rounded-xl focus:outline-none focus:ring-1 focus:ring-[var(--color-electric)] text-white bg-[var(--color-onyx)] font-medium transition duration-200 border border-[var(--color-mutedgray)]"
            >
              <option value="">Select an option</option>
              <option value="NIL">NIL</option>
              <option value="1000-3000">1,000 - 3,000</option>
              <option value="3000-6000">3,000 - 6,000</option>
              <option value="6000-9000">6,000 - 9,000</option>
              <option value="10000+">&gt;10,000</option>
            </select>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button 
            onClick={nextStep} 
            className="
              px-8 py-3 rounded-xl font-semibold text-lg text-white 
              bg-[var(--color-electric)] hover:bg-[var(--color-electric)]/90 shadow-lg shadow-[var(--color-electric)]/40 
              transition duration-300 transform hover:scale-[1.01]
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
