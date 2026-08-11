import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { cityContent } from "../data/cityContent";
import MadhubaniDivider from "../components/MadhubaniDivider";
import DecorativeFrame from "../components/DecorativeFrame";
import SectionHeading from "../components/SectionHeading";

export default function CityPage() {
  const { slug } = useParams();
  const data = cityContent[slug];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="bg-cream paper-texture min-h-screen pt-[78px] md:pt-[82px]">
      {/* Video Hero Header */}
      <section className="relative min-h-[550px] overflow-hidden bg-dark text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-90 opacity-40"
          src="/gangavid.mp4"
          poster="/gangaimg1.png"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark" />

        <div className="absolute top-8 left-6 z-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-gold font-bold uppercase tracking-widest text-xs transition bg-dark/70 px-4 py-2 border border-gold/30 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" /> Back to River Journey
          </Link>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[550px] max-w-5xl items-center justify-center px-5 text-center md:px-8">
          <div>
            <span className="inline-flex items-center gap-2 border border-gold/30 bg-dark/80 px-4 py-1.5 backdrop-blur-md text-[11px] font-bold uppercase tracking-[0.24em] text-gold mb-4">
              <Sparkles className="h-3 w-3 text-saffron" /> Sacred City of Ganga
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light uppercase leading-none tracking-tight text-white">
              {data.name}
            </h1>
            <p className="mt-4 font-serif text-lg md:text-2xl font-light italic text-gold max-w-2xl mx-auto">
              "{data.tagline}"
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 h-20 pointer-events-none">
          <div className="festival-skyline absolute bottom-0 left-1/2 h-full w-[1200px] max-w-none -translate-x-1/2 md:w-[1500px]" />
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Civilisational Legacy"
            title={`${data.name} & The Holy River`}
            intro={data.intro}
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base leading-relaxed text-dark/80 font-sans">
              {data.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="lg:col-span-5">
              <DecorativeFrame dark={false} className="shadow-lg">
                <blockquote className="font-serif text-xl sm:text-2xl font-light italic text-dark leading-snug">
                  "{data.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-px w-6 bg-saffron" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                    Ganga Memory & Heritage
                  </span>
                </div>
              </DecorativeFrame>
            </div>
          </div>
        </div>
      </section>

      <MadhubaniDivider variant="floral" />

      {/* Living Heritage Cards */}
      <section className="bg-white/70 px-5 py-16 md:px-8 md:py-24 border-t border-gold/20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Sacred Landmarks"
            title={`Living Heritage of ${data.name}`}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.heritage.map(([title, text]) => (
              <div
                key={title}
                className="border border-gold/30 bg-cream p-7 transition-all duration-300 hover:border-saffron hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">
                  Heritage Pillar
                </span>
                <h3 className="mt-2 font-serif text-2xl font-bold text-dark">
                  {title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-dark/75 leading-relaxed font-sans">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Return Footer */}
      <section className="bg-dark px-5 py-16 text-center text-white md:px-8 md:py-20 border-t border-gold/30">
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
          Explore Sacred Cities
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-light uppercase text-white">
          Continue the Ganga River Journey
        </h2>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 border border-saffron bg-saffron px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
        >
          Return to Ganga Map <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
