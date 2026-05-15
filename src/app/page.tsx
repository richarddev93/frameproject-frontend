import { Navbar } from '@/components/Navbar';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

import { SEOHead } from '@/components/SEOHead';
import { Analytics } from '@/components/Analytics';

import { Hero } from '@/features/home/components/Hero.home';

import { getHomeHeroSection } from '@/features/home/services/get-hero-section-home';

import { heroSectionMapper } from '@/features/home/mappers/hero-section.mapper';

import { heroViewModel } from '@/features/home/viewmodels/hero-section.viewmodel';

export default async function Home() {
  const response =
    await getHomeHeroSection();

  const mapped =
    heroSectionMapper(response);

  const vm =
    heroViewModel(mapped);

  return (
    <>
      <SEOHead />

      <Analytics />

      <Navbar />

      <Hero data={vm} />

      {/* <About />
      <Portfolio />
      <Services />
      <Testimonials /> */}

      <Contact />

      <Footer />
    </>
  );
}