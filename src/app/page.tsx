import { Navbar } from '@/components/Navbar';

import { SEOHead } from '@/components/SEOHead';
import { Analytics } from '@/components/Analytics';

import { Hero } from '@/features/home/components/Hero.home';
import { About } from '@/features/about/components/About.home';
import { Portfolio } from '@/features/portfolio/components/Portfolio.home';
import { Services } from '@/features/services/components/Services.home';
import { Testimonials } from '@/features/testimonials/components/Testimonials.home';
import { Contact } from '@/features/contact/components/Contact.home';
import { Footer } from '@/features/footer/components/Footer.home';

import { getHomeHeroSection } from '@/features/home/services/get-hero-section-home';
import { getAbout } from '@/features/about/services/get-about';
import { getPortfolio } from '@/features/portfolio/services/get-portfolio';
import { getServices } from '@/features/services/services/get-services';
import { getTestimonials } from '@/features/testimonials/services/get-testimonials';
import { getContact } from '@/features/contact/services/get-contact';
import { getFooter } from '@/features/footer/services/get-footer';

import { heroSectionMapper } from '@/features/home/mappers/hero-section.mapper';
import { aboutMapper } from '@/features/about/mappers/about.mapper';
import { portfolioMapper } from '@/features/portfolio/mappers/portfolio.mapper';
import { servicesMapper } from '@/features/services/mappers/services.mapper';
import { testimonialsMapper } from '@/features/testimonials/mappers/testimonials.mapper';
import { contactMapper } from '@/features/contact/mappers/contact.mapper';
import { footerMapper } from '@/features/footer/mappers/footer.mapper';

import { heroViewModel } from '@/features/home/viewmodels/hero-section.viewmodel';
import { aboutViewModel } from '@/features/about/viewmodels/about.viewmodel';
import { portfolioViewModel } from '@/features/portfolio/viewmodels/portfolio.viewmodel';
import { servicesViewModel } from '@/features/services/viewmodels/services.viewmodel';
import { testimonialsViewModel } from '@/features/testimonials/viewmodels/testimonials.viewmodel';
import { contactViewModel } from '@/features/contact/viewmodels/contact.viewmodel';
import { footerViewModel } from '@/features/footer/viewmodels/footer.viewmodel';

export default async function Home() {
  const [
    heroResponse,
    aboutResponse,
    portfolioResponse,
    servicesResponse,
    testimonialsResponse,
    contactResponse,
    footerResponse,
  ] = await Promise.all([
    getHomeHeroSection(),
    getAbout(),
    getPortfolio(),
    getServices(),
    getTestimonials(),
    getContact(),
    getFooter(),
  ]);

  const heroVm = heroViewModel(heroSectionMapper(heroResponse));
  const aboutVm = aboutViewModel(aboutMapper(aboutResponse));
  const portfolioVm = portfolioViewModel(portfolioMapper(portfolioResponse));
  const servicesVm = servicesViewModel(servicesMapper(servicesResponse));
  const testimonialsVm = testimonialsViewModel(testimonialsMapper(testimonialsResponse));
  const contactVm = contactViewModel(contactMapper(contactResponse));
  const footerVm = footerViewModel(footerMapper(footerResponse));

  return (
    <>
      <SEOHead />

      <Analytics />

      <Navbar />

      <Hero data={heroVm} />

      <About data={aboutVm} />

      <Portfolio data={portfolioVm} />

      <Services data={servicesVm} />

      <Testimonials data={testimonialsVm} />

      <Contact data={contactVm} />

      <Footer data={footerVm} contact={contactVm} />
    </>
  );
}