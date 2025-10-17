//  
export default function Process() {
  const steps = [
      {
      number: '1',
      icon: '🎯',
      title: 'Define Your Vision',
      description: 'Our AI system understands your requirements, challenges, and improvement areas to generate a blueprint. The lean and value proposition canvas responses help our process engineering team align with development to create a robust AI system tailored for you.'
    },
    {
      number: '2',
      icon: '🤖',
      title: 'Choose Your AI Agent',
      description: 'Select from our robust AI agents designed for small businesses. We customize them and make multiple agents work as a team. Your choice dictates the success of your AI team. Custom AI agents are available as a premium offering.'
    },
    {
      number: '3',
      icon: '🔐',
      title: 'Get Your Workspace',
      description: 'Value(ode provides a secure login hosted on the cloud with 99.9% uptime. The login features all the AI agents you have chosen. Our tech team configures the AI agents with your database and business tools, with virtual training provided.'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[var(--color-midnight)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-softwhite)] mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-mutedgray)] max-w-2xl mx-auto leading-relaxed">
            Just 3 Steps
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-[var(--color-onyx)] rounded-xl p-6 md:p-8 text-center card-hover border border-[var(--color-onyx)] hover:border-[var(--color-electric)]/30 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[var(--color-electric)] text-[var(--color-midnight)] rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                
                {/* Step Icon */}
                <div className="text-3xl md:text-4xl mb-4 md:mb-6 mt-4">{step.icon}</div>
                
                {/* Step Content */}
                <h3 className="text-lg md:text-xl font-semibold text-[var(--color-softwhite)] mb-3 md:mb-4">{step.title}</h3>
                <p className="text-[var(--color-mutedgray)] leading-relaxed text-sm md:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}