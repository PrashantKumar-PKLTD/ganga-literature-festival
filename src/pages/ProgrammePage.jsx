import { useMemo, useState } from "react";
import { Download, Search, Share2 } from "lucide-react";
import { SCHEDULE_DAYS } from "../data/schedule";

const dayButtons = [
  ["Wed", "11", "November"],
  ["Thu", "12", "November"],
];

function sessionId(dayIndex, session) {
  return `session-${dayIndex + 1}-${session.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

function getVenue(session) {
  if (session.title.includes("Sangam")) return "Open-Air Ganga Amphitheatre";
  return "Ganga Literature Festival, Patna";
}

function toGmtTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  const total = (hour * 60 + minute - 330 + 1440) % 1440;
  const gmtHour = Math.floor(total / 60);
  const gmtMinute = total % 60;
  return `${String(gmtHour).padStart(2, "0")}:${String(gmtMinute).padStart(2, "0")}`;
}

function csvEscape(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

export default function ProgrammePage() {
  const [shareStatus, setShareStatus] = useState("");
  const [activeDay, setActiveDay] = useState(0);
  const [timezone, setTimezone] = useState("IST");
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [venueFilter, setVenueFilter] = useState("all");
  const [themeFilter, setThemeFilter] = useState("all");
  const [specialFilter, setSpecialFilter] = useState("all");

  const themes = useMemo(
    () => Array.from(new Set(SCHEDULE_DAYS.flatMap((day) => day.sessions.map((session) => session.type)))),
    []
  );

  const filteredDays = useMemo(() => {
    const searchTerm = submittedQuery.trim().toLowerCase();

    return SCHEDULE_DAYS.map((day, dayIndex) => {
      if (dayIndex !== activeDay) return { ...day, sessions: [] };

      const sessions = day.sessions.filter((session) => {
        const venue = getVenue(session);
        const searchable = [session.title, session.desc, session.people, session.type, venue]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return (
          (!searchTerm || searchable.includes(searchTerm)) &&
          (venueFilter === "all" || venue === venueFilter) &&
          (themeFilter === "all" || session.type === themeFilter) &&
          (specialFilter === "all" || session.type === "SPIC MACAY Evening")
        );
      });

      return { ...day, sessions };
    });
  }, [activeDay, submittedQuery, venueFilter, themeFilter, specialFilter]);

  const visibleSessionCount = filteredDays.reduce((total, day) => total + day.sessions.length, 0);

  const displayTime = (time) => (timezone === "IST" ? time : toGmtTime(time));

  const resetFilters = () => {
    setQuery("");
    setSubmittedQuery("");
    setVenueFilter("all");
    setThemeFilter("all");
    setSpecialFilter("all");
    setActiveDay(0);
  };

  const downloadSchedule = () => {
    const rows = [
      ["Day", "Timezone", "Time", "Type", "Title", "Participants", "Venue", "Description"],
      ...filteredDays.flatMap((day) =>
        day.sessions.map((session) => [
          day.heading,
          timezone,
          displayTime(session.time),
          session.type,
          session.title,
          session.people || "",
          getVenue(session),
          session.desc,
        ])
      ),
    ];

    const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ganga-literature-festival-programme.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const shareSession = async (day, session, id) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    const text = `${session.title} at Ganga Literature Festival, Patna. ${day.heading} at ${displayTime(session.time)} ${timezone}.`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: session.title,
          text,
          url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setShareStatus(session.title);
        window.setTimeout(() => setShareStatus(""), 2200);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        setShareStatus("");
      }
    }
  };

  return (
    <main className="pt-[78px] md:pt-[82px] bg-cream">
      <section
        className="relative min-h-[500px] overflow-hidden bg-cover bg-center text-white md:min-h-[560px]"
        style={{ backgroundImage: 'url("/gangaimg1.png")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,96,10,0.14),rgba(28,18,8,0.72))]" />
        <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center justify-center px-5 text-center md:min-h-[560px] md:px-8">
          <div className="relative px-8 py-16">
            <div className="absolute inset-0 border-[8px] border-saffron opacity-85 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
            <div className="relative">
              <p className="font-serif text-3xl font-light uppercase leading-none text-white md:text-4xl">
                Ganga Literature Festival
              </p>
              <h1 className="mt-4 font-serif text-5xl md:text-7xl font-light uppercase tracking-tight text-white">
                Programme
              </h1>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-gold">
                11 & 12 November 2026
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-cream [clip-path:polygon(0_60%,4%_40%,8%_62%,13%_42%,21%_62%,31%_38%,40%_58%,50%_40%,60%_62%,70%_38%,82%_58%,92%_40%,100%_60%,100%_100%,0_100%)]" />
      </section>

      <section className="bg-cream px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="sticky top-[78px] md:top-[82px] z-20 rounded-none bg-cream/95 backdrop-blur-md p-4 border border-gold/20 shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="grid grid-cols-2 gap-2">
                {dayButtons.map(([day, date, month], index) => (
                  <button
                    type="button"
                    key={day}
                    onClick={() => setActiveDay(index)}
                    className={`rounded-none border px-3 py-2.5 text-center leading-none transition-colors duration-300 ${
                      activeDay === index ? "bg-saffron border-saffron text-cream" : "bg-cream border-gold/30 text-dark hover:border-saffron hover:text-saffron"
                    }`}
                  >
                    <span className="block text-[11px] font-bold">{day}</span>
                    <span className="block text-2xl font-black">{date}</span>
                    <span className="block text-[11px] font-semibold">{month}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <button
                  type="button"
                  onClick={() => setTimezone((current) => (current === "IST" ? "GMT" : "IST"))}
                  className="flex items-center gap-2 text-sm text-dark font-medium"
                  aria-pressed={timezone === "IST"}
                >
                  <span className={timezone === "GMT" ? "font-bold text-saffron" : "text-dark/55"}>
                    Local (GMT)
                  </span>
                  <span className="h-5 w-10 rounded-full bg-saffron p-1">
                    <span
                      className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                        timezone === "IST" ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </span>
                  <strong className={timezone === "IST" ? "text-saffron" : "text-dark/55"}>
                    Conference (IST)
                  </strong>
                </button>
                <form
                  className="flex overflow-hidden border border-gold/30 bg-cream rounded-none focus-within:border-saffron focus-within:ring-1 focus-within:ring-saffron transition"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmittedQuery(query);
                  }}
                >
                  <input
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setSubmittedQuery(event.target.value);
                    }}
                    className="h-12 min-w-0 px-4 text-sm outline-none bg-transparent text-dark md:w-72"
                    placeholder="Search by title, author, speaker..."
                  />
                  <button type="submit" className="flex h-12 w-14 items-center justify-center bg-saffron text-cream transition hover:bg-dark">
                    <Search className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={downloadSchedule}
                    className="flex h-12 w-14 items-center justify-center border-l border-gold/20 bg-dark text-cream transition hover:bg-saffron"
                    aria-label="Download visible programme"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
            <aside className="grid h-fit gap-4">
              <select
                value={venueFilter}
                onChange={(event) => setVenueFilter(event.target.value)}
                className="rounded-none border border-gold/20 bg-cream px-4 py-3.5 text-sm font-semibold text-dark outline-none focus:border-saffron transition"
              >
                <option value="all">Select Hall</option>
                <option value="Ganga Literature Festival, Patna">Ganga Literature Festival, Patna</option>
                <option value="Open-Air Ganga Amphitheatre">Open-Air Ganga Amphitheatre</option>
              </select>
              <select
                value={themeFilter}
                onChange={(event) => setThemeFilter(event.target.value)}
                className="rounded-none border border-gold/20 bg-cream px-4 py-3.5 text-sm font-semibold text-dark outline-none focus:border-saffron transition"
              >
                <option value="all">Select Theme</option>
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
              <select
                value={specialFilter}
                onChange={(event) => setSpecialFilter(event.target.value)}
                className="rounded-none border border-gold/20 bg-cream px-4 py-3.5 text-sm font-semibold text-dark outline-none focus:border-saffron transition"
              >
                <option value="all">All Sessions</option>
                <option value="spic">SPIC MACAY Evening</option>
              </select>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 w-fit text-sm font-bold text-saffron underline underline-offset-4 hover:text-dark transition"
              >
                Reset Filter
              </button>
            </aside>

            <div>
              {filteredDays.map((day, dayIndex) => {
                if (day.sessions.length === 0) return null;

                return (
                  <div key={day.heading} className="mb-12">
                    <div className="rounded-none bg-dark border border-gold/20 px-6 py-4 text-center font-serif text-2xl font-light text-cream uppercase tracking-wider">
                      {day.heading}
                    </div>

                    <div className="relative mt-8 border-l border-gold/30 pl-6">
                      {day.sessions.map((session, index) => {
                        const id = sessionId(dayIndex, session);
                        const venue = getVenue(session);

                        return (
                          <article
                            id={id}
                            key={session.title}
                            className={`relative mb-8 scroll-mt-28 border border-gold/20 p-6 transition duration-300 hover:border-saffron hover:shadow-md ${
                              index % 2 === 1 ? "bg-parchment/30" : "bg-cream"
                            }`}
                          >
                            <span className="absolute -left-[31px] top-8 h-3 w-3 rotate-45 border border-gold/30 bg-saffron" />
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-xs font-bold text-dark/60">
                                  {day.heading} | {displayTime(session.time)} {timezone}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  <span className="rounded-none border border-saffron/20 bg-saffron/10 px-2.5 py-1 text-xs font-bold text-saffron uppercase tracking-[0.1em]">
                                    {session.type}
                                  </span>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => shareSession(day, session, id)}
                                className="rounded-none p-2 text-dark transition hover:bg-saffron/10 hover:text-saffron focus:outline-none focus:ring-1 focus:ring-saffron"
                                aria-label={`Share ${session.title}`}
                              >
                                <Share2 className="h-5 w-5" />
                              </button>
                            </div>

                            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-dark transition duration-300 hover:text-saffron">
                              {index + 1}. {session.title}
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-dark/70 font-light">{session.desc}</p>

                            {session.people && (
                              <div className="mt-5 border-t border-gold/20 pt-4">
                                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-dark/50">
                                  Participants
                                </p>
                                <p className="mt-2 text-sm font-semibold leading-relaxed text-dark/75">
                                  {session.people}
                                </p>
                              </div>
                            )}

                            <div className="mt-5 flex flex-col gap-3 border-t border-gold/20 pt-4 text-xs tracking-wider uppercase text-dark/60 md:flex-row md:items-center md:justify-between">
                              <p>
                                <span className="font-bold text-dark">Venue:</span> {venue}
                              </p>
                              <p>
                                <span className="font-bold text-dark">Supported by:</span> BIHAAN, BluOne Ink, SPIC MACAY
                              </p>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {visibleSessionCount === 0 && (
                <div className="rounded-none border border-gold/20 bg-cream p-8 text-center shadow-sm">
                  <h2 className="font-serif text-3xl font-light text-dark uppercase">No sessions found</h2>
                  <p className="mt-3 text-sm text-dark/65 font-light">
                    Try another search term or reset the filters.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-saffron hover:text-dark transition underline underline-offset-4"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-none bg-dark border border-gold/20 px-5 py-3 text-sm font-semibold text-cream shadow-xl transition ${
          shareStatus ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        Link copied: {shareStatus}
      </div>
    </main>
  );
}
