import { useState, useEffect } from "react";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import Registration from "./components/RegistrationForm";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Ganga Literature Festival 2026 | Patna";
  }, []);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
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
