import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import SPEAKERS from "../data/speakers";

export default function Speakers() {
  const previewSpeakers = SPEAKERS.slice(0, 10);

  return (
    <section id="speakers" className="bg-cream pb-16 pt-16 md:py-24 paper-texture">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="The Minds Of The Festival"
            title="Featured Speakers"
            intro="India's compelling writers, thinkers, historians, journalists, and intellectuals, united by a shared commitment to truth, excellence, and the civilisational narrative."
          />
          <Link
            to="/festival/speakers"
            className="inline-flex w-fit border border-saffron bg-dark px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-300 hover:bg-saffron hover:-translate-y-0.5 rounded-none shadow-sm"
          >
            All Speakers
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {previewSpeakers.map((speaker) => (
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

        <div className="mt-14 text-center md:hidden">
          <Link
            to="/festival/speakers"
            className="inline-flex w-full justify-center border border-saffron bg-dark px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-300 hover:bg-saffron rounded-none"
          >
            View All Speakers
          </Link>
        </div>
      </div>
      
      {/* Luxury separating motifs */}
      <div className="luxury-separator mt-16 md:mt-24" />
    </section>
  );
}
