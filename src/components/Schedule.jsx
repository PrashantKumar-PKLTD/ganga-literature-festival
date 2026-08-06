import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { SCHEDULE_DAYS } from "../data/schedule";

export default function Schedule() {
  const [active, setActive] = useState(0);

  return (
    <section id="schedule" className="bg-cream pb-16 pt-12 md:py-24 border-t border-gold/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Programme"
          title="Festival Schedule"
          intro="Two days of transformative conversations, book launches, keynote addresses, panels, masterclasses, and classical arts."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3">
          {SCHEDULE_DAYS.map((day, index) => (
            <button
              key={day.label}
              onClick={() => setActive(index)}
              className={`min-w-[calc(50%-0.25rem)] border px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition duration-300 sm:min-w-0 sm:px-6 rounded-none ${
                active === index ? "border-saffron bg-saffron text-cream" : "border-gold/30 bg-cream text-dark hover:border-saffron hover:text-saffron"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="mt-8 border-t border-gold/20 sm:mt-14">
          {SCHEDULE_DAYS[active].sessions.map((session) => (
            <div key={session.title} className="grid gap-4 border-b border-gold/20 py-6 transition duration-300 hover:bg-gold/5 md:grid-cols-[150px_1fr] md:gap-10 md:py-8">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-saffron">{session.time}</div>
                <div className="mt-2 w-fit rounded-none border border-saffron/20 bg-saffron/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-saffron">
                  {session.type}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-light leading-tight text-dark sm:text-3xl">{session.title}</h3>
                {session.people && (
                  <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-dark/75">{session.people}</p>
                )}
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-dark/70 sm:text-base">{session.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
