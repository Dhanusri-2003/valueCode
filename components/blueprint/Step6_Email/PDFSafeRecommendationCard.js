'use client';

export default function PDFSafeRecommendationCard({ title, description, icon }) {
  const cardStyles = {
    'blue': { bg: '#1e3a8a', border: '#3730a3', text: '#60a5fa' },
    'green': { bg: '#065f46', border: '#047857', text: '#34d399' },
    'purple': { bg: '#581c87', border: '#7e22ce', text: '#c084fc' },
    'yellow': { bg: '#713f12', border: '#a16207', text: '#fbbf24' }
  };

  // Assign styles based on icon
  const getStyle = (icon) => {
    switch(icon) {
      case '📱': return cardStyles.blue;
      case '💰': return cardStyles.green;
      case '⚡': return cardStyles.purple;
      case '🎯': return cardStyles.yellow;
      default: return cardStyles.blue;
    }
  };

  const style = getStyle(icon);

  return (
    <div style={{
      backgroundColor: style.bg,
      border: `1px solid ${style.border}`,
      borderRadius: '8px',
      padding: '16px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ color: style.text, fontSize: '16px', marginRight: '8px' }}>{icon}</span>
        <h4 style={{ fontWeight: 'bold', color: style.text, margin: 0, fontSize: '16px' }}>{title}</h4>
      </div>
      <p style={{ color: '#d1d5db', fontSize: '14px', margin: 0, lineHeight: '1.4' }}>
        {description}
      </p>
    </div>
  );
}