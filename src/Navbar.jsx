import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Speakers", "Schedule", "Gallery", "Register", "FAQ", "Contact"];

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className={`c-nav${scrolled ? " scrolled" : ""}`}>
        <div className="c-nav-inner">
          <a href="#home" className="c-logo">
            <div className="c-logo-box">G</div>
            <div>
              <div className="c-logo-name">Ganga Lit Fest</div>
              <div className="c-logo-sub">Patna 2026</div>
            </div>
          </a>
          <ul className="c-nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
          <a href="#register" className="btn-primary" style={{ fontSize: 13, padding: "10px 20px" }}>Register Now</a>
          <button className="c-hamburger" onClick={() => setMenuOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`c-mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="c-mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href="#register" className="btn-primary" onClick={() => setMenuOpen(false)}>Register Now</a>
      </div>
    </>
  );
}
