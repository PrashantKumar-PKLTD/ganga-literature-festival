import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { SCHEDULE_DAYS } from "../data/schedule";

export default function Schedule() {
  const [active, setActive] = useState(0);

  return (
    <section id="schedule" className="bg-cream pb-16 pt-16 md:py-24 paper-texture">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Programme"
          title="Festival Schedule"
          intro="Two days of transformative conversations, book launches, keynote addresses, panels, masterclasses, and classical arts."
        />

        {/* Tab Selectors styled as Bookmarks */}
        <div className="mt-10 flex flex-wrap justify-center border-b border-gold/25">
          {SCHEDULE_DAYS.map((day, index) => (
            <button
              key={day.label}
              onClick={() => setActive(index)}
              className={`min-w-[calc(50%-0.25rem)] sm:min-w-[180px] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-none border-b-2 ${
                active === index 
                  ? "border-saffron text-saffron bg-parchment/65 font-bold" 
                  : "border-transparent text-dark/50 hover:text-saffron"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {SCHEDULE_DAYS[active].sessions.map((session) => (
            <div key={session.title} className="grid gap-6 border-b border-gold/20 py-8 transition-all duration-500 hover:bg-parchment/30 md:grid-cols-[180px_1fr] md:gap-12 md:py-10">
              {/* Left Column: Timeline details with Diamond indicators */}
              <div className="relative pl-6 md:pl-8 border-l border-gold/30">
                <span className="absolute left-[-4.5px] top-1 text-[8px] text-saffron">♦</span>
                <div className="font-serif text-lg font-bold tracking-wide text-saffron">{session.time}</div>
                <div className="mt-2.5 w-fit border border-saffron/20 bg-saffron/5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-saffron">
                  {session.type}
                </div>
              </div>

              {/* Right Column: Title and details */}
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-light leading-tight text-dark">{session.title}</h3>
                {session.people && (
                  <p className="mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-dark/75">{session.people}</p>
                )}
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-dark/70 font-light">{session.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury separating motifs */}
      <div className="luxury-separator mt-16 md:mt-24" />
    </section>
  );
}
