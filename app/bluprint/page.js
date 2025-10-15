import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlueprintGenerator from '../../components/BlueprintGenerator';

export default function BlueprintPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlueprintGenerator />
      <Footer />
    </main>
  );
}