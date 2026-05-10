import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Portfolio } from "@/app/components/Portfolio";
import { Services } from "@/app/components/Services";
import { Testimonials } from "@/app/components/Testimonials";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { SEOHead } from "@/app/components/SEOHead";
import { Analytics } from "@/app/components/Analytics";

export default function Home() {
  return (
    <>
      <SEOHead />
      <Analytics />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
