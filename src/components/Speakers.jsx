import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SPEAKERS from "../data/speakers";
import ImageReveal from "./ImageReveal";
import { GangesDolphin, GeometricBirds, TriangleDivider } from "./Decorations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SpeakerCard({ speaker, onClick }) {
  const wavyMask = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M100,5 C115,5 120,15 135,15 C145,10 160,20 165,35 C180,40 185,55 185,70 C195,80 190,95 185,110 C190,125 180,140 165,145 C160,160 145,170 135,165 C120,165 115,175 100,175 C85,175 80,165 65,165 C55,170 40,160 35,145 C20,140 15,125 15,110 C5,100 10,85 15,70 C10,55 20,40 35,35 C40,20 55,10 65,15 C80,15 85,5 100,5 Z' /%3E%3C/svg%3E")`;

  return (
    <div 
      className="flex flex-col items-center group cursor-pointer"
      onClick={onClick}
    >
      {/* ── Wavy Image area ── */}
      <div className="w-48 h-48 md:w-56 md:h-56 mb-5 relative drop-shadow-lg">
        {/* CSS Mask for wavy circle effect */}
        <div 
          className="w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-105 bg-white"
          style={{
            maskImage: wavyMask,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: wavyMask,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center'
          }}
        >
          <img
            src={speaker.img}
            alt={speaker.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col items-center text-center px-2">
        <h3 className="text-[19px] font-heading font-bold text-[#101828] mb-1 group-hover:text-[#c41e5b] transition-colors leading-tight">
          {speaker.name}
        </h3>
      </div>
    </div>
  );
}

export default function Speakers() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    // Header fade in
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Stagger grid items
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

    // Fade up button
    gsap.fromTo(
      btnRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 95%",
        },
      }
    );
  }, { scope: sectionRef });

  // Display only first 6 speakers on homepage
  const displayedSpeakers = SPEAKERS.slice(0, 6);

  return (
    <div className="flex flex-col relative w-full">
      <section id="speakers" ref={sectionRef} className="py-24 bg-[#fcf5f1] overflow-hidden relative z-20">
        
        {/* Decorative elements */}
        <GangesDolphin className="absolute left-0 bottom-20 w-32 md:w-48 hidden lg:block -scale-x-100 opacity-60 origin-bottom-left" />
        <GeometricBirds className="absolute right-[10%] top-24 w-32 hidden md:block opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#23356e] mb-4 uppercase tracking-wider">
            Speakers At
          </h2>
          <div className="flex items-center justify-center gap-4 text-[#23356e] mb-3">
            <span className="text-xl">✧</span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-wider">
              Ganga Literature Festival
            </h3>
            <span className="text-xl">✧</span>
          </div>
          <h4 className="text-[#e23f66] text-4xl font-heading font-bold tracking-[0.2em]">
            2 0 2 6
          </h4>
        </div>

        {/* ── Grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 mb-20">
          {displayedSpeakers.map((s) => (
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

        {/* ── See More Button ── */}
        <div ref={btnRef} className="flex justify-center">
          <button
            onClick={() => {
              navigate("/speakers");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-[#6b2a5c] hover:bg-[#23356e] text-white font-bold uppercase tracking-[0.15em] text-sm px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            See All Speakers
          </button>
        </div>

      </div>
      </section>

      {/* Divider connecting to next section */}
      <TriangleDivider />
    </div>
  );
}