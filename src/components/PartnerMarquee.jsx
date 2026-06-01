import React from 'react';

const PARTNERS = [
  { name: 'Govt. of Bihar', type: 'Art & Culture Dept.' },
  { name: 'IIT Patna', type: 'Knowledge Partner' },
  { name: 'Hindustan Times', type: 'Media Partner' },
  { name: 'Bihar Writers Guild', type: 'Community Partner' },
  { name: 'Maithili Academy', type: 'Language Partner' },
  { name: 'Patna University', type: 'Academic Partner' },
  { name: 'Bhojpuri Kala Kendra', type: 'Cultural Partner' },
  { name: 'The Times of India', type: 'Media Partner' },
];

export default function PartnerMarquee() {
  // Double the array for seamless infinite looping
  const loopPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 bg-[#031326] text-white border-y border-white/5 overflow-hidden relative">
      {/* Dynamic backdrop mesh highlight */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-secondary uppercase font-display">
          Supported by Esteemed Alliances
        </span>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="flex w-max relative overflow-hidden select-none select-none">
        
        {/* Double-row animated flex */}
        <div className="flex gap-6 animate-marquee py-2 whitespace-nowrap">
          {loopPartners.map((partner, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col items-center justify-center min-w-[200px] h-20 px-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/40 hover:bg-white/10 transition-all duration-300 shadow-md cursor-pointer group"
            >
              <span className="text-sm font-bold font-display text-gray-100 group-hover:text-secondary transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] text-gray-400 font-sans tracking-wide uppercase mt-1">
                {partner.type}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Fade Gradients at Edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#031326] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#031326] to-transparent pointer-events-none z-10" />
    </section>
  );
}
