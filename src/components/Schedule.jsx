import { useState } from "react";
import SectionHeading from "./SectionHeading";

const DAYS = [
  {
    label: "Thu 15 Jan",
    sessions: [
      ["10:00", "Opening Ceremony", "Inaugural address, lamp lighting, and welcome performance."],
      ["11:30", "The River As Archive", "A keynote on memory, migration, and literature along the Ganga."],
      ["14:00", "Writing Bihar Now", "New fiction and nonfiction from the region's contemporary voices."],
    ],
  },
  {
    label: "Fri 16 Jan",
    sessions: [
      ["10:30", "Poetry In Translation", "A conversation on carrying rhythm across languages."],
      ["13:00", "Publishing Clinic", "Editors and agents discuss manuscripts, markets, and readership."],
      ["17:30", "Evening Mehfil", "Music, readings, and spoken-word performances."],
    ],
  },
  {
    label: "Sat 17 Jan",
    sessions: [
      ["11:00", "Young Readers Forum", "Schools, libraries, and student-led literary communities."],
      ["15:00", "Book Launch Hour", "Selected launches with author signings."],
      ["18:30", "Festival Finale", "Closing notes and cultural performance."],
    ],
  },
];

export default function Schedule() {
  const [active, setActive] = useState(0);

  return (
    <section id="schedule" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Programme"
          title="Festival Schedule"
          intro="Move through keynotes, conversations, readings, performances, workshops, and book launches across curated festival days."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {DAYS.map((day, index) => (
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
          {DAYS[active].sessions.map(([time, title, desc]) => (
            <div key={title} className="grid gap-4 border-b border-black/15 py-8 md:grid-cols-[150px_1fr] md:gap-10">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-[#b58b32]">{time}</div>
              <div>
                <h3 className="font-serif text-3xl font-semibold text-black">{title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-black/65">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
