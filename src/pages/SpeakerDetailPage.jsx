import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SPEAKERS from "../data/speakers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronLeft, Calendar, MapPin, Feather, Waves } from "lucide-react";
import gsap from "gsap";

export default function SpeakerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  // Find speaker based on URL param
  const speaker = SPEAKERS.find((s) => s.id === parseInt(id));

  useEffect(() => {
    if (!speaker || !pageRef.current) return;

    const tl = gsap.timeline();

    // Reset initial states
    gsap.set(".speaker-nav", { opacity: 0, x: -20 });
    gsap.set(".speaker-photo", { opacity: 0, x: -50 });
    gsap.set(".speaker-bio", { opacity: 0, x: 50 });
    gsap.set(".speaker-sessions", { opacity: 0, y: 40 });

    // Animate in
    tl.to(".speaker-nav", { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" })
      .to(".speaker-photo", { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .to(".speaker-bio", { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .to(".speaker-sessions", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");

  }, [speaker]);

  if (!speaker) {
    return (
      <div className="min-h-screen bg-[#f0f7fa] flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-24">
          <p className="text-xl text-[#23356e]">Speaker not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={pageRef} className="min-h-screen bg-[#f0f7fa] flex flex-col font-body relative overflow-hidden">
      <Navbar />

      {/* Floating Background Elements */}
      <style>{`
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-20px) rotate(-10deg); }
        }
        @keyframes float-subtle-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .animate-float-subtle { animation: float-subtle 10s ease-in-out infinite; }
        .animate-float-subtle-delayed { animation: float-subtle-delayed 12s ease-in-out infinite; }
      `}</style>

      <div className="absolute top-[20%] right-[-2%] text-[#23356e]/5 animate-float-subtle pointer-events-none">
        <Feather className="w-96 h-96" strokeWidth={0.3} />
      </div>
      <div className="absolute bottom-[10%] left-[-5%] text-[#23356e]/5 animate-float-subtle-delayed pointer-events-none">
        <Waves className="w-[30rem] h-[30rem]" strokeWidth={0.3} />
      </div>

      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 pt-32 pb-24 flex-1 relative z-10">
        
        {/* Go Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="speaker-nav flex items-center gap-2 text-[#23356e] font-bold text-sm mb-12 hover:text-[#e23f66] transition-colors bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm w-max border border-white"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={3} />
          Go Back
        </button>

        {/* ── Speaker Profile Section ── */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-20 border-b border-[#23356e]/10 pb-20">
          
          {/* Photo */}
          <div className="speaker-photo w-full md:w-1/3 shrink-0 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#e23f66]/20 to-transparent rounded-2xl -translate-x-3 translate-y-3 -z-10"></div>
             <img 
              src={speaker.img} 
              alt={speaker.name}
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </div>

          {/* Bio Info */}
          <div className="speaker-bio w-full md:w-2/3 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#e23f66]" />
              <span className="text-[#e23f66] font-bold tracking-[0.2em] uppercase text-xs">
                {speaker.designation}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#23356e] mb-8 leading-tight">
              {speaker.name}
            </h1>
            <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white shadow-sm">
              <p className="text-[#101828] text-[16px] leading-loose font-medium text-justify">
                <span className="font-bold text-[#e23f66]">{speaker.name}</span> {speaker.bio.substring(speaker.bio.indexOf("is"))}
              </p>
            </div>
          </div>
        </div>

        {/* ── Sessions Section ── */}
        <div className="speaker-sessions">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-8 rounded-full bg-[#23356e] flex items-center justify-center text-white">✧</span>
            <h2 className="text-3xl font-heading font-bold text-[#23356e]">
              Ganga Literature Festival 2026 Sessions
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-white shadow-xl relative overflow-hidden group hover:border-[#e23f66]/30 transition-colors duration-500">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e0f2fe] to-white rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Tag */}
              <span className="inline-block bg-[#e0f2fe] text-[#23356e] text-xs font-bold tracking-wider px-4 py-1.5 rounded-full mb-6 border border-blue-100">
                VARANASI EDITION
              </span>

              {/* Session Title */}
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#e23f66] mb-4">
                {speaker.sessionTitle}
              </h3>

              {/* Sub text */}
              <p className="text-[#101828] font-semibold text-lg mb-8">
                {speaker.name} in conversation regarding <span className="italic">"{speaker.topic}"</span>
              </p>

              {/* Time and Location */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-[#23356e] font-bold bg-[#f0f7fa] p-5 rounded-xl border border-blue-100/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Calendar className="w-5 h-5 text-[#e23f66]" />
                  </div>
                  {speaker.sessionTime}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-[#e23f66]" />
                  </div>
                  {speaker.sessionLocation}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
