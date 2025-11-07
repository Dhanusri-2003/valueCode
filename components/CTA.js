export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F0ED]">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#8B7355] to-[#6D4C41] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-[#D7A86E]/20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg md:text-xl text-[#F5F0ED] mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses scaling smarter with Value(ode. Start your free trial today and automate your workflows in minutes.
          </p>
          <button className="bg-white text-[#8B7355] text-base md:text-lg px-8 md:px-12 py-3 md:py-4 mb-4 md:mb-6 rounded-md hover:bg-[#F5F0ED] transition-colors duration-300 font-semibold">
            Start Your Free Trial
          </button>
          <p className="text-[#F5F0ED] text-sm md:text-base">
            No credit card required • 14 days free • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
}