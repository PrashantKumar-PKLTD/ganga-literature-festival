import { useState, useMemo } from "react";
import { CalendarDays, Search, Newspaper, ExternalLink, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

const newsItems = [
  {
    title: "Ganga Literature Festival Announces Its 2026 Official Programme In Patna",
    date: "11 Feb 2026",
    category: "Press Release",
    excerpt: "The curatorial board of GLF has unveiled the 2-day literary schedule for Patna, featuring talks, panels, book launches, and evening cultural performances.",
  },
  {
    title: "Leading Historians, Authors, And Performers Join The GLF 2026 Lineup",
    date: "11 Feb 2026",
    category: "Announcements",
    excerpt: "Over 50 distinguished scholars, writers, biographers, and artists have confirmed their participation at the festival in Patna.",
  },
  {
    title: "Conversations On Language, Civilisational Memory, And Viksit Bharat Added To Schedule",
    date: "11 Feb 2026",
    category: "Programme Note",
    excerpt: "Special keynote sessions dedicated to Indic knowledge systems, Arthashastra, and Bihar's historical rebirth have been scheduled.",
  },
  {
    title: "Partner Hotels And 'Friend Of The Festival' Delegate Packages Released",
    date: "10 Feb 2026",
    category: "Visitor Advisory",
    excerpt: "Outstation visitors can now reserve official festival stays and hosted patron delegate passes through the festival desk.",
  },
  {
    title: "Student, Volunteer, And Media Accreditation Desk Opens For GLF 2026",
    date: "10 Feb 2026",
    category: "Accreditation",
    excerpt: "Registrations are officially open for university student volunteers, institutional delegations, and accredited media representatives.",
  },
  {
    title: "Ganga In Focus: River, Region, And Literary Heritage At The Heart Of GLF",
    date: "09 Feb 2026",
    category: "Cultural Essay",
    excerpt: "Exploring how the river Ganga serves as a metaphor for movement, language, and shared public memory.",
  },
];

const popularCoverage = [
  "Bihar's literary culture takes centre stage at Ganga Literature Festival",
  "How regional languages shape India's reading future",
  "With packed venues and provocative talks, GLF 2026 marks its arrival",
  "The quiet art of translation and the making of a literary ecosystem",
  "Which is the oldest language in the world? A conversation returns to Patna",
  "GLF concludes with debate, music, and conversations on freedom of expression",
];

export default function NewsPage() {
  const [query, setQuery] = useState("");

  const filteredNews = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return newsItems;
    return newsItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Hero Header */}
      <PageHero
        eyebrow="Media & Announcements"
        title="News &"
        italicTitle="Updates"
        intro="Official announcements, media releases, programme notes, visitor advisories, and press coverage of the Ganga Literature Festival."
        badge="GLF Media Desk"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Latest Coverage"
            title="Press Releases & Bulletin"
          />

          {/* Search Toolbar */}
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-md items-center border border-gold/40 bg-white">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-12 flex-1 px-4 text-xs font-sans outline-none text-dark bg-transparent placeholder:text-dark/40"
                placeholder="Search announcements or news..."
              />
              <div className="flex h-12 w-12 items-center justify-center bg-saffron text-white">
                <Search className="h-4 w-4" />
              </div>
            </div>
          </div>

          <MadhubaniDivider variant="compact" />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
            {/* News List */}
            <div className="space-y-6">
              {filteredNews.map((item) => (
                <article
                  key={item.title}
                  className="border border-gold/30 bg-white p-6 transition-all duration-300 hover:border-saffron hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold/20 pb-3">
                    <span className="bg-saffron/10 border border-saffron/30 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-saffron">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-dark/60 font-sans">
                      <CalendarDays className="h-3.5 w-3.5 text-saffron" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-dark hover:text-deep-saffron transition-colors cursor-pointer">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-dark/75 font-sans">
                    {item.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron hover:text-dark transition cursor-pointer">
                    Read Release Details <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar Media Coverage */}
            <aside className="border border-gold/30 bg-white p-6 h-fit">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron block mb-2">
                Press Archive
              </span>
              <h3 className="font-serif text-2xl font-bold text-dark mb-6">
                Popular Press Coverage
              </h3>

              <div className="space-y-5">
                {popularCoverage.map((title, idx) => (
                  <div key={title} className="border-b border-gold/20 pb-4 last:border-b-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold">
                      Media Feature 0{idx + 1}
                    </span>
                    <h4 className="mt-1 font-serif text-lg font-bold leading-snug text-dark hover:text-saffron transition-colors cursor-pointer">
                      {title}
                    </h4>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
