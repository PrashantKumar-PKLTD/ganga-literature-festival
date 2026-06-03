import { ArrowRight } from "lucide-react";

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

const heroWords = [
  "Ganga",
  "Patna",
  "Pataliputra",
  "Nalanda",
  "Vikramashila",
  "Bodh Gaya",
  "Viksit Bharat",
  "Literature",
];

export default function AboutPage() {
  return (
    <main className="pt-[78px] md:pt-[82px]">
      <section className="relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 md:block"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(181,139,50,0.35) 0%, rgba(248,246,241,0.78) 36%, rgba(255,255,255,0) 72%)",
          }}
        />
        <div className="relative mx-auto grid min-h-[560px] max-w-[1500px] px-5 py-10 md:px-10 md:py-14 lg:grid-cols-[320px_1fr]">
          <div className="z-10 flex flex-col justify-between gap-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
                About The Festival
              </p>
              <h1 className="mt-5 font-serif text-5xl font-black uppercase leading-[0.86] text-black md:text-6xl">
                Ganga Literature Festival
              </h1>
            </div>
            <p className="max-w-sm text-base font-semibold leading-7 text-black/68">
              A civilisational literature festival in Patna, shaped by the Ganga,
              Bihar's knowledge heritage, and India's journey to Viksit Bharat.
            </p>
          </div>

          <div className="relative z-10 mt-10 hidden items-end md:flex lg:mt-0">
            <div className="grid w-full grid-cols-8 items-end gap-4 lg:gap-7">
              {heroWords.map((word, index) => (
                <div
                  key={word}
                  className="flex min-w-0 justify-center border-l border-black/10 pl-3"
                >
                  <div className="relative h-[420px] w-full overflow-visible">
                    <span className="absolute left-1 top-0 text-[11px] font-black text-[#b58b32]/70">
                      0{index + 1}
                    </span>
                    <span
                      className={`absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 origin-bottom whitespace-nowrap font-black leading-none tracking-[-0.03em] ${
                        index === 4
                          ? "text-white [-webkit-text-stroke:1px_#0b0b0b]"
                          : "text-black"
                      } text-[clamp(48px,6.2vw,92px)]`}
                      style={{ transformOrigin: "bottom center" }}
                    >
                      {word}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-3 md:hidden">
            {heroWords.map((word, index) => (
              <div
                key={word}
                className="flex items-center justify-between border border-[#b58b32]/35 bg-[#f8f6f1] px-4 py-3"
              >
                <span className="font-serif text-3xl font-black leading-none text-black">
                  {word}
                </span>
                <span className="text-xs font-black text-[#b58b32]">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
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
        <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center bg-white p-4 shadow-sm md:h-36 md:w-36">
          <img
            src="/logo.png"
            alt="Ganga Literature Festival"
            className="h-full w-full object-contain"
          />
        </div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
          Built By
        </p>
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
              <div className="flex h-24 items-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-24 max-w-[260px] object-contain object-left"
                />
              </div>
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
              <div key={value.title} className="border border-[#b58b32]/45 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#b58b32] text-sm font-black text-black">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-serif text-3xl font-black text-black">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-black/70">
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
