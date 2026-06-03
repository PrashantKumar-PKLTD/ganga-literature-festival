import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

/* ─── Slide Data ────────────────────────────────────────────── */
const SLIDES = [
  { image: "/Images/hero/Hero-1.webp" },
  { image: "/Images/hero/Hero-2.webp" },
];

/* ─── Inject global hero styles ─────────────────────────────── */
if (typeof document !== "undefined" && !document.getElementById("hero-glf-styles")) {
  const style = document.createElement("style");
  style.id = "hero-glf-styles";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

    .font-cormorant { font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif; }

    @keyframes heroSlowZoom {
      0%   { transform: scale(1.08); }
      100% { transform: scale(1.14); }
    }
    @keyframes floatUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes floatIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes gentlePulse {
      0%, 100% { opacity: 0.6; }
      50%      { opacity: 1; }
    }
    @keyframes drawLine {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    @keyframes scrollBounce {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(8px); }
    }
    @keyframes progressFill {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    @keyframes shimmerBtn {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes divaFlicker {
      0%, 100% { opacity: 0.8; filter: brightness(1); }
      25%      { opacity: 1; filter: brightness(1.2); }
      50%      { opacity: 0.7; filter: brightness(0.9); }
      75%      { opacity: 0.95; filter: brightness(1.1); }
    }

    .hero-glf .swiper-slide-active .hero-bg-img {
      animation: heroSlowZoom 10s ease-out forwards;
    }
    .hero-glf .swiper-slide-active .anim-float-up {
      animation: floatUp 1s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
    .hero-glf .swiper-slide-active .anim-d1 { animation-delay: 0.15s; }
    .hero-glf .swiper-slide-active .anim-d2 { animation-delay: 0.35s; }
    .hero-glf .swiper-slide-active .anim-d3 { animation-delay: 0.55s; }
    .hero-glf .swiper-slide-active .anim-d4 { animation-delay: 0.75s; }
    .hero-glf .swiper-slide-active .anim-d5 { animation-delay: 0.95s; }

    .diya-glow {
      animation: divaFlicker 3s ease-in-out infinite;
    }
    .line-draw {
      animation: drawLine 1.2s ease-out 0.6s both;
      transform-origin: left center;
    }
  `;
  document.head.appendChild(style);
}

/* ─── SVG Decorative Elements ───────────────────────────────── */

/* Ganga waves — bottom of hero */
function GangaWaves() {
  return (
    <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C120,100 240,40 360,60 C480,80 600,100 720,80 C840,60 960,20 1080,40 C1200,60 1320,100 1440,80 L1440,120 L0,120 Z"
          fill="rgba(255,248,240,0.08)"
        />
        <path
          d="M0,90 C160,110 320,60 480,75 C640,90 800,110 960,90 C1120,70 1280,50 1440,70 L1440,120 L0,120 Z"
          fill="rgba(201,168,76,0.12)"
        />
        <path
          d="M0,100 C200,115 400,85 600,95 C800,105 1000,115 1200,100 C1300,95 1400,90 1440,92 L1440,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}


/* Mandala corner ornaments */
function CornerOrnaments() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none hidden md:block">
      {/* Top-left ornament */}
      <svg className="absolute top-24 left-6 w-16 h-16 opacity-20" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="38" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="28" stroke="#C9A84C" strokeWidth="0.5" />
        <path d="M50 2 L50 98 M2 50 L98 50" stroke="#C9A84C" strokeWidth="0.3" />
        <path d="M15 15 L85 85 M85 15 L15 85" stroke="#C9A84C" strokeWidth="0.3" />
      </svg>
      {/* Top-right ornament */}
      <svg className="absolute top-24 right-6 w-16 h-16 opacity-20" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="38" stroke="#C9A84C" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="28" stroke="#C9A84C" strokeWidth="0.5" />
        <path d="M50 2 L50 98 M2 50 L98 50" stroke="#C9A84C" strokeWidth="0.3" />
        <path d="M15 15 L85 85 M85 15 L15 85" stroke="#C9A84C" strokeWidth="0.3" />
      </svg>
    </div>
  );
}

/* ─── Slide Component ───────────────────────────────────────── */
function HeroSlide({ slide, index }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={slide.image}
        alt="Festival Background"
        className="hero-bg-img absolute inset-0 w-full h-[110%] object-cover object-center will-change-transform"
        fetchpriority={index === 0 ? "high" : "auto"}
        loading={index === 0 ? "eager" : "lazy"}
      />
    </div>
  );
}

/* ─── Custom Progress Indicators ────────────────────────────── */
function SlideProgress({ activeIndex, total, duration }) {
  return (
    <div className="absolute bottom-[5.5rem] sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="relative rounded-full overflow-hidden transition-all duration-500 cursor-pointer"
          style={{
            width: i === activeIndex ? 52 : 24,
            height: 4,
          }}
        >
          <div className="absolute inset-0 bg-white/25 rounded-full" />
          {i === activeIndex && (
            <div
              className="absolute inset-0 rounded-full origin-left"
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E0C068)",
                animation: `progressFill ${duration}ms linear forwards`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Scroll Down Indicator ─────────────────────────────────── */
function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1">
      <span className="text-white/30 text-[9px] font-body font-semibold uppercase tracking-[0.25em]">
        Explore
      </span>
      <div
        className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
      >
        <div
          className="w-1 h-2 bg-[#C9A84C] rounded-full"
          style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
}

/* ─── Main Hero Component ───────────────────────────────────── */
export default function Hero() {
  const swiperRef = useRef(null);
  const activeIndexRef = useRef(0);
  const AUTOPLAY_DELAY = 7000;

  const [, setTick] = useState(0);

  return (
    <section id="home" className="relative">
      <div className="hero-glf">
        <Swiper
          modules={[Autoplay]}
          effect="slide"
          speed={1200}
          cssMode={false}
          autoplay={{
            delay: AUTOPLAY_DELAY,
            disableOnInteraction: false,
          }}
          loop={true}
          allowTouchMove={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            activeIndexRef.current = swiper.realIndex;
            setTick((t) => t + 1);
          }}
          className="w-full h-screen"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index}>
              <HeroSlide slide={slide} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Decorative Elements */}
        <CornerOrnaments />
        <GangaWaves />

        {/* Progress Bar */}
        <SlideProgress
          activeIndex={activeIndexRef.current}
          total={SLIDES.length}
          duration={AUTOPLAY_DELAY}
        />

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
}