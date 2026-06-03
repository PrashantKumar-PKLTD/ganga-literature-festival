import { Search } from "lucide-react";
import SPEAKERS from "../data/speakers";

const YEARS = ["2026"];

export default function SpeakersPage() {
  return (
    <main className="pt-[78px] md:pt-[82px]">
      <section
        className="relative min-h-[620px] overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gangaimg1.png")' }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,139,50,0.22),rgba(0,0,0,0.58))]" />
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center justify-center px-5 text-center md:px-8">
          <div className="relative px-8 py-16">
            <div className="absolute inset-0 border-[8px] border-[#b58b32] opacity-85 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
            <div className="relative">
              <p className="font-serif text-3xl font-black uppercase leading-none text-white md:text-4xl">
                Ganga Literature Festival
              </p>
              <h1 className="mt-4 font-serif text-6xl font-black uppercase leading-[0.85] text-white md:text-8xl">
                Speakers
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[#f8f6f1] [clip-path:polygon(0_60%,4%_40%,8%_62%,13%_42%,21%_62%,31%_38%,40%_58%,50%_40%,60%_62%,70%_38%,82%_58%,92%_40%,100%_60%,100%_100%,0_100%)]" />
      </section>

      <section className="relative overflow-hidden bg-[#f8f6f1] px-5 py-20 md:px-8 md:py-28">
        <span className="absolute left-10 top-20 text-6xl font-black text-[#b58b32]/30">*</span>
        <span className="absolute right-14 top-32 text-5xl font-black text-[#b58b32]/30">*</span>

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="font-serif text-5xl font-black leading-none text-black md:text-6xl">
              Meet the Speakers
            </h2>
            <div className="flex w-full overflow-hidden rounded-md border border-[#b58b32]/40 bg-white md:max-w-sm">
              <input
                className="h-14 min-w-0 flex-1 px-5 text-sm outline-none"
                placeholder="Search by author name"
              />
              <button className="flex h-14 w-16 items-center justify-center bg-[#b58b32] text-white" aria-label="Search speakers">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto border-b border-[#b58b32]/35 pb-3">
            <div className="flex min-w-max gap-9">
              {YEARS.map((year) => (
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

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SPEAKERS.map((speaker) => (
              <article key={speaker.name} className="text-center">
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-[6px] border-[#b58b32]/30 bg-white shadow-xl shadow-black/10 md:h-44 md:w-44">
                  <img
                    src={speaker.img}
                    alt={speaker.name}
                    className="h-full w-full object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0"
                  />
                </div>
                <h3 className="mx-auto mt-5 max-w-[190px] font-serif text-2xl font-black leading-tight text-black">
                  {speaker.name}
                </h3>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-[#b58b32]">
                  {speaker.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
