import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: "frameproject | Produção Audiovisual Profissional",
  description: "Transformando histórias em experiências visuais inesquecíveis",
};

export default function RootLayout() {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
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
      </body>
    </html>
  );
}
