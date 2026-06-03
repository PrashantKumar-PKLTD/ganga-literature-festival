import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { SCHEDULE_DAYS } from "../data/schedule";

export default function Schedule() {
  const [active, setActive] = useState(0);

  return (
    <section id="schedule" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Programme"
          title="Festival Schedule"
          intro="Two days of transformative conversations, book launches, keynote addresses, panels, masterclasses, and classical arts."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {SCHEDULE_DAYS.map((day, index) => (
            <button
              key={day.label}
              onClick={() => setActive(index)}
              className={`border px-6 py-3 text-sm font-black uppercase tracking-[0.14em] transition ${
                active === index ? "border-[#b58b32] bg-[#b58b32] text-white" : "border-black/20 bg-white text-black hover:border-[#b58b32]"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="mt-14 border-t border-black/15">
          {SCHEDULE_DAYS[active].sessions.map((session) => (
            <div key={session.title} className="grid gap-4 border-b border-black/15 py-8 md:grid-cols-[150px_1fr] md:gap-10">
              <div>
                <div className="text-sm font-black uppercase tracking-[0.18em] text-[#b58b32]">{session.time}</div>
                <div className="mt-2 w-fit rounded bg-[#b58b32]/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#b58b32]">
                  {session.type}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-semibold text-black">{session.title}</h3>
                {session.people && (
                  <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-black/70">{session.people}</p>
                )}
                <p className="mt-3 max-w-3xl text-base leading-7 text-black/65">{session.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
