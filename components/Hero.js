import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[var(--color-midnight)] to-[var(--color-onyx)] py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-aqua)] bg-clip-text text-transparent leading-tight">
           Transform your challenges Into
           <br/>
           AI-Powered Micro SAAS
          </h1>
      
        {/* Subtitle */}
<p className="text-lg md:text-xl lg:text-2xl text-[var(--color-mutedgray)] max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
  You define, we design
  <br />
  Lets build your AI team in weeks not months
</p>
       
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-16">
          <Link 
            href="/blueprint"
            className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-block"
          >
            Generate Your free Blueprint ›
          </Link>
          {/* <button className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            Watch Demo
          </button> */}
        </div>
        
        {/* Trust Badge
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 text-[var(--color-mutedgray)] text-sm md:text-base">
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-aqua)]">✓</span> No credit card required
          </span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-aqua)]">✓</span> 14-day free trial
          </span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--color-aqua)]">✓</span> Setup in minutes
          </span>
        </div> */}
      </div>
    </section>
  );
}