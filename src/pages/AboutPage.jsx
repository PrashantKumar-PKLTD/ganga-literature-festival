import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VisionCarousel from "../components/VisionCarousel";
import { TriangleDivider } from "../components/Decorations";

export default function AboutPage() {
  return (
    <div className="bg-glf-cream text-glf-charcoal min-h-screen font-sans antialiased">
      <Navbar />

      <main>
        {/* Hero Section for About Page */}
        <section className="w-full h-screen overflow-hidden relative">
          <img
            src="/Images/about/About-hero.png"
            alt="About Ganga Literature Festival"
            className="absolute inset-0 w-full h-[110%] object-cover object-center"
          />
        </section>

        {/* About the Fest Section */}
        <section className="relative py-24 overflow-hidden w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-glf-burgundy mb-6">
              Celebrating Literature on the Banks of Ganga
            </h2>
            <div className="w-24 h-1 bg-glf-gold mx-auto rounded-full mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 font-body text-lg text-glf-slate leading-relaxed">
              <p>
                Welcome to the Ganga Literature Festival (GLF), a premier celebration of words, ideas, and culture set against the majestic backdrop of Varanasi. Our festival brings together the brightest minds, from celebrated authors and poets to thinkers and artists, in a vibrant exchange of ideas.
              </p>
              <p>
                Rooted in the spiritual and intellectual heritage of India, GLF serves as a bridge between ancient wisdom and contemporary discourse. We believe in the power of storytelling to transcend boundaries, challenge perspectives, and unite communities.
              </p>
              <p>
                Join us for two days of captivating panel discussions, book launches, poetry readings, and cultural performances. Immerse yourself in the literary magic as we celebrate the enduring spirit of human creativity along the sacred ghats of the Ganga.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/Images/speakers/Gangaghat.webp"
                alt="Ganga Literature Festival"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-4 border-glf-gold/30 rounded-2xl pointer-events-none" />
            </div>
            </div>
          </div>
          {/* Triangle Divider at Bottom Edge */}
          <div className="absolute bottom-0 right-0 w-1/3 opacity-80 pointer-events-none origin-bottom-right scale-75 md:scale-100">
            <TriangleDivider />
          </div>
        </section>

        {/* Organizers Section */}
        <section className="relative py-24 bg-white overflow-hidden w-full">
          <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            
            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1 bg-glf-gold/10 rounded-full text-glf-burgundy font-bold text-sm tracking-widest uppercase mb-2">
                Organized By
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-glf-charcoal leading-none">
                BIHAAN
              </h2>
              <h3 className="font-heading text-2xl text-glf-gold italic">
                For the Rising Bharat
              </h3>
              <div className="w-16 h-1 bg-glf-burgundy rounded-full my-6" />
              <p className="font-body text-lg text-glf-slate leading-relaxed">
                BIHAAN connects India's vision for growth with global partnerships, community, culture, causes, and events. 
              </p>
              <p className="font-body text-lg text-glf-slate leading-relaxed pb-4">
                As the proud organizers of the Ganga Literature Festival, we are deeply committed to elevating Bharat's narrative on the world stage, fostering cultural dialogues, and celebrating the profound wisdom rooted in our heritage.
              </p>
              <a 
                href="https://bihaan.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-glf-burgundy text-white font-bold rounded-full hover:bg-glf-charcoal transition-all shadow-lg hover:shadow-xl group"
              >
                Visit Bihaan
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1.5 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
            
            {/* Logo Visual */}
            <div className="flex-1 w-full max-w-md mx-auto mt-10 md:mt-0 relative group">
              <div className="absolute inset-0 bg-glf-gold/20 rounded-full blur-3xl group-hover:bg-glf-burgundy/20 transition-colors duration-700" />
              <div className="relative aspect-square rounded-full bg-glf-cream flex items-center justify-center p-16 border-8 border-white shadow-2xl transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="https://bihaan.org/logo.png" 
                  alt="Bihaan Logo" 
                  className="w-full h-auto object-contain drop-shadow-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-4xl font-heading font-bold text-glf-burgundy">BIHAAN</span>';
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* Our Vision Carousel Section */}
        <VisionCarousel />
      </main>

      <Footer />
    </div>
  );
}
