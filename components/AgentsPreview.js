export default function AgentsPreview() {
  const agents = [
    {
      icon: '🚀',
      title: 'Founder Assistant',
      description: 'Your AI co-founder for daily operations and decision support.',
      features: ['Calendar & meeting management', 'Voice command integration', 'Task prioritization']
    },
    {
      icon: '📧',
      title: 'Email Automation',
      description: 'Intelligent email management that learns your communication style.',
      features: ['Auto-response & categorization', 'Sentiment analysis', 'Priority inbox management']
    },
    {
      icon: '💬',
      title: 'WhatsApp Agent',
      description: 'Automate customer conversations and support at scale.',
      features: ['24/7 customer support', 'Lead qualification', 'Multi-language responses']
    },
    {
      icon: '💰',
      title: 'Accounting Assistant',
      description: 'Automate financial operations and gain real-time insights.',
      features: ['Invoice processing', 'Expense categorization', 'Financial reporting']
    }
  ];

  return (
    <section id ="AgentsPreview" className="py-16 md:py-24 bg-[var(--color-onyx)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-softwhite)] mb-4">
            Meet Your AI Team
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-mutedgray)] max-w-2xl mx-auto leading-relaxed">
            Specialized agents ready to automate your workflows and 2x your productivity
          </p>
        </div>
        
        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="bg-[var(--color-midnight)] rounded-xl p-6 md:p-8 card-hover border border-[var(--color-onyx)] hover:border-[var(--color-electric)]/50">
              {/* Agent Icon */}
              <div className="text-3xl md:text-4xl mb-4 md:mb-6">{agent.icon}</div>
              
              {/* Agent Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-electric)] mb-3 md:mb-4">{agent.title}</h3>
              
              {/* Agent Description */}
              <p className="text-[var(--color-mutedgray)] mb-4 md:mb-6 text-sm md:text-base">{agent.description}</p>
              
              {/* Features List */}
              <ul className="space-y-2 md:space-y-3">
                {agent.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-[var(--color-mutedgray)] text-xs md:text-sm">
                    <span className="text-[var(--color-aqua)] mr-2 md:mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-12">
          <a href="/agent-store" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block">
            Explore All Agents
          </a>
        </div>
      </div>
    </section>
  );
}