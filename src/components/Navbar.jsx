import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

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
    <header className="fixed left-0 top-0 z-50 w-full bg-cream/90 backdrop-blur-md text-dark border-b border-dark/5 transition-all duration-300">
      <nav className="mx-auto flex h-[78px] max-w-[1600px] items-center px-4 sm:px-5 md:h-[82px] md:px-10">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="mr-6 flex min-w-[130px] flex-col leading-none lg:mr-8 xl:mr-10 md:min-w-[150px]"
        >
          <span className="font-serif text-3xl font-medium tracking-[-0.04em] text-dark md:text-4xl">GLF</span>
          <span className="mt-1 text-[9px] font-black uppercase tracking-[0.24em] text-saffron md:text-[10px] md:tracking-[0.34em]">
            Literature Festival
          </span>
        </Link>

        <div className="hidden flex-1 items-center gap-3 lg:flex xl:gap-5 2xl:gap-7">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="group relative py-7">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[13px] font-bold uppercase tracking-[0.08em] transition hover:text-saffron hover-underline ${
                    isActive ? "text-saffron" : "text-dark"
                  }`
                }
              >
                {link.label}
                {link.items && <ChevronDown size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:rotate-180" />}
              </NavLink>
              {link.items && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[260px] rounded-none border border-gold/20 bg-cream py-4 text-dark opacity-0 shadow-xl transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100">
                  <span className="absolute -top-4 left-0 h-4 w-full" aria-hidden="true" />
                  {link.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-5 py-3 text-[14px] font-semibold normal-case tracking-normal text-dark transition hover:bg-saffron/10 hover:text-saffron"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-saffron px-5 py-2.5 text-[14px] font-bold uppercase tracking-[0.12em] text-saffron transition duration-300 hover:bg-saffron hover:text-cream rounded-none"
          >
            Let's Talk
          </a>
          <Link
            to="/festival/register-to-attend"
            className="bg-saffron px-6 py-2.5 text-[14px] font-bold uppercase tracking-[0.12em] text-cream transition duration-300 hover:bg-dark hover:text-cream rounded-none"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded-none border border-saffron p-3 text-dark lg:hidden transition hover:bg-saffron/10"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[60] h-dvh overflow-y-auto bg-dark px-5 py-5 text-cream transition-transform duration-300 sm:px-7 sm:py-6 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 -mx-5 mb-5 flex items-center justify-between bg-dark px-5 pb-4 sm:-mx-7 sm:px-7">
          <div>
            <div className="font-serif text-4xl leading-none sm:text-5xl text-cream">GLF</div>
            <div className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-saffron sm:text-xs sm:tracking-[0.26em]">
              Literature Festival
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="border border-saffron/40 p-3 text-saffron hover:bg-saffron/10 transition"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col pb-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-cream/10">
              <div className="flex items-center gap-3">
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="min-w-0 flex-1 py-4 font-serif text-2xl leading-tight sm:py-5 sm:text-3xl text-cream hover:text-saffron transition"
                >
                  {link.label}
                </Link>
                {link.items && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedMenu(expandedMenu === link.label ? "" : link.label)
                    }
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-cream/15 text-cream hover:border-saffron transition"
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
                          className="block rounded-none py-2.5 pl-4 pr-2 text-sm leading-6 text-cream/75 transition hover:bg-cream/5 hover:text-saffron sm:text-base"
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
            className="mt-8 bg-saffron px-6 py-4 text-center text-base font-bold uppercase tracking-[0.12em] text-cream transition hover:bg-gold-dark sm:px-8 sm:py-5 sm:text-lg rounded-none"
          >
            Register
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 border border-saffron px-6 py-4 text-center text-base font-bold uppercase tracking-[0.12em] text-saffron transition hover:bg-saffron hover:text-cream sm:px-8 sm:py-5 sm:text-lg rounded-none"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
