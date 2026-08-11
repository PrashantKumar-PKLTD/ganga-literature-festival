import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";

export default function ContentPage({ page }) {
  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow={page.eyebrow || "Ganga Literature Festival"}
        title={page.title}
        intro={page.intro}
        badge="Patna • 11 & 12 November 2026"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* Main Article Content */}
          <article className="border border-gold/30 bg-white p-7 sm:p-10 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-saffron">
              Overview & Key Context
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold leading-tight text-dark">
              {page.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-dark/80 font-sans">
              {page.intro}
            </p>

            {page.facts?.length > 0 && (
              <div className="mt-8 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark block mb-2">
                  Key Festival Facts
                </span>
                {page.facts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border-l-2 border-saffron bg-cream p-4 text-xs sm:text-sm text-dark/80 font-sans leading-relaxed"
                  >
                    <span className="text-saffron mt-0.5">♦</span>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            )}

            <MadhubaniDivider variant="compact" />

            {page.sections?.length > 0 && (
              <div className="mt-8 space-y-8">
                {page.sections.map(([heading, body]) => (
                  <div key={heading}>
                    <h3 className="font-serif text-2xl font-bold text-dark">
                      {heading}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-dark/75 font-sans">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </article>

          {/* Quick Action Sidebar */}
          <aside className="border border-gold/40 bg-dark p-7 text-white h-fit shadow-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold block mb-1">
              Festival Action
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Plan Your Festival Visit
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-cream/75 font-sans">
              Join thinkers, writers, and cultural enthusiasts in Patna on 11 & 12 November 2026.
            </p>

            <Link
              to="/festival/register-to-attend"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-saffron bg-saffron py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
            >
              {page.cta || "Register Now"} <ArrowRight className="h-4 w-4" />
            </Link>

            {page.source && (
              <a
                href={page.source}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-gold hover:text-white transition"
              >
                Reference Source <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
