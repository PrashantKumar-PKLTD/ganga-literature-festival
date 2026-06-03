import { useState, useRef } from "react";
import { ChevronDown, Droplets, BookOpen, Feather, PenTool, Library } from "lucide-react";
import { FAQS } from "../data/misc";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { GeometricBirds } from "./Decorations";

gsap.registerPlugin(ScrollTrigger);

const ICONS = [Droplets, BookOpen, Feather, PenTool, Library];

function Label({ text }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4 justify-center">
      <div className="w-8 h-[2px] bg-glf-gold" />
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-glf-gold">
        {text}
      </span>
      <div className="w-8 h-[2px] bg-glf-gold" />
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    if (listRef.current && listRef.current.children.length > 0) {
      gsap.fromTo(
        listRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-glf-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-glf-burgundy/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      <GeometricBirds className="absolute left-[-5%] top-[10%] w-64 hidden lg:block opacity-30" />
      <GeometricBirds className="absolute right-[5%] bottom-[20%] w-48 hidden lg:block opacity-20 -scale-x-100" />
      
      {/* Hands holding books from bottom */}
      <img 
        src="/Images/decorations/hands-books-transparent.png" 
        alt="Hands holding books" 
        className="absolute bottom-0 right-[-2%] md:right-[5%] lg:right-[1%] w-64 md:w-80 lg:w-96 object-contain object-bottom opacity-80 pointer-events-none z-0 mix-blend-multiply"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label text="Help Center" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-glf-charcoal leading-tight mb-6">
            Frequently Asked <span className="text-glf-burgundy">Questions</span>
          </h2>
          <p className="text-glf-slate leading-relaxed text-lg">
            Find quick answers to common queries regarding visitor registration, schedules, venue details, and participation.
          </p>
        </div>

        {/* FAQ List */}
        <div ref={listRef} className="flex flex-col gap-5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            const IconComponent = ICONS[i % ICONS.length];
            return (
              <div
                className={`group relative bg-white rounded-xl overflow-hidden transition-all duration-500 ${isOpen ? 'shadow-[0_10px_40px_rgb(0,0,0,0.08)] scale-[1.01] z-10 border-glf-gold/30' : 'shadow-sm hover:shadow-md border-transparent hover:border-glf-gold/20'} border`}
                key={i}
              >
                {/* Subtle Background Icon */}
                <div className={`absolute right-0 top-1/2 -translate-y-1/2 text-glf-burgundy transition-all duration-700 pointer-events-none z-0 ${isOpen ? 'opacity-10 scale-125 -rotate-12' : 'opacity-5 scale-100 rotate-0'}`}>
                  <IconComponent className="w-48 h-48" />
                </div>

                {/* Question Row */}
                <button
                  className="w-full text-left px-8 py-6 flex justify-between items-center gap-6 focus:outline-none relative z-10 bg-white/50 backdrop-blur-sm"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`font-heading font-semibold text-lg md:text-xl leading-snug transition-colors duration-300 ${isOpen ? 'text-glf-burgundy' : 'text-glf-charcoal group-hover:text-glf-burgundy'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm ${isOpen ? 'bg-glf-burgundy text-white rotate-180' : 'bg-glf-cream text-glf-burgundy group-hover:bg-glf-gold/20'}`}>
                    <ChevronDown className="w-5 h-5" strokeWidth={2} />
                  </div>
                </button>

                {/* Answer Row */}
                <div
                  className={`transition-all duration-500 ease-in-out relative z-10 overflow-hidden ${
                    isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 pt-2">
                    <p className="text-glf-slate leading-relaxed text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
