import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SCHEDULE from "../data/schedule";
import { BookOpen, Calendar, Clock, MapPin, Sparkles, Feather } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(1);
  const pageRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeDay]);

  const filtered = SCHEDULE.filter((item) => item.day === activeDay);

  useGSAP(() => {
    // Hero Entrance
    gsap.fromTo(
      ".schedule-hero-title",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      ".schedule-hero-subtitle",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power3.out" }
    );
    gsap.fromTo(
      ".day-tabs-container",
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
    );

    // River flow stroke animation on scroll
    const pathEl = timelineRef.current?.querySelector(".river-flow-path");
    if (pathEl) {
      const length = pathEl.getTotalLength();
      pathEl.style.strokeDasharray = length;
      pathEl.style.strokeDashoffset = length;

      gsap.fromTo(
        pathEl,
        { strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%", // Starts animating as soon as timeline enters
            end: "bottom 90%", // Completes animation near the bottom
            scrub: 0.3, // Reacts instantly to scrolling
          },
        }
      );
    }

    // Mobile scroll line animation
    gsap.fromTo(
      ".mobile-flow-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 85%",
          end: "bottom 90%",
          scrub: 0.3,
        },
      }
    );

    // Cards reveal
    const cards = gsap.utils.toArray(".timeline-item-row");
    cards.forEach((card) => {
      const isLeft = card.classList.contains("item-left");
      gsap.fromTo(
        card.querySelector(".timeline-card"),
        {
          x: isLeft ? -80 : 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Node (diya) pulse/reveal
      gsap.fromTo(
        card.querySelector(".diya-node"),
        { scale: 0, rotation: -45 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, { scope: pageRef, dependencies: [activeDay] });

  return (
    <div ref={pageRef} className="bg-[#f2f8fc] min-h-screen flex flex-col font-sans antialiased text-[#1e293b] overflow-hidden relative">
      <Navbar />

      {/* Floating Sparkles & Feathers in background */}
      <div className="absolute top-[20%] left-[-5%] text-sky-200/40 pointer-events-none animate-pulse duration-[8000ms]">
        <Feather className="w-80 h-80 rotate-12" strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-[10%] right-[-5%] text-sky-200/40 pointer-events-none animate-pulse duration-[10000ms]">
        <Feather className="w-96 h-96 -rotate-45" strokeWidth={0.5} />
      </div>

      <main className="flex-grow">
        {/* ── Page Hero ── */}
        <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-sky-950 via-sky-900 to-[#f2f8fc] text-white text-center">
          {/* Animated river lines background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
              <path d="M0,150 C300,50 600,250 900,100 C1200,300 1350,150 1440,200 L1440,400 L0,400 Z" fill="#38bdf8" />
              <path d="M0,200 C400,100 800,300 1200,150 L1440,250 L1440,400 L0,400 Z" fill="#0284c7" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            
            <h1 className="schedule-hero-title font-heading text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
              The Flow of <span className="text-amber-400">Words & Wisdom</span>
            </h1>
            
            <p className="schedule-hero-subtitle text-sky-100/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              Embark on a two-day literary journey along the banks of the Ganges at Bihar Gyan Bhawan, Patna. Immerse yourself in stimulating dialogues, poetry recitals, and cultural celebrations.
            </p>

            {/* ── Day Tabs ── */}
            <div className="day-tabs-container mt-12 flex justify-center gap-4">
              <button
                onClick={() => setActiveDay(1)}
                className={`flex flex-col items-center px-8 py-4 rounded-xl border transition-all duration-300 ${
                  activeDay === 1
                    ? "bg-amber-400 border-amber-400 text-sky-950 shadow-lg scale-105"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/15"
                }`}
              >
                <span className="text-xs uppercase font-bold tracking-widest">November 11</span>
                <span className={`text-[15px] font-semibold mt-1 ${activeDay === 1 ? "text-sky-900" : "text-sky-200"}`}>
                  Day 1 · Opening & Currents
                </span>
              </button>

              <button
                onClick={() => setActiveDay(2)}
                className={`flex flex-col items-center px-8 py-4 rounded-xl border transition-all duration-300 ${
                  activeDay === 2
                    ? "bg-amber-400 border-amber-400 text-sky-950 shadow-lg scale-105"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/15"
                }`}
              >
                <span className="text-xs uppercase font-bold tracking-widest">November 12</span>
                <span className={`text-[15px] font-semibold mt-1 ${activeDay === 2 ? "text-sky-900" : "text-sky-200"}`}>
                  Day 2 · Echoes & Valedictory
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ── Timeline & River Flow Section ── */}
        <section className="py-24 px-6 relative" ref={timelineRef}>
          <div className="max-w-6xl mx-auto relative">
            
            {/* SVG Winding Ganga River Path */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 2000" preserveAspectRatio="none" fill="none">
                <defs>
                  <linearGradient id="river-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Base River Bed */}
                <path
                  className="hidden md:block"
                  d="M 500,0 C 420,250 580,500 500,750 C 420,1000 580,1250 500,1500 C 420,1750 580,1875 500,2000"
                  stroke="#e2f1fc"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                
                {/* Winding Flow Current */}
                <path
                  className="hidden md:block river-flow-path"
                  d="M 500,0 C 420,250 580,500 500,750 C 420,1000 580,1250 500,1500 C 420,1750 580,1875 500,2000"
                  stroke="url(#river-gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Waves Sparkle Effect */}
                <path
                  className="hidden md:block opacity-40 animate-pulse duration-[3000ms]"
                  d="M 500,0 C 420,250 580,500 500,750 C 420,1000 580,1250 500,1500 C 420,1750 580,1875 500,2000"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="20 40"
                />
              </svg>
            </div>

            {/* Mobile River Line (Left Side) */}
            <div className="absolute top-0 bottom-0 left-8 md:hidden w-1 bg-sky-200 rounded-full">
              <div className="mobile-flow-line w-full bg-gradient-to-b from-sky-400 to-indigo-500 rounded-full origin-top scale-y-0 h-full" />
            </div>

            <div className="space-y-16 relative z-10">
              {filtered.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                
                return (
                  <div
                    key={idx}
                    className={`timeline-item-row flex flex-col md:grid md:grid-cols-[1fr_120px_1fr] items-center ${
                      isLeft ? "item-left" : "item-right"
                    }`}
                  >
                    {/* Left Column (Card for Even index) */}
                    <div className={`flex md:justify-end ${isLeft ? "order-1 md:order-1" : "order-3 md:order-1 hidden md:flex"}`}>
                      {isLeft ? (
                        <ScheduleCard item={item} />
                      ) : (
                        <div className="text-right pr-6 space-y-1">
                          <span className="text-xl font-bold text-sky-950 flex items-center justify-end gap-2">
                            <Clock className="w-4 h-4 text-sky-600" />
                            {item.time}
                          </span>
                          <span className="text-xs font-semibold tracking-wider text-sky-600 uppercase">
                            Session {idx + 1}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Middle Column (Animated Diya Node) */}
                    <div className="order-2 flex justify-center py-4 md:py-0 relative z-25 pl-4 md:pl-0 self-start md:self-auto">
                      <div className="diya-node relative flex items-center justify-center">
                        {/* Diya SVG Container */}
                        <div className="w-14 h-14 bg-amber-500/10 rounded-full border border-amber-500/20 flex items-center justify-center relative shadow-lg backdrop-blur-sm group hover:scale-110 transition-transform duration-300">
                          {/* Inner glowing core */}
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-inner">
                            {/* Lit flame overlay */}
                            <div className="w-4 h-6 bg-gradient-to-t from-red-600 via-amber-400 to-yellow-200 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)] animate-bounce duration-[1500ms]" />
                          </div>
                        </div>

                        {/* Little waves effect radiating from node */}
                        <span className="absolute w-20 h-20 bg-sky-400/20 border border-sky-400/30 rounded-full animate-ping pointer-events-none duration-[2500ms]" />
                      </div>
                    </div>

                    {/* Right Column (Card for Odd index) */}
                    <div className={`flex justify-start ${!isLeft ? "order-3 md:order-3" : "order-3 md:order-3 hidden md:flex"}`}>
                      {!isLeft ? (
                        <ScheduleCard item={item} />
                      ) : (
                        <div className="text-left pl-6 space-y-1">
                          <span className="text-xl font-bold text-sky-950 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-sky-600" />
                            {item.time}
                          </span>
                          <span className="text-xs font-semibold tracking-wider text-sky-600 uppercase">
                            Session {idx + 1}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Mobile Time Header (shown only on mobile for non-card columns) */}
                    <div className="md:hidden order-1 pl-16 flex items-center gap-2 text-sky-950 font-bold mb-2">
                      <Clock className="w-4 h-4 text-sky-600" />
                      <span>{item.time}</span>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

/* ── Individual Session Card ── */
function ScheduleCard({ item }) {
  const badgeColors = {
    ceremony: "bg-[#6b2a5c]/10 text-[#6b2a5c] border-[#6b2a5c]/20",
    keynote: "bg-[#e23f66]/10 text-[#e23f66] border-[#e23f66]/20",
    panel: "bg-[#23356e]/10 text-[#23356e] border-[#23356e]/20",
    workshop: "bg-amber-600/10 text-amber-700 border-amber-600/20",
  };

  const badgeStyle = badgeColors[item.type] || "bg-sky-50 text-sky-700 border-sky-200";

  return (
    <div className="timeline-card bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(20,50,90,0.06)] border border-[#23356e]/5 hover:shadow-[0_10px_30px_rgba(20,50,90,0.12)] transition-all duration-300 w-full max-w-[460px] relative overflow-hidden group ml-16 md:ml-0">
      
      {/* Decorative Wave Border Accent on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-amber-400 to-[#e23f66] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badgeStyle}`}>
          {item.type}
        </span>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-[#e23f66]" />
          <span>Gyan Bhawan, Patna</span>
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-sky-950 mb-3 group-hover:text-[#6b2a5c] transition-colors duration-300 font-heading">
        {item.session}
      </h3>
      
      <p className="text-slate-500 text-sm leading-relaxed mb-4 font-light">
        {item.desc}
      </p>

      <div className="flex items-center gap-2 pt-4 border-t border-slate-100 mt-2">
        <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
          <BookOpen className="w-4 h-4" />
        </div>
        <span className="text-xs font-semibold text-sky-950 uppercase tracking-wide">
          Ganga Lit Fest Session
        </span>
      </div>
    </div>
  );
}
