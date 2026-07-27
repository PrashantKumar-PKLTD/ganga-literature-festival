import { BookOpen, Mic2, Music, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  { icon: BookOpen, title: "Civilisational Thought", desc: "Recovering and celebrating India's intellectual inheritance, from the Vedas to Chanakya's Arthashastra to the Bihar renaissance." },
  { icon: Mic2, title: "National Discourse", desc: "Rigorous conversations on the challenges and possibilities before Bharat in its march toward Viksit Bharat @2047." },
  { icon: Music, title: "Living Heritage", desc: "World-class classical music and arts evenings curated with SPIC MACAY to nourish the soul as much as the mind." },
  { icon: Users, title: "Bihar Reborn", desc: "Placing Patna back at the centre of India's intellectual map and honouring Bihar's civilisational promise." },
];

export default function About() {
  return (
    <section id="about" className="bg-cream pb-16 pt-16 md:pb-24 md:pt-20 paper-texture">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT COLUMN: OVERLAPPING IMAGES */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden double-gold-border luxury-card-shadow p-3 bg-cream/10 z-10">
              <img
                src="/bgimg.png"
                alt="Ancient library manuscript"
                className="aspect-[4/3] w-full object-cover grayscale hover:grayscale-0 transition duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 bg-dark/85 border border-gold/20 p-4 text-white max-w-xs">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">Patna, Bihar</p>
                <p className="mt-1 font-serif text-xl font-light leading-tight text-gold">The Ganga is our oldest library.</p>
              </div>
            </div>
            
            {/* Geometric overlapping accent */}
            <div className="absolute -bottom-8 -right-6 hidden lg:block w-1/2 border-double border-4 border-gold/30 luxury-card-shadow bg-cream p-2 z-20">
              <img
                src="/heroimage.png"
                alt="Ganga riverfront at sunrise"
                className="aspect-square w-full object-cover grayscale hover:grayscale-0 transition duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: EDITORIAL TYPOGRAPHY */}
          <div className="lg:col-span-6 lg:pl-10">
            <div className="[&_h2]:text-4xl [&_h2]:leading-[1] md:[&_h2]:text-5xl lg:[&_h2]:text-6xl [&_p]:mt-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:font-light">
              <SectionHeading
                align="left"
                eyebrow="About The Festival"
                title="India's Civilisation Has Always Been A Conversation"
                intro="The Ganga Literature Festival was conceived from a simple conviction: Bihar, home to Pataliputra, Nalanda, Vikramashila, and Bodh Gaya, deserves a literature festival equal to its intellectual and spiritual heritage."
              />
            </div>

            <div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-dark/75">
              <p>
                Bihar is not the periphery of India's story. It is its centre. The
                Arthashastra was written here, the first pan-Indian empire was
                administered from here, the Buddha attained enlightenment here, and
                Guru Gobind Singh was born here.
              </p>
              <p>
                GLF brings authors, thinkers, historians, scientists, entrepreneurs,
                artists, students, publishers, and readers to Patna for a
                civilisational conversation on books, culture, and India's future.
              </p>
            </div>

            {/* High Contrast Columns */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {FEATURES.map((feature, idx) => (
                <div key={feature.title} className="flex gap-3 items-start border-l border-gold/30 pl-4 py-1">
                  <span className="font-serif text-3xl font-light text-saffron leading-none">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-medium leading-tight text-dark uppercase tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-dark/65 font-light">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-10 grid grid-cols-3 border-t border-gold/20 pt-6 text-center">
              {[
                ["25+", "Sessions"],
                ["40+", "Speakers"],
                ["2", "Festival Days"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-serif text-3xl font-light text-saffron">{value}</div>
                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-dark/50">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Luxury separating motifs */}
      <div className="luxury-separator mt-16 md:mt-24" />
    </section>
  );
}
