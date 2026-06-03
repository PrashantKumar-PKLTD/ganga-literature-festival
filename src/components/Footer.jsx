import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MapPin, CalendarDays, Mail, Phone, ChevronRight,
  ArrowUpRight, Send, Heart
} from "lucide-react";

/* ── Inject footer styles once ── */
if (typeof document !== "undefined" && !document.getElementById("footer-globals")) {
  const s = document.createElement("style");
  s.id = "footer-globals";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    .footer-root {
      position: relative;
      clip-path: inset(0);
    }

    .footer-fixed-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
      /* Background image is loaded lazily via inline styles */
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      filter: brightness(0.9) saturate(1.1);
      pointer-events: none;
    }
    .footer-fixed-bg::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(26, 26, 46, 0.9) 0%, rgba(123,31,58,0.8) 50%, rgba(26,26,46,0.9) 100%);
    }

    .footer-link {
      transition: color 0.2s, transform 0.2s;
    }
    .footer-link:hover {
      color: #f59e0b;
      transform: translateX(3px);
    }

    .footer-social {
      transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    }
    .footer-social:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(245, 158, 11, 0.3);
    }
  `;
  document.head.appendChild(s);
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About The Fest", href: "/about" },
  { label: "Speakers & Authors", href: "/speakers" },
  { label: "Festival Schedule", href: "/schedule" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Register", href: "/#register" },
];

const RESOURCES = [
  "Press & Media Accreditation",
  "Volunteer Application",
  "Sponsorship Brochure",
  "Varanasi Travel Guide",
  "Frequently Asked Questions",
];

const SOCIALS = [
  { label: "Facebook", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "Twitter", svg: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "Instagram", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bgLoaded, setBgLoaded] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" } // Load image 600px before footer enters viewport
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("/#")) {
      const hash = href.substring(1); // e.g. "#gallery"
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
    <footer
      ref={footerRef}
      className="footer-root bg-glf-charcoal text-white overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── Fixed backgrounds ── */}
      <div 
        className="footer-fixed-bg transition-opacity duration-1000" 
        style={bgLoaded ? { backgroundImage: "url('/Images/speakers/footer-image.jpg')" } : {}}
      />

      {/* ── Content ── */}
      <div className="relative z-10">

        {/* ── Main Footer ── */}
        <div className="pt-20 pb-14 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

              {/* ── Brand Column ── */}
              <div className="lg:col-span-4 flex flex-col gap-5">
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, "/")}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-[16px] tracking-wide group-hover:text-amber-400 transition-colors">
                      Ganga Literature Festival
                    </span>
                    <span className="text-[10px] text-sky-300 font-medium tracking-widest uppercase">
                      Celebrating Words · Patna 2026
                    </span>
                  </div>
                </a>

                <p className="text-[12.5px] text-white/70 leading-relaxed font-light max-w-xs">
                  Celebrating the flow of narratives, classical poetry, and modern thought at the intersection of spiritual heritage and contemporary discourse.
                </p>

                <p className="text-[11px] text-amber-400 font-semibold tracking-wide">
                  Organised by GLF Foundations & Literary Council
                </p>

                {/* Social icons */}
                <div className="flex gap-2.5 mt-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="footer-social w-9 h-9 rounded-full flex items-center justify-center text-white border border-white/15 bg-white/5 hover:bg-amber-500 hover:border-amber-500"
                    >
                      {s.svg}
                    </a>
                  ))}
                </div>
              </div>

              {/* ── Quick Links ── */}
              <div className="lg:col-span-2">
                <h4 className="text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-5">
                  Quick Links
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="footer-link inline-flex items-center gap-1.5 text-[12px] text-white/60 font-medium"
                      >
                        <ChevronRight className="w-3 h-3 text-amber-400/60" strokeWidth={2.5} />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Resources ── */}
              <div className="lg:col-span-3">
                <h4 className="text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-5">
                  Resources
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {RESOURCES.map((res) => (
                    <li key={res}>
                      <a
                        href="#"
                        className="footer-link inline-flex items-center gap-1.5 text-[12px] text-white/60 font-medium"
                      >
                        <ChevronRight className="w-3 h-3 text-amber-400/60" strokeWidth={2.5} />
                        {res}
                        <ArrowUpRight className="w-3 h-3 text-white/20 ml-auto" strokeWidth={2} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Contact ── */}
              <div className="lg:col-span-3">
                <h4 className="text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-5">
                  Festival Desk
                </h4>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-3">
                    <CalendarDays className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    <div>
                      <span className="text-[12px] text-white/70 font-medium block">11–12 November 2026</span>
                      <span className="text-[10px] text-white/50 font-light font-sans">Wednesday & Thursday</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    <div>
                      <span className="text-[12px] text-white/70 font-medium block">Gyan Bhawan, Patna</span>
                      <span className="text-[10px] text-white/50 font-light">Bihar, India</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" strokeWidth={1.8} />
                    <a href="mailto:info@gangalitfest.com" className="text-[12px] text-white/70 font-medium hover:text-amber-400 transition-colors">
                      info@gangalitfest.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" strokeWidth={1.8} />
                    <a href="tel:+917208523454" className="text-[12px] text-white/70 font-medium hover:text-amber-400 transition-colors">
                      +91 72085 23454
                    </a>
                  </li>
                </ul>

                {/* Newsletter mini */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[10px] text-white/40 font-medium tracking-wide uppercase mb-2.5">
                    Stay Updated
                  </p>
                  <div className="flex gap-0">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/5 border border-white/10 rounded-l-sm text-[11px] text-white/80 px-3 py-2 outline-none focus:border-amber-400/50 placeholder-white/25 transition-colors"
                    />
                    <button
                      className="bg-amber-500 hover:bg-amber-400 text-white px-3 py-2 rounded-r-sm transition-colors"
                      aria-label="Subscribe"
                    >
                      <Send className="w-3.5 h-3.5" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-5">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[10.5px] text-white/60 font-medium tracking-wide">
              © 2026 Ganga Literature Festival. All rights reserved. Organised by GLF Foundations.
            </p>
            <p className="text-[10.5px] text-white/60 font-light flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500/70 fill-red-500/70" /> in celebration of the holy river and arts
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
