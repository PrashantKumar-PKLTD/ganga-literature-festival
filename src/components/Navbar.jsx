import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* ─── Navigation Data with Dropdowns ─────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "About The Festival", href: "/about" },
      { label: "Our Vision", href: "/about" },
      { label: "Organizers", href: "/about" },
    ],
  },
  {
    label: "Programme",
    href: "/speakers",
    dropdown: [
      { label: "Speakers & Authors", href: "/speakers" },
      { label: "Schedule", href: "/schedule" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Participate",
    href: "/register",
    dropdown: [
      { label: "Register", href: "/register" },
      { label: "FAQ", href: "/faq" },
      { label: "Volunteer", href: "/register" },
    ],
  },
  { label: "Contact", href: "/#contact" },
];

/* ─── Chevron Icon Component ──────────────────────────────────── */
function ChevronDown({ className = "" }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Desktop Dropdown Component ──────────────────────────────── */
function DesktopDropdown({ link, handleNavClick }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (!link.dropdown) {
    return (
      <a
        href={link.href}
        onClick={(e) => handleNavClick(e, link.href)}
        className="relative py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 text-white hover:text-glf-gold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-glf-gold hover:after:w-full after:transition-all after:duration-300"
      >
        {link.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      ref={dropdownRef}
    >
      <button
        onClick={(e) => handleNavClick(e, link.href)}
        className="flex items-center gap-1.5 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 text-white hover:text-glf-gold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-glf-gold hover:after:w-full after:transition-all after:duration-300"
      >
        {link.label}
        <ChevronDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden min-w-[220px] animate-slide-down">
            {/* Gold accent line at top */}
            <div className="h-[3px] bg-gradient-to-r from-glf-burgundy via-glf-gold to-glf-burgundy" />
            <div className="py-2">
              {link.dropdown.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setOpen(false);
                  }}
                  className="block px-5 py-2.5 text-sm text-glf-slate hover:text-glf-burgundy hover:bg-glf-cream transition-all duration-150 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Accordion Item ───────────────────────────────────── */
function MobileAccordion({ link, handleNavClick }) {
  const [open, setOpen] = useState(false);

  if (!link.dropdown) {
    return (
      <a
        href={link.href}
        onClick={(e) => handleNavClick(e, link.href)}
        className="block py-3.5 px-4 text-glf-charcoal font-semibold text-[15px] tracking-wide border-b border-gray-100 hover:text-glf-burgundy hover:bg-glf-cream/50 transition-all duration-200"
      >
        {link.label}
      </a>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-3.5 px-4 text-glf-charcoal font-semibold text-[15px] tracking-wide hover:text-glf-burgundy hover:bg-glf-cream/50 transition-all duration-200"
      >
        {link.label}
        <ChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {link.dropdown.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="block py-2.5 pl-8 pr-4 text-sm text-glf-slate font-medium hover:text-glf-burgundy hover:bg-glf-cream transition-all duration-150"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Navbar Component ───────────────────────────────────── */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const hash = href.substring(1); // e.g., "#speakers"
      if (location.pathname !== "/") {
        navigate(href);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ═══ Main Navigation Bar ═══ */}
      <nav className="w-full bg-gradient-to-b from-black/95 via-black/60 to-transparent py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* ── Logo / Brand ── */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg md:text-xl leading-tight tracking-wide transition-colors duration-300 text-white">
                Ganga Literature
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 text-glf-gold">
                Festival · Patna
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation Links ── */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <DesktopDropdown
                key={link.label}
                link={link}
                handleNavClick={handleNavClick}
              />
            ))}

            {/* CTA Button */}
            <a
              href="/register"
              onClick={(e) => handleNavClick(e, "/register")}
              className={`ml-2 relative overflow-hidden group px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 bg-glf-gold text-glf-charcoal hover:bg-glf-gold-light`}
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
            </a>
          </div>

          {/* ── Mobile Hamburger Button ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition-all duration-200 text-white hover:text-glf-gold hover:bg-white/10"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h12" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h8" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ═══ Mobile Menu Overlay ═══ */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ═══ Mobile Slide-out Drawer ═══ */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[60] transform transition-transform duration-300 ease-in-out shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-glf-cream to-white">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-glf-burgundy text-white">
              <span className="font-heading font-bold text-sm leading-none">ग</span>
            </div>
            <div>
              <span className="block font-heading font-bold text-glf-burgundy text-sm leading-tight">
                Ganga Literature
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-glf-gold">
                Festival · Patna
              </span>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg text-glf-slate hover:text-glf-burgundy hover:bg-glf-cream transition-all duration-200"
            aria-label="Close menu"
            id="mobile-menu-close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation */}
        <div className="flex-1 overflow-y-auto py-2">
          {NAV_LINKS.map((link) => (
            <MobileAccordion
              key={link.label}
              link={link}
              handleNavClick={handleNavClick}
            />
          ))}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-5 border-t border-gray-100 bg-gradient-to-r from-glf-cream to-white">
          <a
            href="/register"
            onClick={(e) => handleNavClick(e, "/register")}
            className="block w-full text-center bg-glf-burgundy hover:bg-glf-burgundy-dark text-white font-bold uppercase tracking-[0.12em] text-sm py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            id="mobile-register-btn"
          >
            Register Now
          </a>
          <div className="mt-4 flex justify-center gap-4">
            <a href="tel:+917208523454" className="text-glf-slate hover:text-glf-burgundy transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <a href="mailto:info@gangalitfest.com" className="text-glf-slate hover:text-glf-burgundy transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
