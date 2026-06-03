import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GeometricLotus, GangesDolphin, TriangleDivider, GeometricBirds } from "./Decorations";

gsap.registerPlugin(ScrollTrigger);

export default function RegistrationCTA() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <div className="flex flex-col relative w-full">
      <section ref={sectionRef} className="py-24 relative overflow-hidden bg-glf-cream z-20">
        
        {/* SVG Decorative Animals & Flowers */}
        <GeometricLotus className="absolute left-0 top-10 w-40 md:w-56 hidden lg:block" />
        <GangesDolphin className="absolute right-0 bottom-0 w-48 md:w-72 hidden lg:block origin-bottom-right" />
        <GeometricBirds className="absolute left-[15%] top-16 w-24 hidden md:block" />
        <GeometricBirds className="absolute right-[15%] top-10 w-16 hidden md:block opacity-40 -scale-x-100" />

        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-glf-gold/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-glf-burgundy/5 rounded-full blur-3xl opacity-50" />
        </div>

        <div ref={containerRef} className="max-w-5xl mx-auto px-6 relative z-10 text-center mt-10 md:mt-0">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-glf-charcoal mb-6">
            Be Part of the <span className="text-glf-burgundy">Experience</span>
          </h2>
          <p className="text-glf-slate text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of literature enthusiasts at the Ganga Literature Festival. Discover new voices, engage in thought-provoking discussions, and celebrate the rich heritage of Patna.
          </p>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-30">
            <div className="text-left">
              <h3 className="font-heading text-2xl font-bold text-glf-charcoal mb-2">Register for Free Entry</h3>
              <p className="text-glf-slate text-sm">Secure your spot for two days of inspiring literary and cultural events.</p>
            </div>
            <button
              onClick={() => {
                navigate("/register");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="shrink-0 group relative overflow-hidden px-8 py-4 rounded-full bg-glf-burgundy text-white font-bold uppercase tracking-widest text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-3"
            >
              <span className="relative z-10">Register Now</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* SVG Section Divider linking to next section (FAQ) */}
      <TriangleDivider />
    </div>
  );
}
