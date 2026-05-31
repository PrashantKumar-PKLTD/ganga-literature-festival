import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "Register", href: "#register" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Banner Bar for Government/Corporate Style */}
      <div className="bg-govblue text-white text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-govblue-dark">
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <span className="flex items-center gap-1">
            <span>📅</span> 21–23 November 2026
          </span>
          <span className="flex items-center gap-1">
            <span>📍</span> Gyan Bhawan Exhibition Centre, Patna
          </span>
        </div>
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <a href="tel:+917208522614" className="hover:underline flex items-center gap-1">
            <span>📞</span> +91 72085 23454
          </a>
          <a href="mailto:info@starexhibitions.in" className="hover:underline flex items-center gap-1">
            <span>✉️</span> admin@gmail.com
          </a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className={`w-full bg-white shadow-md transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo / Brand */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-govblue font-extrabold text-base md:text-lg leading-tight uppercase tracking-wider">
                Bihar Medical Expo
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-widest">
                5th Edition • Eastern India's Largest B2B Fair
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-govblue font-semibold text-sm uppercase tracking-wider transition-colors duration-150 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-govblue hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, "#register")}
              className="bg-accentgreen hover:bg-accentgreen-dark text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow transition-all hover:scale-105"
            >
              Register Pass
            </a>
          </div>

          {/* Hamburger Menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 hover:text-govblue focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <div
        className={`lg:hidden fixed top-[80px] md:top-[72px] right-0 w-full h-[calc(100vh-80px)] bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-800 hover:text-govblue font-bold text-lg border-b border-gray-100 pb-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => handleNavClick(e, "#register")}
            className="bg-accentgreen hover:bg-accentgreen-dark text-white text-center font-bold uppercase py-3 rounded shadow mt-4 transition-all"
          >
            Register Pass
          </a>
        </div>
      </div>
    </header>
  );
}
