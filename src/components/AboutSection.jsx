import React from 'react';
import { Compass, Sparkles, Users, Award, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 sm:py-32 bg-mesh-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 30% more whitespace */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-hidden">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5">
            About The Summit
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mt-5 tracking-tight leading-tight">
            Ganga Literature Festival 2026
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-5 rounded-full" />
          <p className="text-gray-300 mt-6 font-sans leading-relaxed text-sm sm:text-base md:text-lg">
            A prestigious cultural node designed to revive the rich intellectual, artistic, and literary heritage of the historic Ganga basin. We convene the sharpest minds to dialogue, inspire, and shape future ideas.
          </p>
        </div>

        {/* Vision, Mission, Purpose Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-20">
          {[
            {
              icon: <Compass className="w-7 h-7 text-secondary" />,
              title: 'Our Vision',
              desc: 'To establish Bihar as a premium international landmark for cultural discussions and intellectual exchange, creating a bridge between classical history and futuristic innovation.',
            },
            {
              icon: <Sparkles className="w-7 h-7 text-secondary" />,
              title: 'Our Mission',
              desc: 'To cultivate a highly accessible platform where authors, poets, research scholars, and students collaborate to promote vernacular languages and literature.',
            },
            {
              icon: <Award className="w-7 h-7 text-secondary" />,
              title: 'Core Values',
              desc: 'Promoting inclusion, safeguarding ancient literature, celebrating oral narratives, and encouraging high-integrity critical thinking in modern generations.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-[#172033]/85 border border-white/5 shadow-2xl hover:border-secondary/30 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-start group reveal-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-secondary rounded-b-3xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Core Value Proposition & Interaction Area */}
        <div className="mt-16 bg-[#172033]/85 rounded-3xl border border-white/5 shadow-2xl overflow-hidden reveal-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Callout Image or Styling side */}
            <div className="lg:col-span-5 bg-[#0A4D8C]/20 relative min-h-[300px] lg:min-h-full flex flex-col justify-between p-10 md:p-12 text-white border-r border-white/5">
              <div className="absolute inset-0 opacity-10 bg-radial-gradient from-white to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Cultural Heritage
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold font-display mt-3 leading-snug">
                  Reviving the Legacy of Nalanda & Pataliputra
                </h3>
              </div>
              
              <div className="relative z-10 pt-12">
                <p className="text-xs sm:text-sm text-gray-200 italic leading-relaxed font-sans font-medium">
                  "Literature is the mirror of society and Ganga is the lifeline of our cultural soul. At this festival, they flow as one."
                </p>
                <div className="w-8 h-1 bg-secondary mt-4 rounded-full" />
              </div>
            </div>

            {/* Content Details side */}
            <div className="lg:col-span-7 p-10 md:p-12 flex flex-col justify-center bg-[#172033]/40">
              <h3 className="text-2xl font-bold font-display text-white mb-8">
                Why Should You Participate?
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary font-bold">
                    <Users className="w-5.5 h-5.5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-display">Networking and Collaboration</h4>
                    <p className="text-gray-300 text-sm mt-1.5 leading-relaxed font-sans">
                      Interact one-on-one with best-selling global authors, national poets, distinguished bureaucrats, and corporate heads during coffee sessions and networking hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary font-bold">
                    <BookOpen className="w-5.5 h-5.5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-display">Elite Learning & Book Exhibitions</h4>
                    <p className="text-gray-300 text-sm mt-1.5 leading-relaxed font-sans">
                      Participate in practical, insightful workshops on creative writing, publishing procedures, translation dynamics, and historical preservation in modern digital media.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
