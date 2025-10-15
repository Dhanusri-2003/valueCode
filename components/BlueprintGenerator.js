'use client';

import { useState } from 'react';

export default function BlueprintGenerator() {
  const [formData, setFormData] = useState({
    projectName: '',
    businessType: '',
    budget: 'starter',
    timeline: '2-4 weeks',
    features: []
  });

  const featuresList = [
    'Email Automation',
    'WhatsApp Integration',
    'Social Media Management',
    'Customer Support',
    'Lead Generation',
    'Accounting & Invoicing',
    'Calendar Management',
    'Data Analytics'
  ];

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with n8n backend
    console.log('Blueprint request:', formData);
    alert('Blueprint generation started! We will send your technical plan shortly.');
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--color-onyx)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-softwhite)]">
              Generate Your AI Blueprint
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-mutedgray)] max-w-2xl mx-auto">
              Tell us about your project and get a complete technical blueprint with AI agents, architecture, and timeline.
            </p>
          </div>

          {/* Blueprint Form */}
          <div className="bg-[var(--color-midnight)] rounded-2xl p-6 md:p-8 border border-[var(--color-electric)]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Name */}
              <div>
                <label className="block text-[var(--color-softwhite)] font-semibold mb-3 text-lg">
                  Project Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.projectName}
                  onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                  placeholder="e.g., Customer Support Automation Platform"
                  className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-[var(--color-softwhite)] placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)] transition-colors"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-[var(--color-softwhite)] font-semibold mb-3 text-lg">
                  Business Type *
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-[var(--color-softwhite)] focus:outline-none focus:border-[var(--color-electric)] transition-colors"
                >
                  <option value="">Select your business type</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">SaaS</option>
                  <option value="agency">Digital Agency</option>
                  <option value="consulting">Consulting</option>
                  <option value="startup">Startup</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Features Selection */}
              <div>
                <label className="block text-[var(--color-softwhite)] font-semibold mb-3 text-lg">
                  Select Required Features
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featuresList.map((feature) => (
                    <label key={feature} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="w-4 h-4 text-[var(--color-electric)] bg-[var(--color-onyx)] border-[var(--color-mutedgray)] rounded focus:ring-[var(--color-electric)]"
                      />
                      <span className="text-[var(--color-softwhite)] text-sm md:text-base">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--color-softwhite)] font-semibold mb-3 text-lg">
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-[var(--color-softwhite)] focus:outline-none focus:border-[var(--color-electric)] transition-colors"
                  >
                    <option value="starter">Starter ($29-99/month)</option>
                    <option value="growth">Growth ($99-299/month)</option>
                    <option value="enterprise">Enterprise ($299+/month)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[var(--color-softwhite)] font-semibold mb-3 text-lg">
                    Desired Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-[var(--color-softwhite)] focus:outline-none focus:border-[var(--color-electric)] transition-colors"
                  >
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3-6 months">3-6 months</option>
                  </select>
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-[var(--color-softwhite)] font-semibold mb-3 text-lg">
                  Additional Requirements
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe any specific requirements, integrations, or custom features you need..."
                  className="w-full px-4 py-3 bg-[var(--color-onyx)] border border-[var(--color-mutedgray)] rounded-lg text-[var(--color-softwhite)] placeholder-[var(--color-mutedgray)] focus:outline-none focus:border-[var(--color-electric)] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="btn-primary px-12 py-4 text-xl font-semibold"
                >
                  Generate My Blueprint ›
                </button>
                <p className="text-[var(--color-mutedgray)] text-sm mt-4">
                  Get a detailed technical plan with AI agents, architecture diagram, and cost breakdown
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}