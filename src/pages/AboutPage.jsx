import { ArrowRight, BookOpen, Compass, Feather, Award } from "lucide-react";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import DecorativeFrame from "../components/DecorativeFrame";
import SectionHeading from "../components/SectionHeading";

const partners = [
  {
    name: "BIHAAN",
    role: "Presenting Organisation",
    text: "BIHAAN, meaning dawn or new beginning, is a movement dedicated to connecting India's vision for growth with global partnerships, community, culture, causes, and events. It believes that a rising Bharat requires not just economic growth, but civilisational confidence.",
    image: "/bihaan-logo.png",
  },
  {
    name: "BluOne Ink",
    role: "Publishing Partner",
    text: "BluOne Ink is a purposeful publishing house bringing readers books across national security, civilisational history, political philosophy, Dharmic knowledge systems, fiction, and biography.",
    image: "/bluone-logo.webp",
  },
  {
    name: "SPIC MACAY",
    role: "Cultural Partner",
    text: "SPIC MACAY has spent nearly five decades taking India's classical arts heritage to schools, colleges, and communities. Its evenings at GLF bring the festival's cultural spirit alive.",
    image: "/spicmacay-logo.svg",
  },
];

const values = [
  {
    title: "Reclaiming Narrative",
    text: "India's history has been filtered through colonial and ideological lenses for too long. GLF creates space for authentic, evidence-based, civilisation-affirming scholarship.",
    icon: Feather,
  },
  {
    title: "Accelerating Viksit Bharat",
    text: "Every great nation is built first in the minds of its people. GLF creates an intellectual platform for the national dream of a fully developed India by 2047.",
    icon: Compass,
  },
  {
    title: "Bihar Reborn",
    text: "GLF places Patna back at the centre of India's intellectual map, honouring Bihar's heritage and its potential as a driver of India's next chapter.",
    icon: Award,
  },
];

const heritage = [
  { title: "Pataliputra", subtitle: "Imperial Capital", text: "Capital of ancient empires and the seat of political imagination & Arthashastra." },
  { title: "Nalanda", subtitle: "Global Seat of Learning", text: "A global university tradition rooted in inquiry, debate, and universal wisdom." },
  { title: "Vikramashila", subtitle: "Buddhist Knowledge Hub", text: "A reminder that Bihar shaped the maritime and Asian knowledge routes." },
  { title: "Bodh Gaya", subtitle: "Spiritual Awakening", text: "The sacred land where enlightenment became a civilisational beacon for humanity." },
];

export default function AboutPage() {
  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="Civilisational Legacy"
        title="About Ganga"
        italicTitle="Literature Festival"
        intro=" Bihar is not the periphery of India's story — it is its beating heart. GLF brings literature, public ideas, and living arts back to the riverbanks of Pataliputra."
        badge="Patna, Bihar • 11 & 12 November 2026"
      />

      {/* Festival Story Section */}
      <section className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="The Genesis"
            title="India's civilisation has always been a conversation"
            intro="GLF is the next chapter in Bihar's millennia-old tradition of public inquiry."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 text-base leading-8 text-dark/80 font-sans">
              <p>
                The Ganga Literature Festival was conceived from a simple conviction:
                Bihar, home to Pataliputra, Nalanda, Vikramashila, and Bodh Gaya,
                deserves a literature festival commensurate with its extraordinary
                intellectual and spiritual heritage.
              </p>
              <p>
                The Arthashastra was written here. The first pan-Indian empire was
                administered from here. The Buddha attained enlightenment here. Guru
                Gobind Singh was born here. In the great tapestry of Indian
                civilisation, Bihar's thread runs gold.
              </p>
              <p>
                And yet, for too long, Bihar's voice in India's national intellectual
                conversation has been muted. The Ganga Literature Festival changes
                that. It brings the ideas, the authors, the debates, and the art to
                Patna, and invites the nation to listen.
              </p>
            </div>

            <DecorativeFrame dark={false} className="shadow-lg">
              <blockquote className="font-serif text-2xl md:text-3xl font-light italic leading-snug text-dark">
                "The Ganga is not merely a river. She is our oldest library. We do not
                merely hold a festival on her banks. We open her pages."
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-saffron" />
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-saffron">
                  GLF Curatorial Vision
                </span>
              </div>
            </DecorativeFrame>
          </div>
        </div>
      </section>

      <MadhubaniDivider variant="floral" />

      {/* Heritage Pillar Grid */}
      <section className="px-5 py-16 md:px-8 md:py-24 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Sacred Heritage"
            title="Four Pillars of Pataliputra Wisdom"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heritage.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden border border-gold/30 bg-cream p-7 transition-all duration-300 hover:border-saffron hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-gold/15 to-transparent pointer-events-none" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                  {item.subtitle}
                </span>
                <h3 className="mt-2 font-serif text-3xl font-bold text-dark group-hover:text-deep-saffron transition-colors">
                  {item.title}
                </h3>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-dark/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MadhubaniDivider variant="compact" />

      {/* Organisers & Partners */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="Organising Coalition"
            title="Built By BIHAAN, BluOne Ink & SPIC MACAY"
            intro="Conceived and presented by BIHAAN, in partnership with BluOne Ink and in collaboration with SPIC MACAY, the Ganga Literature Festival is Bihar's gift to the nation's intellectual life."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3 text-left">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col justify-between border border-gold/30 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gold"
              >
                <div>
                  <div className="flex h-20 items-center mb-6">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-20 max-w-[200px] object-contain object-left"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                    {partner.role}
                  </span>
                  <h3 className="mt-1 font-serif text-3xl font-bold text-dark">
                    {partner.name}
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-dark/70">
                    {partner.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Imperatives (Dark Section) */}
      <section className="relative overflow-hidden bg-dark px-5 py-24 text-white md:px-8 md:py-32">
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What Drives Us"
            title="What GLF Stands For"
            intro="The festival stands at the intersection of three urgent imperatives."
            inverted={true}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  className="border border-gold/30 bg-dark/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-dark"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex h-10 w-10 items-center justify-center border border-gold/40 bg-saffron/20 font-serif text-lg font-bold text-gold">
                      0{idx + 1}
                    </span>
                    <IconComp className="h-6 w-6 text-gold opacity-80" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-cream/75">
                    {val.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-20 text-center md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-saffron">
            Be Part of the Story
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-light uppercase leading-tight text-dark">
            A Public Platform for Books, Ideas, & Living Heritage
          </h2>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-dark/75">
            GLF brings authors, thinkers, historians, artists, students, and readers into the same civic space. Join us on 11 & 12 November 2026 in Patna.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/festival/register-to-attend"
              className="border border-saffron bg-saffron px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:bg-gold hover:border-gold hover:text-dark"
            >
              Register to Attend
            </a>
            <a
              href="/about/contact-us"
              className="inline-flex items-center gap-2 border border-dark/30 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-dark transition-all duration-300 hover:bg-dark hover:text-cream"
            >
              Contact Team
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
