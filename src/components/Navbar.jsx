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
    ],
  },
  { label: "Programme", to: "/programme" },
  {
    label: "GLF International",
    to: "/glf-international",
    items: [
      { label: "GLF Island of Ireland", to: "/glf-international/island-of-ireland" },
      { label: "London", to: "/glf-international/london" },
      { label: "Spain", to: "/glf-international/spain" },
      { label: "Toronto", to: "/glf-international/toronto" },
      { label: "GLF USA", to: "/glf-international/usa" },
    ],
  },
  {
    label: "Media",
    to: "/media",
    items: [
      { label: "Blogs", to: "/media/blogs" },
    ],
  },
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

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [expandedMenu, setExpandedMenu] = useState("");

  const handleHomeClick = () => {
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white text-black">
      <nav className="mx-auto flex h-[78px] max-w-[1600px] items-center px-4 sm:px-5 md:h-[82px] md:px-10">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="mr-6 flex min-w-[130px] flex-col leading-none md:mr-10 md:min-w-[150px]"
        >
          <span className="font-serif text-3xl font-medium tracking-[-0.04em] text-black md:text-4xl">GLF</span>
          <span className="mt-1 text-[9px] font-black uppercase tracking-[0.24em] text-[#b58b32] md:text-[10px] md:tracking-[0.34em]">
            Ganga Literature
          </span>
        </Link>

        <div className="hidden flex-1 items-center gap-5 xl:flex 2xl:gap-7">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="group relative py-7">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-[14px] font-bold uppercase tracking-[0.04em] transition hover:text-[#b58b32] ${
                    isActive ? "text-[#b58b32]" : "text-black"
                  }`
                }
              >
                {link.label}
                {link.items && <ChevronDown size={17} strokeWidth={2.5} />}
              </NavLink>
              {link.items && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[260px] rounded-md bg-white py-4 text-black opacity-0 shadow-2xl shadow-black/20 ring-1 ring-black/10 transition group-hover:visible group-hover:opacity-100">
                  <span className="absolute -top-4 left-0 h-4 w-full" aria-hidden="true" />
                  {link.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-5 py-3 text-[15px] font-semibold normal-case tracking-normal text-black transition hover:bg-[#b58b32]/10 hover:text-[#b58b32]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ml-auto hidden items-center xl:flex">
          <Link
            to="/#register"
            className="bg-[#b58b32] px-9 py-5 text-[15px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-black hover:text-white"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded-none border border-[#b58b32] p-3 text-black xl:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[60] h-dvh overflow-y-auto bg-[#071038] px-5 py-5 text-white transition-transform duration-300 sm:px-7 sm:py-6 xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 -mx-5 mb-5 flex items-center justify-between bg-[#071038] px-5 pb-4 sm:-mx-7 sm:px-7">
          <div>
            <div className="font-serif text-4xl leading-none sm:text-5xl">GLF</div>
            <div className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#b58b32] sm:text-xs sm:tracking-[0.26em]">
              Ganga Literature
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="border border-white/25 p-3"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col pb-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="border-b border-white/10">
              <div className="flex items-center gap-3">
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="min-w-0 flex-1 py-4 font-serif text-2xl leading-tight sm:py-5 sm:text-3xl"
                >
                  {link.label}
                </Link>
                {link.items && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedMenu(expandedMenu === link.label ? "" : link.label)
                    }
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-white"
                    aria-expanded={expandedMenu === link.label}
                    aria-label={`Toggle ${link.label} submenu`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
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
                      className="block rounded-sm py-2.5 pl-4 pr-2 text-sm leading-6 text-white/75 transition hover:bg-white/5 hover:text-white sm:text-base"
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
            to="/#register"
            onClick={closeMenu}
            className="mt-8 bg-[#b58b32] px-6 py-4 text-center text-base font-black uppercase tracking-[0.12em] text-white sm:px-8 sm:py-5 sm:text-lg sm:tracking-[0.14em]"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
