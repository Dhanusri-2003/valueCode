export default function ValueProps() {
  const props = [
    {
      icon: '⚡',
      title: 'Start Fast',
      description: 'Our AI generated Blueprint gives you head start and gives us directions to assemble an AI team that can work for you. Filling out the lean canvas and value proposition canvas will put us on the same page.'
    },
    {
      icon: '🚀',
      title: 'Scale Smart',
      description: 'Our workflows are very modular and our multi LLM stack (ChatGPT , Claude , Gemini , and Grok ) helps to scale at your pace. You can add more agents that work as a team on demand and can choose to increase tokens for better performance.'
    },
    {
      icon: '🎯',
      title: 'You are in Control',
      description: 'Our code will just have access to the front end and the back end workflow layers while the data and the CRM will be in your workspace. This provides absolute control on your customer data and financials.'
    },
  ];

     return (
    <section id="solutions" className="py-16 md:py-24 bg-[#6D4C41]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ai automation Suite for Entrepreneurs and Consultants
          </h2>
          <h1 className="text-lg md:text-3xl font-bold text-[#D7A86E] max-w-2xl mx-auto leading-relaxed">
            Modular, Scalable and Customizable
          </h1>
          <p className="text-lg md:text-xl text-[#F5F0ED] max-w-2xl mx-auto leading-relaxed">
            Built on lean six sigma framework for maximum efficiency
          </p>
        </div>
        
        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {props.map((prop, index) => (
            <div key={index} className="text-center p-6 md:p-8 bg-white rounded-xl border border-[#D7CCC8] hover:border-[#8B7355] hover:shadow-2xl hover:shadow-[#8B7355]/20 transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">{prop.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#8B7355] mb-3 md:mb-4">{prop.title}</h3>
              <p className="text-[#5D4037] leading-relaxed text-sm md:text-base">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}