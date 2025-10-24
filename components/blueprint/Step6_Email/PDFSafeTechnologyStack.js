'use client';

export default function PDFSafeTechnologyStack() {
  const technologies = [
    'React with TypeScript',
    'Node.js with Express', 
    'Supabase (PostgreSQL)',
    'NextAuth.js',
    'OpenAI API',
    'Vercel/Netlify'
  ];

  return (
    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#f3f4f6', marginBottom: '16px' }}>
        Technology Stack
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '12px',
        color: '#d1d5db'
      }}>
        {technologies.map((tech, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
            <span style={{ marginRight: '8px' }}>•</span>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}