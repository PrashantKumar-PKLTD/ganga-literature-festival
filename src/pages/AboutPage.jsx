import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "BIHAAN",
    role: "Presenting Organisation",
    text: "BIHAAN, meaning dawn or new beginning, is a movement dedicated to connecting India's vision for growth with global partnerships, community, culture, causes, and events. It believes that a rising Bharat requires not just economic growth, but civilisational confidence.",
    image: "/logo.png",
  },
  {
    name: "BluOne Ink",
    role: "Publishing Partner",
    text: "BluOne Ink is a purposeful publishing house bringing readers books across national security, civilisational history, political philosophy, Dharmic knowledge systems, fiction, and biography.",
    image: "/gangaimg2.png",
  },
  {
    name: "SPIC MACAY",
    role: "Cultural Partner",
    text: "SPIC MACAY has spent nearly five decades taking India's classical arts heritage to schools, colleges, and communities. Its evenings at GLF bring the festival's cultural spirit alive.",
    image: "/gangaimg4.png",
  },
];

const values = [
  {
    title: "Reclaiming Narrative",
    text: "India's history has been filtered through colonial and ideological lenses for too long. GLF creates space for authentic, evidence-based, civilisation-affirming scholarship.",
  },
  {
    title: "Accelerating Viksit Bharat",
    text: "Every great nation is built first in the minds of its people. GLF creates an intellectual platform for the national dream of a fully developed India by 2047.",
  },
  {
    title: "Bihar Reborn",
    text: "GLF places Patna back at the centre of India's intellectual map, honouring Bihar's heritage and its potential as a driver of India's next chapter.",
  },
];

const heritage = [
  ["Pataliputra", "Capital of empires and a seat of political imagination."],
  ["Nalanda", "A global university tradition rooted in inquiry and learning."],
  ["Vikramashila", "A reminder that Bihar shaped the knowledge routes of Asia."],
  ["Bodh Gaya", "The land where enlightenment became a civilisational force."],
];

function ArchTitle() {
  return (
    <div className="relative mx-auto w-full max-w-2xl px-7 py-16 text-center md:px-12 md:py-20">
      <div className="absolute inset-0 border-[8px] border-[#b58b32] opacity-90 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
      <div className="relative">
        <p className="font-serif text-3xl font-black uppercase leading-none text-white md:text-4xl">
          About
        </p>
        <h1 className="mt-4 font-serif text-5xl font-black uppercase leading-[0.88] text-white md:text-7xl">
          Ganga Literature Festival
        </h1>
      </div>
    </div>
  );
}

function Skyline({ color = "#f8f6f1" }) {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-32"
      style={{ backgroundColor: color }}
    >
      <div
        className="absolute inset-x-0 -top-1 h-28"
        style={{
          backgroundColor: color,
          clipPath:
            "polygon(0 62%,4% 42%,8% 64%,13% 43%,21% 63%,31% 38%,40% 58%,50% 40%,60% 62%,70% 38%,82% 58%,92% 40%,100% 60%,100% 100%,0 100%)",
        }}
      />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="pt-[78px] md:pt-[82px]">
      <section className="relative min-h-[650px] overflow-hidden bg-black text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-110"
          src="/gangavid.mp4"
          poster="/gangaimg1.png"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[650px] max-w-6xl items-center justify-center px-5 md:px-8">
          <ArchTitle />
        </div>
        <Skyline />
      </section>

      <section className="relative overflow-hidden bg-[#f8f6f1] px-5 pb-20 pt-24 md:px-8 md:pb-28 md:pt-32">
        <span className="absolute left-10 top-24 text-7xl font-black leading-none text-[#b58b32]/25">
          *
        </span>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
              Festival Story
            </p>
            <h2 className="mt-5 font-serif text-5xl font-black leading-[0.95] text-black md:text-6xl">
              India's civilisation has always been a conversation. GLF is the next chapter.
            </h2>
          </div>

          <div className="space-y-6 text-base font-semibold leading-8 text-black/75">
            <p>
              The Ganga Literature Festival was conceived from a simple conviction:
              Bihar, home to Pataliputra, Nalanda, Vikramashila, and Bodh Gaya,
              deserves a literature festival commensurate with its extraordinary
              intellectual and spiritual heritage.
            </p>
            <p>
              Bihar is not the periphery of India's story. It is its centre. The
              Arthashastra was written here. The first pan-Indian empire was
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
            <blockquote className="border-l-4 border-[#b58b32] bg-white px-6 py-5 font-serif text-2xl font-black leading-tight text-black shadow-sm">
              "The Ganga is not merely a river. She is our oldest library. We do not
              merely hold a festival on her banks. We open her pages."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-4">
            {heritage.map(([title, text]) => (
              <article key={title} className="border border-black/10 bg-[#f8f6f1] p-6">
                <h3 className="font-serif text-3xl font-black leading-tight text-black">
                  {title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-black/65">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] px-5 py-20 text-center md:px-8 md:py-28">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
          Built By
        </p>
        <img src="/logo.png" alt="Ganga Literature Festival" className="mx-auto mt-6 h-24 w-auto object-contain" />
        <h2 className="mt-6 font-serif text-5xl font-black leading-none text-black">
          BIHAAN, BluOne Ink, and SPIC MACAY
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-base font-semibold leading-8 text-black/75">
          Conceived and presented by BIHAAN, in partnership with BluOne Ink and in
          collaboration with SPIC MACAY, the Ganga Literature Festival is Bihar's
          gift to the nation's intellectual life.
        </p>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name} className="bg-white p-7 text-left shadow-sm">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-20 w-full object-contain object-left"
              />
              <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#b58b32]">
                {partner.role}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-black text-black">
                {partner.name}
              </h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-black/65">
                {partner.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-8 md:py-32">
        <div className="absolute inset-x-0 top-0 h-24 bg-[#f8f6f1] [clip-path:polygon(0_0,100%_0,100%_35%,90%_55%,78%_35%,65%_60%,52%_38%,40%_58%,26%_35%,14%_60%,0_35%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
              What Drives Us
            </p>
            <h2 className="mt-5 font-serif text-5xl font-black leading-[0.92] text-white md:text-6xl">
              What GLF stands for.
            </h2>
            <p className="mt-8 text-base font-semibold leading-8 text-white/72">
              The festival stands at the intersection of three urgent imperatives:
              reclaiming India's narrative, accelerating the Viksit Bharat
              conversation, and placing Bihar back at the centre of India's
              intellectual map.
            </p>
          </div>

          <div className="grid gap-5">
            {values.map((value, index) => (
              <div key={value.title} className="border border-[#b58b32]/45 bg-white/5 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#b58b32] text-sm font-black text-black">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-serif text-3xl font-black text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/65">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 text-center md:px-8 md:py-28">
        <span className="absolute right-12 top-16 text-6xl font-black leading-none text-[#b58b32]/25">
          *
        </span>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
          Festival Work
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-5xl font-black leading-[0.95] text-black md:text-6xl">
          A public platform for books, ideas, and living heritage.
        </h2>
        <div className="mx-auto mt-10 max-w-4xl space-y-6 text-left text-base font-semibold leading-8 text-black/70">
          <p>
            GLF brings authors, thinkers, historians, scientists, entrepreneurs,
            artists, students, publishers, and readers into the same civic space.
            Its sessions ask the questions that matter most: who are we, where do
            we come from, and where can we go together?
          </p>
          <p>
            The programme combines keynotes, panels, masterclasses, book launches,
            publishing conversations, networking moments, and classical arts
            evenings. It is designed not as a passive event, but as a purposeful
            meeting ground for civilisational confidence and national imagination.
          </p>
        </div>
        <a
          href="/about/contact-us"
          className="mx-auto mt-14 inline-flex items-center gap-3 bg-black px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#b58b32] hover:text-black"
        >
          Contact Team
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </main>
  );
}
