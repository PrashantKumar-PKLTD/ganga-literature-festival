import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cityContent } from "../data/cityContent";

function ArchTitle({ title, eyebrow }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl px-7 py-16 text-center md:px-12 md:py-20">
      <div className="absolute inset-0 border-[8px] border-[#b58b32] opacity-90 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
      <div className="relative">
        <p className="font-serif text-3xl font-black uppercase leading-none text-white md:text-4xl">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-5xl font-black uppercase leading-[0.88] text-white md:text-7xl">
          {title}
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

export default function CityPage() {
  const { slug } = useParams();
  const data = cityContent[slug];

  if (!data) {
    return <Navigate to="/" replace />;
  }

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
        <div className="absolute top-24 left-8 z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-[#b58b32] font-black uppercase tracking-widest text-sm transition bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <ArrowLeft className="w-5 h-5" /> Back to River
          </Link>
        </div>
        <div className="relative mx-auto flex min-h-[650px] max-w-6xl items-center justify-center px-5 md:px-8">
          <ArchTitle eyebrow="City of Ganga" title={data.name} />
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
              Civilisational Impact
            </p>
            <h2 className="mt-5 font-serif text-5xl font-black leading-[0.95] text-black md:text-6xl">
              {data.tagline}
            </h2>
          </div>

          <div className="space-y-6 text-base font-semibold leading-8 text-black/75">
            <p className="font-bold text-lg text-black">{data.intro}</p>
            {data.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <blockquote className="border-l-4 border-[#b58b32] bg-white px-6 py-5 font-serif text-2xl font-black leading-tight text-black shadow-sm">
              "{data.quote}"
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
           <h2 className="text-center font-serif text-5xl font-black leading-none text-black mb-16">
             Living Heritage
           </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {data.heritage.map(([title, text]) => (
              <article key={title} className="border border-black/10 bg-[#f8f6f1] p-8 shadow-sm transition hover:shadow-md hover:border-[#b58b32]/50">
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
      
      <section className="relative overflow-hidden bg-black px-5 py-24 text-center text-white md:px-8 md:py-32">
        <div className="absolute inset-x-0 top-0 h-24 bg-white [clip-path:polygon(0_0,100%_0,100%_35%,90%_55%,78%_35%,65%_60%,52%_38%,40%_58%,26%_35%,14%_60%,0_35%)]" />
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-5xl font-black leading-[0.95] text-white md:text-6xl">
          Continue the Journey.
        </h2>
        <Link
          to="/"
          className="mx-auto mt-14 inline-flex items-center gap-3 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#b58b32] hover:text-black"
        >
          Return to Map
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
