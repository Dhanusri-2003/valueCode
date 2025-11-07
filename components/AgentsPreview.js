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
    <section id="AgentsPreview" className="py-16 md:py-24 bg-[#F5F0ED]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3E2723] mb-4">
            Meet Your AI Team
          </h2>
          <p className="text-lg md:text-xl text-[#5D4037] max-w-2xl mx-auto leading-relaxed">
            Specialized agents ready to automate your workflows and 2x your productivity
          </p>
        </div>
        
        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white rounded-xl p-6 md:p-8 border border-[#D7CCC8] hover:border-[#8B7355] hover:shadow-2xl hover:shadow-[#8B7355]/20 transition-all duration-300">
              {/* Agent Icon */}
              <div className="text-3xl md:text-4xl mb-4 md:mb-6">{agent.icon}</div>
              
              {/* Agent Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#8B7355] mb-3 md:mb-4">{agent.title}</h3>
              
              {/* Agent Description */}
              <p className="text-[#5D4037] mb-4 md:mb-6 text-sm md:text-base">{agent.description}</p>
              
              {/* Features List */}
              <ul className="space-y-2 md:space-y-3">
                {agent.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-[#5D4037] text-xs md:text-sm">
                    <span className="text-[#D7A86E] mr-2 md:mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-12">
          <a href="/agent-store" className="bg-[#8B7355] text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block rounded-md hover:bg-[#6D4C41] transition-colors duration-300 font-semibold">
            Explore All Agents
          </a>
        </div>
      </div>
    </section>
  );
}