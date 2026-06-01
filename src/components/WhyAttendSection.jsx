import React from 'react';
import { Network, Share2, Award, TrendingUp, Lightbulb, Handshake } from 'lucide-react';

const ATTEND_ITEMS = [
  {
    icon: <Network className="w-5.5 h-5.5 text-secondary group-hover:text-primary transition-colors duration-300" />,
    title: 'Networking Opportunities',
    desc: 'Connect with a vast cohort of distinguished litterateurs, book enthusiasts, scholars, and media delegates to expand your circle.',
  },
  {
    icon: <Share2 className="w-5.5 h-5.5 text-secondary group-hover:text-primary transition-colors duration-300" />,
    title: 'Knowledge Sharing',
    desc: 'Engage in open intellectual dialogues, panel discussions, and debate sessions debating contemporary literary themes.',
  },
  {
    icon: <Award className="w-5.5 h-5.5 text-secondary group-hover:text-primary transition-colors duration-300" />,
    title: 'Industry Experts',
    desc: 'Listen directly to keynote speeches from Pulitzer-winning authors, renowned historians, and creative directors of publishing houses.',
  },
  {
    icon: <TrendingUp className="w-5.5 h-5.5 text-secondary group-hover:text-primary transition-colors duration-300" />,
    title: 'Career & Craft Growth',
    desc: 'Attend dedicated pitch-sessions, workshop series on publishing options, and receive immediate professional feedback.',
  },
  {
    icon: <Lightbulb className="w-5.5 h-5.5 text-secondary group-hover:text-primary transition-colors duration-300" />,
    title: 'Innovative Formats',
    desc: 'Experience dynamic presentations combining poetry recitation, Indian classical music, theatrical acts, and storytelling tools.',
  },
  {
    icon: <Handshake className="w-5.5 h-5.5 text-secondary group-hover:text-primary transition-colors duration-300" />,
    title: 'Active Collaboration',
    desc: 'Form strong collaborative ventures for research, translation of local literature, or publishing joint anthologies.',
  },
];

export default function WhyAttendSection() {
  return (
    <section className="py-28 sm:py-32 bg-mesh-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 30% more whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-hidden">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
            Why Attend
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mt-5 tracking-tight leading-tight">
            An Enriching Experience Awaits You
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-5 rounded-full" />
          <p className="text-gray-300 mt-6 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
            This festival is not just a series of talks. It is a carefully curated cultural ecosystem designed to spark dialogues, trigger creative growth, and provide a networking node.
          </p>
        </div>

        {/* Attend Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {ATTEND_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-[#172033]/85 border border-white/5 shadow-2xl hover:border-secondary/30 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-start reveal-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Dynamic glowing hover outline */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Animated Icon Ring */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 shadow-inner flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:border-transparent transition-all duration-300">
                {item.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-lg md:text-xl font-bold font-display text-white mb-3 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                {item.desc}
              </p>

              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-secondary rounded-t-3xl transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
