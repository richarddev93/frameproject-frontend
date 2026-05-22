'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Serviços', href: '#services' },
  { name: 'Blog', href: '/blog', isRoute: true },
  { name: 'Contato', href: '#contact' }
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('#hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [supportsSDA, setSupportsSDA] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // 1. Scroll Spy Intersection Observer for Desktop/Mobile links
  useEffect(() => {
    const sections = navItems
      .filter(item => !item.isRoute)
      .map(item => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === 'hero' ? '#hero' : `#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px', // Trigger when section occupies the middle of the viewport
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // 2. Scroll-Driven Animation (SDA) Feature Detection & Fallback
  useEffect(() => {
    const hasSDA = typeof CSS !== 'undefined' && CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)');
    setSupportsSDA(hasSDA);

    if (!hasSDA) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // 3. Navigation Drawer State and Dismissal Observer
  useEffect(() => {
    const drawer = drawerRef.current;
    const scroller = scrollerRef.current;
    const sheet = sheetRef.current;
    const trigger = triggerRef.current;
    if (!drawer || !scroller || !sheet) return;

    const onDrawerOpened = () => {
      setIsMobileMenuOpen(true);
      const main = document.querySelector('main');
      if (main) main.inert = true;
      sheet.focus();
    };

    const onDrawerClosed = () => {
      setIsMobileMenuOpen(false);
      const main = document.querySelector('main');
      if (main) main.inert = false;
      try {
        if (typeof drawer.hidePopover === 'function') {
          drawer.hidePopover();
        }
      } catch (e) {}
      if (trigger) trigger.focus();
    };

    const visibleThreshold = 1 / window.innerWidth;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.at(-1);
        if (!entry) return;
        if (entry.intersectionRatio < visibleThreshold) {
          onDrawerClosed();
        }
        if (entry.intersectionRatio === 1) {
          onDrawerOpened();
        }
      },
      { root: drawer, threshold: [visibleThreshold, 1] }
    );

    observer.observe(sheet);

    // Escape key handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Fallback backdrop opacity if scroll-timeline is not supported
    const hasSDA = typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()');
    const handleScrollerScroll = () => {
      const ratio = 1 - scroller.scrollLeft / sheet.offsetWidth;
      drawer.style.setProperty('--drawer-backdrop', String(ratio));
    };

    if (!hasSDA) {
      scroller.addEventListener('scroll', handleScrollerScroll);
    }

    return () => {
      observer.unobserve(sheet);
      document.removeEventListener('keydown', handleKeyDown);
      scroller.removeEventListener('scroll', handleScrollerScroll);
      const main = document.querySelector('main');
      if (main) main.inert = false;
    };
  }, []);

  const openDrawer = () => {
    const drawer = drawerRef.current;
    const scroller = scrollerRef.current;
    if (!drawer || !scroller) return;

    try {
      if (typeof drawer.showPopover === 'function') {
        drawer.showPopover();
      }
    } catch (e) {
      console.warn('Popover API not supported:', e);
    }

    const hasScrollInitialTarget = typeof CSS !== 'undefined' && CSS.supports('scroll-initial-target', 'nearest');
    if (!hasScrollInitialTarget) {
      scroller.scrollTo({ left: scroller.offsetWidth, behavior: 'instant' as ScrollBehavior });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scroller.scrollTo({ left: 0, behavior: 'smooth' });
        });
      });
    } else {
      scroller.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const closeDrawer = () => {
    const scroller = scrollerRef.current;
    const sheet = sheetRef.current;
    if (!scroller || !sheet) return;
    scroller.scrollTo({ left: sheet.offsetWidth, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine dynamic navigation classes based on Scroll-Driven Animation support
  const navClass = `fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
    supportsSDA
      ? 'animate-nav-scroll border-b border-transparent bg-transparent py-5'
      : isScrolled
        ? 'bg-black/85 backdrop-blur-lg border-b border-white/10 py-3'
        : 'bg-transparent border-b border-transparent py-5'
  }`;

  return (
    <>
      <nav className={navClass} aria-label="Navegação Principal">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('#hero')}
              className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              frameproject
            </motion.button>

            {/* Desktop Menu with Anchor Positioning active underline */}
            <ul className="hidden md:flex items-center gap-8 nav-list">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                const linkClass = `text-gray-300 hover:text-white transition-colors relative py-1 text-sm font-medium ${
                  isActive ? 'nav-item-active text-white' : ''
                }`;

                return (
                  <li key={item.name}>
                    {item.isRoute ? (
                      <Link
                        href={item.href}
                        className={linkClass}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className={linkClass}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                );
              })}
              <li>
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Vamos conversar
                </motion.button>
              </li>
            </ul>

            {/* Mobile Trigger Button */}
            <motion.button
              ref={triggerRef}
              onClick={openDrawer}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              whileTap={{ scale: 0.9 }}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="drawer"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Swipeable popover drawer for mobile navigation */}
      <div
        {...({ popover: 'manual' } as any)}
        id="drawer"
        className="Drawer"
        ref={drawerRef}
        onClick={(e) => {
          if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
            closeDrawer();
          }
        }}
      >
        <div className="Drawer-scroller" ref={scrollerRef}>
          <nav
            className="Drawer-sheet"
            tabIndex={-1}
            ref={sheetRef}
            aria-label="Navegação Mobile"
          >
            {/* Close button inside mobile menu */}
            <button
              onClick={closeDrawer}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>

            {navItems.map((item) => (
              <div key={item.name}>
                {item.isRoute ? (
                  <Link
                    href={item.href}
                    className="text-3xl font-semibold text-gray-300 hover:text-white transition-colors"
                    onClick={closeDrawer}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      closeDrawer();
                    }}
                    className="text-3xl font-semibold text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                scrollToSection('#contact');
                closeDrawer();
              }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-xl font-semibold"
            >
              Vamos conversar
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
