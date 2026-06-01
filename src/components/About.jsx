import { PRODUCT_ZONES } from "../data/misc";
import { Globe, Handshake, Lightbulb, TrendingUp, Building, Wrench, Monitor, Users, Star, Microscope, Stethoscope, Hospital, Pill } from "lucide-react";
import ImageReveal from "./ImageReveal";

/* ── Globals: Poppins + fixed bg + zoom + scroll sections ── */
if (typeof document !== "undefined" && !document.getElementById("about-globals")) {
  const s = document.createElement("style");
  s.id = "about-globals";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    .about-root {
      font-family: 'Poppins', sans-serif;
      position: relative;
      clip-path: inset(0);
    }

    /* ── Fixed parallax background ── */
    .about-fixed-bg {
      position: fixed;
      inset: 0;
      z-index: 0;
      background-image: url('https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=1920&q=60&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      filter: blur(6px) brightness(0.25) saturate(0.6);
      transform: scale(1.06);
      pointer-events: none;
    }
    .about-fixed-bg::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(8, 20, 50, 0.72);
    }

    /* ── Each scroll section sits above the fixed bg ── */}
    .about-panel {
      position: relative;
      z-index: 1;
    }

    /* ── Image zoom ── */
    .about-img-wrap { overflow: hidden; }
    .about-img-wrap img {
      transition: transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      display: block;
      width: 100%;
    }
    .about-img-wrap:hover img { transform: scale(1.07); }

    /* ── Table profile rows ── */
    .profile-row:hover { background: rgba(255,255,255,0.04); }
  `;
  document.head.appendChild(s);
}

/* ── Data ── */
const attendees = [
  { title: "Medical Professionals", desc: "Doctors, surgeons, specialist clinicians, physiotherapists, and nursing heads seeking the latest advancements." },
  { title: "Healthcare Executives", desc: "Hospital administrators, CEOs, managing directors, and procurement managers sourcing state-of-the-art infrastructure." },
  { title: "Trade & Distribution", desc: "Medical device dealers, importers, distributors, and pharmacy chains seeking manufacturing partners." },
  { title: "Scientific Experts", desc: "Diagnostic lab owners, clinical scientists, pathologists, and laboratory technicians exploring automation." },
];

const exhibitBenefits = [
  { icon: <Globe className="w-7 h-7 text-amber-400" strokeWidth={1.5} />, title: "Global Exposure", desc: "Showcase innovations to 5,000+ targeted healthcare decision makers from across Eastern India." },
  { icon: <Handshake className="w-7 h-7 text-amber-400" strokeWidth={1.5} />, title: "Direct Networking", desc: "Connect with local distributors, state health procurement officers, and hospital owners." },
  { icon: <Lightbulb className="w-7 h-7 text-amber-400" strokeWidth={1.5} />, title: "Product Launches", desc: "Launch equipment or diagnostic systems with maximum media and trade buyer visibility." },
  { icon: <TrendingUp className="w-7 h-7 text-amber-400" strokeWidth={1.5} />, title: "Business Growth", desc: "Secure supply contracts, letters of intent, and partnership agreements on-site." },
];

const services = [
  { icon: <Building className="w-7 h-7 text-amber-400" strokeWidth={1.5} />, title: "Exhibition Management", desc: "Organizing specialized B2B industrial expos across India with end-to-end event operations." },
  { icon: <Wrench className="w-7 h-7 text-amber-400" strokeWidth={1.5} />, title: "Stall Fabrication Support", desc: "Coordinating custom stall designs and layout setups for industry vendors of all scales." },
  { icon: <Handshake className="w-7 h-7 text-amber-400" strokeWidth={1.5} />, title: "B2B Networking", desc: "Hosting strategic trade meets like the Enterprise India — Dealers & Distributors Expo." },
  { icon: <Monitor className="w-7 h-7 text-amber-400" strokeWidth={1.5} />, title: "Visitor Entry Registration", desc: "Managing pre-event credentials via online portals for seamless attendee onboarding." },
];

const getZoneIcon = (emoji) => {
  const baseClasses = "w-9 h-9 text-[#0a1a3c] group-hover:text-white transition-colors duration-500";
  switch (emoji) {
    case "🔬": return <Microscope className={baseClasses} strokeWidth={1.5} />;
    case "🩺": return <Stethoscope className={baseClasses} strokeWidth={1.5} />;
    case "🏥": return <Hospital className={baseClasses} strokeWidth={1.5} />;
    case "💊": return <Pill className={baseClasses} strokeWidth={1.5} />;
    default: return null;
  }
};

const profileRows = [
  { exhibitor: "OT & ICU Equipment Manufacturers", visitor: "Medical Practitioners & Doctors" },
  { exhibitor: "Diagnostic & Lab Devices", visitor: "Hospital Owners & Directors" },
  { exhibitor: "Surgical & Hospital Furniture", visitor: "Medical Lab In-charges" },
  { exhibitor: "Medical Textiles & Consumables", visitor: "Retail Distributors & Wholesalers" },
  { exhibitor: "Healthcare Software Developers", visitor: "Biomedical Engineers & Technicians" },
];

/* ── Reusable: section label ── */
function Label({ text }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <div className="w-5 h-px bg-amber-400" />
      <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-amber-400">
        {text}
      </span>
      <div className="w-5 h-px bg-amber-400" />
    </div>
  );
}

/* ── Reusable: white glass card panel ── */
function Panel({ children, className = "" }) {
  return (
    <div
      className={`about-panel bg-white/[0.96] backdrop-blur-sm border-t border-white/30 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Reusable: dark glass card panel ── */
function DarkPanel({ children, className = "" }) {
  return (
    <div
      className={`about-panel backdrop-blur-md border-t border-white/10 shadow-xl ${className}`}
      style={{ background: "rgba(8,20,50,0.82)" }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div id="about" className="about-root">

      {/* ── FIXED BACKGROUND ── */}
      <div className="about-fixed-bg" />

      {/* ════════════════════════════════════════
          SECTION 1 — Core Description
          White panel over fixed bg
      ════════════════════════════════════════ */}
      <Panel>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Image + quote */}
            <div className="flex flex-col">
              <div className="about-img-wrap relative w-full rounded-sm overflow-hidden shadow-lg">
                <ImageReveal
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=85&auto=format&fit=crop"
                  alt="Bihar Medical Expo Exhibition Hall"
                  className="w-full h-full"
                  imgClassName="w-full aspect-video object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(8,20,50,0.72) 0%, transparent 55%)" }}
                />
                <div className="absolute bottom-5 left-5 z-10">
                  <span className="inline-block text-[9px] font-bold tracking-widest uppercase bg-amber-500 text-white px-2.5 py-1 rounded-sm mb-2">
                    Annual Event
                  </span>
                  <p className="text-white text-[15px] font-semibold leading-snug max-w-[260px]">
                    Eastern India's Gateway to Healthcare Innovation
                  </p>
                </div>
              </div>

              <div className="mt-5 border-l-4 border-[#0a1a3c] pl-5 py-3 bg-slate-50 rounded-r-sm">
                <p className="text-[12.5px] text-gray-500 leading-relaxed italic font-light">
                  "Developing health infrastructure is our top priority. Bihar Medical Expo 2026
                  provides a critical channel to introduce state-of-the-art diagnostics and patient
                  care technologies to regional healthcare centres."
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <Label text="About the Summit" />
              <h2
                className="text-[30px] md:text-[34px] font-semibold text-[#0a1a3c] leading-snug mb-5"
                style={{ letterSpacing: "0.02em" }}
              >
                Bridging Global Healthcare Innovation with{" "}
                <span className="text-amber-500 font-bold">Regional Medical Infrastructure</span>
              </h2>
              <p className="text-[13.5px] text-gray-500 leading-[1.9] mb-4 font-light">
                The <span className="font-semibold text-gray-700">5th Edition of Bihar Medical Expo 2026</span> is
                the premier B2B trade show and conference dedicated to medical technology, diagnostics,
                lab equipment, and hospital systems.
              </p>
              <p className="text-[13.5px] text-gray-500 leading-[1.9] mb-8 font-light">
                Organized by <span className="font-semibold text-gray-700">Star Exhibitions</span>, the summit
                connects global medical innovators with state policy makers, practitioners, and dealers
                from Bihar, Jharkhand, West Bengal, and neighbouring countries including Nepal.
              </p>
              <a
                href="#register"
                className="self-start inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] uppercase tracking-widest px-7 py-3.5 rounded-sm shadow transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Visitor Pass
              </a>
            </div>
          </div>
        </div>
      </Panel>

      {/* ════════════════════════════════════════
          SECTION 2 — Services Offered
          Own fixed-attachment exhibition bg,
          fully transparent content over it
      ════════════════════════════════════════ */}
      <div className="about-panel relative overflow-hidden">

        {/* Exhibition hall image — fixed attachment so it stays put while scrolling */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&q=70&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark tint overlay so text stays legible */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "rgba(5, 14, 38, 0.78)" }}
        />

        {/* Transparent content — sits above the image */}
        <div className="relative z-[2] max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="text-center mb-14">
            <Label text="Star Exhibitions" />
            <h2
              className="text-[26px] md:text-[30px] font-semibold text-white mt-1"
              style={{ letterSpacing: "0.03em" }}
            >
              Services Offered
            </h2>
            <p className="text-[16px] text-white/90 mt-2 font-light max-w-lg mx-auto">
              Full-spectrum trade event organizer delivering end-to-end exhibition solutions across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group border border-white/15 rounded-sm p-6 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <span className="block mb-4">{svc.icon}</span>
                <div className="w-7 h-[2px] bg-amber-400 mb-3 group-hover:w-12 transition-all duration-500" />
                <h3 className="text-[13px] font-semibold text-white mb-2 tracking-wide">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-white/80 leading-relaxed font-light">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          SECTION 3 — Featured Exhibition Sectors
          White panel
      ════════════════════════════════════════ */}
      <Panel>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <Label text="Product Classification" />
            <h2
              className="text-[26px] md:text-[30px] font-semibold text-[#0a1a3c] mt-1 mb-3"
              style={{ letterSpacing: "0.02em" }}
            >
              Featured Exhibition Sectors
            </h2>
            <div className="w-10 h-[2px] bg-amber-400 mb-3" />
            <p className="text-[15px] text-gray-400 font-light max-w-md mx-auto leading-relaxed">
              The expo floor is systematically organised into distinct product zones
              for optimal buyer and procurement navigation.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-sm overflow-hidden">
            {PRODUCT_ZONES.map((zone, i) => (
              <div
                key={zone.title}
                className="group relative flex flex-col p-7 bg-white hover:bg-[#0a1a3c] transition-all duration-500 cursor-default"
              >
                {/* Top amber bar — grows on hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-amber-400 group-hover:w-full transition-all duration-500" />

                {/* Index number */}
                <span className="text-[11px] font-bold tracking-[0.25em] text-gray-300 group-hover:text-amber-400/60 transition-colors duration-300 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <span className="text-3xl block mb-5 group-hover:text-white">{getZoneIcon(zone.icon)}</span>

                {/* Title */}
                <h3 className="font-semibold text-[#0a1a3c] group-hover:text-white text-[13.5px] mb-2.5 tracking-wide transition-colors duration-300 leading-snug">
                  {zone.title}
                </h3>

                {/* Divider */}
                <div className="w-6 h-[2px] bg-amber-400 mb-3 group-hover:w-10 transition-all duration-500" />

                {/* Desc */}
                <p className="text-[14px] text-gray-600 group-hover:text-white/90 leading-relaxed font-light transition-colors duration-300 mt-auto">
                  {zone.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Panel>

      {/* ════════════════════════════════════════
          SECTION 4 — Target Profiles
          Dark glass panel — full-width table
      ════════════════════════════════════════ */}
      <DarkPanel>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="text-center flex flex-col items-center justify-center mb-14">
            <Label text="B2B & B2P Trading Hub" />
            <h2
              className="text-[26px] md:text-[30px] font-semibold text-white mt-1 mb-3"
              style={{ letterSpacing: "0.03em" }}
            >
              Target Profiles
            </h2>
            <div className="w-10 h-[2px] bg-amber-400 mb-3" />
            <p className="text-[13px] text-white/50 mt-2 font-light max-w-xl mx-auto">
              The expo serves as a targeted B2B and B2P hub connecting manufacturers directly
              with healthcare procurement decision-makers.
            </p>
          </div>

          {/* Full-width two-column table with horizontal scroll for mobile */}
          <div className="border border-white/10 rounded-sm overflow-x-auto">
            <div className="min-w-[600px] flex flex-col">

            {/* Table header */}
            <div className="grid grid-cols-2">
              <div className="bg-[#0a1a3c] border-r border-white/10 px-8 py-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white">
                  Exhibitor Profile
                </span>
                <span className="ml-auto text-[10px] text-amber-400/70 font-medium tracking-wide">
                  100+ Brands
                </span>
              </div>
              <div className="bg-emerald-800 px-8 py-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white">
                  Visitor Profile
                </span>
                <span className="ml-auto text-[10px] text-emerald-300/80 font-medium tracking-wide">
                  5,000+ Buyers
                </span>
              </div>
            </div>

            {/* Table rows */}
            {profileRows.map((row, i) => (
              <div
                key={i}
                className="profile-row grid grid-cols-2 border-t border-white/[0.07] transition-colors duration-150"
              >
                {/* Exhibitor cell */}
                <div className="flex items-center gap-3.5 px-8 py-4 border-r border-white/[0.07]"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="text-[13px] text-white/75 font-light">{row.exhibitor}</span>
                </div>
                {/* Visitor cell */}
                <div className="flex items-center gap-3.5 px-8 py-4"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-[13px] text-white/75 font-light">{row.visitor}</span>
                </div>
              </div>
            ))}

            {/* Table footer */}
            <div className="grid grid-cols-2 border-t border-white/10">
              <div className="px-8 py-3.5 border-r border-white/10 bg-amber-500/10">
                <p className="text-[11.5px] text-amber-400 font-medium">
                  National & international manufacturing brands
                </p>
              </div>
              <div className="px-8 py-3.5 bg-emerald-500/10">
                <p className="text-[11.5px] text-emerald-400 font-medium">
                  Doctors, hospital owners & distributors — Bihar & neighbouring states
                </p>
              </div>
            </div>
          </div>
          </div>

          {/* B2B exchange label */}
          <div className="flex justify-center mt-6">
            <div
              className="inline-flex items-center gap-3 border border-white/15 rounded-sm px-6 py-2.5"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <span className="w-16 h-px bg-amber-400/40" />
              <span className="text-[10.5px] font-semibold text-white/50 tracking-[0.2em] uppercase">
                B2B / B2P Exchange
              </span>
              <span className="w-16 h-px bg-emerald-400/40" />
            </div>
          </div>
        </div>
      </DarkPanel>

      {/* ════════════════════════════════════════
          SECTION 5 — Who Attends + Why Exhibit
          White panel
      ════════════════════════════════════════ */}
      <Panel>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Who Should Attend */}
            <div className="flex flex-col border border-gray-100 rounded-sm bg-white overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-8 py-6 border-b border-gray-100 bg-[#f8f9fb]">
                <div className="w-8 h-8 rounded bg-[#0a1a3c]/5 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#0a1a3c]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#0a1a3c] tracking-wide">
                  Who Should Attend?
                </h3>
              </div>
              <div className="flex-1 flex flex-col divide-y divide-gray-50">
                {attendees.map((a) => (
                  <div key={a.title} className="flex-1 flex items-start gap-4 px-8 py-5 hover:bg-slate-50 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-[7px] flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-[13.5px] mb-1.5 tracking-wide">{a.title}</h4>
                      <p className="text-[14px] text-gray-600 leading-relaxed font-light">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Exhibit */}
            <div className="flex flex-col border border-gray-100 rounded-sm bg-white overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-8 py-6 border-b border-gray-100 bg-[#f8f9fb]">
                <div className="w-8 h-8 rounded bg-amber-400/15 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#0a1a3c] tracking-wide">
                  Why Exhibit?
                </h3>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100">
                {exhibitBenefits.map((eb) => (
                  <div
                    key={eb.title}
                    className="flex flex-col p-8 bg-white hover:bg-slate-50 transition-colors duration-300 group"
                  >
                    <span className="block mb-4">{eb.icon}</span>
                    <div className="w-6 h-[2px] bg-amber-400 mb-4 group-hover:w-10 transition-all duration-300" />
                    <h4 className="font-semibold text-gray-800 text-[13.5px] mb-2 tracking-wide">{eb.title}</h4>
                    <p className="text-[14px] text-gray-600 leading-relaxed font-light mt-auto">{eb.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Panel>

    </div>
  );
}