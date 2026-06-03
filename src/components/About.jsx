import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Feather, Waves } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GeometricBirds, GeometricLotus } from "./Decorations";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightCollageRef = useRef(null);

  useGSAP(() => {
    // Left side slides in from left
    gsap.fromTo(
      leftContentRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    // Right side slides in from right
    gsap.fromTo(
      rightCollageRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 md:px-12 w-full bg-white overflow-hidden relative">
      
      {/* Decorative Birds */}
      <GeometricBirds className="absolute right-[-2%] md:right-10 top-20 w-48 hidden md:block opacity-40" />

      {/* Lotus resting at the bottom */}
      <GeometricLotus className="absolute left-[5%] md:left-[3%] bottom-0 w-48 md:w-64 opacity-90 origin-bottom" />
      
      {/* Custom Keyframes for background elements */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(-20deg); }
          50% { transform: translateY(-20px) rotate(-10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 12s ease-in-out infinite; }
      `}</style>

      {/* Moving Background Elements (Ganga & Literature inspired) */}
      <div className="absolute top-10 left-[-2rem] md:left-10 text-glf-gold/15 animate-float-slow hidden md:block pointer-events-none">
        <Feather className="w-40 h-40" strokeWidth={0.7} />
      </div>
      <div className="absolute bottom-20 right-[-4rem] md:right-5 text-glf-gold/10 animate-float-delayed hidden md:block pointer-events-none">
        <Waves className="w-64 h-64" strokeWidth={0.7} />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <div ref={leftContentRef} className="space-y-8 relative">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-12 h-[2px] bg-glf-gold" />
              <span className="text-glf-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                About The Festival
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-glf-burgundy leading-tight">
              A Confluence of <br />
              <span className="text-glf-charcoal">Thoughts & Flowing</span> <br />
              <span className="text-glf-gold italic font-light">Narratives</span>
            </h2>
          </div>

          <p className="font-body text-lg text-glf-slate leading-relaxed max-w-lg">
            Nestled on the sacred ghats of Varanasi, the Ganga Literature Festival is a vibrant celebration where the ancient currents of the river meet the modern flow of literature, art, and ideas. 
            Join us to explore narratives that transcend time and resonate with the eternal spirit of the Ganga.
          </p>

          <button
            onClick={() => {
              navigate("/about");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 bg-glf-burgundy hover:bg-glf-charcoal text-white font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group relative z-20"
          >
            Know More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Right Collage */}
        <div ref={rightCollageRef} className="grid grid-cols-2 gap-4 md:gap-6 relative">
          {/* Decorative background aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-glf-gold/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <div className="space-y-4 md:space-y-6">
            <img 
              src="/Images/speakers/gangaghat2.webp" 
              alt="GLF Festival scene" 
              className="w-full aspect-[4/3] object-cover rounded-2xl rounded-tl-[80px] md:rounded-tl-[120px] shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src="/Images/speakers/gangaghat4.webp" 
              alt="Ganga River" 
              className="w-full aspect-square object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="space-y-4 md:space-y-6 pt-12 md:pt-16">
            <img 
              src="/Images/speakers/gangaghat3.webp" 
              alt="Literature Event" 
              className="w-full aspect-square object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
            <img 
              src="/Images/speakers/gangaghat5.webp" 
              alt="Cultural Performance" 
              className="w-full aspect-[4/3] object-cover rounded-2xl rounded-br-[80px] md:rounded-br-[120px] shadow-lg hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}