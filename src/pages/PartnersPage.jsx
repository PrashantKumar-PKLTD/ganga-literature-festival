import { useState } from "react";
import { ArrowRight, PenLine, X } from "lucide-react";

const years = ["2026"];

const partnerGroups = [
  {
    label: "Presenting Partner",
    partners: [{ name: "Janata", logo: "/partner-logos/icon1.png" }],
  },
  {
    label: "Government and Industry Partners",
    partners: [
      { name: "BIADA Department of Industries", logo: "/partner-logos/icon5.png" },
      { name: "CII", logo: "/partner-logos/icon4.png" },
      { name: "TiE Patna", logo: "/partner-logos/icon6.png" },
    ],
  },
  {
    label: "Institutional and Knowledge Partners",
    partners: [
      { name: "CIMP", logo: "/partner-logos/icon7.png" },
      { name: "CIMP-BIIF", logo: "/partner-logos/icon8.png" },
      { name: "Let's Inspire Bihar", logo: "/partner-logos/icon12.png" },
      { name: "Vishwa Hindi Parishad", logo: "/partner-logos/icon17.png" },
    ],
  },
  {
    label: "Healthcare and Social Impact Partners",
    partners: [
      { name: "QA Stem Cell Centre", logo: "/partner-logos/icon3.png" },
      { name: "Sulabh", logo: "/partner-logos/icon10.png" },
      { name: "Ruban", logo: "/partner-logos/icon9.png" },
      { name: "Indian Medical Association", logo: "/partner-logos/icon11.png" },
      { name: "eSSAA Foundation", logo: "/partner-logos/icon20.png" },
    ],
  },
  {
    label: "Media and Outreach Partners",
    partners: [
      { name: "MATV", logo: "/partner-logos/icon2.png" },
      { name: "Earshot", logo: "/partner-logos/icon14.png" },
      { name: "RBM News", logo: "/partner-logos/icon21.png" },
      { name: "Apisode", logo: "/partner-logos/apisode.png" },
    ],
  },
  {
    label: "Innovation, Education and Business Partners",
    partners: [
      { name: "Digital for Humanity", logo: "/partner-logos/icon13.png" },
      { name: "The Pro Educator", logo: "/partner-logos/icon15.png" },
      { name: "Startup Legal", logo: "/partner-logos/icon16.png" },
      { name: "B-Hub Maurya Lok", logo: "/partner-logos/icon18.png" },
      { name: "Prashant Kumar LTD", logo: "/partner-logos/icon19.png" },
    ],
  },
];

function HeroArch() {
  return (
    <div className="relative mx-auto w-full max-w-2xl px-7 py-16 text-center md:px-12 md:py-20">
      <div className="absolute inset-0 border-[8px] border-[#b58b32] opacity-90 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
      <div className="relative">
        <img src="/logo.png" alt="Ganga Literature Festival" className="mx-auto mb-8 h-24 w-auto object-contain" />
        <p className="font-serif text-3xl font-black uppercase leading-none text-white md:text-4xl">
          Ganga Literature Festival
        </p>
        <h1 className="mt-4 font-serif text-6xl font-black uppercase leading-[0.85] text-white md:text-8xl">
          Partners
        </h1>
      </div>
    </div>
  );
}

function PartnerLogoCard({ partner }) {
  return (
    <article className="group flex min-h-[70px] items-center justify-center p-1 transition hover:-translate-y-1">
      <img
        src={partner.logo}
        alt={partner.name}
        loading="lazy"
        className="max-h-24 w-full max-w-[220px] object-contain transition duration-300 group-hover:scale-105"
      />
    </article>
  );
}

function PartnerCtaCard({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center justify-end gap-3 bg-transparent px-0 py-2 text-right text-xs font-black uppercase tracking-[0.14em] text-black transition hover:-translate-y-1"
      aria-label="Open partner form"
    >
      Partner with GLF
      <PenLine className="h-4 w-4 shrink-0" />
    </button>
  );
}

export default function PartnersPage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main className="pt-[78px] md:pt-[82px]">
      <section
        className="relative min-h-[650px] overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gangaimg1.png")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,139,50,0.2),rgba(0,0,0,0.6))]" />
        <div className="relative mx-auto flex min-h-[650px] max-w-6xl items-center justify-center px-5 md:px-8">
          <HeroArch />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-white [clip-path:polygon(0_60%,4%_40%,8%_62%,13%_42%,21%_62%,31%_38%,40%_58%,50%_40%,60%_62%,70%_38%,82%_58%,92%_40%,100%_60%,100%_100%,0_100%)]" />
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <span className="absolute left-10 top-20 text-7xl font-black leading-none text-[#b58b32]/25">
          *
        </span>
        <span className="absolute right-20 top-64 text-6xl font-black leading-none text-[#b58b32]/25">
          *
        </span>

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
              Our Support System
            </p>
            <h2 className="mt-4 font-serif text-5xl font-black leading-none text-black md:text-6xl">
              Our Partners
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-8 text-black/70">
              We collaborate with institutions, cultural organisations, brands,
              media partners, hospitality teams, schools, and patrons who help build
              a thoughtful literature festival for Patna.
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-4 border border-[#b58b32]/45 px-6 py-5 text-center md:flex-row md:text-left">
            <p className="text-sm font-bold text-black">
              For partnership enquiries and collaboration opportunities, write to us at
              <a href="mailto:partnership@gangalitfest.in" className="ml-1 text-[#b58b32] underline-offset-4 hover:underline">
                partnership@gangalitfest.in
              </a>
            </p>
            <a
              href="mailto:partnership@gangalitfest.in"
              className="inline-flex shrink-0 items-center gap-2 bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b58b32] hover:text-black"
            >
              Enquire
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 border-b border-[#b58b32]/35 pb-3">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="flex gap-9">
                {years.map((year) => (
                  <button
                    key={year}
                    className={`pb-3 text-sm font-bold ${
                      year === "2026"
                        ? "border-b-2 border-[#b58b32] text-[#b58b32]"
                        : "text-black"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 space-y-10 text-center">
            {partnerGroups.map((group) => (
              <section key={group.label}>
                <div className="relative">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-black">
                    {group.label}
                  </p>
                  <div
                    className="mt-4 flex justify-center lg:absolute lg:top-1/2 lg:mt-0 lg:-translate-y-1/2"
                    style={{ right: "calc((100vw - 100%) / -2 + 2rem)" }}
                  >
                    <PartnerCtaCard onClick={() => setFormOpen(true)} />
                  </div>
                </div>
                <div className="mx-auto mt-5 grid max-w-5xl grid-cols-2 items-center justify-center gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.partners.map((partner) => (
                    <PartnerLogoCard key={partner.logo} partner={partner} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {formOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-5 py-8">
          <div className="relative w-full max-w-xl bg-white p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-black/15 text-black transition hover:bg-black hover:text-white"
              aria-label="Close connect form"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b58b32]">
              Partner With Us
            </p>
            <h3 className="mt-3 font-serif text-4xl font-black leading-tight text-black">
              Partner with Ganga Literature Festival
            </h3>

            <form className="mt-8 grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-black/15 px-4 py-3 text-sm font-semibold outline-none focus:border-[#b58b32]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-black/15 px-4 py-3 text-sm font-semibold outline-none focus:border-[#b58b32]"
              />
              <input
                type="tel"
                name="number"
                placeholder="Number"
                className="border border-black/15 px-4 py-3 text-sm font-semibold outline-none focus:border-[#b58b32]"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="resize-none border border-black/15 px-4 py-3 text-sm font-semibold outline-none focus:border-[#b58b32]"
              />
              <button
                type="submit"
                className="mt-2 bg-[#b58b32] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
