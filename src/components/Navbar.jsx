import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Set up observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Center-focused triggers
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    NAV_ITEMS.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const offsetTop = targetEl.offsetTop - 85; // Offset for sticky navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1020]/90 backdrop-blur-md shadow-2xl py-2.5 border-b border-white/5'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: Prominence Increased by 40% (expanded to h-14/16) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center focus:outline-none group"
            >
              <img
                src="/images/logo.png"
                alt="Ganga Literature Festival Logo"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 rounded-md focus:outline-none ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-secondary rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Button */}
            <div className="hidden md:block">
              <a
                href="#register"
                onClick={(e) => handleNavClick(e, '#register')}
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-primary bg-secondary rounded-xl shadow-lg hover:bg-secondary-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
              >
                Register Now
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Drawer Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-72 max-w-[80vw] bg-[#111827] border-l border-white/5 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/5">
            <img
              src="/images/logo.png"
              alt="Ganga Literature Festival Logo"
              className="h-10 w-auto object-contain"
              style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-full hover:bg-white/5 text-gray-400 hover:text-white focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'bg-white/5 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 opacity-0 transition-opacity duration-200" style={{ opacity: isActive ? 1 : 0 }} />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer in mobile drawer */}
        <div className="pt-6 border-t border-white/5">
          <a
            href="#register"
            onClick={(e) => handleNavClick(e, '#register')}
            className="flex items-center justify-center w-full py-3.5 text-xs font-extrabold uppercase tracking-widest text-primary bg-secondary rounded-xl shadow-md hover:bg-secondary-hover active:scale-[0.98] transition-all"
          >
            Register Now
          </a>
        </div>
      </div>
    </>
  );
}
