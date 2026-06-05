import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SPEAKERS from "../data/speakers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SpeakerCard } from "../components/Speakers";
import { Search, Feather, Waves } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpeakersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const gridRef = useRef(null);

  // Filter speakers based on search input
  const filteredSpeakers = SPEAKERS.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Fade up the hero section elements
    gsap.fromTo(
      ".speaker-hero-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2 }
    );

    // Stagger animate the speaker cards
    if (gridRef.current && gridRef.current.children.length > 0) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, { scope: pageRef, dependencies: [filteredSpeakers] });

  return (
    <div ref={pageRef} className="bg-[#fcf5f1] min-h-screen flex flex-col font-body relative overflow-hidden">
      <Navbar />

      {/* Floating Background Elements */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 14s ease-in-out infinite 2s; }
      `}</style>

      <div className="absolute top-[30%] left-[-2%] text-[#6b2a5c]/5 animate-float-slow pointer-events-none">
        <Feather className="w-64 h-64" strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-[20%] right-[-5%] text-[#23356e]/5 animate-float-delayed pointer-events-none">
        <Waves className="w-80 h-80" strokeWidth={0.5} />
      </div>

      {/* ── Image Hero Banner ── */}
      <section className="w-full h-screen overflow-hidden relative">
        <img 
          src="/Images/speakers/speaker-hero.png" 
          alt="Meet the Speakers" 
          className="absolute inset-0 w-full h-[110%] object-cover object-center"
        />
      </section>

      {/* ── Search & Header Section ── */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-16 flex-1 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16 border-b border-[#23356e]/10 pb-8 speaker-hero-content">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-12 h-px bg-[#e23f66]" />
              <span className="text-[#e23f66] font-bold tracking-[0.2em] uppercase text-xs">
                Ganga Literature Festival 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#23356e] mb-2 leading-tight">
              Meet the <span className="text-[#e23f66] italic">Speakers</span>
            </h1>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-96 shadow-md rounded-md speaker-hero-content">
            <input
              type="text"
              placeholder="Search By Author Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-100 text-[#101828] rounded-l-md rounded-r-none px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#e23f66] placeholder-gray-400 font-medium"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-[#e23f66] text-white px-6 rounded-r-md hover:bg-[#b02f4d] transition-colors flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Speakers Grid ── */}
        {filteredSpeakers.length > 0 ? (
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 mb-20">
            {filteredSpeakers.map((s) => (
              <SpeakerCard 
                key={s.id} 
                speaker={s} 
                onClick={() => {
                  navigate(`/speakers/${s.id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 font-medium text-lg">
            No speakers found matching your search.
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}
