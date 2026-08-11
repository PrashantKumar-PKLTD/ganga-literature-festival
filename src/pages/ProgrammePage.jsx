import { useMemo, useState } from "react";
import { Download, Search, Share2, Calendar, MapPin, Sparkles } from "lucide-react";
import { SCHEDULE_DAYS } from "../data/schedule";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

const dayButtons = [
  ["Wed", "11", "November 2026"],
  ["Thu", "12", "November 2026"],
];

function sessionId(dayIndex, session) {
  return `session-${dayIndex + 1}-${session.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

function getVenue(session) {
  if (session.title.includes("Sangam")) return "Open-Air Ganga Amphitheatre";
  return "Main Auditorium, Patna";
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
    <main className="bg-cream paper-texture min-h-screen">
      {/* Page Hero Header */}
      <PageHero
        eyebrow="Editorial Schedule"
        title="Festival"
        italicTitle="Programme"
        intro="Explore talks, keynote discourses, book launches, poetry readings, and SPIC MACAY cultural evenings across 11 & 12 November 2026 in Patna."
        badge="Patna • 11 & 12 November 2026"
      />

      <section className="relative px-5 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Sticky Navigation & Control Toolbar */}
          <div className="sticky top-[78px] md:top-[82px] z-30 bg-cream/95 backdrop-blur-md p-4 sm:p-6 border border-gold/30 shadow-md">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Day Selector Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {dayButtons.map(([day, date, month], index) => (
                  <button
                    type="button"
                    key={day}
                    onClick={() => setActiveDay(index)}
                    className={`flex flex-col items-center justify-center px-6 py-3 border transition-all duration-300 ${
                      activeDay === index
                        ? "bg-saffron border-saffron text-cream shadow-md"
                        : "bg-white border-gold/30 text-dark hover:border-gold hover:text-saffron"
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest">{day}</span>
                    <span className="font-serif text-3xl font-bold leading-none my-0.5">{date}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{month}</span>
                  </button>
                ))}
              </div>

              {/* Timezone Toggle, Search & Export */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setTimezone((current) => (current === "IST" ? "GMT" : "IST"))}
                  className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-dark bg-white px-4 py-3 border border-gold/30"
                >
                  <span className={timezone === "GMT" ? "text-saffron" : "text-dark/50"}>GMT</span>
                  <span className="h-4 w-8 rounded-full bg-saffron p-0.5 inline-flex items-center">
                    <span
                      className={`block h-3 w-3 rounded-full bg-white transition-transform ${
                        timezone === "IST" ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </span>
                  <span className={timezone === "IST" ? "text-saffron" : "text-dark/50"}>IST (UTC+5:30)</span>
                </button>

                <form
                  className="flex overflow-hidden border border-gold/30 bg-white"
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
                    className="h-11 min-w-0 px-4 text-xs outline-none text-dark bg-transparent md:w-64 placeholder:text-dark/40"
                    placeholder="Search session title or speaker..."
                  />
                  <button type="submit" className="flex h-11 w-11 items-center justify-center bg-saffron text-white hover:bg-gold hover:text-dark transition">
                    <Search className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={downloadSchedule}
                    className="flex h-11 w-11 items-center justify-center border-l border-gold/20 bg-dark text-white hover:bg-saffron transition"
                    title="Download CSV Schedule"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <MadhubaniDivider variant="compact" />

          {/* Sidebar Filters & Timeline Content */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[250px_1fr]">
            {/* Sidebar Filters */}
            <aside className="space-y-4">
              <div className="border border-gold/30 bg-white p-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron block mb-3">
                  Filter Stage / Venue
                </span>
                <select
                  value={venueFilter}
                  onChange={(e) => setVenueFilter(e.target.value)}
                  className="w-full border border-gold/30 bg-cream p-2.5 text-xs font-sans text-dark outline-none focus:border-saffron"
                >
                  <option value="all">All Venues</option>
                  <option value="Main Auditorium, Patna">Main Auditorium</option>
                  <option value="Open-Air Ganga Amphitheatre">Open-Air Ganga Amphitheatre</option>
                </select>

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron block mt-5 mb-3">
                  Filter Theme
                </span>
                <select
                  value={themeFilter}
                  onChange={(e) => setThemeFilter(e.target.value)}
                  className="w-full border border-gold/30 bg-cream p-2.5 text-xs font-sans text-dark outline-none focus:border-saffron"
                >
                  <option value="all">All Themes</option>
                  {themes.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron block mt-5 mb-3">
                  Special Category
                </span>
                <select
                  value={specialFilter}
                  onChange={(e) => setSpecialFilter(e.target.value)}
                  className="w-full border border-gold/30 bg-cream p-2.5 text-xs font-sans text-dark outline-none focus:border-saffron"
                >
                  <option value="all">All Sessions</option>
                  <option value="spic">SPIC MACAY Cultural Evening</option>
                </select>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 w-full border border-saffron/40 py-2 text-xs font-bold uppercase tracking-wider text-saffron hover:bg-saffron hover:text-white transition"
                >
                  Reset All Filters
                </button>
              </div>
            </aside>

            {/* Timeline Stream */}
            <div>
              {filteredDays.map((day, dayIndex) => {
                if (day.sessions.length === 0) return null;

                return (
                  <div key={day.heading} className="mb-12">
                    <div className="border border-gold/30 bg-dark px-6 py-4 text-center font-serif text-2xl font-bold text-gold uppercase tracking-wider">
                      {day.heading}
                    </div>

                    <div className="relative mt-8 border-l-2 border-gold/40 pl-6 sm:pl-8 space-y-8">
                      {day.sessions.map((session, index) => {
                        const id = sessionId(dayIndex, session);
                        const venue = getVenue(session);

                        return (
                          <article
                            id={id}
                            key={session.title}
                            className="relative scroll-mt-32 border border-gold/30 bg-white p-6 shadow-sm transition-all duration-300 hover:border-saffron hover:shadow-md"
                          >
                            {/* Diamond Timeline Marker */}
                            <span className="absolute -left-[31px] sm:-left-[39px] top-6 flex h-4 w-4 items-center justify-center bg-saffron text-white text-[10px] rotate-45">
                              ♦
                            </span>

                            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gold/20 pb-4">
                              <div className="flex items-center gap-3">
                                <span className="bg-dark px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                                  {displayTime(session.time)} {timezone}
                                </span>
                                <span className="border border-saffron/40 bg-saffron/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-saffron">
                                  {session.type}
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={() => shareSession(day, session, id)}
                                className="flex items-center gap-1.5 border border-gold/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-dark/70 hover:border-saffron hover:text-saffron transition"
                              >
                                <Share2 className="h-3.5 w-3.5" /> Share
                              </button>
                            </div>

                            <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-bold leading-tight text-dark">
                              {index + 1}. {session.title}
                            </h3>

                            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-dark/80 font-sans">
                              {session.desc}
                            </p>

                            {session.people && (
                              <div className="mt-5 border-l-2 border-saffron bg-parchment/60 p-3">
                                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-deep-saffron">
                                  Featured Speakers & Discussants
                                </p>
                                <p className="mt-1 text-xs sm:text-sm font-semibold leading-relaxed text-dark">
                                  {session.people}
                                </p>
                              </div>
                            )}

                            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-gold/20 pt-4 text-[11px] text-dark/70 font-sans">
                              <span className="flex items-center gap-1.5 font-semibold text-dark">
                                <MapPin className="h-3.5 w-3.5 text-saffron" /> {venue}
                              </span>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark">
                                Ganga Literature Festival 2026
                              </span>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {visibleSessionCount === 0 && (
                <div className="border border-gold/30 bg-white p-12 text-center">
                  <h3 className="font-serif text-3xl font-bold text-dark">No sessions match your search</h3>
                  <p className="mt-2 text-xs sm:text-sm text-dark/70 font-sans">
                    Try refining your search terms or clearing your venue and theme filters.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-6 border border-saffron bg-saffron px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold hover:border-gold hover:text-dark transition"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Share Toast Notification */}
      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border border-gold bg-dark px-6 py-3 text-xs font-bold uppercase tracking-wider text-gold shadow-2xl transition-all duration-300 ${
          shareStatus ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        Session Link Copied to Clipboard
      </div>
    </main>
  );
}
