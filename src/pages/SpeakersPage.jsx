import { useMemo, useState } from "react";
import { Search, X, BookOpen, UserCheck, Sparkles } from "lucide-react";
import SPEAKERS from "../data/speakers";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

const CATEGORIES = ["All", "History", "Shastras & Philosophy", "Public Discourse", "Cinema & Media"];

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const filteredSpeakers = useMemo(() => {
    return SPEAKERS.filter((speaker) => {
      const matchesSearch =
        speaker.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        speaker.role.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        speaker.topic.toLowerCase().includes(searchQuery.trim().toLowerCase());

      if (selectedCategory === "All") return matchesSearch;
      if (selectedCategory === "History") {
        return matchesSearch && (speaker.role.includes("Historian") || speaker.topic.includes("history"));
      }
      if (selectedCategory === "Shastras & Philosophy") {
        return matchesSearch && (speaker.role.includes("Scholar") || speaker.topic.includes("Sanskrit") || speaker.topic.includes("knowledge"));
      }
      if (selectedCategory === "Cinema & Media") {
        return matchesSearch && (speaker.role.includes("Filmmaker") || speaker.role.includes("Journalist") || speaker.role.includes("Podcaster"));
      }
      return matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Page Hero Header */}
      <PageHero
        eyebrow="Authors & Thinkers"
        title="Festival"
        italicTitle="Speakers"
        intro="Discover the historians, biographers, scholars, filmmakers, and public intellectuals bringing books, ideas, and debates to life at GLF 2026."
        badge="Patna • 11 & 12 November 2026"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Controls Bar: Search & Category Filters */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-gold/30 pb-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-saffron text-cream border border-saffron shadow-sm"
                      : "bg-white text-dark border border-gold/30 hover:border-gold hover:text-saffron"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex w-full md:max-w-md items-center border border-gold/40 bg-white focus-within:border-saffron focus-within:ring-1 focus-within:ring-saffron transition-all">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 flex-1 px-4 text-xs font-sans outline-none text-dark bg-transparent placeholder:text-dark/40"
                placeholder="Search speaker by name, topic, or discipline..."
              />
              <div className="flex h-12 w-12 items-center justify-center bg-saffron text-white">
                <Search className="h-4 w-4" />
              </div>
            </div>
          </div>

          <MadhubaniDivider variant="compact" />

          {/* Speakers Editorial Grid */}
          {filteredSpeakers.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredSpeakers.map((speaker) => (
                <div
                  key={speaker.name}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="group relative cursor-pointer border border-gold/30 bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:border-saffron hover:shadow-xl"
                >
                  {/* Photo frame with corner double lines */}
                  <div className="relative aspect-[4/4.8] overflow-hidden bg-parchment border border-gold/20">
                    <img
                      src={speaker.img}
                      alt={speaker.name}
                      className="h-full w-full object-cover object-center grayscale contrast-105 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-dark/80 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-gold backdrop-blur-sm border border-gold/20">
                      <Sparkles className="h-2.5 w-2.5 text-saffron" /> Profile
                    </span>
                  </div>

                  {/* Speaker Details */}
                  <div className="mt-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron block leading-tight">
                        {speaker.role}
                      </span>
                      <h3 className="mt-1 font-serif text-2xl font-bold leading-tight text-dark group-hover:text-deep-saffron transition-colors">
                        {speaker.name}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-dark/70 line-clamp-2 font-sans">
                      {speaker.topic}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center py-16 bg-white border border-gold/30 p-8">
              <p className="text-base font-bold text-dark/60 font-sans">
                No speakers found matching "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 border border-saffron bg-saffron px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Speaker Detail Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl border-2 border-gold bg-cream p-6 sm:p-8 shadow-2xl text-dark">
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-gold/40 text-dark hover:bg-saffron hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-6 sm:grid-cols-[180px_1fr] items-start">
              <div className="overflow-hidden border-2 border-gold/40 aspect-[4/5] bg-dark">
                <img
                  src={selectedSpeaker.img}
                  alt={selectedSpeaker.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                  {selectedSpeaker.role}
                </span>
                <h3 className="mt-1 font-serif text-3xl sm:text-4xl font-bold leading-none text-dark">
                  {selectedSpeaker.name}
                </h3>

                <div className="mt-4 border-l-2 border-saffron pl-4 py-1 bg-parchment/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-deep-saffron">
                    Festival Session Focus
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-dark/80 italic font-serif">
                    "{selectedSpeaker.topic}"
                  </p>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-dark/75 font-sans">
                  {selectedSpeaker.name} is a featured speaker at the Ganga Literature Festival 2026 in Patna, participating in keynote addresses, panel discussions, and book interaction sessions.
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href="/programme"
                    className="border border-saffron bg-saffron px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-gold hover:border-gold hover:text-dark transition"
                  >
                    View Schedule
                  </a>
                  <button
                    onClick={() => setSelectedSpeaker(null)}
                    className="border border-dark/30 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-dark hover:bg-dark hover:text-white transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
