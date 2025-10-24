'use client';

export default function PDFSafeAccountSetupGrid({ data }) {
  const platformItems = [
    { icon: '🏢', label: 'Business Type', value: data.businessType || 'Not specified' },
    { icon: '🌐', label: 'Website', value: data.hasWebsite ? 'Yes' : 'No' },
    { icon: '📧', label: 'Gmail', value: data.hasGmail ? 'Yes' : 'No' },
    { icon: '📘', label: 'Facebook', value: data.hasFacebook ? 'Yes' : 'No' },
    { icon: '📷', label: 'Instagram', value: data.hasInstagram ? 'Yes' : 'No' },
    { icon: '💼', label: 'LinkedIn', value: data.hasLinkedIn ? 'Yes' : 'No' },
    { icon: '🐦', label: 'Twitter', value: data.hasTwitter ? 'Yes' : 'No' },
    { icon: '💚', label: 'WhatsApp', value: data.hasWhatsApp ? 'Yes' : 'No' },
    { icon: '📌', label: 'Pinterest', value: data.hasPinterest ? 'Yes' : 'No' },
    { icon: '📺', label: 'Youtube', value: data.hasYoutube ? 'Yes' : 'No' },
    { icon: '💰', label: 'Monthly Ad Spend', value: data.monthlyAdSpend || 'Not specified' }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '40px'
    }}>
      {platformItems.map((item, idx) => (
        <div key={idx} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          backgroundColor: '#1f2937',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f3f4f6', fontWeight: '500' }}>
            <span>{item.icon}</span> {item.label}
          </div>
          <span style={{
            fontWeight: '600',
            color: item.value === 'Yes' ? '#34d399' : 
                   item.value === 'No' ? '#ef4444' : '#60a5fa'
          }}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}