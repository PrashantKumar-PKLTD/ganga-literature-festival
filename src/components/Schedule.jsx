import { useState, useEffect, useRef } from "react";
import SCHEDULE from "../data/schedule";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── Inject Poppins once ── */
if (typeof document !== "undefined" && !document.getElementById("schedule-globals")) {
  const s = document.createElement("style");
  s.id = "schedule-globals";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    .tl-card {
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    .tl-card:hover {
      box-shadow: 0 8px 28px rgba(10,26,60,0.10);
      transform: translateY(-2px);
    }
    .tl-node {
      transition: background 0.3s, border-color 0.3s;
    }
  `;
  document.head.appendChild(s);
}

const DAY_LABELS = [
  { day: 1, label: "Day 1", sub: "21 Nov 2026 · Sat" },
  { day: 2, label: "Day 2", sub: "22 Nov 2026 · Sun" },
  { day: 3, label: "Day 3", sub: "23 Nov 2026 · Mon" },
];

const TYPE_COLORS = {
  ceremony:   { dot: "#f5a623", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  keynote:    { dot: "#7c3aed", badge: "bg-violet-50 text-violet-700 border-violet-200" },
  panel:      { dot: "#0a1a3c", badge: "bg-slate-100 text-slate-700 border-slate-200" },
  expo:       { dot: "#059669", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  demo:       { dot: "#059669", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  workshop:   { dot: "#2563eb", badge: "bg-blue-50 text-blue-700 border-blue-200" },
  networking: { dot: "#64748b", badge: "bg-slate-50 text-slate-600 border-slate-200" },
};

function getType(type = "") {
  return TYPE_COLORS[type.toLowerCase()] || { dot: "#0a1a3c", badge: "bg-gray-100 text-gray-600 border-gray-200" };
}

/* ── Section label ── */
function Label({ text }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <div className="w-5 h-px bg-amber-400" />
      <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-amber-600"
        style={{ fontFamily: "'Poppins', sans-serif" }}>
        {text}
      </span>
      <div className="w-5 h-px bg-amber-400" />
    </div>
  );
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);
  const scrollRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline is scrolled past the vertical center
      const offset = windowHeight / 2;
      const start = rect.top - offset;
      
      let progress = 0;
      if (start < 0) {
        progress = Math.min(100, Math.max(0, (-start / rect.height) * 100));
      }
      setScrollHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeDay]); // Re-run when day changes and height shifts

  const filtered = SCHEDULE.filter((s) => s.day === activeDay);

  return (
    <section
      id="schedule"
      className="py-20 bg-white border-b border-gray-100"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <Label text="Event Programme" />
          <h2
            className="text-[28px] md:text-[32px] font-semibold text-[#0a1a3c] mt-1 mb-3"
            style={{ letterSpacing: "0.02em" }}
          >
            Summit Agenda &amp;{" "}
            <span className="text-amber-500 font-bold">Schedule</span>
          </h2>
          <div className="w-10 h-[2px] bg-amber-400 mx-auto mb-4" />
          <p className="text-[13px] text-gray-400 font-light max-w-lg mx-auto leading-relaxed">
            Plan your attendance around key product demos, panel debates, and
            interactive workshops across three days.
          </p>
        </div>

        {/* ── Day Tabs ── */}
        <div className="flex justify-center gap-3 mb-16">
          {DAY_LABELS.map((d) => {
            const active = activeDay === d.day;
            return (
              <button
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                className="flex flex-col items-center px-7 py-3.5 rounded-sm border transition-all duration-200"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  background: active ? "#0a1a3c" : "#f8f9fb",
                  borderColor: active ? "#0a1a3c" : "#e5e7eb",
                  color: active ? "#ffffff" : "#6b7280",
                  boxShadow: active ? "0 4px 14px rgba(10,26,60,0.18)" : "none",
                }}
              >
                <span className="text-[13px] font-semibold tracking-wide">{d.label}</span>
                <span className="text-[10px] font-light tracking-wider mt-0.5"
                  style={{ color: active ? "rgba(255,255,255,0.6)" : "#9ca3af" }}>
                  {d.sub}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Timeline ── */}
        <div className="relative" ref={scrollRef}>

          {/* Centre vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #e2e8f0 6%, #e2e8f0 94%, transparent)" }}
          />

          {/* Animated golden line */}
          <div
            className="absolute left-1/2 top-0 w-1 -translate-x-1/2 rounded-full z-0"
            style={{ 
              height: `${scrollHeight}%`,
              background: "linear-gradient(to bottom, #fcd34d, #f59e0b)",
              boxShadow: "0 0 12px rgba(245, 158, 11, 0.4)"
            }}
          />

          <div className="flex flex-col gap-0">
            {filtered.map((item, i) => {
              const isLeft = i % 2 === 0;   // even → card on LEFT, time on right side of node
              const { dot, badge } = getType(item.type);

              return (
                <div key={i} className="relative grid grid-cols-[1fr_80px_1fr] items-center min-h-[100px]">

                  {/* ── LEFT CARD or empty ── */}
                  {isLeft ? (
                    <div className="pr-8 flex justify-end">
                      <div
                        className="tl-card bg-white border border-gray-100 rounded-sm p-5 w-full max-w-[380px]"
                        style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
                      >
                        {/* Type badge */}
                        <span className={`inline-block text-[9px] font-bold tracking-[0.2em] uppercase border px-2 py-0.5 rounded-sm mb-3 ${badge}`}>
                          {item.type}
                        </span>
                        <h4 className="text-[16.5px] font-semibold text-[#0a1a3c] leading-snug mb-1.5"
                          style={{ letterSpacing: "0.01em" }}>
                          {item.session}
                        </h4>
                        <p className="text-[14px] text-gray-400 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="pr-8 flex justify-end">
                      <span className="text-[13px] font-semibold text-gray-500 tracking-wide text-right"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {item.time}
                      </span>
                    </div>
                  )}

                  {/* ── Centre node ── */}
                  <div className="flex flex-col items-center justify-center z-10 gap-1.5">
                    <div
                      className="tl-node w-9 h-9 rounded-full border-2 border-white flex items-center justify-center"
                      style={{
                        background: "#10b981",
                        boxShadow: "0 0 0 4px rgba(16, 185, 129, 0.2), 0 2px 8px rgba(0,0,0,0.12)",
                      }}
                    >
                      <span className="text-white flex items-center justify-center">
                        {isLeft ? <ChevronLeft className="w-5 h-5" strokeWidth={3} /> : <ChevronRight className="w-5 h-5" strokeWidth={3} />}
                      </span>
                    </div>
                  </div>

                  {/* ── RIGHT CARD or empty ── */}
                  {!isLeft ? (
                    <div className="pl-8 flex justify-start">
                      <div
                        className="tl-card bg-white border border-gray-100 rounded-sm p-5 w-full max-w-[380px]"
                        style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
                      >
                        <span className={`inline-block text-[9px] font-bold tracking-[0.2em] uppercase border px-2 py-0.5 rounded-sm mb-3 ${badge}`}>
                          {item.type}
                        </span>
                        <h4 className="text-[14.5px] font-semibold text-[#0a1a3c] leading-snug mb-1.5"
                          style={{ letterSpacing: "0.01em" }}>
                          {item.session}
                        </h4>
                        <p className="text-[12px] text-gray-400 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="pl-8 flex justify-start">
                      <span className="text-[13px] font-semibold text-gray-500 tracking-wide text-left"
                        style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {item.time}
                      </span>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}