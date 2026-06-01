import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

/**
 * Reusable Speaker Card with interactive hover overlays and social handles.
 */
export default function SpeakerCard({ image, name, designation, organization, social, tags = [] }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between h-full reveal-hidden">
      
      {/* Speaker Portrait Wrapper */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-hover:filter group-hover:brightness-90"
          loading="lazy"
        />
        
        {/* Subtle bottom dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

        {/* View Profile Action Tag */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-20">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Display Primary Tag inside image */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-secondary text-primary text-[10px] font-extrabold tracking-wider uppercase">
              {tags[0]}
            </span>
          </div>
        )}

        {/* Hover quick social panel */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <div className="flex gap-2">
            {social.twitter && (
              <span
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Custom Twitter / X SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>
            )}
            {social.linkedin && (
              <span
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Custom LinkedIn SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
            )}
          </div>
          
          <span className="text-[10px] font-bold text-gray-200 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded">
            Click to View Profile
          </span>
        </div>
      </div>

      {/* Details Box */}
      <div className="p-5 flex-grow flex flex-col justify-between bg-white relative z-10">
        <div>
          <h3 className="text-lg font-bold font-display text-gray-900 leading-tight group-hover:text-primary transition-colors duration-200">
            {name}
          </h3>
          
          <p className="text-xs font-bold text-primary mt-2 leading-snug">
            {designation}
          </p>
          
          <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">
            {organization}
          </p>
        </div>

        {/* Double tags chips at bottom */}
        {tags.length > 1 && (
          <div className="flex gap-1.5 mt-4 pt-4 border-t border-gray-50">
            {tags.slice(1, 3).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-[9px] font-extrabold uppercase tracking-wide"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Gold bottom reveal line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-secondary transition-colors duration-300" />
    </div>
  );
}
