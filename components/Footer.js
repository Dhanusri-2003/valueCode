export default function Footer() {
  const sections = [
    {
      title: 'Products',
      links: [
        { href: '/agent-store', label: 'AI Agent Store' },
        { href: '/blueprint', label: 'Blueprint Generator' },
        { href: '#', label: 'Custom Solutions' },
        { href: '#', label: 'Pricing' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '#', label: 'Documentation' },
        { href: '#', label: 'API Reference' },
        { href: '#', label: 'Blog' },
        { href: '#', label: 'Support' }
      ]
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '#', label: 'Careers' },
        { href: '#', label: 'Contact' },
        { href: '#', label: 'Privacy Policy' }
      ]
    }
  ];

  return (
    <footer id= "about" className="bg-[var(--color-onyx)] border-t border-[var(--color-midnight)] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-bold text-[var(--color-electric)] mb-4">Value(ode</h4>
            <p className="text-[var(--color-mutedgray)] mb-4">AI Powered Micro SaaS Solutions</p>
            <p className="text-[var(--color-mutedgray)] text-sm md:text-base">
              Scale smarter, operate leaner with intelligent automation built on Lean principles.
            </p>
          </div>
          
          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h5 className="text-[var(--color-softwhite)] font-semibold mb-3 md:mb-4 text-lg">{section.title}</h5>
              <div className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="block text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="border-t border-[var(--color-midnight)] pt-6 md:pt-8 text-center">
          <p className="text-[var(--color-mutedgray)] text-sm md:text-base">
            &copy; 2024 Value(ode. Built with React, n8n & Supabase.
          </p>
        </div>
      </div>
    </footer>
  );
}