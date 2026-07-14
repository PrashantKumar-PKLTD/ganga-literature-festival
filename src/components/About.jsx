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
    <section id="about" className="bg-cream pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="grid gap-8 lg:grid-cols-[50vw_minmax(0,1fr)] lg:items-start">
          <div
            className="relative min-h-[360px] overflow-hidden bg-cover bg-center md:min-h-[420px] lg:h-[660px] lg:min-h-0"
            style={{ backgroundImage: 'url("/bgimg.png")' }}
          >
            <img
              src="/heroimage.png"
              alt="Ganga riverfront at sunrise"
              className="sr-only"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-saffron">
                Patna, Bihar
              </p>
              <p className="mt-2 font-serif text-3xl leading-tight">
                The Ganga is our oldest library.
              </p>
            </div>
          </div>

          <div className="px-5 md:px-8 lg:max-w-[720px]">
            <div className="[&_h2]:text-3xl [&_h2]:leading-[0.95] md:[&_h2]:text-4xl lg:[&_h2]:text-5xl [&_p]:mt-3 [&_p]:text-base [&_p]:leading-6">
              <SectionHeading
                align="left"
                eyebrow="About The Festival"
                title="India's Civilisation Has Always Been A Conversation"
                intro="The Ganga Literature Festival was conceived from a simple conviction: Bihar, home to Pataliputra, Nalanda, Vikramashila, and Bodh Gaya, deserves a literature festival equal to its intellectual and spiritual heritage."
              />
            </div>

            <div className="mt-4 space-y-2 text-sm font-semibold leading-6 text-dark/75">
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

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="border border-gold/20 bg-cream/40 p-4 rounded-none shadow-sm transition duration-300 hover:border-saffron hover:bg-cream hover:-translate-y-0.5 hover:shadow-md">
                  <feature.icon className="mb-3 h-6 w-6 text-saffron" strokeWidth={1.7} />
                  <h3 className="font-serif text-lg font-bold leading-tight text-dark">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-dark/70">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 border-y border-dark/10 py-4 text-center">
              {[
                ["25+", "Sessions"],
                ["40+", "Speakers"],
                ["2", "Festival Days"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-serif text-3xl font-light text-saffron">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-dark/60">{label}</div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
