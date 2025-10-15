export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-midnight)]">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[var(--color-onyx)] to-[var(--color-midnight)] rounded-2xl md:rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-[var(--color-electric)]/20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-softwhite)] mb-4 md:mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-mutedgray)] mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses scaling smarter with Value(ode. Start your free trial today and automate your workflows in minutes.
          </p>
          <button className="btn-primary text-base md:text-lg px-8 md:px-12 py-3 md:py-4 mb-4 md:mb-6">
            Start Your Free Trial
          </button>
          <p className="text-[var(--color-mutedgray)] text-sm md:text-base">
            No credit card required • 14 days free • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
}