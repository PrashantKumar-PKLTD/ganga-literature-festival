import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import SPEAKERS from "../data/speakers";

export default function Speakers() {
  const previewSpeakers = SPEAKERS.slice(0, 10);

  return (
    <section id="speakers" className="bg-parchment/40 pb-16 pt-16 md:py-24 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {previewSpeakers.map((speaker) => (
            <article key={speaker.name} className="group bg-cream border border-gold/20 rounded-none overflow-hidden shadow-sm transition duration-300 hover:border-saffron hover:shadow-md hover:-translate-y-0.5">
              <div className="overflow-hidden aspect-square">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-saffron">{speaker.role}</p>
                <h3 className="mt-1 font-serif text-[15px] font-light leading-tight text-dark sm:text-lg sm:leading-none">{speaker.name}</h3>
                <p className="mt-2 line-clamp-2 text-[10px] leading-relaxed text-dark/70 sm:text-xs">{speaker.topic}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/festival/speakers"
            className="inline-flex w-full justify-center border border-saffron bg-dark px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-300 hover:bg-saffron rounded-none"
          >
            View All Speakers
          </Link>
        </div>
      </div>
    </section>
  );
}
