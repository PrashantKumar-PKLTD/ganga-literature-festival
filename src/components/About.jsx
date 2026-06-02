import { BookOpen, Mic2, Music, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  { icon: BookOpen, title: "Author Conversations", desc: "Long-form conversations with novelists, poets, translators, journalists, and public thinkers." },
  { icon: Mic2, title: "Live Sessions", desc: "Keynotes, debates, readings, performances, and intimate workshops across curated stages." },
  { icon: Music, title: "Cultural Evenings", desc: "Music, storytelling, language, and regional arts woven into the festival experience." },
  { icon: Users, title: "Open Community", desc: "A welcoming gathering for readers, students, educators, publishers, and volunteers." },
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
                Where words flow like the Ganga.
              </p>
            </div>
          </div>

          <div className="px-5 md:px-8 lg:max-w-[720px] lg:py-4">
            <SectionHeading
              align="left"
              eyebrow="About The Festival"
              title="A Literary Gathering On The River's Edge"
              intro="Ganga Literature Festival brings together writers, readers, artists, publishers, and young voices for a refined celebration of books, language, memory, and contemporary culture."
            />

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
                ["60+", "Sessions"],
                ["120+", "Speakers"],
                ["5", "Festival Days"],
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
