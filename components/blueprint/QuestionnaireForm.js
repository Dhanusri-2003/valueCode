'use client';
import { useState } from 'react';
import Step1_Checkboxes from './Step1_Checkboxes';
import Step2_CompanyName from './Step2_CompanyName';
import Step3_Features from './Step3_Features';
import Step4_Challenges from './Step4_Challenges';
import Step5_Improvements from './Step5_Improvements';
import Step6_Email from './Step6_Email';
import { supabase } from '@/lib/supabase';

export default function QuestionnaireForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1 - Updated to include Twitter and WhatsApp
    hasWebsite: false,
    hasGmail: false,
    hasFacebook: false,
    hasInstagram: false,
    hasLinkedIn: false,
    hasTwitter: false,        // NEW
    hasWhatsApp: false,       // NEW
    hasPinterest: false,
    hasYoutube: false,
    monthlyAdSpend: '',
    businessType: '',         // NEW - for business type dropdown
    
    // Step 2
    companyName: '',
    
    // Step 3
    features: [],
    
    // Step 4
    challenges: [],
    
    // Step 5
    improvements: [],
    
    // Step 6
    email: ''
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  // Updated function to match new form structure with Twitter and WhatsApp
  const submitToSupabase = async () => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from('blueprint_submissions')
        .insert([
          {
            // Step 1 fields
            has_website: formData.hasWebsite,
            has_gmail: formData.hasGmail,
            has_facebook: formData.hasFacebook,
            has_instagram: formData.hasInstagram,
            has_linkedin: formData.hasLinkedIn,
            has_twitter: formData.hasTwitter,        // NEW
            has_whatsapp: formData.hasWhatsApp,      // NEW
            has_pinterest: formData.hasPinterest,
            has_youtube: formData.hasYoutube,
            monthly_ad_spend: formData.monthlyAdSpend,
            business_type: formData.businessType,    // NEW
            
            // Existing fields
            company_name: formData.companyName,
            desired_features: formData.features,
            current_challenges: formData.challenges,
            improvement_areas: formData.improvements,
            email: formData.email,
            submitted_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;
      
      console.log('Data saved to Supabase:', data);
      return data;
      
    } catch (error) {
      console.error('Error saving to Supabase:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    const commonProps = { 
      formData, 
      setFormData, 
      nextStep, 
      prevStep,
      isSubmitting,
      submitToSupabase
    };
    
    switch(currentStep) {
      case 1: return <Step1_Checkboxes {...commonProps} />;
      case 2: return <Step2_CompanyName {...commonProps} />;
      case 3: return <Step3_Features {...commonProps} />;
      case 4: return <Step4_Challenges {...commonProps} />;
      case 5: return <Step5_Improvements {...commonProps} />;
      case 6: return <Step6_Email {...commonProps} />;
      default: return <Step1_Checkboxes {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-midnight)] text-white">
      {renderStep()}
    </div>
  );
}