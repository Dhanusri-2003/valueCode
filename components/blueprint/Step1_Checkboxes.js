

// import { Lightbulb, Mail, Facebook, Instagram, Linkedin, Rss, Youtube, DollarSign } from 'lucide-react';

// export default function Step1_Checkboxes({ formData, setFormData, nextStep }) {
//   // Defensive check: ensure formData is an object or default to an empty object for safety
//   const data = formData || {}; 
    
//   const handleCheckboxChange = (field) => {
//     setFormData(prev => ({ ...prev, [field]: !prev[field] }));
//   };

//   const handleBudgetChange = (event) => {
//     setFormData(prev => ({ ...prev, monthlyAdSpend: event.target.value }));
//   };

//   const checkboxOptions = [
//     { id: 'hasWebsite', label: 'Got Website', Icon: Lightbulb },
//     { id: 'hasGmail', label: 'Gmail', Icon: Mail },
//     { id: 'hasFacebook', label: 'Facebook', Icon: Facebook },
//     { id: 'hasInstagram', label: 'Instagram', Icon: Instagram },
//     { id: 'hasLinkedIn', label: 'LinkedIn', Icon: Linkedin },
//     { id: 'hasPinterest', label: 'Pinterest', Icon: Rss },
//     { id: 'hasYoutube', label: 'Youtube', Icon: Youtube }
//   ];

//   return (
//     // ADJUSTMENT: Increased max-w-4xl to max-w-6xl for a wider, more integrated look.
//     // Adjusted padding from px-8 to px-6 to utilize the space better.
//     <div >
      
//       {/* Header */}
//       <div className="text-center mb-10">
//         {/* FIX 2: Text colors for dark theme. */}
//         <div className="text-sm text-[var(--color-electric)] font-semibold mb-2 mt-10">
//               Question 1 of 6 • 17%
//       </div>

//         <h2 className="text-3xl font-extrabold text-[var(--color-softwhite)]">Select if Applicable:</h2>
//       </div>

//       {/* Checkbox Section - Enforcing single line with internal horizontal scroller */}
//       <div className="mb-12">
//         <div className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-4 py-2">
//           {checkboxOptions.map((item) => {
//               const IconComponent = item.Icon;
//               // Use the safe 'data' object here
//               const isChecked = data[item.id] || false;
              
//               return (
//                   <label 
//                       key={item.id} 
//                       className={`
//                           relative flex items-center space-x-3 cursor-pointer p-3 rounded-xl transition-all duration-300 border flex-shrink-0
//                           ${isChecked 
//                               ? 'bg-[var(--color-electric)]/10 border-[var(--color-electric)] text-[var(--color-electric)] shadow-lg shadow-[var(--color-electric)]/20'
//                               // FIX 3: Unchecked state uses transparent background, muted border, and muted gray text.
//                               : 'bg-transparent border-[var(--color-white)]/30 text-[var(--color-mutedgray)] hover:border-[var(--color-electric)]' 
//                           }
//                       `}
//                   >
//                       {/* Checkbox Input */}
//                       <input
//                           type="checkbox"
//                           checked={isChecked}
//                           onChange={() => handleCheckboxChange(item.id)}
//                           className={`
//                               w-5 h-5 rounded-md border-2 appearance-none 
//                               ${isChecked 
//                                   ? 'bg-[var(--color-electric)] border-[var(--color-electric)] checked:bg-[var(--color-electric)] checked:border-[var(--color-electric)]'
//                                   // FIX 4: Unchecked input box is dark (midnight/onyx) with a muted gray border.
//                                   : 'bg-[var(--color-midnight)] border-[var(--color-white)]' 
//                               }
//                               transition duration-300
//                           `}
//                           style={{
//                               backgroundImage: isChecked ? "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")" : 'none',
//                               backgroundSize: '100% 100%',
//                               backgroundPosition: 'center',
//                               backgroundRepeat: 'no-repeat',
//                               filter: isChecked ? 'none' : 'grayscale(100%)'
//                           }}
//                       />
                      
//                       {/* 2. Status Icon (Center) */}
//                       <IconComponent className="w-5 h-5" />
                      
//                       {/* 3. Label Text (Right) */}
//                       <span className="text-sm whitespace-nowrap font-medium">{item.label}</span>
                      
//                   </label>
//               );
//           })}
//         </div>
//       </div>

//  {/* Budget Section */}
// <div className="mb-8 flex justify-center">
//   <div className="inline-flex flex-wrap items-center gap-4 bg-[var(--color-midnight)] rounded-xl px-6 py-4 shadow-inner border border-gray-700">
//     <h3 className="text-lg font-semibold text-[var(--color-softwhite)] whitespace-nowrap">
//       How much you spend on Google ads/Social ads per month:
//     </h3>

//     <select
//       value={data.monthlyAdSpend || 'NIL'}
//       onChange={handleBudgetChange}
//       className="px-4 py-2 text-base rounded-lg focus:outline-none focus:ring-1 
//                  focus:ring-[var(--color-electric)] text-[var(--color-softwhite)] 
//                  bg-[var(--color-onyx)] border border-gray-600 font-medium 
//                  transition duration-200 hover:border-[var(--color-electric)] cursor-pointer"
//     >
//       <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="NIL">NIL</option>
//       <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="1000-3000">1,000 - 3,000</option>
//       <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="3000-6000">3,000 - 6,000</option>
//       <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="6000-9000">6,000 - 9,000</option>
//       <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="10000+">&gt;10,000</option>
//     </select>
//   </div>
// </div>

//       {/* Next Button */}
// <div className="flex justify-center mt-12">
//   <button 
//     onClick={nextStep}
//     className="
//       px-8 py-3 rounded-xl font-semibold text-lg text-white 
//       bg-[var(--color-electric)] hover:bg-[var(--color-electric)]/90 
//       shadow-lg shadow-[var(--color-electric)]/40 
//       transition duration-300 transform hover:scale-[1.01]
//     "
//   >
//     Next
//   </button>
// </div>


//     </div>
//   );
// }
import { Lightbulb, Mail, Facebook, Instagram, Linkedin, Rss, Youtube, DollarSign, Twitter, MessageCircle } from 'lucide-react';

export default function Step1_Checkboxes({ formData, setFormData, nextStep }) {
  // Defensive check: ensure formData is an object or default to an empty object for safety
  const data = formData || {}; 
    
  const handleCheckboxChange = (field) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleBudgetChange = (event) => {
    setFormData(prev => ({ ...prev, monthlyAdSpend: event.target.value }));
  };

  const handleBusinessTypeChange = (event) => {
    setFormData(prev => ({ ...prev, businessType: event.target.value }));
  };

  const checkboxOptions = [
    { id: 'hasWebsite', label: 'Got Website', Icon: Lightbulb },
    { id: 'hasGmail', label: 'Gmail', Icon: Mail },
    { id: 'hasFacebook', label: 'Facebook', Icon: Facebook },
    { id: 'hasInstagram', label: 'Instagram', Icon: Instagram },
    { id: 'hasLinkedIn', label: 'LinkedIn', Icon: Linkedin },
    { id: 'hasTwitter', label: 'Twitter', Icon: Twitter },
    { id: 'hasWhatsApp', label: 'WhatsApp', Icon: MessageCircle },
    { id: 'hasPinterest', label: 'Pinterest', Icon: Rss },
    { id: 'hasYoutube', label: 'Youtube', Icon: Youtube }
  ];

  const businessTypeOptions = [
    'Service',
    'Manufacturing', 
    'Trading',
    'Coaching',
    'Consulting',
    'Others'
  ];

  return (
    <div className="px-8 max-w-4xl mx-auto"> {/* Centered container with max width */}
      {/* Header - Progress centered, title centered */}
      <div className="text-center mb-2">
        <div className="text-sm text-[var(--color-electric)] font-semibold mt-10">
          Question 2 of 6 • 33%
        </div>
      </div>
      <div className="text-center mb-10"> {/* Title centered */}
        <h2 className="text-3xl font-extrabold text-[var(--color-softwhite)]">Tell us about your business</h2>
      </div>

      {/* Business Type Section - Centered with moderate width */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex flex-wrap items-center gap-4 bg-[var(--color-midnight)] rounded-xl px-8 py-4 shadow-inner border border-gray-700 max-w-2xl">
          <h3 className="text-lg font-semibold text-[var(--color-softwhite)] whitespace-nowrap">
            Business type:
          </h3>

          <select
            value={data.businessType || ''}
            onChange={handleBusinessTypeChange}
            className="px-4 py-2 text-base rounded-lg focus:outline-none focus:ring-1 
                       focus:ring-[var(--color-electric)] text-[var(--color-softwhite)] 
                       bg-[var(--color-onyx)] border border-gray-600 font-medium 
                       transition duration-200 hover:border-[var(--color-electric)] cursor-pointer min-w-[200px]"
          >
            <option value="" className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]">
              Select business type
            </option>
            {businessTypeOptions.map((type) => (
              <option 
                key={type} 
                value={type}
                className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]"
              >
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Checkbox Section - Centered with balanced two lines */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[var(--color-softwhite)]">Select if Applicable:</h3>
        </div>
        
        {/* First Line - 5 items centered */}
        <div className="flex flex-wrap gap-3 mb-3 justify-center">
          {checkboxOptions.slice(0, 5).map((item) => {
              const IconComponent = item.Icon;
              const isChecked = data[item.id] || false;
              
              return (
                  <label 
                      key={item.id} 
                      className={`
                          flex items-center space-x-2 cursor-pointer p-3 rounded-xl transition-all duration-300 border
                          ${isChecked 
                              ? 'bg-[var(--color-electric)]/10 border-[var(--color-electric)] text-[var(--color-electric)] shadow-lg shadow-[var(--color-electric)]/20'
                              : 'bg-transparent border-[var(--color-white)]/30 text-[var(--color-mutedgray)] hover:border-[var(--color-electric)]' 
                          }
                      `}
                  >
                      <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(item.id)}
                          className={`
                              w-5 h-5 rounded-md border-2 appearance-none 
                              ${isChecked 
                                  ? 'bg-[var(--color-electric)] border-[var(--color-electric)] checked:bg-[var(--color-electric)] checked:border-[var(--color-electric)]'
                                  : 'bg-[var(--color-midnight)] border-[var(--color-white)]' 
                              }
                              transition duration-300
                          `}
                          style={{
                              backgroundImage: isChecked ? "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")" : 'none',
                              backgroundSize: '100% 100%',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              filter: isChecked ? 'none' : 'grayscale(100%)'
                          }}
                      />
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm whitespace-nowrap font-medium">{item.label}</span>
                  </label>
              );
          })}
        </div>
        
        {/* Second Line - 4 items centered */}
        <div className="flex flex-wrap gap-3 justify-center">
          {checkboxOptions.slice(5).map((item) => {
              const IconComponent = item.Icon;
              const isChecked = data[item.id] || false;
              
              return (
                  <label 
                      key={item.id} 
                      className={`
                          flex items-center space-x-2 cursor-pointer p-3 rounded-xl transition-all duration-300 border
                          ${isChecked 
                              ? 'bg-[var(--color-electric)]/10 border-[var(--color-electric)] text-[var(--color-electric)] shadow-lg shadow-[var(--color-electric)]/20'
                              : 'bg-transparent border-[var(--color-white)]/30 text-[var(--color-mutedgray)] hover:border-[var(--color-electric)]' 
                          }
                      `}
                  >
                      <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(item.id)}
                          className={`
                              w-5 h-5 rounded-md border-2 appearance-none 
                              ${isChecked 
                                  ? 'bg-[var(--color-electric)] border-[var(--color-electric)] checked:bg-[var(--color-electric)] checked:border-[var(--color-electric)]'
                                  : 'bg-[var(--color-midnight)] border-[var(--color-white)]' 
                              }
                              transition duration-300
                          `}
                          style={{
                              backgroundImage: isChecked ? "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\")" : 'none',
                              backgroundSize: '100% 100%',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              filter: isChecked ? 'none' : 'grayscale(100%)'
                          }}
                      />
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm whitespace-nowrap font-medium">{item.label}</span>
                  </label>
              );
          })}
        </div>
      </div>

            {/* Budget Section - Original layout with dropdown on same line */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex flex-wrap items-center gap-4 bg-[var(--color-midnight)] rounded-xl px-6 py-4 shadow-inner border border-gray-700">
          <h3 className="text-lg font-semibold text-[var(--color-softwhite)] whitespace-nowrap">
            How much you spend on Google ads/Social ads per month:
          </h3>

          <select
            value={data.monthlyAdSpend || 'NIL'}
            onChange={handleBudgetChange}
            className="px-4 py-2 text-base rounded-lg focus:outline-none focus:ring-1 
                       focus:ring-[var(--color-electric)] text-[var(--color-softwhite)] 
                       bg-[var(--color-onyx)] border border-gray-600 font-medium 
                       transition duration-200 hover:border-[var(--color-electric)] cursor-pointer"
          >
            <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="NIL">NIL</option>
            <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="1000-6000">1,000 - 6,000</option>
            <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="6000-9000">6,000 - 9,000</option>
            <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="9000-20000">9,000 - 20,000</option>
            <option className="bg-[var(--color-onyx)] text-[var(--color-softwhite)]" value="20000+">&gt;20,000</option>
          </select>
        </div>
      </div>
      {/* Next Button - Centered */}
      <div className="flex justify-center mt-12">
        <button 
          onClick={nextStep}
          className="
            px-8 py-3 rounded-xl font-semibold text-lg text-white 
            bg-[var(--color-electric)] hover:bg-[var(--color-electric)]/90 
            shadow-lg shadow-[var(--color-electric)]/40 
            transition duration-300 transform hover:scale-[1.01]
          "
        >
          Next
        </button>
      </div>
    </div>
  );
}