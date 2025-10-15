export default function ValueProps() {
  const props = [
    {
      icon: '⚡',
      title: 'Start Fast',
      description: 'Launch in minutes, not months. Get your AI agents working immediately with zero setup complexity.'
    },
    {
      icon: '🚀',
      title: 'Scale Smart',
      description: 'Grow with your business needs. Add agents and features as you expand, no rebuilds required.'
    },
    {
      icon: '🛡️',
      title: 'Your Control',
      description: 'Hosted on your workspace with full transparency. You own the process, we power the intelligence.'
    }
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-[var(--color-onyx)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-softwhite)] mb-4">
            Scale Smarter, Operate Leaner
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-mutedgray)] max-w-2xl mx-auto leading-relaxed">
            AI-powered Micro SaaS solutions built on Lean principles for maximum efficiency
          </p>
        </div>
        
        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {props.map((prop, index) => (
            <div key={index} className="text-center p-6 md:p-8 card-hover bg-[var(--color-midnight)] rounded-xl">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">{prop.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-electric)] mb-3 md:mb-4">{prop.title}</h3>
              <p className="text-[var(--color-mutedgray)] leading-relaxed text-sm md:text-base">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}