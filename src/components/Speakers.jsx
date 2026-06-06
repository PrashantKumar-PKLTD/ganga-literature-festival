import SectionHeading from "./SectionHeading";
import SPEAKERS from "../data/speakers";

export default function Speakers() {
  return (
    <section id="speakers" className="bg-[#f8f6f1] pb-8 pt-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="The Minds Of The Festival Invited By Us"
            title=""
            intro="India's compelling writers, thinkers, historians, journalists, and intellectuals, united by a shared commitment to truth, excellence, and the idea of India."
          />
          <a href="#schedule" className="inline-flex w-fit border border-[#b58b32] bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#b58b32]">
            View Programme
          </a>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
          {SPEAKERS.map((speaker) => (
            <article key={speaker.name} className="group bg-white">
              <div className="overflow-hidden">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="aspect-[4/3.7] w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="border border-t-0 border-black/10 p-1.5 sm:p-3">
                <p className="text-[6px] font-black uppercase leading-[1.25] tracking-[0.08em] text-[#b58b32] sm:text-[9px] sm:leading-3 sm:tracking-[0.14em]">{speaker.role}</p>
                <h3 className="mt-1 font-serif text-[10px] font-semibold leading-tight text-black sm:mt-2 sm:text-lg sm:leading-none">{speaker.name}</h3>
                <p className="mt-1 line-clamp-2 text-[7px] leading-[1.25] text-black/65 sm:mt-2 sm:text-[11px] sm:leading-4">{speaker.topic}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
