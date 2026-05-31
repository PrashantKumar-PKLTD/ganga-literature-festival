import { useState, useEffect, useRef } from "react";

/* ── Poppins + keyframe animations injected once ── */
if (typeof document !== "undefined" && !document.getElementById("hero-globals")) {
  const style = document.createElement("style");
  style.id = "hero-globals";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
    .font-poppins { font-family: 'Poppins', sans-serif; }

    @keyframes heroPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: .4; transform: scale(.82); }
    }
    @keyframes heroFadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .hero-anim     { animation: heroFadeUp .7s cubic-bezier(.22,1,.36,1) both; }
    .hero-d1       { animation-delay: .05s; }
    .hero-d2       { animation-delay: .15s; }
    .hero-d3       { animation-delay: .25s; }
    .hero-d4       { animation-delay: .35s; }
    .hero-d5       { animation-delay: .45s; }
    .hero-dr1      { animation-delay: .10s; }
    .hero-dr2      { animation-delay: .28s; }
    .badge-dot     { animation: heroPulse 2s infinite; }
    .btn-gold:hover    { background-color: #d97706 !important; transform: translateY(-2px); }
    .btn-outline:hover { border-color: #f5a623 !important; background: rgba(245,166,35,.08) !important; transform: translateY(-2px); }
  `;
  document.head.appendChild(style);
}

const EVENT_DATE = new Date("2026-11-21T10:00:00+05:30");

function getTimeLeft() {
  const diff = EVENT_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000)   % 60,
    seconds: Math.floor(diff / 1000)    % 60,
  };
}

function useCountUp(target, duration = 1800, delay = 0) {
  const [value, setValue] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    let start = null;
    const t = setTimeout(() => {
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(t); if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target, duration, delay]);
  return value;
}

function StatCard({ value, suffix = "", label, delay }) {
  const animated = useCountUp(value, 1800, delay);
  return (
    <div className="font-poppins bg-white/10 border border-white/10 border-l-4 border-l-amber-400 rounded-sm p-3.5">
      <span className="block text-[26px] font-extrabold text-white leading-none tracking-tight">
        {animated.toLocaleString()}{suffix}
      </span>
      <span className="block text-[9.5px] font-semibold text-white/50 tracking-widest uppercase mt-1">
        {label}
      </span>
    </div>
  );
}

function CountUnit({ val, label }) {
  return (
    <div className="font-poppins bg-white/10 border border-white/10 rounded-sm pt-3 pb-2 px-1.5 flex flex-col items-center gap-1">
      <span className="text-[28px] font-extrabold text-white leading-none tracking-wider tabular-nums">
        {String(val).padStart(2, "0")}
      </span>
      <span className="text-[8.5px] font-bold tracking-widest uppercase text-white/40">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="font-poppins relative min-h-screen flex items-center overflow-hidden border-b-4 border-amber-500 bg-[#0a1a3c]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80")`,
          opacity: 1,
        }}
      />

      {/* Deep navy gradient overlay — keeps text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(46, 61, 93, 0.97) 0%, rgba(32, 42, 64, 0.91) 55%, rgba(8,45,92,0.87) 100%)",
        }}
      />

      {/* Amber top accent stripe */}
      <div
        className="absolute top-0 left-0 w-full h-1.5 z-10"
        style={{
          background: "linear-gradient(90deg, #f5a623 0%, #d97706 45%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col items-start">

            {/* H1 */}
            <h1 className="hero-anim hero-d2 text-5xl lg:text-[54px] font-extrabold text-white leading-tight tracking-[0.04em] uppercase mb-1.5">
              Bihar
              <span className="block text-amber-400 tracking-[0.06em] text-[46px] lg:text-[50px]">
                Medical Expo
              </span>
              2026
            </h1>

            {/* Subtitle */}
            <p className="hero-anim hero-d3 text-[12px] font-semibold text-white/50 tracking-widest uppercase mb-4">
              Gyan Bhawan, Patna &nbsp;·&nbsp; Eastern India's Premier B2B Medical Trade Fair
            </p>

            {/* Divider */}
            <div className="hero-anim hero-d3 w-14 h-[3px] bg-amber-400 rounded-full mb-5" />

            {/* Description */}
            <p className="hero-anim hero-d4 text-[14px] text-white/70 leading-loose max-w-[500px] mb-8 tracking-wide">
              Bringing together world-class healthcare manufacturers, clinical practitioners,
              hospital directors, and distributors. Three days of innovative product launches,
              scientific sessions, and high-value networking.
            </p>

            {/* CTAs */}
            <div className="hero-anim hero-d5 flex flex-wrap gap-3">
              <a
                href="#register"
                className="btn-gold font-poppins font-bold text-[15px] tracking-widest uppercase text-[#0a1a3c] bg-amber-400 px-8 py-3.5 rounded-sm transition-all duration-200"
              >
                Register as Visitor
              </a>
              <a
                href="#contact"
                className="btn-outline font-poppins font-bold text-[15px] tracking-widest uppercase text-white border-2 border-white/40 px-8 py-3 rounded-sm transition-all duration-200"
              >
                Book a Stall
              </a>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-4">

            {/* Stats board */}
            <div className="hero-anim hero-dr1 bg-white/5 border border-white/10 rounded p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-poppins text-[9.5px] font-bold tracking-widest uppercase text-white/40 whitespace-nowrap">
                  Expo Highlights
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <StatCard value={150}   suffix="+" label="Exhibitors"          delay={300} />
                <StatCard value={5000}  suffix="+" label="Healthcare Buyers"   delay={450} />
                <StatCard value={10000} suffix="+" label="Sq. Metres Area"     delay={600} />
                <StatCard value={20}    suffix="+" label="Scientific Sessions" delay={750} />
              </div>

              {/* Organiser */}
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-sm px-3 py-2.5">
                <div className="font-poppins w-8 h-8 rounded-sm bg-[#1a3a6b] border border-amber-400/40 flex items-center justify-center text-[11px] font-extrabold text-amber-400 tracking-wider flex-shrink-0">
                  SE
                </div>
                <div>
                  <p className="font-poppins text-[12.5px] font-bold text-white tracking-wider leading-tight">
                    Star Exhibitions
                  </p>
                  <p className="font-poppins text-[10.5px] text-white/40 leading-tight mt-0.5">
                    Leading B2B Trade Show Organizers
                  </p>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div className="hero-anim hero-dr2 border border-amber-400/30 rounded p-5 backdrop-blur-md bg-[#0a1a3c]/80">
              <p className="font-poppins text-[9.5px] font-bold tracking-widest uppercase text-amber-400 mb-3">
                ⏱ Summit Commencing In
              </p>
              <div className="grid grid-cols-4 gap-2">
                <CountUnit val={time.days}    label="Days"  />
                <CountUnit val={time.hours}   label="Hours" />
                <CountUnit val={time.minutes} label="Mins"  />
                <CountUnit val={time.seconds} label="Secs"  />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}