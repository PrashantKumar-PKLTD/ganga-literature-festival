import { ArrowRight } from "lucide-react";

const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2018"];

const partnerGroups = [
  {
    label: "Presenting Partner",
    partners: [
      { name: "Ganga Literature Festival", mark: "GLF" },
    ],
  },
  {
    label: "State Partner",
    partners: [
      { name: "Government of Bihar", mark: "Bihar" },
    ],
  },
  {
    label: "Impact Partner",
    partners: [
      { name: "Ganga Cultural Foundation", mark: "GCF" },
    ],
  },
  {
    label: "Supported By",
    partners: [
      { name: "Knowledge Forum", mark: "KF" },
      { name: "River Arts Collective", mark: "RAC" },
      { name: "Patna Reading Circle", mark: "PRC" },
    ],
  },
  {
    label: "Media and Outreach Partners",
    partners: [
      { name: "Literary Review Desk", mark: "LRD" },
      { name: "Campus Voices", mark: "CV" },
      { name: "Book City Network", mark: "BCN" },
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

function PartnerCard({ partner }) {
  return (
    <article className="group flex min-h-[150px] flex-col items-center justify-center border border-[#b58b32]/35 bg-white px-6 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#b58b32]/45 bg-[#f8f6f1] font-serif text-2xl font-black text-black transition group-hover:bg-black group-hover:text-white">
        {partner.mark}
      </div>
      <h3 className="mt-5 text-sm font-black uppercase tracking-[0.16em] text-black">
        {partner.name}
      </h3>
    </article>
  );
}

export default function PartnersPage() {
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

          <div className="mt-14 overflow-x-auto border-b border-[#b58b32]/35 pb-3">
            <div className="flex min-w-max gap-9">
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

          <div className="mt-16 space-y-16">
            {partnerGroups.map((group) => (
              <section key={group.label} className="text-center">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-black">
                  {group.label}
                </p>
                <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.partners.map((partner) => (
                    <PartnerCard key={partner.name} partner={partner} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
