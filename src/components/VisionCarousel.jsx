import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TriangleDivider, GeometricBirds } from "./Decorations";

const BASE_SLIDES = [
  {
    title: "Cultural Preservation",
    text: "The Ganga Literature Festival serves as a custodian of our ancient heritage, ensuring that the wisdom passed down through generations continues to echo along the sacred ghats of Varanasi for centuries to come.",
    author: "GLF FOUNDATION",
  },
  {
    title: "A Platform for Voices",
    text: "We believe in the transformative power of storytelling. GLF is part-celebration, part-intellectual discourse, bringing together thought leaders, poets, and writers to challenge perspectives and unite minds.",
    author: "OUR MISSION",
  },
  {
    title: "Global Confluence",
    text: "Bridging the traditional and the contemporary, the festival acts as a global stage where international literary currents meet the eternal flow of the Ganges, fostering universal brotherhood through art.",
    author: "OUR VISION",
  },
];

// Duplicate slides to ensure Swiper loops seamlessly on initialization
const VISION_SLIDES = [...BASE_SLIDES, ...BASE_SLIDES];

const ScallopedCard = ({ title, text, author }) => {
  return (
    <div className="relative w-full max-w-[600px] aspect-[4/3] mx-auto flex items-center justify-center p-8 sm:p-12 md:p-16">
      {/* Custom Scalloped Frame SVG */}
      <svg 
        viewBox="0 0 800 600" 
        className="absolute inset-0 w-full h-full drop-shadow-[0_20px_40px_rgba(91,58,142,0.4)] pointer-events-none"
        preserveAspectRatio="none"
      >
        {/* Outer Deep Purple Scalloped Base */}
        <path 
          d="
            M 100,100
            Q 200,80 300,100
            Q 400,50 500,100
            Q 600,80 700,100
            Q 720,200 700,300
            Q 750,400 700,500
            Q 600,520 500,500
            Q 400,550 300,500
            Q 200,520 100,500
            Q 80,400 100,300
            Q 50,200 100,100
            Z
          "
          fill="#5B3A8E"
        />
        {/* Inner Dotted Yellow Border */}
        <path 
          d="
            M 115,115
            Q 200,100 300,115
            Q 400,70 500,115
            Q 600,100 685,115
            Q 700,200 685,300
            Q 730,400 685,485
            Q 600,500 500,485
            Q 400,530 300,485
            Q 200,500 115,485
            Q 100,400 115,300
            Q 70,200 115,115
            Z
          "
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        {/* Decorative Watermark Clovers */}
        <path d="M 180,180 Q 190,160 200,180 Q 220,190 200,200 Q 190,220 180,200 Q 160,190 180,180 Z" fill="rgba(255,255,255,0.06)" />
        <path d="M 620,420 Q 630,400 640,420 Q 660,430 640,440 Q 630,460 620,440 Q 600,430 620,420 Z" fill="rgba(255,255,255,0.06)" />
        <path d="M 620,180 Q 630,160 640,180 Q 660,190 640,200 Q 630,220 620,200 Q 600,190 620,180 Z" fill="rgba(255,255,255,0.06)" />
        <path d="M 180,420 Q 190,400 200,420 Q 220,430 200,440 Q 190,460 180,440 Q 160,430 180,420 Z" fill="rgba(255,255,255,0.06)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-[85%]">
        {title && <h4 className="text-white font-heading text-xl md:text-2xl mb-3 opacity-90">{title}</h4>}
        <p className="text-white font-body text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-medium">
          {text}
        </p>
        <div className="text-[#FFD700] font-bold tracking-widest text-sm uppercase">
          {author}
        </div>
      </div>
    </div>
  );
};

export default function VisionCarousel() {
  return (
    <section className="relative bg-[#F9F5F0] py-24 overflow-hidden">
      
      {/* Background Decorations */}
      <GeometricBirds className="absolute top-10 left-10 w-48 opacity-30" />
      <GeometricBirds className="absolute bottom-4 right-4 md:right-10 w-64 opacity-20 -scale-x-100" />
      
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#23356e] uppercase tracking-wide">
          Our Vision
        </h2>
        <div className="flex justify-center items-center gap-4 mt-6">
          <div className="w-16 h-px bg-[#23356e]" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#23356e" strokeWidth="2" className="rotate-45">
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
          <div className="w-16 h-px bg-[#23356e]" />
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4 relative z-20 vision-swiper-container group">
        
        {/* Navigation Buttons */}
        <button className="vision-prev absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5B3A8E] flex items-center justify-center text-white hover:bg-[#4a2e73] transition-colors shadow-xl cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="vision-next absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5B3A8E] flex items-center justify-center text-white hover:bg-[#4a2e73] transition-colors shadow-xl cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            prevEl: '.vision-prev',
            nextEl: '.vision-next',
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full !pb-16"
        >
          {VISION_SLIDES.map((slide, index) => (
            <SwiperSlide key={index} className="!w-[85%] md:!w-[60%] lg:!w-[50%] transition-opacity duration-300">
              {({ isActive }) => (
                <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                  <ScallopedCard {...slide} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Triangle Divider at Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-1/3 opacity-80 pointer-events-none origin-bottom-left scale-75 md:scale-100">
        <TriangleDivider />
      </div>

      <style>{`
        .vision-swiper-container .swiper-pagination-bullet {
          background: #5B3A8E;
          width: 10px;
          height: 10px;
          opacity: 0.3;
        }
        .vision-swiper-container .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 5px;
          background: #FFD700;
        }
      `}</style>
    </section>
  );
}
