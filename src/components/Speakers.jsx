import SPEAKERS from "../data/speakers";
import ImageReveal from "./ImageReveal";

/* ── Inject Poppins once ── */
if (typeof document !== "undefined" && !document.getElementById("speakers-globals")) {
  const s = document.createElement("style");
  s.id = "speakers-globals";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    .speaker-card-img img {
      transition: transform 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .speaker-card:hover .speaker-card-img img {
      transform: scale(1.08);
    }
    .speaker-card::before {
      content: '';
      position: absolute;
      bottom: 0; left: 0;
      width: 0; height: 2px;
      background: #f5a623;
      transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      z-index: 10;
    }
    .speaker-card:hover::before { width: 100%; }
  `;
  document.head.appendChild(s);
}

/* ── Unsplash medical professional photos ── */
const MEDICAL_IMGS = [
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80&auto=format&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&q=80&auto=format&fit=crop&crop=face",
];

export function SpeakerCard({ speaker, index }) {
  const img = speaker.img || MEDICAL_IMGS[index % MEDICAL_IMGS.length];

  return (
    <div className="flex flex-col group cursor-default">
      {/* ── Image area ── */}
      <div className="w-full h-[220px] rounded-2xl overflow-hidden mb-4 bg-slate-100">
        <ImageReveal
          src={img}
          alt={speaker.name}
          className="w-full h-full"
          imgClassName="w-full h-full object-cover object-top"
          delay={(index % 4) * 150}
        />
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col px-1">
        {/* Name */}
        <h3 className="text-[17px] font-bold text-black leading-snug mb-0.5">
          {speaker.name}
        </h3>

        {/* Designation */}
        <p className="text-[12px] font-semibold text-black leading-snug mb-1">
          {speaker.designation}
        </p>

        {/* Org */}
        <p className="text-[12.5px] font-bold text-red-600 mb-3 tracking-wide">
          ({speaker.org})
        </p>

        {/* Social Icons */}
        <div className="flex gap-2.5 items-center mt-1">
          {/* Facebook */}
          <a href="#" className="w-[26px] h-[26px] rounded-full bg-[#3b5998] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          {/* X / Twitter */}
          <a href="#" className="w-[26px] h-[26px] rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" className="w-[26px] h-[26px] rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Section label ── */
function Label({ text }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <div className="w-5 h-px bg-amber-400" />
      <span
        className="text-[10px] font-bold tracking-[0.28em] uppercase text-amber-600"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {text}
      </span>
      <div className="w-5 h-px bg-amber-400" />
    </div>
  );
}

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="py-16 bg-white border-b border-gray-100"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <Label text="Distinguished Speakers" />
            <h2
              className="text-[28px] md:text-[32px] font-semibold text-[#0a1a3c] leading-snug mt-1 mb-3"
              style={{ letterSpacing: "0.02em" }}
            >
              Summit Speakers &amp;{" "}
              <span className="text-amber-500 font-bold">Panel Guests</span>
          </h2>
            <div className="w-10 h-[2px] bg-amber-400 mb-4" />
            <p className="text-[13px] text-gray-400 leading-relaxed font-light">
              Meet the eminent medical practitioners, health administrators, policy makers,
              and technology manufacturers leading key discussions at the expo.
            </p>
          </div>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {["Clinical Experts", "Trade Leaders", "Policy Makers", "Tech Innovators"].map((tag) => (
              <span
                key={tag}
                className="border border-gray-200 text-[#0a1a3c] text-[10.5px] font-semibold px-3.5 py-1.5 rounded-sm tracking-wide bg-[#f8f9fb]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {SPEAKERS.map((s, i) => (
            <SpeakerCard key={s.id} speaker={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}