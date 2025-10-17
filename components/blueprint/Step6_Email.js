// export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
//   const handleSubmit = async () => {
//     try {
//       await submitToSupabase();
//       alert('Blueprint generated and saved successfully!');
//       // You can redirect or reset form here
//     } catch (error) {
//       alert('Error saving data. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <div className="text-sm text-[var(--color-electric)] mb-2">
//           Question 6 of 6 • 100%
//         </div>
//         <h2 className="text-2xl font-bold">Enter your email address*</h2>
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
//         <button onClick={prevStep} className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)]">
//           Back
//         </button>
//         <button 
//           onClick={handleSubmit}
//           disabled={!formData.email.includes('@') || isSubmitting}
//           className="btn-primary px-8 py-3 text-lg font-semibold disabled:opacity-50"
//         >
//           {isSubmitting ? 'Saving...' : 'Generate Blueprint'}
//         </button>
//       </div>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';


export default function Step6_Email({ formData, setFormData, prevStep, isSubmitting, submitToSupabase }) {
  const [submissionData, setSubmissionData] = useState(null);
  const [showBlueprint, setShowBlueprint] = useState(false);

  const handleSubmit = async () => {
    try {
      const result = await submitToSupabase();
      setSubmissionData(formData); // Store the submitted data
      setShowBlueprint(true); // Show the blueprint view
    } catch (error) {
      alert('Error saving data. Please try again.');
    }
  };

  // If blueprint is generated, show the summary
  if (showBlueprint && submissionData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-[var(--color-electric)] mb-4">
            Your AI Blueprint is Ready!
          </h2>
          <p className="text-lg text-[var(--color-mutedgray)]">
            We have received your requirements and are crafting your custom AI solution
          </p>
        </div>

        {/* Blueprint Summary */}
        <div className="bg-[var(--color-onyx)] rounded-xl p-6 md:p-8 mb-8">
          <h3 className="text-xl font-bold text-[var(--color-softwhite)] mb-6 border-b border-[var(--color-midnight)] pb-4">
            Submission Summary
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[var(--color-electric)]">Company Information</h4>
              <div>
                <p className="text-sm text-[var(--color-mutedgray)]">Company Name</p>
                <p className="text-[var(--color-softwhite)]">{submissionData.companyName}</p>
              </div>
              <div>
                <p className="text-sm text-[var(--color-mutedgray)]">Contact Email</p>
                <p className="text-[var(--color-softwhite)]">{submissionData.email}</p>
              </div>
            </div>

            {/* Technical Setup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[var(--color-electric)]">Technical Setup</h4>
              <div className="space-y-2">
                {submissionData.hasWebsite && <p className="text-[var(--color-softwhite)]">✅ Has Website</p>}
                {submissionData.hasGoogleAccount && <p className="text-[var(--color-softwhite)]">✅ Has Google Account</p>}
                {submissionData.hasAIAccount && <p className="text-[var(--color-softwhite)]">✅ Has AI Account</p>}
                {submissionData.hasTechResource && <p className="text-[var(--color-softwhite)]">✅ Has Tech Resource</p>}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 pt-6 border-t border-[var(--color-midnight)]">
            <h4 className="font-semibold text-[var(--color-electric)] mb-4">Requested Features</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {submissionData.features.map((feature, index) => (
                <div key={index} className="bg-[var(--color-midnight)] px-4 py-3 rounded-lg">
                  <p className="text-[var(--color-softwhite)]">• {feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mt-6 pt-6 border-t border-[var(--color-midnight)]">
            <h4 className="font-semibold text-[var(--color-electric)] mb-4">Current Challenges</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {submissionData.challenges.map((challenge, index) => (
                <div key={index} className="bg-[var(--color-midnight)] px-4 py-3 rounded-lg">
                  <p className="text-[var(--color-softwhite)]">• {challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Improvements */}
          <div className="mt-6 pt-6 border-t border-[var(--color-midnight)]">
            <h4 className="font-semibold text-[var(--color-electric)] mb-4">Improvement Areas</h4>
            <div className="grid md:grid-cols-2 gap-2">
              {submissionData.improvements.map((improvement, index) => (
                <div key={index} className="bg-[var(--color-midnight)] px-4 py-3 rounded-lg">
                  <p className="text-[var(--color-softwhite)]">• {improvement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-[var(--color-onyx)] rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-[var(--color-softwhite)] mb-4">What Happens Next?</h3>
          <div className="space-y-4 text-[var(--color-mutedgray)]">
            <p>✅ <strong>Within 24 hours:</strong> Our AI team will analyze your requirements</p>
            <p>✅ <strong>Within 48 hours:</strong> You will receive a detailed technical proposal</p>
            <p>✅ <strong>Within 3 days:</strong> We will schedule a discovery call to refine your solution</p>
            <p>✅ <strong>Within 1 week:</strong> Your AI team development begins</p>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-[var(--color-electric)] text-[var(--color-midnight)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Return to Homepage
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:skdhanusri123@gmail.com'}
              className="border border-[var(--color-electric)] text-[var(--color-electric)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-electric)] hover:text-[var(--color-midnight)] transition-colors"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Original form view (only shown before submission)
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm text-[var(--color-electric)] mb-2">
          Question 6 of 6 • 100%
        </div>
        <h2 className="text-2xl font-bold">Enter your email address*</h2>
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