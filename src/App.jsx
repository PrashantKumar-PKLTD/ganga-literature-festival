import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import PartnerMarquee from './components/PartnerMarquee';
import AboutSection from './components/AboutSection';
import PastEditions from './components/PastEditions';
import WhyAttendSection from './components/WhyAttendSection';
import SpeakersSection from './components/SpeakersSection';
import ScheduleSection from './components/ScheduleSection';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import RegistrationCard from './components/RegistrationCard';
import FAQAccordion from './components/FAQAccordion';
import VenueExperience from './components/VenueExperience';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Activate scroll-reveal animation observer
  useScrollReveal();

  useEffect(() => {
    // Unmount Loading Screen after entrance animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-bg font-sans text-text-dark selection:bg-secondary/35 selection:text-primary">
      
      {/* 1. Preloader Screen overlay */}
      {isLoading && <LoadingScreen />}

      {/* Sticky Translucent Header */}
      <Navbar />

      {/* Main Assembly */}
      <main className="flex-grow">
        
        {/* 2. Cinematic Hero Arena + Stats Counter */}
        <Hero />

        {/* 3. Partner & Alliance Infinite Marquee Banner */}
        <PartnerMarquee />

        {/* 4. Core Mission, Vision, and Nalanda Legacy about block */}
        <AboutSection />

        {/* 5. Historical Growth Timeline Storytelling */}
        <PastEditions />

        {/* 6. Luxury Why Attend cards grid */}
        <WhyAttendSection />

        {/* 7. Distinguished Speakers grid with hover modals */}
        <SpeakersSection />

        {/* 8. Fully Filterable Dynamic Schedule Agenda */}
        <ScheduleSection />

        {/* 9. Masonry Media grid with custom Lightbox overlay */}
        <GallerySection />

        {/* 10. Rated Testimonial Endorsements carousel slider */}
        <Testimonials />

        {/* 11. Luxury Multi-step Pass Claim Registration Card */}
        <RegistrationCard />

        {/* 12. Accordion FAQ dropdown sheets */}
        <FAQAccordion />

        {/* 13. Office coordinates and Gyan Bhawan Live Map Frame */}
        <VenueExperience />

      </main>

      {/* 14. Partner Branding & Quick Links Footer */}
      <Footer />

      {/* Progressive circular Back to Top action button */}
      <BackToTop />
      
    </div>
  );
}
