import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SPEAKERS from "../data/speakers";

const YEARS = ["2026"];

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpeakers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return SPEAKERS;
    return SPEAKERS.filter(
      (speaker) =>
        speaker.name.toLowerCase().includes(query) ||
        (speaker.role && speaker.role.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <main className="pt-[78px] md:pt-[82px] bg-cream paper-texture">
      <section
        className="relative min-h-[500px] overflow-hidden bg-cover bg-center text-white md:min-h-[560px]"
        style={{ backgroundImage: 'url("/gangaimg1.png")' }}
      >
        <div className="absolute inset-0 bg-dark/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,96,10,0.18),rgba(28,18,8,0.85))]" />
        <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center justify-center px-5 text-center md:min-h-[560px] md:px-8">
          <div className="relative px-8 py-16">
            <div className="absolute inset-0 border-[8px] border-saffron opacity-85 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
            <div className="relative">
              <p className="font-serif text-3xl font-light uppercase leading-none text-white md:text-4xl">
                Ganga Literature Festival
              </p>
              <h1 className="mt-4 font-serif text-5xl md:text-7xl font-light uppercase tracking-tight text-white">
                Speakers
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-cream [clip-path:polygon(0_60%,4%_40%,8%_62%,13%_42%,21%_62%,31%_38%,40%_58%,50%_40%,60%_62%,70%_38%,82%_58%,92%_40%,100%_60%,100%_100%,0_100%)]" />
      </section>

      <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between border-b border-gold/25 pb-8">
            <h2 className="font-serif text-4xl font-light uppercase text-dark md:text-5xl">
              Meet the Speakers
            </h2>
            <div className="flex w-full overflow-hidden border border-gold/30 bg-cream md:max-w-sm rounded-none focus-within:border-saffron focus-within:ring-1 focus-within:ring-saffron transition">
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="h-14 min-w-0 flex-1 px-5 text-sm outline-none bg-transparent text-dark"
                placeholder="Search by author name"
              />
              <button className="flex h-14 w-16 items-center justify-center bg-saffron text-cream transition duration-300 hover:bg-dark" aria-label="Search speakers">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {filteredSpeakers.length > 0 ? (
            <div className="mt-16 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredSpeakers.map((speaker) => (
                <article key={speaker.name} className="group bg-cream p-3 border-double border-4 border-gold/25 shadow-sm hover:border-saffron hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-none flex flex-col">
                  <div className="border border-gold/15 p-2 h-full flex flex-col justify-between">
                    <div>
                      <div className="overflow-hidden aspect-[4/4.5] border border-gold/10">
                        <img
                          src={speaker.img}
                          alt={speaker.name}
                          className="h-full w-full object-cover grayscale opacity-90 transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-3">
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-saffron">{speaker.role}</p>
                        <h3 className="mt-1 font-serif text-[16px] font-light leading-tight text-dark sm:text-lg group-hover:text-saffron transition-colors duration-300">{speaker.name}</h3>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-[11px] leading-relaxed text-dark/65 font-light">{speaker.topic}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-16 text-center py-10 bg-cream border border-gold/20 rounded-none shadow-sm">
              <p className="text-lg font-bold text-dark/60">No speakers found matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-sm font-bold text-saffron underline hover:text-dark transition"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
