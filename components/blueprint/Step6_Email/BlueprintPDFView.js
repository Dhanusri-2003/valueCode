'use client';
import React from 'react';

export default function BlueprintPDFView({ data }) {
  return (
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
          <p style={{ color: '#9ca3af', margin: '4px 0 0 36px' }}>
            Custom AI SaaS Application Blueprint
          </p>
        </div>

        {/* Simple Content Sections */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3 style={{ color: '#fbbf24', marginBottom: '16px', fontSize: '18px' }}>💡 Requested Features</h3>
            <ul style={{ color: '#d1d5db', paddingLeft: '20px' }}>
              {data.features?.map((feature, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
              ))}
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3 style={{ color: '#ef4444', marginBottom: '16px', fontSize: '18px' }}>⭕ Current Challenges</h3>
            <ul style={{ color: '#d1d5db', paddingLeft: '20px' }}>
              {data.challenges?.map((challenge, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3 style={{ color: '#10b981', marginBottom: '16px', fontSize: '18px' }}>📈 Needs Improvement</h3>
            <ul style={{ color: '#d1d5db', paddingLeft: '20px' }}>
              {data.improvements?.map((improvement, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{improvement}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#f3f4f6', marginBottom: '24px' }}>
            Strategic Recommendations
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: '#1e3a8a', padding: '16px', borderRadius: '8px', border: '1px solid #3730a3' }}>
              <h4 style={{ color: '#60a5fa', margin: '0 0 8px 0', fontSize: '16px' }}>📱 Social Media Integration</h4>
              <p style={{ color: '#d1d5db', margin: 0, fontSize: '14px' }}>
                Leverage your existing social media accounts for automated posting and engagement
              </p>
            </div>
            <div style={{ backgroundColor: '#065f46', padding: '16px', borderRadius: '8px', border: '1px solid #047857' }}>
              <h4 style={{ color: '#34d399', margin: '0 0 8px 0', fontSize: '16px' }}>💰 Ad Spend Optimization</h4>
              <p style={{ color: '#d1d5db', margin: 0, fontSize: '14px' }}>
                Implement AI-powered ad optimization based on your current spending patterns
              </p>
            </div>
            <div style={{ backgroundColor: '#581c87', padding: '16px', borderRadius: '8px', border: '1px solid #7e22ce' }}>
              <h4 style={{ color: '#c084fc', margin: '0 0 8px 0', fontSize: '16px' }}>⚡ Multi-Platform Automation</h4>
              <p style={{ color: '#d1d5db', margin: 0, fontSize: '14px' }}>
                Create unified automation across all your social media and email platforms
              </p>
            </div>
            <div style={{ backgroundColor: '#713f12', padding: '16px', borderRadius: '8px', border: '1px solid '#a16207' }}>
              <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: '16px' }}>🎯 Content Strategy</h4>
              <p style={{ color: '#d1d5db', margin: 0, fontSize: '14px' }}>
                Develop AI-driven content creation tailored for each social platform
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{ backgroundColor: '#111827', padding: '24px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f3f4f6', marginBottom: '24px' }}>
            Implementation Timeline
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: '#3b82f6', marginBottom: '16px' }}>Week 1: Discovery & Planning</h3>
              <ul style={{ color: '#d1d5db', paddingLeft: '20px' }}>
                <li>Analyze social media integration requirements</li>
                <li>Map ad spend data to features</li>
                <li>Create platform-specific wireframes</li>
                <li>Plan multi-platform API architecture</li>
              </ul>
              
              <h3 style={{ color: '#3b82f6', marginBottom: '16px', marginTop: '24px' }}>Week 2: Core Development</h3>
              <ul style={{ color: '#d1d5db', paddingLeft: '20px' }}>
                <li>Build multi-platform posting automation</li>
                <li>Build ad performance analytics</li>
                <li>Build content scheduling</li>
                <li>Build engagement tracking</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: '#3b82f6', marginBottom: '16px' }}>Week 3: AI Integration</h3>
              <ul style={{ color: '#d1d5db', paddingLeft: '20px' }}>
                <li>AI-powered content generation</li>
                <li>Smart ad budget optimization</li>
                <li>Automated engagement responses</li>
                <li>Performance prediction algorithms</li>
              </ul>
              
              <h3 style={{ color: '#3b82f6', marginBottom: '16px', marginTop: '24px' }}>Week 4: Testing & Launch</h3>
              <ul style={{ color: '#d1d5db', paddingLeft: '20px' }}>
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
  );
}