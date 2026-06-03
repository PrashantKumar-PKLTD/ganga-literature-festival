import { useState } from "react";
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

export default function ProgrammePage() {
  const [shareStatus, setShareStatus] = useState("");

  const shareSession = async (day, session, id) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    const text = `${session.title} at Ganga Literature Festival, Patna. ${day.heading} at ${session.time}.`;

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
    <main className="pt-[78px] md:pt-[82px]">
      <section
        className="relative min-h-[620px] overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gangaimg1.png")' }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,139,50,0.24),rgba(0,0,0,0.6))]" />
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center justify-center px-5 text-center md:px-8">
          <div className="relative px-8 py-16">
            <div className="absolute inset-0 border-[8px] border-[#b58b32] opacity-85 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
            <div className="relative">
              <p className="font-serif text-3xl font-black uppercase leading-none text-white md:text-4xl">
                Ganga Literature Festival
              </p>
              <h1 className="mt-4 font-serif text-6xl font-black uppercase leading-[0.85] text-white md:text-8xl">
                Programme
              </h1>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-[#d9b45f]">
                11 & 12 November 2026
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-white [clip-path:polygon(0_60%,4%_40%,8%_62%,13%_42%,21%_62%,31%_38%,40%_58%,50%_40%,60%_62%,70%_38%,82%_58%,92%_40%,100%_60%,100%_100%,0_100%)]" />
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-md bg-[#f8f6f1] p-4">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="grid grid-cols-2 gap-2">
                {dayButtons.map(([day, date, month], index) => (
                  <button
                    key={day}
                    className={`rounded-md border border-[#b58b32] px-3 py-2 text-center leading-none ${
                      index === 0 ? "bg-[#b58b32] text-white" : "bg-white text-black"
                    }`}
                  >
                    <span className="block text-[11px] font-bold">{day}</span>
                    <span className="block text-2xl font-black">{date}</span>
                    <span className="block text-[11px] font-semibold">{month}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-black/55">Local (GMT)</span>
                  <span className="h-5 w-10 rounded-full bg-[#b58b32] p-1">
                    <span className="block h-3 w-3 translate-x-5 rounded-full bg-white" />
                  </span>
                  <strong>Conference (IST)</strong>
                </div>
                <div className="flex overflow-hidden rounded-md border border-[#b58b32]/45 bg-white">
                  <input
                    className="h-12 min-w-0 px-4 text-sm outline-none md:w-72"
                    placeholder="Search by title, author, speaker..."
                  />
                  <button className="flex h-12 w-14 items-center justify-center bg-[#b58b32] text-white">
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="flex h-12 w-14 items-center justify-center border-l border-white/20 bg-black text-white">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
            <aside className="grid h-fit gap-4">
              {["Select Hall", "Select Theme", "SPIC MACAY Evening"].map((filter) => (
                <button
                  key={filter}
                  className="flex items-center justify-between rounded-md bg-[#f8f6f1] px-5 py-4 text-sm font-black text-black"
                >
                  {filter}
                  <span>v</span>
                </button>
              ))}
              <button className="mt-5 w-fit text-sm font-bold text-[#b58b32] underline underline-offset-4">
                Reset Filter
              </button>
            </aside>

            <div>
              {SCHEDULE_DAYS.map((day, dayIndex) => (
                <div key={day.heading} className="mb-12">
                  <div className="rounded-md bg-[#b58b32] px-6 py-4 text-center font-serif text-3xl font-black text-white">
                    {day.heading}
                  </div>

                  <div className="relative mt-8 border-l-2 border-[#b58b32]/35 pl-6">
                    {day.sessions.map((session, index) => {
                      const id = sessionId(dayIndex, session);

                      return (
                        <article
                          id={id}
                          key={session.title}
                          className={`relative mb-8 scroll-mt-28 rounded-md border border-black/10 p-6 ${
                            index === 1 ? "bg-[#f8f6f1]" : "bg-white"
                          }`}
                        >
                          <span className="absolute -left-[34px] top-8 h-4 w-4 rounded-full bg-[#b58b32]" />
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs font-bold text-black/65">
                                {day.heading} | {session.time}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                <span className="rounded bg-[#b58b32]/10 px-2 py-1 text-xs font-bold text-[#b58b32]">
                                  {session.type}
                                </span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => shareSession(day, session, id)}
                              className="rounded-full p-2 text-black transition hover:bg-[#b58b32]/10 hover:text-[#b58b32] focus:outline-none focus:ring-2 focus:ring-[#b58b32]"
                              aria-label={`Share ${session.title}`}
                            >
                              <Share2 className="h-5 w-5" />
                            </button>
                          </div>

                          <h2 className="mt-4 font-serif text-3xl font-black leading-tight text-[#b58b32]">
                            {index + 1}. {session.title}
                          </h2>
                          <p className="mt-3 text-sm leading-7 text-black/75">{session.desc}</p>

                          {session.people && (
                            <div className="mt-5 border-t border-black/10 pt-4">
                              <p className="text-xs font-black uppercase tracking-[0.16em] text-black/50">
                                Participants
                              </p>
                              <p className="mt-3 text-sm font-semibold leading-7 text-black/75">
                                {session.people}
                              </p>
                            </div>
                          )}

                          <div className="mt-5 flex flex-col gap-3 border-t border-black/10 pt-4 text-sm md:flex-row md:items-center md:justify-between">
                            <p>
                              <span className="font-bold">Venue:</span> Ganga Literature Festival, Patna
                            </p>
                            <p>
                              <span className="font-bold">Supported by:</span> BIHAAN, BluOne Ink, SPIC MACAY
                            </p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md bg-black px-5 py-3 text-sm font-bold text-white shadow-xl transition ${
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
