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
      position: fixed;
      inset: 0;
      z-index: 0;
      background-image: url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=75&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      filter: brightness(0.8) saturate(0.8);
      transform: scale(1.02);
      pointer-events: none;
    }
    .footer-fixed-bg::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(6,12,35,0.85) 0%, rgba(6,12,35,0.7) 50%, rgba(6,12,35,0.9) 100%);
    }

    .footer-link {
      transition: color 0.2s, transform 0.2s;
    }
    .footer-link:hover {
      color: #f5a623;
      transform: translateX(3px);
    }

    .footer-social {
      transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    }
    .footer-social:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(245, 166, 35, 0.3);
    }
  `;
  document.head.appendChild(s);
}

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "Register", href: "#register" },
];

const RESOURCES = [
  "Exhibitor Kit",
  "Media Accreditation",
  "Volunteer Support",
  "Sponsorship Options",
  "Visitor Guide",
];

const SOCIALS = [
  { label: "Facebook", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "Twitter", svg: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "Instagram", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: "LinkedIn", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "YouTube", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="footer-root"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── Fixed exhibition background ── */}
      <div className="footer-fixed-bg" />

      {/* ── Content ── */}
      <div className="relative z-10">

        {/* ── Main Footer ── */}
        <div className="pt-20 pb-14 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

              {/* ── Brand Column ── */}
              <div className="lg:col-span-4 flex flex-col gap-5">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-[14px] tracking-wide group-hover:text-amber-400 transition-colors">
                      Bihar Medical Expo
                    </span>
                    <span className="text-[10px] text-white/60 font-medium tracking-widest uppercase">
                      5th Edition • Patna 2026
                    </span>
                  </div>
                </a>

                <p className="text-[12.5px] text-white/70 leading-relaxed font-light max-w-xs">
                  Eastern India's largest B2B medical trade fair, connecting international
                  medical innovators and diagnostic equipment manufacturers with regional
                  healthcare centers.
                </p>

                <p className="text-[11px] text-amber-400/70 font-semibold tracking-wide">
                  Organised by Star Exhibitions
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
                  Contact Desk
                </h4>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-3">
                    <CalendarDays className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    <div>
                      <span className="text-[12px] text-white/70 font-medium block">21–23 November 2026</span>
                      <span className="text-[10px] text-white/50 font-light">Saturday – Monday</span>
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
                    <a href="mailto:info@starexhibitions.in" className="text-[12px] text-white/70 font-medium hover:text-amber-400 transition-colors">
                      info@starexhibitions.in
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" strokeWidth={1.8} />
                    <a href="tel:+917208522614" className="text-[12px] text-white/70 font-medium hover:text-amber-400 transition-colors">
                      +91 72085 34534
                    </a>
                  </li>
                </ul>

                {/* Newsletter mini */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[10px] text-white/40 font-medium tracking-wide uppercase mb-2.5">
                    Newsletter
                  </p>
                  <div className="flex gap-0">
                    <input
                      type="email"
                      placeholder="Your email"
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
              © 2026 Bihar Medical Expo. All rights reserved. Organised by Star Exhibitions.
            </p>
            <p className="text-[10.5px] text-white/60 font-light flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500/70 fill-red-500/70" /> for Patna Healthcare Development
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
