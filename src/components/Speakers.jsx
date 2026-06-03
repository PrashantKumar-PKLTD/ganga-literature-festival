import SectionHeading from "./SectionHeading";
import SPEAKERS from "../data/speakers";

export default function Speakers() {
  return (
    <section id="speakers" className="bg-[#f8f6f1] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="The Minds Of The Festival"
            title="Speakers & Authors"
            intro="India's compelling writers, thinkers, historians, journalists, and intellectuals, united by a shared commitment to truth, excellence, and the idea of India."
          />
          <a href="#schedule" className="inline-flex w-fit border border-[#b58b32] bg-black px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#b58b32]">
            View Programme
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SPEAKERS.map((speaker) => (
            <article key={speaker.name} className="group bg-white">
              <div className="overflow-hidden">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="aspect-[4/4.4] w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="border border-t-0 border-black/10 p-4">
                <p className="text-[10px] font-black uppercase leading-4 tracking-[0.16em] text-[#b58b32]">{speaker.role}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold leading-[0.95] text-black">{speaker.name}</h3>
                <p className="mt-3 text-xs leading-5 text-black/65">{speaker.topic}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
