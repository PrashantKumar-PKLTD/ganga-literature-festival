import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Speakers from "../components/Speakers";
import RegistrationCTA from "../components/RegistrationCTA";
import FAQ from "../components/FAQ";
import SponsorCarousel from "../components/SponsorCarousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans antialiased selection:bg-blue-100 selection:text-govblue">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <RegistrationCTA />
        <FAQ />
        <SponsorCarousel />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
