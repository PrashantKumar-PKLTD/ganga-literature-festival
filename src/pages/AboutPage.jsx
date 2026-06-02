import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Festival Desk",
    role: "Curatorial Team",
    image: "/logo.png",
  },
  {
    name: "Ganga Literature",
    role: "Festival Producer",
    image: "/gangaimg2.png",
  },
  {
    name: "Patna Chapter",
    role: "Host City Team",
    image: "/gangaimg4.png",
  },
];

const values = [
  "Open access to meaningful conversations",
  "Respect for language, memory, and public thought",
  "A platform for writers, readers, students, and artists",
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
              A literary gathering on the river's edge.
            </h2>
          </div>

          <div className="space-y-6 text-base font-semibold leading-8 text-black/75">
            <p>
              Ganga Literature Festival brings together writers, readers, artists,
              publishers, students, and cultural communities for a refined celebration
              of books, language, memory, and contemporary culture.
            </p>
            <p>
              Rooted in Patna and inspired by the Ganga, the festival creates a public
              stage for poetry, history, civilisational thought, translation, music,
              publishing, performance, and debate.
            </p>
            <p>
              Each edition is built as an open meeting ground where young voices meet
              mentors, readers meet writers, and regional traditions connect with
              national and global conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f1] px-5 py-20 text-center md:px-8 md:py-28">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
          Produced By
        </p>
        <img src="/logo.png" alt="Ganga Literature Festival" className="mx-auto mt-6 h-24 w-auto object-contain" />
        <h2 className="mt-6 font-serif text-5xl font-black leading-none text-black">
          Ganga Literature Festival
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-base font-semibold leading-8 text-black/75">
          The festival team works across curation, hospitality, production, schools,
          media, partnerships, and volunteer coordination to create a thoughtful
          literary experience for Patna and the Ganga region.
        </p>
      </section>

      <section className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-8 md:py-32">
        <div className="absolute inset-x-0 top-0 h-24 bg-[#f8f6f1] [clip-path:polygon(0_0,100%_0,100%_35%,90%_55%,78%_35%,65%_60%,52%_38%,40%_58%,26%_35%,14%_60%,0_35%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
              What Drives Us
            </p>
            <h2 className="mt-5 font-serif text-5xl font-black leading-[0.92] text-white md:text-6xl">
              Ideas that travel beyond the page.
            </h2>
            <p className="mt-8 text-base font-semibold leading-8 text-white/72">
              GLF is built around inclusive access, careful programming, and the
              belief that literature can bridge divides, sharpen thought, and keep
              cultural memory alive.
            </p>
          </div>

          <div className="grid gap-5">
            {values.map((value, index) => (
              <div key={value} className="flex items-center gap-5 border border-[#b58b32]/45 bg-white/5 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#b58b32] text-sm font-black text-black">
                  {index + 1}
                </span>
                <p className="text-base font-bold text-white">{value}</p>
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
          Team
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-5xl font-black leading-[0.95] text-black md:text-6xl">
          Festival Directors and Producers
        </h2>
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="group">
              <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-md border border-[#b58b32]/45 bg-[#f8f6f1] shadow-xl shadow-black/10">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-serif text-3xl font-black leading-tight text-black">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#b58b32]">
                {person.role}
              </p>
            </article>
          ))}
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
