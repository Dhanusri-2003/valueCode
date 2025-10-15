export default function Process() {
  const steps = [
    {
      number: '1',
      icon: '🎯',
      title: 'Define Your Vision',
      description: 'Share your business requirements and challenges. Our AI analyzes your needs to create the perfect solution blueprint.'
    },
    {
      number: '2',
      icon: '🤖',
      title: 'Choose AI Agents',
      description: 'Select from our library of specialized AI agents. We assemble your custom AI team tailored to your use case.'
    },
    {
      number: '3',
      icon: '🗺️',
      title: 'Get Technical Blueprint',
      description: 'Receive a detailed architecture plan with technology stack, timeline, and cost projections.'
    },
    {
      number: '4',
      icon: '🚀',
      title: 'Launch & Scale',
      description: 'We build and deploy your AI team incrementally. Start seeing value immediately while we expand functionality.'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[var(--color-midnight)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-softwhite)] mb-4">
            From Idea to Implementation in 4 Steps
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-mutedgray)] max-w-2xl mx-auto leading-relaxed">
            Our streamlined process turns your vision into a fully-functional AI-powered application
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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