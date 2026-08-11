import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageHero({ eyebrow, title, italicTitle = "", intro, badge = "Ganga Literature Festival 2026", bgImage = "/heroimage.png" }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-eyebrow", {
        opacity: 0,
        y: 15,
        duration: 1,
        ease: "power3.out"
      });
      gsap.from(".page-hero-title", {
        opacity: 0,
        y: 25,
        duration: 1.2,
        delay: 0.2,
        ease: "power4.out"
      });
      if (intro) {
        gsap.from(".page-hero-intro", {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.4,
          ease: "power3.out"
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [intro]);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-dark text-white pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background Image & Lighting Overlays */}
      <img
        src={bgImage}
        alt=""
        className="hero-bg-animate absolute inset-0 h-full w-full object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,96,10,0.15),transparent_70%)]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">
        {/* Sanskrit quote / Badge */}
        <div className="page-hero-eyebrow mb-4 inline-flex items-center gap-2 border border-gold/30 bg-dark/70 px-4 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rotate-45 bg-saffron" />
          <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            {badge}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-saffron" />
        </div>

        {eyebrow && (
          <p className="page-hero-eyebrow font-serif text-xs font-bold uppercase tracking-[0.3em] text-saffron mb-3">
            {eyebrow}
          </p>
        )}

        <h1 className="page-hero-title font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase leading-[0.98] tracking-tight text-white mb-6">
          {title} {italicTitle && <span className="font-serif italic text-gold normal-case">{italicTitle}</span>}
        </h1>

        {intro && (
          <p className="page-hero-intro mx-auto max-w-2xl text-sm leading-relaxed text-cream/80 sm:text-base md:text-lg md:leading-8 font-sans">
            {intro}
          </p>
        )}
      </div>

      {/* Skyline Transition Graphic */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-16 md:h-24 pointer-events-none opacity-90">
        <div className="festival-skyline absolute bottom-0 left-1/2 h-full w-[1200px] max-w-none -translate-x-1/2 md:w-[1500px]" />
      </div>
    </section>
  );
}
