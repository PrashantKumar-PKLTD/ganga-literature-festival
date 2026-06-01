import React from 'react';
import { Award, BookOpen, Compass } from 'lucide-react';

const EDITIONS = [
  {
    year: '2023',
    theme: 'Flow of Narratives',
    milestone: 'Inaugural Session Launch',
    stats: [
      { label: 'Speakers', val: '15+' },
      { label: 'Attendees', val: '1,200+' },
    ],
    desc: 'The birth of Ganga Lit Fest. Held as a boutique local gathering at Gyan Bhawan, laying the groundwork for a regional cultural revival.',
    icon: <Compass className="w-5 h-5 text-secondary" />,
  },
  {
    year: '2024',
    theme: 'Sanskriti & Swara',
    milestone: 'State Culture Alliance',
    stats: [
      { label: 'Speakers', val: '30+' },
      { label: 'Attendees', val: '3,000+' },
    ],
    desc: 'Established our core alliance with the Department of Art, Culture & Youth. Introduced panel workshops and book releases.',
    icon: <BookOpen className="w-5 h-5 text-secondary" />,
  },
  {
    year: '2025',
    theme: 'Globalizing Vernaculars',
    milestone: 'International Delegations',
    stats: [
      { label: 'Speakers', val: '45+' },
      { label: 'Attendees', val: '4,500+' },
    ],
    desc: 'Our first international crossover. Hosted translators from major European libraries and launched digital preservation initiatives.',
    icon: <Award className="w-5 h-5 text-secondary" />,
  },
];

export default function PastEditions() {
  return (
    <section className="py-28 sm:py-32 bg-mesh-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 30% more whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-hidden">
          <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
            Festival Trajectory
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mt-5 tracking-tight leading-tight">
            Our Journey & Impact
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-5 rounded-full" />
          <p className="text-gray-300 mt-6 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
            Review the exponential growth of the Ganga Literature Festival. See how a boutique cultural forum scaled into a national landmark of intellectual exchange.
          </p>
        </div>

        {/* Storytelling Timeline Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch relative">
          
          {EDITIONS.map((edition, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-[#172033]/85 border border-white/5 shadow-2xl hover:border-secondary/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group reveal-hidden"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              
              {/* Gold Top Year Badge */}
              <div className="flex justify-between items-start">
                <div className="text-3xl font-extrabold font-display text-white/5 group-hover:text-white/10 transition-colors duration-300">
                  {edition.year}
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {edition.icon}
                </div>
              </div>

              {/* Title & Milestones */}
              <div className="mt-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary bg-secondary/15 px-2.5 py-1 rounded">
                  {edition.milestone}
                </span>
                <h3 className="text-lg md:text-xl font-bold font-display text-white mt-3 group-hover:text-secondary transition-colors">
                  Theme: "{edition.theme}"
                </h3>
                <p className="text-gray-300 text-sm mt-3 leading-relaxed font-sans">
                  {edition.desc}
                </p>
              </div>

              {/* Milestones Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5 bg-white/5 p-4 rounded-2xl">
                {edition.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex flex-col">
                    <span className="text-xl font-extrabold text-secondary font-display">
                      {stat.val}
                    </span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Dynamic bottom indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-secondary rounded-b-3xl transition-colors duration-300" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
