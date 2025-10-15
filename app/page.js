import Header from '../components/Header';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import Process from '../components/Process';
import AgentsPreview from '../components/AgentsPreview';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProps />
      <Process />
      <AgentsPreview />
      <CTA />
      <Footer />
    </main>
  );
}