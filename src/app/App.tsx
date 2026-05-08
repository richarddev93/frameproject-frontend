import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { Analytics } from './components/Analytics';

export default function App() {
  return (
    <>
      <SEOHead />
      <Analytics />

      <div className="min-h-screen bg-black text-white antialiased">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}