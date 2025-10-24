// 'use client';
// import { useState } from 'react';
// import AccountSetupGrid from './AccountSetupGrid';
// import ContentSection from './ContentSection';
// import RecommendationCard from './RecommendationCard';
// import TimelinePhase from './TimelinePhase';
// import TechnologyStack from './TechnologyStack';

// export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
//   // State management
//   const [submissionData, setSubmissionData] = useState(null);
//   const [showBlueprint, setShowBlueprint] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);

//   // Email validation
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Form submission handler
//   const handleSubmit = async () => {
//     setEmailError('');
    
//     if (!validateEmail(formData.email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     setIsGenerating(true);
//     try {
//       const result = await submitToSupabase();
//       setSubmissionData(formData);
//       setShowBlueprint(true);
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Error saving data. Please try again.');
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   // In your Step6_Email component - Add this state and function:

// const [isSendingEmail, setIsSendingEmail] = useState(false);

// // Send Blueprint Email Function
// const handleSendEmail = async () => {
//   setIsSendingEmail(true);
//   try {
//     const response = await fetch('/api/send-blueprint', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userEmail: formData.email,
//         blueprintData: submissionData,
//         companyName: formData.companyName || 'Your Project',
//       }),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       alert('🎉 Blueprint sent to your email successfully! Check your inbox.');
//     } else {
//       throw new Error(result.error || 'Failed to send email');
//     }
//   } catch (error) {
//     console.error('Email error:', error);
//     alert('❌ Failed to send email. Please try again or contact support.');
//   } finally {
//     setIsSendingEmail(false);
//   }
// };

//   // Blueprint Success View
//   if (showBlueprint && submissionData) {
//     return (
//       <div className="min-h-screen bg-[var(--color-midnight)] py-10 px-4">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Main Blueprint Card */}
//           <div className="bg-[var(--color-onyx)] rounded-xl p-8 mb-8 border border-[var(--color-onyx)]">
            
//             {/* Header */}
//             <div className="bg-[var(--color-midnight)] border-l-4 border-[var(--color-electric)] rounded-lg p-6 mb-8">
//               <h1 className="text-2xl font-semibold text-[var(--color-softwhite)] flex items-center">
//                 📄 valueCode
//               </h1>
//               <p className="text-[var(--color-mutedgray)] mt-1 ml-9">Custom AI SaaS Application Blueprint</p>
//             </div>

//             {/* Account Setup Grid */}
//             <AccountSetupGrid data={submissionData} />

//             {/* Content Sections */}
//             <div className="flex gap-6 mb-10">
//               <ContentSection
//                 title="Requested Features"
//                 items={submissionData.features}
//                 icon="💡"
//                 colorClass="text-yellow-400"
//                 indexColorClass="text-yellow-400"
//               />
//               <ContentSection
//                 title="Current Challenges"
//                 items={submissionData.challenges}
//                 icon="⭕"
//                 colorClass="text-red-400"
//                 indexColorClass="text-red-400"
//               />
//               <ContentSection
//                 title="Needs Improvement"
//                 items={submissionData.improvements}
//                 icon="📈"
//                 colorClass="text-green-400"
//                 indexColorClass="text-green-400"
//               />
//             </div>

//             {/* Strategic Recommendations */}
//             <div>
//               <h2 className="text-xl font-semibold text-[var(--color-softwhite)] mb-6">Strategic Recommendations</h2>
//               <div className="grid grid-cols-2 gap-6">
//                 <RecommendationCard
//                   title="Social Media Integration"
//                   description="Leverage your existing social media accounts for automated posting and engagement"
//                   icon="📱"
//                   bgColor="bg-blue-900/20"
//                   borderColor="border-blue-700/30"
//                   textColor="text-[var(--color-electric)]"
//                 />
//                 <RecommendationCard
//                   title="Ad Spend Optimization"
//                   description="Implement AI-powered ad optimization based on your current spending patterns"
//                   icon="💰"
//                   bgColor="bg-green-900/20"
//                   borderColor="border-green-700/30"
//                   textColor="text-green-400"
//                 />
//                 <RecommendationCard
//                   title="Multi-Platform Automation"
//                   description="Create unified automation across all your social media and email platforms"
//                   icon="⚡"
//                   bgColor="bg-purple-900/20"
//                   borderColor="border-purple-700/30"
//                   textColor="text-purple-400"
//                 />
//                 <RecommendationCard
//                   title="Content Strategy"
//                   description="Develop AI-driven content creation tailored for each social platform"
//                   icon="🎯"
//                   bgColor="bg-yellow-900/20"
//                   borderColor="border-yellow-700/30"
//                   textColor="text-yellow-400"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Technology & Timeline */}
//           <div className="bg-[var(--color-onyx)] rounded-xl p-8 border border-[var(--color-onyx)]">
//             <TechnologyStack />
            
//             <div>
//               <h2 className="text-2xl font-bold text-[var(--color-softwhite)] mb-6">Implementation Timeline</h2>
//               <div className="flex flex-wrap">
//                 <div className="w-full md:w-1/2 pr-6">
//                   <TimelinePhase
//                     title="Discovery & Planning"
//                     duration="Week 1"
//                     items={[
//                       'Analyze social media integration requirements',
//                       'Map ad spend data to features',
//                       'Create platform-specific wireframes',
//                       'Plan multi-platform API architecture'
//                     ]}
//                   />
//                   <TimelinePhase
//                     title="Foundation Setup"
//                     duration="Week 1"
//                     items={[
//                       'Set up development environment',
//                       'Configure Supabase database',
//                       'Implement social media OAuth integrations',
//                       'Create unified dashboard UI'
//                     ]}
//                   />
//                   <TimelinePhase
//                     title="Core Feature Development"
//                     duration="Week 2"
//                     items={[
//                       'Build: multi-platform posting automation',
//                       'Build: ad performance analytics',
//                       'Build: content scheduling',
//                       'Build: engagement tracking'
//                     ]}
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 pl-6">
//                   <TimelinePhase
//                     title="AI Integration"
//                     duration="Week 3"
//                     items={[
//                       'AI-powered content generation',
//                       'Smart ad budget optimization',
//                       'Automated engagement responses',
//                       'Performance prediction algorithms'
//                     ]}
//                     rightAlign={true}
//                   />
//                   <TimelinePhase
//                     title="Testing & Refinement"
//                     duration="Week 4"
//                     items={[
//                       'Cross-platform integration testing',
//                       'Performance optimization',
//                       'Security audit for API connections',
//                       'User acceptance testing'
//                     ]}
//                     rightAlign={true}
//                   />
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
//               {/* In the Action Buttons section - REPLACE THIS */}
//               <button 
//                 onClick={handleSendEmail}
//                 disabled={isSendingEmail}
//                 className="border border-[var(--color-electric)] text-[var(--color-electric)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-electric)] hover:text-[var(--color-midnight)] disabled:opacity-50 transition-colors"
//               >
//                 {isSendingEmail ? '📨 Sending...' : '📩 Send Blueprint via Email'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Email Form View
//   return (
//     <div className="max-w-2xl mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <div className="text-sm text-[var(--color-electric)] mb-2">
//           Question 6 of 6 • 100%
//         </div>
//         <h1 className="text-2xl font-bold text-[var(--color-softwhite)]">Enter your email address*</h1>
//         <p className="text-[var(--color-mutedgray)] mt-2">
//           We will send your AI blueprint to this email
//         </p>
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email-input" className="sr-only">
//           Email address
//         </label>
//         <input
//           id="email-input"
//           type="email"
//           value={formData.email}
//           onChange={(e) => {
//             setFormData(prev => ({ ...prev, email: e.target.value }));
//             if (emailError) setEmailError('');
//           }}
//           placeholder="your@email.com"
//           className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
//           aria-describedby="email-help email-error"
//           aria-invalid={!!emailError}
//           required
//         />
//         <div id="email-help" className="sr-only">
//           We will send your AI blueprint to this email address
//         </div>
//         {emailError && (
//           <div id="email-error" className="text-red-400 text-sm mt-2" role="alert">
//             {emailError}
//           </div>
//         )}
//       </div>

//       <div className="flex justify-between items-center">
//         <button 
//           onClick={prevStep}
//           className="px-6 py-3 text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors"
//           aria-label="Go back to previous step"
//         >
//           Back
//         </button>
//         <button 
//           onClick={handleSubmit}
//           disabled={!formData.email.includes('@') || isSubmitting || isGenerating}
//           className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
//           aria-label={isGenerating ? 'Generating blueprint' : 'Generate AI blueprint'}
//         >
//           {isGenerating ? 'Generating...' : 'Generate Blueprint'}
//         </button>
//       </div>
//     </div>
//   );
// }


// 'use client';
// import { useState, useRef } from 'react';
// import AccountSetupGrid from './AccountSetupGrid';
// import ContentSection from './ContentSection';
// import RecommendationCard from './RecommendationCard';
// import TimelinePhase from './TimelinePhase';
// import TechnologyStack from './TechnologyStack';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
//   const [submissionData, setSubmissionData] = useState(null);
//   const [showBlueprint, setShowBlueprint] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isSendingEmail, setIsSendingEmail] = useState(false);
  
//   const blueprintRef = useRef(null);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async () => {
//     setEmailError('');
    
//     if (!validateEmail(formData.email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     setIsGenerating(true);
//     try {
//       const result = await submitToSupabase();
//       setSubmissionData(formData);
//       setShowBlueprint(true);
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Error saving data. Please try again.');
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   // Generate PDF from blueprint view
//   const generatePDF = async () => {
//     if (!blueprintRef.current) {
//       throw new Error('Blueprint content not found');
//     }

//     const canvas = await html2canvas(blueprintRef.current, {
//       scale: 2,
//       useCORS: true,
//       backgroundColor: '#0a0f1e',
//       logging: false,
//     });

//     const imgWidth = 210; // A4 width in mm
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
//     const pdf = new jsPDF('p', 'mm', 'a4');
//     pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
    
//     return pdf;
//   };

//   // Send Blueprint Email with PDF Attachment
//   const handleSendEmail = async () => {
//     setIsSendingEmail(true);
//     try {
//       // Generate PDF
//       const pdf = await generatePDF();
//       const pdfBase64 = pdf.output('datauristring').split(',')[1];
      
//       const response = await fetch('/api/send-blueprint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userEmail: formData.email,
//           companyName: formData.companyName || 'Your Project',
//           pdfBase64: pdfBase64,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert('🎉 Blueprint PDF sent to your email successfully! Check your inbox and attachments.');
//       } else {
//         throw new Error(result.error || 'Failed to send email');
//       }
//     } catch (error) {
//       console.error('Email error:', error);
//       alert('❌ Failed to send email. Please try again or contact support.');
//     } finally {
//       setIsSendingEmail(false);
//     }
//   };

//   // Blueprint Success View
//   if (showBlueprint && submissionData) {
//     return (
//       <>
//         {/* Blueprint content that will be converted to PDF */}
//         <div 
//           ref={blueprintRef}
//           className="min-h-screen bg-[var(--color-midnight)] py-10 px-4"
//         >
//           <div className="max-w-4xl mx-auto">
            
//             {/* Main Blueprint Card */}
//             <div className="bg-[var(--color-onyx)] rounded-xl p-8 mb-8 border border-[var(--color-onyx)]">
              
//               {/* Header */}
//               <div className="bg-[var(--color-midnight)] border-l-4 border-[var(--color-electric)] rounded-lg p-6 mb-8">
//                 <h1 className="text-2xl font-semibold text-[var(--color-softwhite)] flex items-center">
//                   📄 valueCode
//                 </h1>
//                 <p className="text-[var(--color-mutedgray)] mt-1 ml-9">Custom AI SaaS Application Blueprint</p>
//               </div>

//               {/* Account Setup Grid */}
//               <AccountSetupGrid data={submissionData} />

//               {/* Content Sections */}
//               <div className="flex gap-6 mb-10">
//                 <ContentSection
//                   title="Requested Features"
//                   items={submissionData.features}
//                   icon="💡"
//                   colorClass="text-yellow-400"
//                   indexColorClass="text-yellow-400"
//                 />
//                 <ContentSection
//                   title="Current Challenges"
//                   items={submissionData.challenges}
//                   icon="⭕"
//                   colorClass="text-red-400"
//                   indexColorClass="text-red-400"
//                 />
//                 <ContentSection
//                   title="Needs Improvement"
//                   items={submissionData.improvements}
//                   icon="📈"
//                   colorClass="text-green-400"
//                   indexColorClass="text-green-400"
//                 />
//               </div>

//               {/* Strategic Recommendations */}
//               <div>
//                 <h2 className="text-xl font-semibold text-[var(--color-softwhite)] mb-6">Strategic Recommendations</h2>
//                 <div className="grid grid-cols-2 gap-6">
//                   <RecommendationCard
//                     title="Social Media Integration"
//                     description="Leverage your existing social media accounts for automated posting and engagement"
//                     icon="📱"
//                     bgColor="bg-blue-900/20"
//                     borderColor="border-blue-700/30"
//                     textColor="text-[var(--color-electric)]"
//                   />
//                   <RecommendationCard
//                     title="Ad Spend Optimization"
//                     description="Implement AI-powered ad optimization based on your current spending patterns"
//                     icon="💰"
//                     bgColor="bg-green-900/20"
//                     borderColor="border-green-700/30"
//                     textColor="text-green-400"
//                   />
//                   <RecommendationCard
//                     title="Multi-Platform Automation"
//                     description="Create unified automation across all your social media and email platforms"
//                     icon="⚡"
//                     bgColor="bg-purple-900/20"
//                     borderColor="border-purple-700/30"
//                     textColor="text-purple-400"
//                   />
//                   <RecommendationCard
//                     title="Content Strategy"
//                     description="Develop AI-driven content creation tailored for each social platform"
//                     icon="🎯"
//                     bgColor="bg-yellow-900/20"
//                     borderColor="border-yellow-700/30"
//                     textColor="text-yellow-400"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Technology & Timeline */}
//             <div className="bg-[var(--color-onyx)] rounded-xl p-8 border border-[var(--color-onyx)]">
//               <TechnologyStack />
              
//               <div>
//                 <h2 className="text-2xl font-bold text-[var(--color-softwhite)] mb-6">Implementation Timeline</h2>
//                 <div className="flex flex-wrap">
//                   <div className="w-full md:w-1/2 pr-6">
//                     <TimelinePhase
//                       title="Discovery & Planning"
//                       duration="Week 1"
//                       items={[
//                         'Analyze social media integration requirements',
//                         'Map ad spend data to features',
//                         'Create platform-specific wireframes',
//                         'Plan multi-platform API architecture'
//                       ]}
//                     />
//                     <TimelinePhase
//                       title="Foundation Setup"
//                       duration="Week 1"
//                       items={[
//                         'Set up development environment',
//                         'Configure Supabase database',
//                         'Implement social media OAuth integrations',
//                         'Create unified dashboard UI'
//                       ]}
//                     />
//                     <TimelinePhase
//                       title="Core Feature Development"
//                       duration="Week 2"
//                       items={[
//                         'Build: multi-platform posting automation',
//                         'Build: ad performance analytics',
//                         'Build: content scheduling',
//                         'Build: engagement tracking'
//                       ]}
//                     />
//                   </div>
//                   <div className="w-full md:w-1/2 pl-6">
//                     <TimelinePhase
//                       title="AI Integration"
//                       duration="Week 3"
//                       items={[
//                         'AI-powered content generation',
//                         'Smart ad budget optimization',
//                         'Automated engagement responses',
//                         'Performance prediction algorithms'
//                       ]}
//                       rightAlign={true}
//                     />
//                     <TimelinePhase
//                       title="Testing & Refinement"
//                       duration="Week 4"
//                       items={[
//                         'Cross-platform integration testing',
//                         'Performance optimization',
//                         'Security audit for API connections',
//                         'User acceptance testing'
//                       ]}
//                       rightAlign={true}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons - Separate from PDF content */}
//         <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-midnight)] border-t border-[var(--color-onyx)] p-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button 
//                 onClick={() => window.location.href = '/'}
//                 className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Return to Homepage
//               </button>
//               <button 
//                 onClick={handleSendEmail}
//                 disabled={isSendingEmail}
//                 className="border border-[var(--color-electric)] text-[var(--color-electric)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-electric)] hover:text-[var(--color-midnight)] disabled:opacity-50 transition-colors"
//               >
//                 {isSendingEmail ? '📨 Sending PDF...' : '📩 Send Blueprint PDF via Email'}
//               </button>
//             </div>
//             <p className="text-[var(--color-mutedgray)] text-sm mt-2">
//               The complete blueprint will be attached as a PDF file to your email
//             </p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   // Email Form View
//   return (
//     <div className="max-w-2xl mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <div className="text-sm text-[var(--color-electric)] mb-2">
//           Question 6 of 6 • 100%
//         </div>
//         <h1 className="text-2xl font-bold text-[var(--color-softwhite)]">Enter your email address*</h1>
//         <p className="text-[var(--color-mutedgray)] mt-2">
//           We will send your AI blueprint to this email
//         </p>
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email-input" className="sr-only">
//           Email address
//         </label>
//         <input
//           id="email-input"
//           type="email"
//           value={formData.email}
//           onChange={(e) => {
//             setFormData(prev => ({ ...prev, email: e.target.value }));
//             if (emailError) setEmailError('');
//           }}
//           placeholder="your@email.com"
//           className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
//           aria-describedby="email-help email-error"
//           aria-invalid={!!emailError}
//           required
//         />
//         <div id="email-help" className="sr-only">
//           We will send your AI blueprint to this email address
//         </div>
//         {emailError && (
//           <div id="email-error" className="text-red-400 text-sm mt-2" role="alert">
//             {emailError}
//           </div>
//         )}
//       </div>

//       <div className="flex justify-between items-center">
//         <button 
//           onClick={prevStep}
//           className="px-6 py-3 text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors"
//           aria-label="Go back to previous step"
//         >
//           Back
//         </button>
//         <button 
//           onClick={handleSubmit}
//           disabled={!formData.email.includes('@') || isSubmitting || isGenerating}
//           className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
//           aria-label={isGenerating ? 'Generating blueprint' : 'Generate AI blueprint'}
//         >
//           {isGenerating ? 'Generating...' : 'Generate Blueprint'}
//         </button>
//       </div>
//     </div>
//   );
// }
'use client';
import { useState, useRef } from 'react';
import AccountSetupGrid from './AccountSetupGrid';
import ContentSection from './ContentSection';
import RecommendationCard from './RecommendationCard';
import TimelinePhase from './TimelinePhase';
import TechnologyStack from './TechnologyStack';
import PDFSafeAccountSetupGrid from './PDFSafeAccountSetupGrid';
import PDFSafeContentSection from './PDFSafeContentSection';
import PDFSafeRecommendationCard from './PDFSafeRecommendationCard';
import PDFSafeTimelinePhase from './PDFSafeTimelinePhase';
import PDFSafeTechnologyStack from './PDFSafeTechnologyStack';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
  const [submissionData, setSubmissionData] = useState(null);
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  
  const pdfRef = useRef(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setEmailError('');
    
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsGenerating(true);
    try {
      const result = await submitToSupabase();
      setSubmissionData(formData);
      setShowBlueprint(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error saving data. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Generate PDF with reduced size
  const generatePDF = async () => {
    if (!pdfRef.current) {
      throw new Error('PDF content not found');
    }

    const canvas = await html2canvas(pdfRef.current, {
      scale: 0.8, // Reduced from 1.5 to 0.8
      useCORS: true,
      backgroundColor: '#0a0f1e',
      logging: false,
      quality: 0.7, // Reduce quality
      width: pdfRef.current.scrollWidth,
      height: pdfRef.current.scrollHeight,
    });

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Use JPEG with compression instead of PNG
    const imgData = canvas.toDataURL('image/jpeg', 0.7);
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    
    return pdf;
  };

  // Send email with FormData instead of JSON
  const handleSendEmail = async () => {
    setIsSendingEmail(true);
    try {
      const pdf = await generatePDF();
      
      // Convert PDF to blob instead of base64
      const pdfBlob = pdf.output('blob');
      
      // Use FormData instead of JSON
      const formDataToSend = new FormData();
      formDataToSend.append('userEmail', formData.email);
      formDataToSend.append('companyName', formData.companyName || 'Your Project');
      formDataToSend.append('pdfFile', pdfBlob, 'ai-saas-blueprint.pdf');

      const response = await fetch('/api/send-blueprint', {
        method: 'POST',
        body: formDataToSend, // No Content-Type header for FormData
      });

      const result = await response.json();

      if (response.ok) {
        alert('🎉 Blueprint PDF sent to your email successfully! Check your inbox and attachments.');
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Email error:', error);
      alert('❌ Failed to send email. Please try again or contact support.');
    } finally {
      setIsSendingEmail(false);
    }
  };

  // Blueprint Success View
  if (showBlueprint && submissionData) {
    return (
      <>
        {/* Hidden PDF content - uses PDF-safe components */}
        <div style={{ 
          position: 'absolute', 
          left: '-9999px', 
          top: '0',
          width: '100%'
        }}>
          <div ref={pdfRef}>
            <div style={{
              backgroundColor: '#0a0f1e',
              color: 'white',
              minHeight: '100vh',
              padding: '40px 20px',
              fontFamily: 'Arial, sans-serif'
            }}>
              <div style={{ maxWidth: '896px', margin: '0 auto' }}>
                
                {/* Header */}
                <div style={{
                  backgroundColor: '#111827',
                  borderLeft: '4px solid #3b82f6',
                  borderRadius: '8px',
                  padding: '24px',
                  marginBottom: '32px'
                }}>
                  <h1 style={{ fontSize: '24px', fontWeight: '600', margin: 0, display: 'flex', alignItems: 'center' }}>
                    📄 valueCode
                  </h1>
                  <p style={{ color: '#9ca3af', margin: '4px 0 0 36px', margin: 0 }}>
                    Custom AI SaaS Application Blueprint
                  </p>
                </div>

                <PDFSafeAccountSetupGrid data={submissionData} />

                {/* Content Sections */}
                <div style={{ display: 'flex', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
                  <PDFSafeContentSection
                    title="Requested Features"
                    items={submissionData.features}
                    icon="💡"
                    colorClass="text-yellow-400"
                    indexColorClass="text-yellow-400"
                  />
                  <PDFSafeContentSection
                    title="Current Challenges"
                    items={submissionData.challenges}
                    icon="⭕"
                    colorClass="text-red-400"
                    indexColorClass="text-red-400"
                  />
                  <PDFSafeContentSection
                    title="Needs Improvement"
                    items={submissionData.improvements}
                    icon="📈"
                    colorClass="text-green-400"
                    indexColorClass="text-green-400"
                  />
                </div>

                {/* Strategic Recommendations */}
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#f3f4f6', marginBottom: '24px' }}>
                    Strategic Recommendations
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    <PDFSafeRecommendationCard
                      title="Social Media Integration"
                      description="Leverage your existing social media accounts for automated posting and engagement"
                      icon="📱"
                    />
                    <PDFSafeRecommendationCard
                      title="Ad Spend Optimization"
                      description="Implement AI-powered ad optimization based on your current spending patterns"
                      icon="💰"
                    />
                    <PDFSafeRecommendationCard
                      title="Multi-Platform Automation"
                      description="Create unified automation across all your social media and email platforms"
                      icon="⚡"
                    />
                    <PDFSafeRecommendationCard
                      title="Content Strategy"
                      description="Develop AI-driven content creation tailored for each social platform"
                      icon="🎯"
                    />
                  </div>
                </div>

                <PDFSafeTechnologyStack />

                {/* Timeline */}
                <div style={{ backgroundColor: '#111827', padding: '24px', borderRadius: '8px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f3f4f6', marginBottom: '24px' }}>
                    Implementation Timeline
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                      <PDFSafeTimelinePhase
                        title="Discovery & Planning"
                        duration="Week 1"
                        items={[
                          'Analyze social media integration requirements',
                          'Map ad spend data to features',
                          'Create platform-specific wireframes',
                          'Plan multi-platform API architecture'
                        ]}
                      />
                      <PDFSafeTimelinePhase
                        title="Foundation Setup"
                        duration="Week 1"
                        items={[
                          'Set up development environment',
                          'Configure Supabase database',
                          'Implement social media OAuth integrations',
                          'Create unified dashboard UI'
                        ]}
                      />
                      <PDFSafeTimelinePhase
                        title="Core Feature Development"
                        duration="Week 2"
                        items={[
                          'Build: multi-platform posting automation',
                          'Build: ad performance analytics',
                          'Build: content scheduling',
                          'Build: engagement tracking'
                        ]}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                      <PDFSafeTimelinePhase
                        title="AI Integration"
                        duration="Week 3"
                        items={[
                          'AI-powered content generation',
                          'Smart ad budget optimization',
                          'Automated engagement responses',
                          'Performance prediction algorithms'
                        ]}
                        rightAlign={true}
                      />
                      <PDFSafeTimelinePhase
                        title="Testing & Refinement"
                        duration="Week 4"
                        items={[
                          'Cross-platform integration testing',
                          'Performance optimization',
                          'Security audit for API connections',
                          'User acceptance testing'
                        ]}
                        rightAlign={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visible UI - Your original beautiful blueprint */}
        <div className="min-h-screen bg-[var(--color-midnight)] py-10 px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-[var(--color-onyx)] rounded-xl p-8 mb-8 border border-[var(--color-onyx)]">
              
              <div className="bg-[var(--color-midnight)] border-l-4 border-[var(--color-electric)] rounded-lg p-6 mb-8">
                <h1 className="text-2xl font-semibold text-[var(--color-softwhite)] flex items-center">
                  📄 valueCode
                </h1>
                <p className="text-[var(--color-mutedgray)] mt-1 ml-9">Custom AI SaaS Application Blueprint</p>
              </div>

              <AccountSetupGrid data={submissionData} />

              <div className="flex gap-6 mb-10">
                <ContentSection
                  title="Requested Features"
                  items={submissionData.features}
                  icon="💡"
                  colorClass="text-yellow-400"
                  indexColorClass="text-yellow-400"
                />
                <ContentSection
                  title="Current Challenges"
                  items={submissionData.challenges}
                  icon="⭕"
                  colorClass="text-red-400"
                  indexColorClass="text-red-400"
                />
                <ContentSection
                  title="Needs Improvement"
                  items={submissionData.improvements}
                  icon="📈"
                  colorClass="text-green-400"
                  indexColorClass="text-green-400"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--color-softwhite)] mb-6">Strategic Recommendations</h2>
                <div className="grid grid-cols-2 gap-6">
                  <RecommendationCard
                    title="Social Media Integration"
                    description="Leverage your existing social media accounts for automated posting and engagement"
                    icon="📱"
                    bgColor="bg-blue-900/20"
                    borderColor="border-blue-700/30"
                    textColor="text-[var(--color-electric)]"
                  />
                  <RecommendationCard
                    title="Ad Spend Optimization"
                    description="Implement AI-powered ad optimization based on your current spending patterns"
                    icon="💰"
                    bgColor="bg-green-900/20"
                    borderColor="border-green-700/30"
                    textColor="text-green-400"
                  />
                  <RecommendationCard
                    title="Multi-Platform Automation"
                    description="Create unified automation across all your social media and email platforms"
                    icon="⚡"
                    bgColor="bg-purple-900/20"
                    borderColor="border-purple-700/30"
                    textColor="text-purple-400"
                  />
                  <RecommendationCard
                    title="Content Strategy"
                    description="Develop AI-driven content creation tailored for each social platform"
                    icon="🎯"
                    bgColor="bg-yellow-900/20"
                    borderColor="border-yellow-700/30"
                    textColor="text-yellow-400"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-onyx)] rounded-xl p-8 border border-[var(--color-onyx)]">
              <TechnologyStack />
              
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-softwhite)] mb-6">Implementation Timeline</h2>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 pr-6">
                    <TimelinePhase
                      title="Discovery & Planning"
                      duration="Week 1"
                      items={[
                        'Analyze social media integration requirements',
                        'Map ad spend data to features',
                        'Create platform-specific wireframes',
                        'Plan multi-platform API architecture'
                      ]}
                    />
                    <TimelinePhase
                      title="Foundation Setup"
                      duration="Week 1"
                      items={[
                        'Set up development environment',
                        'Configure Supabase database',
                        'Implement social media OAuth integrations',
                        'Create unified dashboard UI'
                      ]}
                    />
                    <TimelinePhase
                      title="Core Feature Development"
                      duration="Week 2"
                      items={[
                        'Build: multi-platform posting automation',
                        'Build: ad performance analytics',
                        'Build: content scheduling',
                        'Build: engagement tracking'
                      ]}
                    />
                  </div>
                  <div className="w-full md:w-1/2 pl-6">
                    <TimelinePhase
                      title="AI Integration"
                      duration="Week 3"
                      items={[
                        'AI-powered content generation',
                        'Smart ad budget optimization',
                        'Automated engagement responses',
                        'Performance prediction algorithms'
                      ]}
                      rightAlign={true}
                    />
                    <TimelinePhase
                      title="Testing & Refinement"
                      duration="Week 4"
                      items={[
                        'Cross-platform integration testing',
                        'Performance optimization',
                        'Security audit for API connections',
                        'User acceptance testing'
                      ]}
                      rightAlign={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Return to Homepage
                </button>
                <button 
                  onClick={handleSendEmail}
                  disabled={isSendingEmail}
                  className="border border-[var(--color-electric)] text-[var(--color-electric)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-electric)] hover:text-[var(--color-midnight)] disabled:opacity-50 transition-colors"
                >
                  {isSendingEmail ? '📨 Sending PDF...' : '📩 Send Blueprint PDF via Email'}
                </button>
              </div>
              <p className="text-[var(--color-mutedgray)] text-sm mt-2">
                The complete blueprint will be captured as a PDF file and sent to your email
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Email Form View
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[var(--color-electric)] mb-2">
          Question 6 of 6 • 100%
        </div>
        <h1 className="text-2xl font-bold text-[var(--color-softwhite)]">Enter your email address*</h1>
        <p className="text-[var(--color-mutedgray)] mt-2">
          We will send your AI blueprint to this email
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <input
          id="email-input"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData(prev => ({ ...prev, email: e.target.value }));
            if (emailError) setEmailError('');
          }}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
          aria-describedby="email-help email-error"
          aria-invalid={!!emailError}
          required
        />
        <div id="email-help" className="sr-only">
          We will send your AI blueprint to this email address
        </div>
        {emailError && (
          <div id="email-error" className="text-red-400 text-sm mt-2" role="alert">
            {emailError}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <button 
          onClick={prevStep}
          className="px-6 py-3 text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors"
          aria-label="Go back to previous step"
        >
          Back
        </button>
        <button 
          onClick={handleSubmit}
          disabled={!formData.email.includes('@') || isSubmitting || isGenerating}
          className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
          aria-label={isGenerating ? 'Generating blueprint' : 'Generate AI blueprint'}
        >
          {isGenerating ? 'Generating...' : 'Generate Blueprint'}
        </button>
      </div>
    </div>
  );
}