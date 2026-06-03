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
    <section id="about" className="bg-white pb-24 pt-0 md:pb-32">
      <div className="grid gap-12 lg:grid-cols-[50vw_minmax(0,1fr)] lg:items-stretch">
          <div
            className="relative min-h-[520px] overflow-hidden bg-cover bg-center lg:min-h-full"
            style={{ backgroundImage: 'url("/bgimg.png")' }}
          >
            <img
              src="/heroimage.png"
              alt="Ganga riverfront at sunrise"
              className="sr-only"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#b58b32]">
                Patna, Bihar
              </p>
              <p className="mt-2 font-serif text-3xl leading-tight">
                The Ganga is our oldest library.
              </p>
            </div>
          </div>

          <div className="px-5 md:px-8 lg:max-w-[720px] lg:py-4">
            <SectionHeading
              align="left"
              eyebrow="About The Festival"
              title="India's Civilisation Has Always Been A Conversation"
              intro="The Ganga Literature Festival was conceived from a simple conviction: Bihar, home to Pataliputra, Nalanda, Vikramashila, and Bodh Gaya, deserves a literature festival equal to its intellectual and spiritual heritage."
            />

            <div className="mt-8 space-y-4 text-sm font-semibold leading-7 text-black/70">
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

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="border border-black/10 bg-white p-6 shadow-sm transition hover:border-[#b58b32] hover:shadow-lg">
                  <feature.icon className="mb-5 h-7 w-7 text-[#b58b32]" strokeWidth={1.7} />
                  <h3 className="font-serif text-2xl font-semibold text-black">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 border-y border-black/10 py-6 text-center">
              {[
                ["25+", "Sessions"],
                ["40+", "Speakers"],
                ["2", "Festival Days"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-serif text-4xl font-semibold text-[#b58b32]">{value}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-black/60">{label}</div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
