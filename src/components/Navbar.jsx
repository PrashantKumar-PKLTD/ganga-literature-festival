import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Speakers", "Schedule", "Gallery", "Register", "FAQ", "Contact"];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`glf-nav${scrolled ? " scrolled" : ""}`}>
        <div className="glf-nav-inner">
          <a href="#home" className="glf-logo">
            <div className="glf-logo-emblem">G</div>
            <div className="glf-logo-text">
              <span className="glf-logo-name">Ganga Lit Fest</span>
              <span className="glf-logo-sub">Patna 2026</span>
            </div>
          </a>
          <ul className="glf-nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
          <div className="glf-hamburger" onClick={() => setMenuOpen(true)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className={`glf-mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="glf-mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
      </div>
    </>
  );
}
