import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
import Gallery from "../components/Gallery";
import Registration from "../components/RegistrationForm";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans antialiased selection:bg-blue-100 selection:text-govblue">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Gallery />
        <Registration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
