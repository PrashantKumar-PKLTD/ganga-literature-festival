import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GeometricBirds } from "./Decorations";

gsap.registerPlugin(ScrollTrigger);

// You can replace these with your actual imported image assets
const PARTNERS = [
  { id: 1, name: "Bihar Student Developer Club", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=256&q=80" },
  { id: 2, name: "Karo Startup", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=256&q=80" },
  { id: 3, name: "Landmark Cars", logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=256&q=80" },
  { id: 4, name: "Radiance Media Group", logo: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=256&q=80" },
  { id: 5, name: "UCO Bank", logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=256&q=80" },
  { id: 6, name: "CDAC", logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=256&q=80" },
  { id: 7, name: "EdGate", logo: "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?auto=format&fit=crop&w=256&q=80" },
];

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

export default function SponsorCarousel() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    // Fade in header
    gsap.fromTo(
      headerRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );

    // Fade in carousel container
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="w-full bg-white py-24 flex flex-col items-center justify-center relative overflow-hidden border-b border-gray-100">
      
      <GeometricBirds className="absolute left-[15%] top-16 w-32 hidden md:block opacity-30" />
      <GeometricBirds className="absolute right-[5%] bottom-[10%] w-24 hidden lg:block opacity-20 -scale-x-100" />
      
      <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 px-6 relative z-10">
        <Label text="Supported By" />
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-glf-charcoal leading-tight mb-4">
          Our Partners & <span className="text-glf-burgundy">Sponsors</span>
        </h2>
        <p className="text-glf-slate leading-relaxed text-lg">
          We are incredibly grateful to our partners who make the Ganga Literature Festival a reality.
        </p>
      </div>

      {/* Container with a gradient mask. 
        This fades out the left and right edges so logos disappear smoothly.
      */}
      <div ref={carouselRef} className="w-full max-w-7xl overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
        
        {/* The flex container holding the moving tracks. 
          The group class allows us to pause both tracks on hover.
        */}
        <div className="flex w-max space-x-6 group py-4">
          
          {/* First Track */}
          <div className="flex space-x-6 animate-marquee group-hover:[animation-play-state:paused]">
            {PARTNERS.map((partner) => (
              <div 
                key={partner.id} 
                className="w-64 h-32 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-6 shrink-0 border border-gray-100 transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:border-glf-gold/30 cursor-pointer group/card"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain opacity-100 transition-all duration-500"
                  onError={(e) => {
                    // Fallback just in case the image path is broken during development
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-glf-slate font-heading font-bold text-center text-xl leading-tight opacity-70 group-hover/card:opacity-100 transition-opacity group-hover/card:text-glf-burgundy">${partner.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second Track (Duplicate for seamless infinite looping) */}
          <div className="flex space-x-6 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {PARTNERS.map((partner) => (
              <div 
                key={`${partner.id}-duplicate`} 
                className="w-64 h-32 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center p-6 shrink-0 border border-gray-100 transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:border-glf-gold/30 cursor-pointer group/card"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain opacity-100 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-glf-slate font-heading font-bold text-center text-xl leading-tight opacity-70 group-hover/card:opacity-100 transition-opacity group-hover/card:text-glf-burgundy">${partner.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
