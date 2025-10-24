'use client';

export default function PDFSafeContentSection({ title, items, icon, colorClass, indexColorClass }) {
  const colorMap = {
    'text-yellow-400': '#fbbf24',
    'text-red-400': '#ef4444', 
    'text-green-400': '#10b981',
    'text-[var(--color-electric)]': '#3b82f6'
  };

  const color = colorMap[colorClass] || '#3b82f6';
  const indexColor = colorMap[indexColorClass] || '#3b82f6';

  return (
    <div style={{ flex: 1, minWidth: '250px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ color, fontSize: '20px', marginRight: '8px' }}>{icon}</span>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color, margin: 0 }}>{title}</h3>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
            <strong style={{ color: indexColor, marginRight: '8px', minWidth: '20px' }}>{index + 1}.</strong>
            <span style={{ color: '#f3f4f6' }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}