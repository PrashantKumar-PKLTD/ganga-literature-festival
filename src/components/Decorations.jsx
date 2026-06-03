import React from 'react';

export function TriangleDivider() {
  return (
    <div className="w-full h-16 sm:h-24 relative -mb-1 z-10 overflow-hidden bg-transparent">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="absolute bottom-0 w-full h-full drop-shadow-md"
      >
        {/* Back row (Pink) */}
        <polygon points="0,120 100,20 200,120" fill="#e9848c" stroke="#23356e" strokeWidth="1" opacity="0.8" />
        <polygon points="200,120 300,30 400,120" fill="#e9848c" stroke="#23356e" strokeWidth="1" opacity="0.8" />
        <polygon points="400,120 500,20 600,120" fill="#e9848c" stroke="#23356e" strokeWidth="1" opacity="0.8" />
        <polygon points="600,120 700,30 800,120" fill="#e9848c" stroke="#23356e" strokeWidth="1" opacity="0.8" />
        <polygon points="800,120 900,20 1000,120" fill="#e9848c" stroke="#23356e" strokeWidth="1" opacity="0.8" />
        <polygon points="1000,120 1100,30 1200,120" fill="#e9848c" stroke="#23356e" strokeWidth="1" opacity="0.8" />
        
        {/* Middle row (Purple) */}
        <polygon points="100,120 200,50 300,120" fill="#91529e" stroke="#23356e" strokeWidth="1" opacity="0.9" />
        <polygon points="300,120 400,60 500,120" fill="#91529e" stroke="#23356e" strokeWidth="1" opacity="0.9" />
        <polygon points="500,120 600,50 700,120" fill="#91529e" stroke="#23356e" strokeWidth="1" opacity="0.9" />
        <polygon points="700,120 800,60 900,120" fill="#91529e" stroke="#23356e" strokeWidth="1" opacity="0.9" />
        <polygon points="900,120 1000,50 1100,120" fill="#91529e" stroke="#23356e" strokeWidth="1" opacity="0.9" />

        {/* Front row (Orange/Gold) */}
        <polygon points="50,120 150,80 250,120" fill="#f59e42" stroke="#23356e" strokeWidth="1" />
        <polygon points="250,120 350,90 450,120" fill="#f59e42" stroke="#23356e" strokeWidth="1" />
        <polygon points="450,120 550,80 650,120" fill="#f59e42" stroke="#23356e" strokeWidth="1" />
        <polygon points="650,120 750,90 850,120" fill="#f59e42" stroke="#23356e" strokeWidth="1" />
        <polygon points="850,120 950,80 1050,120" fill="#f59e42" stroke="#23356e" strokeWidth="1" />
        <polygon points="1050,120 1150,90 1250,120" fill="#f59e42" stroke="#23356e" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function GeometricLotus({ className = "" }) {
  return (
    <div className={`z-20 drop-shadow-2xl hover:scale-105 transition-transform duration-500 origin-center ${className}`}>
      <img 
        src="/Images/decorations/lotus-transparent.png" 
        alt="Lotus" 
        className="w-full h-full object-contain" 
      />
    </div>
  );
}

export function GangesDolphin({ className = "" }) {
  return (
    <div className={`z-20 drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500 opacity-90 ${className}`}>
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Water Waves */}
        <path d="M0 160 Q 50 130 100 160 T 200 160 T 300 160" stroke="#00b4a3" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M20 180 Q 70 150 120 180 T 220 180 T 300 180" stroke="#23356e" strokeWidth="3" strokeLinecap="round" fill="none" />
        
        {/* Dolphin Body (Geometric) */}
        <path d="M 250 140 C 250 80 180 40 120 60 C 60 80 30 130 50 150 C 70 170 120 150 180 130 C 210 120 240 130 250 140 Z" fill="#23356e" stroke="#f59e42" strokeWidth="2" />
        
        {/* Snout */}
        <path d="M 50 150 L 10 160 L 30 130 Z" fill="#f59e42" stroke="#23356e" strokeWidth="2" />
        
        {/* Dorsal Fin */}
        <path d="M 150 50 L 180 20 L 190 60 Z" fill="#e9848c" stroke="#23356e" strokeWidth="2" />
        
        {/* Pectoral Fin */}
        <path d="M 140 120 L 110 160 L 160 140 Z" fill="#00b4a3" stroke="#23356e" strokeWidth="2" />
        
        {/* Tail Fluke */}
        <path d="M 250 140 L 290 110 L 280 160 Z" fill="#91529e" stroke="#23356e" strokeWidth="2" />
        
        {/* Geometric Accents */}
        <circle cx="80" cy="120" r="4" fill="#ffc107" />
        <circle cx="100" cy="100" r="6" fill="#ffc107" />
        <circle cx="130" cy="90" r="8" fill="#ffc107" />
        <circle cx="170" cy="95" r="6" fill="#ffc107" />
        <circle cx="210" cy="110" r="4" fill="#ffc107" />
      </svg>
    </div>
  );
}

export function GeometricBirds({ className = "" }) {
  return (
    <div className={`z-10 opacity-70 pointer-events-none drop-shadow-lg ${className}`}>
      <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Bird 1 */}
        <path d="M 20 50 Q 30 20 50 40 Q 70 20 80 50 Q 50 35 20 50 Z" fill="#23356e" />
        {/* Bird 2 */}
        <path d="M 80 80 Q 88 56 104 72 Q 120 56 128 80 Q 104 68 80 80 Z" fill="#f59e42" />
        {/* Bird 3 */}
        <path d="M 130 40 Q 140 16 160 32 Q 180 16 190 40 Q 160 28 130 40 Z" fill="#00b4a3" />
      </svg>
    </div>
  );
}
