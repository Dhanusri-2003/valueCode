// 'use client';
// import { useState, useRef, useEffect } from 'react';
// import AccountSetupGrid from './AccountSetupGrid';
// import ContentSection from './ContentSection';
// import RecommendationCard from './RecommendationCard';
// import TimelinePhase from './TimelinePhase';
// import TechnologyStack from './TechnologyStack';
// import PDFSafeAccountSetupGrid from './PDFSafeAccountSetupGrid';
// import PDFSafeContentSection from './PDFSafeContentSection';
// import PDFSafeRecommendationCard from './PDFSafeRecommendationCard';
// import PDFSafeTimelinePhase from './PDFSafeTimelinePhase';
// import PDFSafeTechnologyStack from './PDFSafeTechnologyStack';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
//   const [submissionData, setSubmissionData] = useState(null);
//   const [showBlueprint, setShowBlueprint] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isSendingEmail, setIsSendingEmail] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
  
//   const pdfRef = useRef(null);

//   // Detect mobile screen size
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

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

//   // Generate PDF with mobile-optimized settings
//   const generatePDF = async () => {
//     if (!pdfRef.current) {
//       throw new Error('PDF content not found');
//     }

//     const canvas = await html2canvas(pdfRef.current, {
//       scale: 1.5,
//       useCORS: true,
//       backgroundColor: '#0a0f1e',
//       logging: false,
//       width: pdfRef.current.scrollWidth,
//       height: pdfRef.current.scrollHeight,
//     });

//     const imgWidth = 210;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
//     const pdf = new jsPDF('p', 'mm', 'a4');
    
//     const imgData = canvas.toDataURL('image/jpeg', 0.8);
//     pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    
//     return pdf;
//   };

//   // Send email with FormData
//   const handleSendEmail = async () => {
//     setIsSendingEmail(true);
//     try {
//       const pdf = await generatePDF();
      
//       const pdfBlob = pdf.output('blob');
      
//       const formDataToSend = new FormData();
//       formDataToSend.append('userEmail', formData.email);
//       formDataToSend.append('companyName', formData.companyName || 'Your Project');
//       formDataToSend.append('pdfFile', pdfBlob, 'ai-saas-blueprint.pdf');

//       const response = await fetch('/api/send-blueprint', {
//         method: 'POST',
//         body: formDataToSend,
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

//   // Get responsive styles based on screen size
//   const getResponsiveStyles = () => {
//     if (isMobile) {
//       return {
//         container: {
//           padding: '20px 16px'
//         },
//         header: {
//           padding: '20px',
//           marginBottom: '24px'
//         },
//         headerTitle: {
//           fontSize: '20px'
//         },
//         headerSubtitle: {
//           fontSize: '14px'
//         },
//         contentSections: {
//           flexDirection: 'column',
//           gap: '32px',
//           marginBottom: '32px'
//         },
//         recommendations: {
//           gridTemplateColumns: '1fr',
//           gap: '12px'
//         },
//         recommendationsTitle: {
//           fontSize: '18px',
//           marginBottom: '20px'
//         },
//         timelineContainer: {
//           padding: '20px',
//           marginTop: '24px'
//         },
//         timelineTitle: {
//           fontSize: '20px',
//           marginBottom: '20px'
//         },
//         timelineContent: {
//           flexDirection: 'column',
//           gap: '20px'
//         },
//         timelineColumn: {
//           minWidth: '100%'
//         }
//       };
//     } else {
//       return {
//         container: {
//           padding: '40px 20px'
//         },
//         header: {
//           padding: '24px',
//           marginBottom: '32px'
//         },
//         headerTitle: {
//           fontSize: '24px'
//         },
//         headerSubtitle: {
//           fontSize: '16px'
//         },
//         contentSections: {
//           flexDirection: 'row',
//           gap: '24px',
//           marginBottom: '40px'
//         },
//         recommendations: {
//           gridTemplateColumns: 'repeat(2, 1fr)',
//           gap: '16px'
//         },
//         recommendationsTitle: {
//           fontSize: '20px',
//           marginBottom: '24px'
//         },
//         timelineContainer: {
//           padding: '24px',
//           marginTop: '32px'
//         },
//         timelineTitle: {
//           fontSize: '24px',
//           marginBottom: '24px'
//         },
//         timelineContent: {
//           flexDirection: 'row',
//           gap: '24px'
//         },
//         timelineColumn: {
//           minWidth: '300px'
//         }
//       };
//     }
//   };

//   const responsiveStyles = getResponsiveStyles();

//   // Blueprint Success View
//   if (showBlueprint && submissionData) {
//     return (
//       <>
//         {/* Hidden PDF content - Uses PDF-safe components with responsive styles */}
//         <div style={{ 
//           position: 'absolute', 
//           left: '-9999px', 
//           top: '0',
//           width: '100%'
//         }}>
//           <div ref={pdfRef}>
//             <div style={{
//               backgroundColor: '#0a0f1e',
//               color: 'white',
//               minHeight: '100vh',
//               fontFamily: 'Arial, sans-serif',
//               maxWidth: '896px',
//               margin: '0 auto',
//               ...responsiveStyles.container
//             }}>
              
//               {/* Header */}
//               <div style={{
//                 backgroundColor: '#111827',
//                 borderLeft: '4px solid #3b82f6',
//                 borderRadius: '8px',
//                 ...responsiveStyles.header
//               }}>
//                 <h1 style={{ 
//                   fontWeight: '600', 
//                   margin: 0, 
//                   display: 'flex', 
//                   alignItems: 'center',
//                   ...responsiveStyles.headerTitle
//                 }}>
//                   📄 valueCode
//                 </h1>
//                 <p style={{ 
//                   color: '#9ca3af', 
//                   margin: '4px 0 0 0',
//                   ...responsiveStyles.headerSubtitle
//                 }}>
//                   Custom AI SaaS Application Blueprint
//                 </p>
//               </div>

//               <PDFSafeAccountSetupGrid data={submissionData} />

//               {/* Content Sections */}
//               <div style={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap',
//                 ...responsiveStyles.contentSections
//               }}>
//                 <PDFSafeContentSection
//                   title="Requested Features"
//                   items={submissionData.features}
//                   icon="💡"
//                   colorClass="text-yellow-400"
//                   indexColorClass="text-yellow-400"
//                 />
//                 <PDFSafeContentSection
//                   title="Current Challenges"
//                   items={submissionData.challenges}
//                   icon="⭕"
//                   colorClass="text-red-400"
//                   indexColorClass="text-red-400"
//                 />
//                 <PDFSafeContentSection
//                   title="Needs Improvement"
//                   items={submissionData.improvements}
//                   icon="📈"
//                   colorClass="text-green-400"
//                   indexColorClass="text-green-400"
//                 />
//               </div>

//               {/* Strategic Recommendations */}
//               <div style={{ marginBottom: '40px' }}>
//                 <h2 style={{ 
//                   fontWeight: '600', 
//                   color: '#f3f4f6', 
//                   ...responsiveStyles.recommendationsTitle
//                 }}>
//                   Strategic Recommendations
//                 </h2>
//                 <div style={{ 
//                   display: 'grid', 
//                   ...responsiveStyles.recommendations
//                 }}>
//                   <PDFSafeRecommendationCard
//                     title="Social Media Integration"
//                     description="Leverage your existing social media accounts for automated posting and engagement"
//                     icon="📱"
//                   />
//                   <PDFSafeRecommendationCard
//                     title="Ad Spend Optimization"
//                     description="Implement AI-powered ad optimization based on your current spending patterns"
//                     icon="💰"
//                   />
//                   <PDFSafeRecommendationCard
//                     title="Multi-Platform Automation"
//                     description="Create unified automation across all your social media and email platforms"
//                     icon="⚡"
//                   />
//                   <PDFSafeRecommendationCard
//                     title="Content Strategy"
//                     description="Develop AI-driven content creation tailored for each social platform"
//                     icon="🎯"
//                   />
//                 </div>
//               </div>

//               <PDFSafeTechnologyStack />

//               {/* Timeline */}
//               <div style={{ 
//                 backgroundColor: '#111827', 
//                 borderRadius: '8px',
//                 ...responsiveStyles.timelineContainer
//               }}>
//                 <h2 style={{ 
//                   fontWeight: 'bold', 
//                   color: '#f3f4f6', 
//                   ...responsiveStyles.timelineTitle
//                 }}>
//                   Implementation Timeline
//                 </h2>
//                 <div style={{ 
//                   display: 'flex', 
//                   flexWrap: 'wrap', 
//                   ...responsiveStyles.timelineContent
//                 }}>
//                   <div style={{ 
//                     flex: 1, 
//                     ...responsiveStyles.timelineColumn
//                   }}>
//                     <PDFSafeTimelinePhase
//                       title="Discovery & Planning"
//                       duration="Week 1"
//                       items={[
//                         'Analyze social media integration requirements',
//                         'Map ad spend data to features',
//                         'Create platform-specific wireframes',
//                         'Plan multi-platform API architecture'
//                       ]}
//                     />
//                     <PDFSafeTimelinePhase
//                       title="Foundation Setup"
//                       duration="Week 1"
//                       items={[
//                         'Set up development environment',
//                         'Configure Supabase database',
//                         'Implement social media OAuth integrations',
//                         'Create unified dashboard UI'
//                       ]}
//                     />
//                     <PDFSafeTimelinePhase
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
//                   <div style={{ 
//                     flex: 1, 
//                     ...responsiveStyles.timelineColumn
//                   }}>
//                     <PDFSafeTimelinePhase
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
//                     <PDFSafeTimelinePhase
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

//         {/* VISIBLE UI - Your original beautiful blueprint */}
//         <div className="min-h-screen bg-[var(--color-midnight)] py-10 px-4">
//           <div className="max-w-4xl mx-auto">
            
//             <div className="bg-[var(--color-onyx)] rounded-xl p-8 mb-8 border border-[var(--color-onyx)]">
              
//               <div className="bg-[var(--color-midnight)] border-l-4 border-[var(--color-electric)] rounded-lg p-6 mb-8">
//                 <h1 className="text-2xl font-semibold text-[var(--color-softwhite)] flex items-center">
//                   📄 valueCode
//                 </h1>
//                 <p className="text-[var(--color-mutedgray)] mt-1 ml-9">Custom AI SaaS Application Blueprint</p>
//               </div>

//               <AccountSetupGrid data={submissionData} />

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
//                     {/* <TimelinePhase
//                       title="Foundation Setup"
//                       duration="Week 1"
//                       items={[
//                         'Set up development environment',
//                         'Configure Supabase database',
//                         'Implement social media OAuth integrations',
//                         'Create unified dashboard UI'
//                       ]}
//                     /> */}
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

//             <div className="text-center mt-12">
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button 
//                   onClick={() => window.location.href = '/'}
//                   className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
//                 >
//                   Return to Homepage
//                 </button>
//                 <button 
//                   onClick={handleSendEmail}
//                   disabled={isSendingEmail}
//                   className="border border-[var(--color-electric)] text-[var(--color-electric)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-electric)] hover:text-[var(--color-midnight)] disabled:opacity-50 transition-colors"
//                 >
//                   {isSendingEmail ? '📨 Sending PDF...' : '📩 Send Blueprint PDF via Email'}
//                 </button>
//               </div>
//               <p className="text-[var(--color-mutedgray)] text-sm mt-2">
//                 The complete blueprint will be captured as a PDF file and sent to your email
//               </p>
//             </div>
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
// 'use client';
// import { useState } from 'react';
// import AccountSetupGrid from './AccountSetupGrid';
// import ContentSection from './ContentSection';

// export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
//   const [submissionData, setSubmissionData] = useState(null);
//   const [showBlueprint, setShowBlueprint] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isSendingEmail, setIsSendingEmail] = useState(false);

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleSubmit = async () => {
//     setEmailError('');

//     if (!validateEmail(formData.email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     setIsGenerating(true);
//     try {
//       console.log('Submitting to Supabase...');
//       await submitToSupabase(); // still runs your actual save
//       setSubmissionData(formData);
//       setShowBlueprint(true);
//       console.log('✅ Submission data:', formData);
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Error saving data. Please try again.');
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleSendEmail = async () => {
//     setIsSendingEmail(true);
//     try {
//       // --- Simulated email sending (for testing only) ---
//       console.log('📨 Simulated sending blueprint PDF to:', formData.email);
//       console.log('Data:', submissionData);
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       alert(`✅ Test Mode: Blueprint sent successfully to ${formData.email} (simulation only)`);
//       // ---------------------------------------------------
//     } catch (error) {
//       console.error('Simulated email error:', error);
//       alert('❌ Test Mode: Failed to simulate email send.');
//     } finally {
//       setIsSendingEmail(false);
//     }
//   };

//   if (showBlueprint && submissionData) {
//     return (
//       <div className="min-h-screen bg-[var(--color-midnight)] py-10 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-[var(--color-onyx)] rounded-xl p-8 mb-8 border border-[var(--color-onyx)]">
//             <div className="bg-[var(--color-midnight)] border-l-4 border-[var(--color-electric)] rounded-lg p-6 mb-8">
//               <h1 className="text-2xl font-semibold text-[var(--color-softwhite)] flex items-center">
//                 📄 valueCode
//               </h1>
//               <p className="text-[var(--color-mutedgray)] mt-1 ml-9">
//                 Custom AI SaaS Application Blueprint
//               </p>
//             </div>

//             <AccountSetupGrid data={submissionData} />

//             <div className="flex gap-6 mb-10 flex-wrap">
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
//           </div>

//           <div className="text-center mt-12">
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
//                 {isSendingEmail ? '📨 Sending PDF...' : '📩 Send Blueprint PDF (Test Mode)'}
//               </button>
//             </div>
//             <p className="text-[var(--color-mutedgray)] text-sm mt-2">
//               This is test mode — no actual email or webhook calls are made.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <div className="text-sm text-[var(--color-electric)] mb-2">
//           Question 6 of 6 • 100%
//         </div>
//         <h1 className="text-2xl font-bold text-[var(--color-softwhite)]">Enter your email address*</h1>
//         <p className="text-[var(--color-mutedgray)] mt-2">
//           We will send your AI blueprint to this email (test mode)
//         </p>
//       </div>

//       <div className="mb-4">
//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => {
//             setFormData(prev => ({ ...prev, email: e.target.value }));
//             if (emailError) setEmailError('');
//           }}
//           placeholder="your@email.com"
//           className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
//           required
//         />
//         {emailError && <p className="text-red-400 text-sm mt-2">{emailError}</p>}
//       </div>

//       <div className="flex justify-between items-center">
//         <button
//           onClick={prevStep}
//           className="px-6 py-3 text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors"
//         >
//           Back
//         </button>
//         <button
//           onClick={handleSubmit}
//           disabled={!formData.email.includes('@') || isSubmitting || isGenerating}
//           className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
//         >
//           {isGenerating ? 'Generating...' : 'Generate Blueprint'}
//         </button>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import AccountSetupGrid from './AccountSetupGrid';
// import ContentSection from './ContentSection';

// export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
//   const [submissionData, setSubmissionData] = useState(null);
//   const [showBlueprint, setShowBlueprint] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isSendingEmail, setIsSendingEmail] = useState(false);

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleSubmit = async () => {
//     setEmailError('');

//     if (!validateEmail(formData.email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     setIsGenerating(true);
//     try {
//       console.log('Submitting to Supabase...');
//       await submitToSupabase();
//       setSubmissionData(formData);
//       setShowBlueprint(true);
//       console.log('✅ Submission data:', formData);
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('Error saving data. Please try again.');
//     } finally {
//       setIsGenerating(false);
//     }
//   };

// //   const handleSendEmail = async () => {
// //     if (!submissionData) return;
// //     setIsSendingEmail(true);

// //     // Prepare formatted string for client/webhook
// //     const formattedString = `
// // Company Name: ${submissionData.companyName || 'N/A'}
// // Business Type: ${submissionData.businessType || 'N/A'}
// // Features: ${(submissionData.features || []).join(', ') || 'N/A'}
// // Challenges: ${(submissionData.challenges || []).join(', ') || 'N/A'}
// // Improvements: ${(submissionData.improvements || []).join(', ') || 'N/A'}
// // Email: ${submissionData.email || 'N/A'}
// // `.trim();

// //     try {
// //       // --- TEST MODE: Simulate sending ---
// //       console.log('📨 Simulated sending to email:', submissionData.email);
// //       console.log('Formatted string sent:\n', formattedString);

// //       // --- Uncomment below once webhook URL is ready ---
// //       /*
// //       await fetch('https://your-n8n-webhook-url-here', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           email: submissionData.email,
// //           inputSummary: formattedString   // single string value client requested
// //         })
// //       });
// //       */

// //       await new Promise((resolve) => setTimeout(resolve, 1500));
// //       alert(`✅ Test Mode: Sent formatted string to ${submissionData.email}`);
// //     } catch (error) {
// //       console.error('Error during test send:', error);
// //       alert('❌ Test Mode: Failed to simulate email send.');
// //     } finally {
// //       setIsSendingEmail(false);
// //     }
// //   };



// const handleSendEmail = async () => {
//   if (!submissionData) return;
//   setIsSendingEmail(true);

//   // Destructure all inputs
//   const {
//     companyName,
//     businessType,
//     digitalPresence,
//     monthlySpend,
//     features,
//     challenges,
//     improvements,
//     email
//   } = submissionData;

//   // Helper to handle array/string fields
//   const formatList = (value) => {
//     if (!value || (Array.isArray(value) && value.length === 0)) return "None specified";
//     return Array.isArray(value) ? value.join(", ") : value;
//   };

//   // Full natural-language summary string for AI
//   const inputSummary = `
// This AI SaaS blueprint is prepared for ${companyName || "an unspecified company"} operating in the ${businessType || "unspecified"} industry.
// The company currently has a digital presence that includes ${formatList(digitalPresence)} and spends around ${monthlySpend || "an unspecified amount"} per month on advertisements.

// The requested features are: ${formatList(features)}.
// The main challenges faced by the business are: ${formatList(challenges)}.
// The areas identified for improvement include: ${formatList(improvements)}.

// The blueprint should be sent to the following email address: ${email || "not provided"}.
// `.trim();

//   try {
//     // --- TEST MODE (Webhook commented out) ---
//     console.log("📨 Simulated sending to:", email);
//     console.log("🧠 AI Prompt Summary:\n", inputSummary);

//     /*
//     // --- Actual call to n8n webhook (Uncomment later) ---
//     await fetch("https://your-n8n-webhook-url-here", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email,
//         inputSummary // single string value for AI
//       })
//     });
//     */

//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     alert(`✅ Test Mode: Sent formatted AI summary to ${email}`);
//   } catch (error) {
//     console.error("Error during test send:", error);
//     alert("❌ Test Mode: Failed to simulate webhook send.");
//   } finally {
//     setIsSendingEmail(false);
//   }
// };





//   if (showBlueprint && submissionData) {
//     return (
//       <div className="min-h-screen bg-[var(--color-midnight)] py-10 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-[var(--color-onyx)] rounded-xl p-8 mb-8 border border-[var(--color-onyx)]">
//             <div className="bg-[var(--color-midnight)] border-l-4 border-[var(--color-electric)] rounded-lg p-6 mb-8">
//               <h1 className="text-2xl font-semibold text-[var(--color-softwhite)] flex items-center">
//                 📄 valueCode
//               </h1>
//               <p className="text-[var(--color-mutedgray)] mt-1 ml-9">
//                 Custom AI SaaS Application Blueprint
//               </p>
//             </div>

//             <AccountSetupGrid data={submissionData} />

//             <div className="flex gap-6 mb-10 flex-wrap">
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
//           </div>

//           <div className="text-center mt-12">
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
//                 {isSendingEmail ? '📨 Sending (Test Mode)...' : '📩 Send to Webhook (Test Mode)'}
//               </button>
//             </div>
//             <p className="text-[var(--color-mutedgray)] text-sm mt-2">
//               Test Mode — formatted string printed in console. Webhook disabled until URL is added.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <div className="text-sm text-[var(--color-electric)] mb-2">
//           Question 6 of 6 • 100%
//         </div>
//         <h1 className="text-2xl font-bold text-[var(--color-softwhite)]">Enter your email address*</h1>
//         <p className="text-[var(--color-mutedgray)] mt-2">
//           We’ll send your AI blueprint summary (test mode)
//         </p>
//       </div>

//       <div className="mb-4">
//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => {
//             setFormData(prev => ({ ...prev, email: e.target.value }));
//             if (emailError) setEmailError('');
//           }}
//           placeholder="your@email.com"
//           className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-white placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)]"
//           required
//         />
//         {emailError && <p className="text-red-400 text-sm mt-2">{emailError}</p>}
//       </div>

//       <div className="flex justify-between items-center">
//         <button
//           onClick={prevStep}
//           className="px-6 py-3 text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors"
//         >
//           Back
//         </button>
//         <button
//           onClick={handleSubmit}
//           disabled={!formData.email.includes('@') || isSubmitting || isGenerating}
//           className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity"
//         >
//           {isGenerating ? 'Generating...' : 'Generate Blueprint'}
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import AccountSetupGrid from './AccountSetupGrid';
import ContentSection from './ContentSection';

export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
  const [submissionData, setSubmissionData] = useState(null);
  const [showBlueprint, setShowBlueprint] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    setEmailError('');

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsGenerating(true);
    try {
      console.log('Submitting to Supabase...');
      await submitToSupabase();
      setSubmissionData(formData);
      setShowBlueprint(true);
      console.log('✅ Submission data:', formData);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error saving data. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSendEmail = async () => {
  if (!submissionData) return;
  setIsSendingEmail(true);

  // Create digitalPresence array from individual platform fields
  const digitalPresence = [];
  if (submissionData.hasWebsite) digitalPresence.push('Website');
  if (submissionData.hasGmail) digitalPresence.push('Gmail');
  if (submissionData.hasFacebook) digitalPresence.push('Facebook');
  if (submissionData.hasInstagram) digitalPresence.push('Instagram');
  if (submissionData.hasLinkedIn) digitalPresence.push('LinkedIn');
  if (submissionData.hasTwitter) digitalPresence.push('Twitter');
  if (submissionData.hasWhatsApp) digitalPresence.push('WhatsApp');
  if (submissionData.hasPinterest) digitalPresence.push('Pinterest');
  if (submissionData.hasYoutube) digitalPresence.push('YouTube');

  // Use monthlyAdSpend as monthlySpend
  const monthlySpend = submissionData.monthlyAdSpend;

  // Now destructure with the actual fields
  const {
    companyName,
    businessType,
    features,
    challenges,
    improvements,
    email
  } = submissionData;

  // Helper to handle array/string fields
  const formatList = (value) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return "None specified";
    return Array.isArray(value) ? value.join(", ") : value;
  };

  // Full natural-language summary string for AI
  const inputSummary = `
This AI SaaS blueprint is prepared for ${companyName || "an unspecified company"} operating in the ${businessType || "unspecified"} industry.
The company currently has a digital presence that includes ${formatList(digitalPresence)} and spends around ${monthlySpend || "an unspecified amount"} per month on advertisements.

The requested features are: ${formatList(features)}.
The main challenges faced by the business are: ${formatList(challenges)}.
The areas identified for improvement include: ${formatList(improvements)}.

The blueprint should be sent to the following email address: ${email || "not provided"}.
`.trim();

  try {
    // --- TEST MODE (Webhook commented out) ---
    console.log("📨 Simulated sending to:", email);
    console.log("🧠 AI Prompt Summary:\n", inputSummary);

    /*
    // --- Actual call to n8n webhook (Uncomment later) ---
    await fetch("https://your-n8n-webhook-url-here", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        inputSummary // single string value for AI
      })
    });
    */

    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert(`✅ Test Mode: Sent formatted AI summary to ${email}`);
  } catch (error) {
    console.error("Error during test send:", error);
    alert("❌ Test Mode: Failed to simulate webhook send.");
  } finally {
    setIsSendingEmail(false);
  }
};
  if (showBlueprint && submissionData) {
    return (
      <div className="min-h-screen bg-[#F5F0ED] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 mb-8 border border-[#D7CCC8] shadow-lg">
            <div className="bg-[#F5F0ED] border-l-4 border-[#8B7355] rounded-lg p-6 mb-8">
              <h1 className="text-2xl font-semibold text-[#3E2723] flex items-center">
                📄 valueCode
              </h1>
              <p className="text-[#5D4037] mt-1 ml-9">
                Custom AI SaaS Application Blueprint
              </p>
            </div>

            <AccountSetupGrid data={submissionData} />

            <div className="flex gap-6 mb-10 flex-wrap">
              <ContentSection
                title="Requested Features"
                items={submissionData.features}
                icon="💡"
                colorClass="text-[#8B7355]"
                indexColorClass="text-[#D7A86E]"
              />
              <ContentSection
                title="Current Challenges"
                items={submissionData.challenges}
                icon="⭕"
                colorClass="text-[#6D4C41]"
                indexColorClass="text-[#8B7355]"
              />
              <ContentSection
                title="Needs Improvement"
                items={submissionData.improvements}
                icon="📈"
                colorClass="text-[#5D4037]"
                indexColorClass="text-[#A1887F]"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/'}
                className="bg-[#8B7355] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6D4C41] transition-colors"
              >
                Return to Homepage
              </button>
              <button
                onClick={handleSendEmail}
                disabled={isSendingEmail}
                className="border border-[#8B7355] text-[#8B7355] px-8 py-3 rounded-lg font-semibold hover:bg-[#8B7355] hover:text-white disabled:opacity-50 transition-colors"
              >
                {isSendingEmail ? '📨 Sending (Test Mode)...' : '📩 Send to Webhook (Test Mode)'}
              </button>
            </div>
            <p className="text-[#5D4037] text-sm mt-2">
              Test Mode — formatted string printed in console. Webhook disabled until URL is added.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[#8B7355] mb-2">
          Question 6 of 6 • 100%
        </div>
        <h1 className="text-2xl font-bold text-[#3E2723]">Enter your email address*</h1>
        <p className="text-[#5D4037] mt-2">
          We wil send your AI blueprint summary (test mode)
        </p>
      </div>

      <div className="mb-4">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData(prev => ({ ...prev, email: e.target.value }));
            if (emailError) setEmailError('');
          }}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-white border border-[#D7CCC8] rounded-lg text-[#3E2723] placeholder-[#A1887F] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20"
          required
        />
        {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={prevStep}
          className="px-6 py-3 text-[#5D4037] hover:text-[#8B7355] transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!formData.email.includes('@') || isSubmitting || isGenerating}
          className="bg-[#8B7355] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6D4C41] disabled:opacity-50 transition-colors"
        >
          {isGenerating ? 'Generating...' : 'Generate Blueprint'}
        </button>
      </div>
    </div>
  );
}