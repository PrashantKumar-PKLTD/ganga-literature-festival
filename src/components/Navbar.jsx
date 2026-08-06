import { useState } from "react";
import { ChevronDown, Menu, X, Feather, Package } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { MadhubaniBorderBand } from "./MadhubaniMotifs";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  {
    label: "Festival",
    to: "/festival",
    items: [
      { label: "Friend of the Festival", to: "/festival/friend-of-the-festival" },
      { label: "Register to Attend", to: "/festival/register-to-attend" },
      { label: "Book your Festival Hotel", to: "/festival/book-your-festival-hotel" },
      { label: "Speakers", to: "/festival/speakers" },
      { label: "Honourable Guests", to: "/honourable-guests" },
    ],
  },
  { label: "Programme", to: "/programme" },
  { label: "Blog", to: "/media/blogs" },
  {
    label: "About",
    to: "/about",
    items: [
      { label: "About the festival", to: "/about" },
      { label: "Contact us", to: "/about/contact-us" },
    ],
  },
  { label: "Partners", to: "/partners" },
];

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=918877088880&text=Hi%2C+I%27d+like+to+discuss+a+project.&type=phone_number&app_absent=0";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [expandedMenu, setExpandedMenu] = useState("");

  const handleHomeClick = () => {
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#FAF6EE] text-[#2D2D2D] shadow-md transition-all duration-300 border-t-2 border-[#C8A24A]">
      {/* Subtle Parchment Background Watermarks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none opacity-25">
        {/* Left Lotus Vine Art */}
        <svg className="absolute -left-4 -top-6 h-36 w-36 text-[#C8A24A]" viewBox="0 0 100 100" fill="none">
          <path d="M10 90 Q 30 50 60 40 T 90 10" stroke="currentColor" strokeWidth="1" />
          <path d="M25 70 Q 40 40 70 30" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 1" />
          <circle cx="60" cy="40" r="8" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <circle cx="60" cy="40" r="3" fill="currentColor" opacity="0.5" />
          <path d="M45 55 C 35 45 40 30 50 40 C 60 50 55 65 45 55 Z" stroke="currentColor" strokeWidth="0.6" fill="none" />
        </svg>

        {/* Center Ganga Bridge Watermark Silhouette */}
        <svg className="absolute left-1/2 top-1/2 h-20 w-[600px] -translate-x-1/2 -translate-y-1/2 text-[#C8A24A]/30" viewBox="0 0 400 40" fill="none">
          <path d="M0 35 L400 35" stroke="currentColor" strokeWidth="1" />
          {Array.from({ length: 7 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 60 + 10}, 0)`}>
              <path d="M0 35 Q 25 10 50 35" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <line x1="12" y1="35" x2="12" y2="24" stroke="currentColor" strokeWidth="0.4" />
              <line x1="25" y1="35" x2="25" y2="18" stroke="currentColor" strokeWidth="0.4" />
              <line x1="38" y1="35" x2="38" y2="24" stroke="currentColor" strokeWidth="0.4" />
            </g>
          ))}
        </svg>

        {/* Right Sun & Temple Silhouette Watermark */}
        <svg className="absolute -right-6 -top-2 h-32 w-32 text-[#C8A24A]" viewBox="0 0 100 100" fill="none">
          <circle cx="40" cy="40" r="14" fill="currentColor" opacity="0.3" />
          <path d="M50 90 L65 50 L80 90 Z" stroke="currentColor" strokeWidth="0.8" />
          <path d="M60 50 L65 30 L70 50 Z" stroke="currentColor" strokeWidth="0.6" />
          <line x1="65" y1="30" x2="65" y2="20" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <nav className="relative z-10 mx-auto flex h-[82px] max-w-[1600px] items-center px-4 sm:px-6 md:h-[88px] md:px-8 lg:px-12">
        {/* BRAND LOGO SECTION */}
        <Link
          to="/"
          onClick={handleHomeClick}
          className="group mr-5 flex flex-col items-center justify-center leading-none sm:mr-6 lg:mr-8"
        >
          <span className="font-serif text-3xl font-bold tracking-[0.04em] text-[#2B1B12] sm:text-4xl lg:text-[40px] transition-colors group-hover:text-[#A85032] ml-6">
            GLF
          </span>
          <div className="mt-1 flex flex-col items-start text-left pl-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A85032] sm:text-[10px] leading-tight">
              GANGA LITERATURE
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#A85032] sm:text-[10px] leading-tight">
              FESTIVAL
            </span>
          </div>
          {/* Decorative Logo Underline Flourish */}
          <div className="mt-1 flex w-full items-center justify-center gap-1.5 opacity-80">
            <div className="h-px w-8 bg-[#C8A24A]" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#A85032]" />
            <div className="h-px w-8 bg-[#C8A24A]" />
          </div>
        </Link>

        {/* LEFT VERTICAL DIVIDER WITH LOTUS ICON */}
        <div className="hidden items-center px-4 lg:flex xl:px-6" aria-hidden="true">
          <div className="relative flex h-14 items-center">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-[#C8A24A]/60 to-transparent" />
            <svg className="absolute -left-[11px] h-6 w-6 text-[#C8A24A]" viewBox="0 0 24 24" fill="none">
              <path d="M12 4 C9 9 9 17 12 21 C15 17 15 9 12 4 Z" stroke="currentColor" strokeWidth="1" />
              <path d="M12 21 C6 18 3 12 6 7 C9 12 11 18 12 21 Z" stroke="currentColor" strokeWidth="0.8" />
              <path d="M12 21 C18 18 21 12 18 7 C15 12 13 18 12 21 Z" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="12" cy="14" r="1.5" fill="#A85032" />
            </svg>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-8 2xl:gap-10">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="group relative py-7">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative flex items-center gap-1.5 font-serif text-[14px] font-bold uppercase tracking-[0.12em] transition duration-200 xl:text-[15px] ${
                    isActive ? "text-[#A85032]" : "text-[#3D2C1E] hover:text-[#A85032]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {link.items && (
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className="text-[#C8A24A] transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                    {/* Active Link Underline Indicator matching reference image */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#C8A24A]" />
                    )}
                  </>
                )}
              </NavLink>

              {/* DROPDOWN SUBMENU */}
              {link.items && (
                <div className="invisible absolute left-1/2 top-full z-50 min-w-[260px] -translate-x-1/2 rounded-2xl border border-[#C8A24A]/40 bg-[#FAF6EE] py-3 text-[#2D2319] opacity-0 shadow-xl transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
                  <span className="absolute -top-4 left-0 h-4 w-full" aria-hidden="true" />
                  {link.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-6 py-2.5 font-sans text-[14px] font-medium normal-case tracking-normal text-[#2D2319] transition hover:bg-[#A85032]/10 hover:text-[#A85032] hover:pl-7"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT VERTICAL DIVIDER WITH DOT */}
        <div className="hidden items-center px-4 lg:flex xl:px-6" aria-hidden="true">
          <div className="relative flex h-14 items-center">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-[#C8A24A]/60 to-transparent" />
            <div className="absolute -left-[3px] h-2 w-2 rounded-full border border-[#FAF6EE] bg-[#C8A24A]" />
          </div>
        </div>

        {/* CTA BUTTONS SECTION */}
        <div className="ml-auto hidden items-center gap-3 lg:flex xl:gap-4">
          {/* LET'S TALK BUTTON WITH FEATHER ICON */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-[#C8A24A] bg-[#FAF6EE] px-5 py-2.5 font-serif text-[13px] font-bold uppercase tracking-[0.14em] text-[#A85032] shadow-sm transition-all duration-300 hover:border-[#A85032] hover:bg-[#A85032] hover:text-[#FAF6EE] hover:shadow-md hover:-translate-y-0.5"
          >
            <Feather size={15} strokeWidth={2.2} className="text-[#C8A24A] transition-colors group-hover:text-white" />
            <span>Let's Talk</span>
          </a>

          {/* REGISTER BUTTON WITH GLOSSY TERRACOTTA GRADIENT & GIFT ICON */}
          <Link
            to="/festival/register-to-attend"
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#B84A24] via-[#A85032] to-[#7A2635] px-6 py-2.5 font-serif text-[13px] font-bold uppercase tracking-[0.14em] text-[#FAF6EE] shadow-md shadow-[#A85032]/25 border border-[#C8A24A]/40 transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Package size={16} strokeWidth={2.2} className="text-[#F2C94C]" />
            <span>Register</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded-xl border border-[#C8A24A] p-2.5 text-[#2D2319] lg:hidden transition hover:bg-[#A85032]/10"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[60] h-dvh overflow-y-auto bg-[#1C1208] px-5 py-5 text-[#FAF6EE] transition-transform duration-300 sm:px-7 sm:py-6 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 -mx-5 mb-5 flex items-center justify-between bg-[#1C1208] px-5 pb-4 border-b border-[#C8A24A]/30 sm:-mx-7 sm:px-7">
          <div>
            <div className="font-serif text-4xl leading-none sm:text-5xl text-[#FAF6EE]">GLF</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[#C8A24A] sm:text-xs">
              Ganga Literature Festival
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="border border-[#C8A24A]/40 p-3 text-[#C8A24A] hover:bg-[#C8A24A]/10 transition rounded-xl"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col pb-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-[#FAF6EE]/10">
              <div className="flex items-center gap-3">
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="min-w-0 flex-1 py-4 font-serif text-2xl leading-tight sm:py-5 sm:text-3xl text-[#FAF6EE] hover:text-[#C8A24A] transition"
                >
                  {link.label}
                </Link>
                {link.items && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedMenu(expandedMenu === link.label ? "" : link.label)
                    }
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#FAF6EE]/15 text-[#FAF6EE] hover:border-[#C8A24A] transition rounded-lg"
                    aria-expanded={expandedMenu === link.label}
                    aria-label={`Toggle ${link.label} submenu`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        expandedMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {link.items && (
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    expandedMenu === link.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="pb-4">
                      {link.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={closeMenu}
                          className="block rounded-none py-2.5 pl-4 pr-2 text-sm leading-6 text-[#FAF6EE]/75 transition hover:bg-[#FAF6EE]/5 hover:text-[#C8A24A] sm:text-base"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            to="/festival/register-to-attend"
            onClick={closeMenu}
            className="mt-8 bg-gradient-to-r from-[#B84A24] to-[#7A2635] px-6 py-4 text-center font-serif text-base font-bold uppercase tracking-[0.12em] text-[#FAF6EE] transition hover:brightness-110 sm:px-8 sm:py-5 sm:text-lg rounded-2xl shadow-lg border border-[#C8A24A]/30"
          >
            Register
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 border border-[#C8A24A] bg-[#FAF6EE]/5 px-6 py-4 text-center font-serif text-base font-bold uppercase tracking-[0.12em] text-[#C8A24A] transition hover:bg-[#C8A24A] hover:text-[#1C1208] sm:px-8 sm:py-5 sm:text-lg rounded-2xl"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* BOTTOM ORNAMENTAL MADHUBANI GOLD BORDER */}
      <MadhubaniBorderBand className="absolute bottom-0 left-0 w-full opacity-75 pointer-events-none" color="#C8A24A" />
    </header>
  );
}

