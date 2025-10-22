// 'use client';
// import { useState } from 'react';
// import { Globe, Mail, Facebook, Instagram, Linkedin, MessageCircle, Youtube, DollarSign } from 'lucide-react';

// export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
//   const [submissionData, setSubmissionData] = useState(null);
//   const [showBlueprint, setShowBlueprint] = useState(false);

//   const handleSubmit = async () => {
//     try {
//       const result = await submitToSupabase();
//       setSubmissionData(formData);
//       setShowBlueprint(true);
//     } catch (error) {
//       alert('Error saving data. Please try again.');
//     }
//   };

//   // Blueprint Success View - Updated to match new form structure
//   if (showBlueprint && submissionData) {
//     return (
//       <div className="min-h-screen bg-[var(--color-midnight)] py-10 px-4">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Main Blueprint Card */}
//           <div className="bg-[var(--color-onyx)] rounded-xl p-8 mb-8 border border-[var(--color-onyx)]">
            
//             {/* Header Card */}
//             <div className="bg-[var(--color-midnight)] border-l-4 border-[var(--color-electric)] rounded-lg p-6 mb-8">
//               <h1 className="text-2xl font-semibold text-[var(--color-softwhite)] flex items-center">
//                 📄 valueCode
//               </h1>
//               <p className="text-[var(--color-mutedgray)] mt-1 ml-9">Custom AI SaaS Application Blueprint</p>
//             </div>

//             {/* Account/Setup Grid - Updated for new social media fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
//               {[
//                 { icon: <Globe size={18} />, label: 'Website', value: submissionData.hasWebsite ? 'Yes' : 'No' },
//                 { icon: <Mail size={18} />, label: 'Gmail', value: submissionData.hasGmail ? 'Yes' : 'No' },
//                 { icon: <Facebook size={18} />, label: 'Facebook', value: submissionData.hasFacebook ? 'Yes' : 'No' },
//                 { icon: <Instagram size={18} />, label: 'Instagram', value: submissionData.hasInstagram ? 'Yes' : 'No' },
//                 { icon: <Linkedin size={18} />, label: 'LinkedIn', value: submissionData.hasLinkedIn ? 'Yes' : 'No' },
//                 { icon: <MessageCircle size={18} />, label: 'Pinterest', value: submissionData.hasPinterest ? 'Yes' : 'No' },
//                 { icon: <Youtube size={18} />, label: 'Youtube', value: submissionData.hasYoutube ? 'Yes' : 'No' },
//                 { icon: <DollarSign size={18} />, label: 'Monthly Ad Spend', value: submissionData.monthlyAdSpend || 'Not specified' }
//               ].map((item, idx) => (
//                 <div key={idx} className="flex items-center justify-between p-4">
//                   <div className="flex items-center gap-2 text-[var(--color-softwhite)] font-medium">
//                     {item.icon} {item.label}
//                   </div>
//                   <span className={`font-semibold ${item.value === 'Yes' ? 'text-green-400' : item.value === 'No' ? 'text-red-400' : 'text-[var(--color-electric)]'}`}>
//                     {item.value}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Content Grid - Features, Challenges, Needs */}
//             <div className="flex gap-6 mb-10">
//               {/* Requested Features */}
//               <div className="flex-1">
//                 <div className="flex items-center mb-4">
//                   <span className="text-yellow-400 text-xl mr-2">💡</span>
//                   <h3 className="text-lg font-bold text-yellow-400">Requested Features</h3>
//                 </div>
//                 <ul className="space-y-2">
//                   {submissionData.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <strong className="text-yellow-400 mr-2">{index + 1}.</strong>
//                       <span className="text-[var(--color-softwhite)]">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Current Challenges */}
//               <div className="flex-1">
//                 <div className="flex items-center mb-4">
//                   <span className="text-red-400 text-xl mr-2">⭕</span>
//                   <h3 className="text-lg font-bold text-red-400">Current Challenges</h3>
//                 </div>
//                 <ul className="space-y-2">
//                   {submissionData.challenges.map((challenge, index) => (
//                     <li key={index} className="flex items-start">
//                       <strong className="text-red-400 mr-2">{index + 1}.</strong>
//                       <span className="text-[var(--color-softwhite)]">{challenge}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Needs Improvement */}
//               <div className="flex-1">
//                 <div className="flex items-center mb-4">
//                   <span className="text-green-400 text-xl mr-2">📈</span>
//                   <h3 className="text-lg font-bold text-green-400">Needs Improvement</h3>
//                 </div>
//                 <ul className="space-y-2">
//                   {submissionData.improvements.map((improvement, index) => (
//                     <li key={index} className="flex items-start">
//                       <strong className="text-green-400 mr-2">{index + 1}.</strong>
//                       <span className="text-[var(--color-softwhite)]">{improvement}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Strategic Recommendations - Updated for social media focus */}
//             <div>
//               <h2 className="text-xl font-semibold text-[var(--color-softwhite)] mb-6">Strategic Recommendations</h2>
//               <div className="grid grid-cols-2 gap-6">
//                 {/* Social Media Integration */}
//                 <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6">
//                   <div className="flex items-center mb-3">
//                     <span className="text-[var(--color-electric)] text-lg mr-2">📱</span>
//                     <h4 className="font-bold text-[var(--color-electric)]">Social Media Integration</h4>
//                   </div>
//                   <p className="text-[var(--color-mutedgray)] text-sm">
//                     Leverage your existing social media accounts for automated posting and engagement
//                   </p>
//                 </div>

//                 {/* Ad Spend Optimization */}
//                 <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-6">
//                   <div className="flex items-center mb-3">
//                     <span className="text-green-400 text-lg mr-2">💰</span>
//                     <h4 className="font-bold text-green-400">Ad Spend Optimization</h4>
//                   </div>
//                   <p className="text-[var(--color-mutedgray)] text-sm">
//                     Implement AI-powered ad optimization based on your current spending patterns
//                   </p>
//                 </div>

//                 {/* Multi-Platform Automation */}
//                 <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-6">
//                   <div className="flex items-center mb-3">
//                     <span className="text-purple-400 text-lg mr-2">⚡</span>
//                     <h4 className="font-bold text-purple-400">Multi-Platform Automation</h4>
//                   </div>
//                   <p className="text-[var(--color-mutedgray)] text-sm">
//                     Create unified automation across all your social media and email platforms
//                   </p>
//                 </div>

//                 {/* Content Strategy */}
//                 <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-6">
//                   <div className="flex items-center mb-3">
//                     <span className="text-yellow-400 text-lg mr-2">🎯</span>
//                     <h4 className="font-bold text-yellow-400">Content Strategy</h4>
//                   </div>
//                   <p className="text-[var(--color-mutedgray)] text-sm">
//                     Develop AI-driven content creation tailored for each social platform
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Technology & Timeline Card */}
//           <div className="bg-[var(--color-onyx)] rounded-xl p-8 border border-[var(--color-onyx)]">
            
//             {/* Technology Stack */}
//             <div className="mb-10">
//               <h2 className="text-xl font-semibold text-[var(--color-softwhite)] mb-4">Recommended Technology Stack</h2>
//               <div className="flex flex-wrap gap-3">
//                 {[
//                   "React UI", 
//                   "n8n Workflow Automation", 
//                   "Supabase Database", 
//                   "Google OAuth Integration",
//                   "Social Media APIs",
//                   "AI-Powered Features",
//                   "Webhook Integrations",
//                   "Multi-Platform Dashboard"
//                 ].map((tech, index) => (
//                   <span key={index} className="bg-[var(--color-midnight)] text-[var(--color-electric)] px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-electric)]/30">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Implementation Timeline */}
//             <div>
//               <h2 className="text-2xl font-bold text-[var(--color-softwhite)] mb-6">Implementation Timeline</h2>
              
//               <div className="flex flex-wrap">
//                 {/* Left Column */}
//                 <div className="w-full md:w-1/2 pr-6">
//                   {/* Discovery & Planning */}
//                   <div className="relative mb-8">
//                     <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">Discovery & Planning</h3>
//                     <span className="absolute top-0 right-0 text-[var(--color-electric)] font-semibold">Week 1</span>
//                     <ul className="space-y-1 text-[var(--color-softwhite)]">
//                       <li>Analyze social media integration requirements</li>
//                       <li>Map ad spend data to features</li>
//                       <li>Create platform-specific wireframes</li>
//                       <li>Plan multi-platform API architecture</li>
//                     </ul>
//                   </div>

//                   {/* Foundation Setup */}
//                   <div className="relative mb-8">
//                     <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">Foundation Setup</h3>
//                     <span className="absolute top-0 right-0 text-[var(--color-electric)] font-semibold">Week 1</span>
//                     <ul className="space-y-1 text-[var(--color-softwhite)]">
//                       <li>Set up development environment</li>
//                       <li>Configure Supabase database</li>
//                       <li>Implement social media OAuth integrations</li>
//                       <li>Create unified dashboard UI</li>
//                     </ul>
//                   </div>

//                   {/* Core Feature Development */}
//                   <div className="relative mb-8">
//                     <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">Core Feature Development</h3>
//                     <span className="absolute top-0 right-0 text-[var(--color-electric)] font-semibold">Week 2</span>
//                     <ul className="space-y-1 text-[var(--color-softwhite)]">
//                       <li>Build: multi-platform posting automation</li>
//                       <li>Build: ad performance analytics</li>
//                       <li>Build: content scheduling</li>
//                       <li>Build: engagement tracking</li>
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="w-full md:w-1/2 pl-6">
//                   {/* AI Integration */}
//                   <div className="relative mb-8">
//                     <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">AI Integration</h3>
//                     <span className="absolute top-0 right-4 text-[var(--color-electric)] font-semibold">Week 3</span>
//                     <ul className="space-y-1 text-[var(--color-softwhite)]">
//                       <li>AI-powered content generation</li>
//                       <li>Smart ad budget optimization</li>
//                       <li>Automated engagement responses</li>
//                       <li>Performance prediction algorithms</li>
//                     </ul>
//                   </div>

//                   {/* Testing & Refinement */}
//                   <div className="relative">
//                     <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">Testing & Refinement</h3>
//                     <span className="absolute top-0 right-4 text-[var(--color-electric)] font-semibold">Week 4</span>
//                     <ul className="space-y-1 text-[var(--color-softwhite)]">
//                       <li>Cross-platform integration testing</li>
//                       <li>Performance optimization</li>
//                       <li>Security audit for API connections</li>
//                       <li>User acceptance testing</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="text-center mt-12">
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button 
//                 onClick={() => window.location.href = '/'}
//                 className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Return to Homepage
//               </button>
//               <button 
//                 onClick={() => window.location.href = 'mailto:support@valuecode.com'}
//                 className="border border-[var(--color-electric)] text-[var(--color-electric)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-electric)] hover:text-[var(--color-midnight)] transition-colors"
//               >
//                 Contact Support
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     );
//   }

//   // Original Email Form View (unchanged)
//   return (
//     <div className="max-w-2xl mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <div className="text-sm text-[var(--color-electric)] mb-2">
//           Question 6 of 6 • 100%
//         </div>
//         <h2 className="text-2xl font-bold text-[var(--color-softwhite)]">Enter your email address*</h2>
//         <p className="text-[var(--color-mutedgray)] mt-2">
//           We will send your AI blueprint to this email
//         </p>
//       </div>

//       <div className="mb-8">
//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => setFormData(prev => ({
//             ...prev,
//             email: e.target.value
//           }))}
//           placeholder="your@email.com"
//           className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
//         />
//       </div>

//       <div className="flex justify-between">
//         <button 
//           onClick={prevStep}
//           className="px-6 py-3 text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors"
//         >
//           Back
//         </button>
//         <button 
//           onClick={handleSubmit}
//           disabled={!formData.email.includes('@') || isSubmitting}
//           className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
//         >
//           {isSubmitting ? 'Generating...' : 'Generate Blueprint'}
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import { Globe, Mail, Facebook, Instagram, Linkedin, MessageCircle, Youtube, DollarSign } from 'lucide-react';

export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
  const [submissionData, setSubmissionData] = useState(null);
  const [showBlueprint, setShowBlueprint] = useState(false);

  const handleSubmit = async () => {
    try {
      const result = await submitToSupabase();
      setSubmissionData(formData);
      setShowBlueprint(true);
    } catch (error) {
      alert('Error saving data. Please try again.');
    }
  };

  // Blueprint Success View - Updated to match new form structure
  if (showBlueprint && submissionData) {
    return (
      <div className="min-h-screen bg-[var(--color-midnight)] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Blueprint Card */}
          <div className="bg-[var(--color-onyx)] rounded-xl p-8 mb-8 border border-[var(--color-onyx)]">
            
            {/* Header Card */}
            <div className="bg-[var(--color-midnight)] border-l-4 border-[var(--color-electric)] rounded-lg p-6 mb-8">
              <h1 className="text-2xl font-semibold text-[var(--color-softwhite)] flex items-center">
                📄 valueCode
              </h1>
              <p className="text-[var(--color-mutedgray)] mt-1 ml-9">Custom AI SaaS Application Blueprint</p>
            </div>

            {/* Account/Setup Grid - Updated for new social media fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { icon: <Globe size={18} />, label: 'Website', value: submissionData.hasWebsite ? 'Yes' : 'No' },
                { icon: <Mail size={18} />, label: 'Gmail', value: submissionData.hasGmail ? 'Yes' : 'No' },
                { icon: <Facebook size={18} />, label: 'Facebook', value: submissionData.hasFacebook ? 'Yes' : 'No' },
                { icon: <Instagram size={18} />, label: 'Instagram', value: submissionData.hasInstagram ? 'Yes' : 'No' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn', value: submissionData.hasLinkedIn ? 'Yes' : 'No' },
                { icon: <MessageCircle size={18} />, label: 'Pinterest', value: submissionData.hasPinterest ? 'Yes' : 'No' },
                { icon: <Youtube size={18} />, label: 'Youtube', value: submissionData.hasYoutube ? 'Yes' : 'No' },
                { icon: <DollarSign size={18} />, label: 'Monthly Ad Spend', value: submissionData.monthlyAdSpend || 'Not specified' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2 text-[var(--color-softwhite)] font-medium">
                    {item.icon} {item.label}
                  </div>
                  <span className={`font-semibold ${item.value === 'Yes' ? 'text-green-400' : item.value === 'No' ? 'text-red-400' : 'text-[var(--color-electric)]'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Content Grid - Features, Challenges, Needs */}
            <div className="flex gap-6 mb-10">
              {/* Requested Features */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-xl mr-2">💡</span>
                  <h3 className="text-lg font-bold text-yellow-400">Requested Features</h3>
                </div>
                <ul className="space-y-2">
                  {submissionData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <strong className="text-yellow-400 mr-2">{index + 1}.</strong>
                      <span className="text-[var(--color-softwhite)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Challenges */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <span className="text-red-400 text-xl mr-2">⭕</span>
                  <h3 className="text-lg font-bold text-red-400">Current Challenges</h3>
                </div>
                <ul className="space-y-2">
                  {submissionData.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <strong className="text-red-400 mr-2">{index + 1}.</strong>
                      <span className="text-[var(--color-softwhite)]">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Needs Improvement */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <span className="text-green-400 text-xl mr-2">📈</span>
                  <h3 className="text-lg font-bold text-green-400">Needs Improvement</h3>
                </div>
                <ul className="space-y-2">
                  {submissionData.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start">
                      <strong className="text-green-400 mr-2">{index + 1}.</strong>
                      <span className="text-[var(--color-softwhite)]">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Strategic Recommendations - Updated for social media focus */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--color-softwhite)] mb-6">Strategic Recommendations</h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Social Media Integration */}
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-[var(--color-electric)] text-lg mr-2">📱</span>
                    <h4 className="font-bold text-[var(--color-electric)]">Social Media Integration</h4>
                  </div>
                  <p className="text-[var(--color-mutedgray)] text-sm">
                    Leverage your existing social media accounts for automated posting and engagement
                  </p>
                </div>

                {/* Ad Spend Optimization */}
                <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-green-400 text-lg mr-2">💰</span>
                    <h4 className="font-bold text-green-400">Ad Spend Optimization</h4>
                  </div>
                  <p className="text-[var(--color-mutedgray)] text-sm">
                    Implement AI-powered ad optimization based on your current spending patterns
                  </p>
                </div>

                {/* Multi-Platform Automation */}
                <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-purple-400 text-lg mr-2">⚡</span>
                    <h4 className="font-bold text-purple-400">Multi-Platform Automation</h4>
                  </div>
                  <p className="text-[var(--color-mutedgray)] text-sm">
                    Create unified automation across all your social media and email platforms
                  </p>
                </div>

                {/* Content Strategy */}
                <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-400 text-lg mr-2">🎯</span>
                    <h4 className="font-bold text-yellow-400">Content Strategy</h4>
                  </div>
                  <p className="text-[var(--color-mutedgray)] text-sm">
                    Develop AI-driven content creation tailored for each social platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology & Timeline Card */}
          <div className="bg-[var(--color-onyx)] rounded-xl p-8 border border-[var(--color-onyx)]">
            
            {/* Technology Stack */}
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-[var(--color-softwhite)] mb-4">Recommended Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "React UI", 
                  "n8n Workflow Automation", 
                  "Supabase Database", 
                  "Google OAuth Integration",
                  "Social Media APIs",
                  "AI-Powered Features",
                  "Webhook Integrations",
                  "Multi-Platform Dashboard"
                ].map((tech, index) => (
                  <span key={index} className="bg-[var(--color-midnight)] text-[var(--color-electric)] px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-electric)]/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-softwhite)] mb-6">Implementation Timeline</h2>
              
              <div className="flex flex-wrap">
                {/* Left Column */}
                <div className="w-full md:w-1/2 pr-6">
                  {/* Discovery & Planning */}
                  <div className="relative mb-8">
                    <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">Discovery & Planning</h3>
                    <span className="absolute top-0 right-0 text-[var(--color-electric)] font-semibold">Week 1</span>
                    <ul className="space-y-1 text-[var(--color-softwhite)]">
                      <li>Analyze social media integration requirements</li>
                      <li>Map ad spend data to features</li>
                      <li>Create platform-specific wireframes</li>
                      <li>Plan multi-platform API architecture</li>
                    </ul>
                  </div>

                  {/* Foundation Setup */}
                  <div className="relative mb-8">
                    <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">Foundation Setup</h3>
                    <span className="absolute top-0 right-0 text-[var(--color-electric)] font-semibold">Week 1</span>
                    <ul className="space-y-1 text-[var(--color-softwhite)]">
                      <li>Set up development environment</li>
                      <li>Configure Supabase database</li>
                      <li>Implement social media OAuth integrations</li>
                      <li>Create unified dashboard UI</li>
                    </ul>
                  </div>

                  {/* Core Feature Development - UPDATED TO SHOW USER'S FEATURES */}
                  <div className="relative mb-8">
                    <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">Core Feature Development</h3>
                    <span className="absolute top-0 right-0 text-[var(--color-electric)] font-semibold">Week 2</span>
                    <ul className="space-y-1 text-[var(--color-softwhite)]">
                      {submissionData.features.length > 0 ? (
                        submissionData.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[var(--color-electric)] mr-2">•</span>
                            <span>Build: {feature}</span>
                          </li>
                        ))
                      ) : (
                        <>
                          <li className="flex items-start">
                            <span className="text-[var(--color-electric)] mr-2">•</span>
                            <span>Build: multi-platform posting automation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[var(--color-electric)] mr-2">•</span>
                            <span>Build: ad performance analytics</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[var(--color-electric)] mr-2">•</span>
                            <span>Build: content scheduling</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[var(--color-electric)] mr-2">•</span>
                            <span>Build: engagement tracking</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-1/2 pl-6">
                  {/* AI Integration */}
                  <div className="relative mb-8">
                    <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">AI Integration</h3>
                    <span className="absolute top-0 right-4 text-[var(--color-electric)] font-semibold">Week 3</span>
                    <ul className="space-y-1 text-[var(--color-softwhite)]">
                      <li>AI-powered content generation</li>
                      <li>Smart ad budget optimization</li>
                      <li>Automated engagement responses</li>
                      <li>Performance prediction algorithms</li>
                    </ul>
                  </div>

                  {/* Testing & Refinement */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">Testing & Refinement</h3>
                    <span className="absolute top-0 right-4 text-[var(--color-electric)] font-semibold">Week 4</span>
                    <ul className="space-y-1 text-[var(--color-softwhite)]">
                      <li>Cross-platform integration testing</li>
                      <li>Performance optimization</li>
                      <li>Security audit for API connections</li>
                      <li>User acceptance testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Return to Homepage
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:support@valuecode.com'}
                className="border border-[var(--color-electric)] text-[var(--color-electric)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-electric)] hover:text-[var(--color-midnight)] transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Original Email Form View (unchanged)
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[var(--color-electric)] mb-2">
          Question 6 of 6 • 100%
        </div>
        <h2 className="text-2xl font-bold text-[var(--color-softwhite)]">Enter your email address*</h2>
        <p className="text-[var(--color-mutedgray)] mt-2">
          We will send your AI blueprint to this email
        </p>
      </div>

      <div className="mb-8">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            email: e.target.value
          }))}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
        />
      </div>

      <div className="flex justify-between">
        <button 
          onClick={prevStep}
          className="px-6 py-3 text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors"
        >
          Back
        </button>
        <button 
          onClick={handleSubmit}
          disabled={!formData.email.includes('@') || isSubmitting}
          className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {isSubmitting ? 'Generating...' : 'Generate Blueprint'}
        </button>
      </div>
    </div>
  );
}