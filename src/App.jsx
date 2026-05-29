import { useState, useEffect } from "react";
import "./global.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Speakers from "./Speakers";
import Schedule from "./Schedule";
import Gallery from "./Gallery";
import Registration from "./RegistrationForm";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const TICKER_ITEMS = ["200+ Authors", "40+ Sessions", "14–15 Nov 2026", "Gyan Bhawan, Patna", "Free Student Entry", "Bihar's Biggest Lit Fest"];

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="c-ticker">
      <div className="c-ticker-inner">
        {items.map((item, i) => (
          <span className="c-ticker-item" key={i}>
            <span className="c-ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.title = "Ganga Literature Festival 2026 | Patna, Bihar"; }, []);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Ticker />
      <About />
      <Speakers />
      <Schedule />
      <Gallery />
      <Registration />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
