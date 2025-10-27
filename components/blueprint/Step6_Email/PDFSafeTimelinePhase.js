// 'use client';

// export default function PDFSafeTimelinePhase({ title, duration, items, rightAlign = false }) {
//   return (
//     <div style={{ position: 'relative', marginBottom: '32px' }}>
//       <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#f3f4f6', marginBottom: '8px', margin: 0 }}>
//         {title}
//       </h3>
//       <span style={{
//         position: 'absolute',
//         top: '0',
//         right: rightAlign ? '16px' : '0',
//         color: '#3b82f6',
//         fontWeight: '600',
//         fontSize: '14px'
//       }}>
//         {duration}
//       </span>
//       <ul style={{ color: '#f3f4f6', padding: 0, margin: '8px 0 0 0', listStyle: 'none' }}>
//         {items.map((item, index) => (
//           <li key={index} style={{ marginBottom: '4px', fontSize: '14px' }}>• {item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

'use client';

export default function PDFSafeTimelinePhase({ title, duration, items, rightAlign = false }) {
  return (
    <div style={{ 
      position: 'relative', 
      marginBottom: '32px',
      padding: '16px',
      backgroundColor: '#1f2937',
      borderRadius: '8px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: 'bold', 
          color: '#f3f4f6', 
          margin: 0
        }}>
          {title}
        </h3>
        <span style={{
          color: '#3b82f6',
          fontWeight: '600',
          fontSize: '14px',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          padding: '4px 8px',
          borderRadius: '4px'
        }}>
          {duration}
        </span>
      </div>
      <ul style={{ 
        color: '#f3f4f6', 
        padding: 0, 
        margin: '8px 0 0 0', 
        listStyle: 'none' 
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ 
            marginBottom: '8px', 
            fontSize: '14px',
            paddingLeft: '16px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: '0',
              top: '0',
              color: '#3b82f6'
            }}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}