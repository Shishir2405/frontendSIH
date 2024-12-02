import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Features from '../app/components/Features';
import Newsletter from '../app/components/Newsletter';
import Contact from '../app/components/Contact';
import Footer from '../app/components/Footer';
import card from '../app/components/Card'
import Card from '../app/components/Card';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <Header />
      <Hero />
      <Card />
      <Features />
      <Newsletter />
      <Contact />
      <Footer />
      
    </div>
  );
}
