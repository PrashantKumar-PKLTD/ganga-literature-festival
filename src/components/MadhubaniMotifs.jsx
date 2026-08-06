import React from "react";

/**
 * Authentic Madhubani (Mithila) Decorative Motifs
 * Lightweight SVG illustrations designed for low-opacity watermarks, borders, and corner accents.
 */

// 1. Madhubani Horizontal Border Band (Repeatable Pattern)
export function MadhubaniBorderBand({ className = "", color = "currentColor" }) {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        className="w-full h-3 sm:h-4 text-[#b58b32]/40"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="madhubani-border-pattern" x="0" y="0" width="120" height="24" patternUnits="userSpaceOnUse">
          {/* Top & Bottom Double Border Lines */}
          <line x1="0" y1="2" x2="120" y2="2" stroke={color} strokeWidth="1" />
          <line x1="0" y1="4" x2="120" y2="4" stroke={color} strokeWidth="0.5" />
          <line x1="0" y1="20" x2="120" y2="20" stroke={color} strokeWidth="0.5" />
          <line x1="0" y1="22" x2="120" y2="22" stroke={color} strokeWidth="1" />

          {/* Triangles with Mithila Katni Hatching */}
          <path d="M0 20 L15 4 L30 20 Z" fill="none" stroke={color} strokeWidth="0.75" />
          <path d="M5 20 L15 9 L25 20" stroke={color} strokeWidth="0.4" strokeDasharray="1 1" />
          
          <path d="M30 4 L45 20 L60 4 Z" fill="none" stroke={color} strokeWidth="0.75" />
          <path d="M35 4 L45 15 L55 4" stroke={color} strokeWidth="0.4" strokeDasharray="1 1" />

          {/* Lotus Flower Motif in Center */}
          <g transform="translate(60, 12)">
            <path d="M0 -7 C-4 -3 -5 3 0 7 C5 3 4 -3 0 -7 Z" fill="none" stroke={color} strokeWidth="0.8" />
            <path d="M-6 -2 C-8 2 -4 6 0 7 C-4 3 -5 -1 -6 -2 Z" fill="none" stroke={color} strokeWidth="0.6" />
            <path d="M6 -2 C8 2 4 6 0 7 C4 3 5 -1 6 -2 Z" fill="none" stroke={color} strokeWidth="0.6" />
            <circle cx="0" cy="0" r="1.5" fill={color} />
          </g>

          {/* Geometric Diamonds & Fish Scale Lines */}
          <path d="M60 20 L75 4 L90 20 Z" fill="none" stroke={color} strokeWidth="0.75" />
          <path d="M65 20 L75 9 L85 20" stroke={color} strokeWidth="0.4" strokeDasharray="1 1" />

          <path d="M90 4 L105 20 L120 4 Z" fill="none" stroke={color} strokeWidth="0.75" />
          <path d="M95 4 L105 15 L115 4" stroke={color} strokeWidth="0.4" strokeDasharray="1 1" />

          {/* Mithila Dots (Bindi Accents) */}
          <circle cx="15" cy="17" r="1" fill={color} />
          <circle cx="45" cy="7" r="1" fill={color} />
          <circle cx="75" cy="17" r="1" fill={color} />
          <circle cx="105" cy="7" r="1" fill={color} />
        </pattern>
        <rect width="1200" height="24" fill="url(#madhubani-border-pattern)" />
      </svg>
    </div>
  );
}

// 2. Madhubani Section Divider (Central Lotus with Geometric Wings)
export function MadhubaniDivider({ className = "", color = "#C8962B" }) {
  return (
    <div className={`flex items-center justify-center my-6 py-2 select-none pointer-events-none ${className}`} aria-hidden="true">
      <div className="flex items-center gap-3 max-w-xl w-full px-4">
        {/* Left Wing Line & Geometric Motif */}
        <div className="flex-1 flex items-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C84B31]/30 to-[#C8962B]/60" />
          <svg className="w-6 h-6 shrink-0 text-[#C8962B]/70" viewBox="0 0 24 24" fill="none">
            <path d="M2 12 L12 4 L22 12 L12 20 Z" stroke={color} strokeWidth="1" fill="none" />
            <path d="M6 12 L12 7 L18 12 L12 17 Z" stroke={color} strokeWidth="0.5" strokeDasharray="1 1" fill="none" />
            <circle cx="12" cy="12" r="2" fill={color} />
          </svg>
          <div className="h-px w-8 bg-[#C8962B]/60" />
        </div>

        {/* Central Lotus Motif (Kamal) */}
        <svg className="w-10 h-10 shrink-0 text-[#C84B31]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Inner Lotus Petals */}
          <path d="M24 6 C18 14 18 28 24 38 C30 28 30 14 24 6 Z" fill="none" stroke={color} strokeWidth="1.2" />
          <path d="M24 12 C20 18 20 26 24 32 C28 26 28 18 24 12 Z" stroke={color} strokeWidth="0.6" strokeDasharray="1 1" />
          
          {/* Side Petals Left */}
          <path d="M24 38 C14 34 8 22 12 14 C16 22 22 32 24 38 Z" stroke={color} strokeWidth="1" fill="none" />
          <path d="M24 38 C8 28 4 14 10 8 C14 16 20 30 24 38 Z" stroke="#6B1724" strokeWidth="0.8" fill="none" />
          
          {/* Side Petals Right */}
          <path d="M24 38 C34 34 40 22 36 14 C32 22 26 32 24 38 Z" stroke={color} strokeWidth="1" fill="none" />
          <path d="M24 38 C40 28 44 14 38 8 C34 16 28 30 24 38 Z" stroke="#6B1724" strokeWidth="0.8" fill="none" />

          {/* Lotus Stem Base & Fish Eye Accent */}
          <circle cx="24" cy="38" r="3" fill="#C84B31" stroke={color} strokeWidth="0.8" />
          <circle cx="24" cy="38" r="1" fill="#FAF6EE" />

          {/* Decorative Bindi Dots */}
          <circle cx="24" cy="4" r="1.5" fill="#6B1724" />
          <circle cx="6" cy="18" r="1" fill={color} />
          <circle cx="42" cy="18" r="1" fill={color} />
        </svg>

        {/* Right Wing Line & Geometric Motif */}
        <div className="flex-1 flex items-center">
          <div className="h-px w-8 bg-[#C8962B]/60" />
          <svg className="w-6 h-6 shrink-0 text-[#C8962B]/70" viewBox="0 0 24 24" fill="none">
            <path d="M2 12 L12 4 L22 12 L12 20 Z" stroke={color} strokeWidth="1" fill="none" />
            <path d="M6 12 L12 7 L18 12 L12 17 Z" stroke={color} strokeWidth="0.5" strokeDasharray="1 1" fill="none" />
            <circle cx="12" cy="12" r="2" fill={color} />
          </svg>
          <div className="h-px w-full bg-gradient-to-l from-transparent via-[#C84B31]/30 to-[#C8962B]/60" />
        </div>
      </div>
    </div>
  );
}

// 3. Madhubani Corner Accent Frame
export function MadhubaniCorner({ position = "top-left", className = "", color = "#C8962B" }) {
  const rotationClass =
    position === "top-right"
      ? "rotate-90"
      : position === "bottom-right"
      ? "rotate-180"
      : position === "bottom-left"
      ? "-rotate-90"
      : "";

  return (
    <div
      className={`absolute pointer-events-none select-none z-10 w-12 h-12 sm:w-16 sm:h-16 ${rotationClass} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full text-[#C8962B]/60" xmlns="http://www.w3.org/2000/svg">
        {/* Double Outer L-Border */}
        <path d="M 2 62 L 2 2 L 62 2" stroke={color} strokeWidth="1.5" />
        <path d="M 6 62 L 6 6 L 62 6" stroke={color} strokeWidth="0.75" strokeDasharray="2 1" />
        
        {/* Corner Lotus Petal Arc */}
        <path d="M 6 28 C 16 28 28 16 28 6" stroke={color} strokeWidth="1" fill="none" />
        <path d="M 6 22 C 12 22 22 12 22 6" stroke="#C84B31" strokeWidth="0.75" fill="none" />
        
        {/* Hatching Lines inside Corner Arc */}
        <line x1="6" y1="12" x2="12" y2="6" stroke={color} strokeWidth="0.5" />
        <line x1="6" y1="18" x2="18" y2="6" stroke={color} strokeWidth="0.5" />
        <line x1="12" y1="24" x2="24" y2="12" stroke={color} strokeWidth="0.5" />

        {/* Traditional Bindi Dot at Apex */}
        <circle cx="4" cy="4" r="2.5" fill="#6B1724" />
        <circle cx="14" cy="14" r="1.5" fill={color} />
      </svg>
    </div>
  );
}

// 4. Madhubani Medallion Watermark (Mithila Sun, Lotus, Peacock & Fish emblem)
export function MadhubaniWatermark({ className = "", opacity = 0.05, size = 480 }) {
  return (
    <div
      className={`pointer-events-none select-none flex items-center justify-center ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#C8962B]"
      >
        {/* Outer Concentric Mithila Border */}
        <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="2" />
        <circle cx="250" cy="250" r="234" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="250" cy="250" r="222" stroke="currentColor" strokeWidth="1.5" />

        {/* Radiating Mithila Sun Rays & Petals */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={i} transform={`rotate(${angle} 250 250)`}>
              <path d="M250 14 L254 28 L250 42 L246 28 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <line x1="250" y1="28" x2="250" y2="38" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="250" cy="18" r="1" fill="currentColor" />
            </g>
          );
        })}

        {/* Second Ring: Triangular Katni Hatching */}
        <circle cx="250" cy="250" r="190" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="172" stroke="currentColor" strokeWidth="1" />

        {/* 12 Outer Peacocks / Fish Motifs */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <g key={i} transform={`rotate(${angle} 250 250)`}>
              <g transform="translate(250, 68)">
                {/* Fish (Matsya) Motif */}
                <path d="M-12 0 C-6 -8 6 -8 12 0 C6 8 -6 8 -12 0 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M-12 0 L-18 -5 L-15 0 L-18 5 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="-5" cy="-2" r="1" fill="currentColor" />
                <line x1="0" y1="-5" x2="0" y2="5" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
              </g>
            </g>
          );
        })}

        {/* Third Inner Ring */}
        <circle cx="250" cy="250" r="140" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="132" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Central 8-Petal Grand Lotus (Mithila Kamal) */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <g key={i} transform={`rotate(${angle} 250 250)`}>
              <path d="M250 250 C230 170 270 170 250 250 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M250 250 C240 185 260 185 250 250 Z" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 1" />
              <circle cx="250" cy="180" r="2.5" fill="currentColor" />
            </g>
          );
        })}

        {/* Center Sun Core */}
        <circle cx="250" cy="250" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="40" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 1" />
        <circle cx="250" cy="250" r="28" stroke="currentColor" strokeWidth="1" />
        
        {/* Mithila Bindi Center */}
        <circle cx="250" cy="250" r="12" fill="currentColor" />
        <circle cx="250" cy="250" r="5" fill="#FAF6EE" />
      </svg>
    </div>
  );
}
