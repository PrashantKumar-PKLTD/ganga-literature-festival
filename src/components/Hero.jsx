import { Link } from "react-router-dom";
import GangaJourney from "./GangaJourney";

export default function Hero() {
  const heroBgSrc = "/heroimage.png?v=3";

  return (
    <section id="home" className="relative bg-white">
      <div className="relative min-h-[720px] overflow-hidden bg-black text-white md:min-h-[760px]">
        <img
          src={heroBgSrc}
          alt="Ganga riverfront at sunrise"
          fetchPriority="high"
          className="hero-bg-animate absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(181,139,50,0.08),transparent_46%)]" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-5 pt-32 text-center md:pt-36">
          <div className="festival-arch relative mx-auto flex min-h-[480px] md:min-h-[520px] h-auto w-full max-w-[760px] items-center justify-center px-8 py-10 md:px-14 md:py-12">
            <div className="relative z-10 w-[min(92vw,920px)] max-w-none">
              <div className="-mt-2 mb-5">
                <div className="flex items-center justify-center gap-3 text-white">
                  <span className="h-2 w-2 rotate-45 bg-current" />
                  <span className="text-2xl font-black tracking-[0.32em] md:text-3xl">2026</span>
                  <span className="h-2 w-2 rotate-45 bg-current" />
                </div>
                <p className="mt-2 font-serif text-sm font-black uppercase tracking-wide md:text-base">
                  11 & 12 November - Patna, Bihar
                </p>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.86] tracking-tight">
                Ganga
                <span className="block whitespace-nowrap text-[clamp(1.75rem,5.5vw,4.5rem)]">Literature Festival</span>
              </h1>
              <p className="mt-4 font-serif text-lg font-bold uppercase leading-[1.1] tracking-tight md:text-xl lg:text-2xl text-white/90">
                Where the river of thought meets the ocean of civilisation
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  to="/festival/register-to-attend"
                  className="bg-[#b58b32] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
                >
                  Register Now
                </Link>
                <Link
                  to="/programme"
                  className="border border-white px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black"
                >
                  View Programme
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] font-black uppercase tracking-[0.12em]">
                <span className="rounded-sm bg-white/90 px-3 py-2 text-black">Presented by BIHAAN</span>
                <span className="rounded-sm bg-white/90 px-3 py-2 text-black">Publishing Partner BluOne Ink</span>
                <span className="rounded-sm bg-white/90 px-3 py-2 text-black">Cultural Partner SPIC MACAY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 h-40 md:h-52">
          <div className="festival-skyline absolute bottom-0 left-1/2 h-full w-[1250px] max-w-none -translate-x-1/2 md:w-[1500px]" />
        </div>
      </div>

      <div className="relative z-30 mx-auto max-w-5xl px-5">
        <div className="relative left-1/2 w-[100dvw] -translate-x-1/2 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-6 md:px-8 md:py-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
              Ganga in Focus
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-black md:text-4xl">
              The river behind the festival's name
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-black/70">
              The Ganga Literature Festival is a civilisational conversation in Patna,
              where books, ideas, classical arts, and the Viksit Bharat horizon meet.
            </p>
          </div>
          <GangaJourney
            className="ganga-journey--homepage"
            scrollStart="top 70%"
            scrollEnd="bottom bottom"
            scrollScrub={1.35}
          />
        </div>
      </div>

      <style>{`
        .festival-arch::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 9px solid #b58b32;
          border-bottom-width: 0;
          background: rgba(0, 0, 0, 0.08);
          clip-path: polygon(
            9% 100%, 9% 48%, 13% 48%, 16% 44%, 17% 36%, 22% 31%, 29% 29%,
            33% 23%, 41% 21%, 46% 15%, 50% 3%, 54% 15%, 59% 21%, 67% 23%,
            71% 29%, 78% 31%, 83% 36%, 84% 44%, 88% 48%, 91% 48%, 91% 100%
          );
          box-shadow: inset 0 0 0 7px rgba(181, 139, 50, 0.28);
        }

        .festival-arch::after {
          content: "";
          position: absolute;
          inset: 9px;
          border: 2px solid rgba(181, 139, 50, 0.45);
          border-bottom: 0;
          clip-path: polygon(
            9% 100%, 9% 48%, 13% 48%, 16% 44%, 17% 36%, 22% 31%, 29% 29%,
            33% 23%, 41% 21%, 46% 15%, 50% 3%, 54% 15%, 59% 21%, 67% 23%,
            71% 29%, 78% 31%, 83% 36%, 84% 44%, 88% 48%, 91% 48%, 91% 100%
          );
        }

        .festival-skyline {
          background: #ffffff;
          clip-path: polygon(
            0 58%, 1.5% 52%, 3% 54%, 4% 47%, 5% 51%, 6% 48%, 7% 54%, 8% 58%,
            10% 58%, 10.5% 54%, 12% 54%, 12.5% 59%, 14% 60%, 15% 50%, 16% 46%,
            17% 52%, 17.8% 58%, 20% 58%, 20% 72%, 22% 72%, 22% 64%, 24% 64%,
            24% 72%, 26% 72%, 26% 64%, 28% 64%, 28% 72%, 30% 72%, 30% 60%,
            36% 60%, 36% 55%, 39% 55%, 39% 50%, 41% 50%, 41% 56%, 43% 56%,
            43% 60%, 46% 60%, 46.8% 54%, 47.6% 60%, 50% 60%, 51% 55%, 52% 60%,
            55% 60%, 55% 66%, 57% 66%, 57% 72%, 59% 72%, 59% 68%, 61% 68%,
            61% 61%, 65% 61%, 65% 54%, 66% 49%, 67% 54%, 68% 49%, 69% 54%,
            70% 49%, 71% 54%, 72% 54%, 72% 45%, 73% 42%, 74% 45%, 74% 55%,
            77% 55%, 77% 60%, 82% 60%, 82% 78%, 83.2% 78%, 83.2% 65%,
            84.5% 65%, 84.5% 78%, 86% 78%, 86% 65%, 87.3% 65%, 87.3% 78%,
            89% 78%, 89% 58%, 91% 58%, 91% 42%, 92% 36%, 93% 42%, 93% 56%,
            95% 56%, 95% 52%, 96.5% 52%, 96.5% 58%, 98% 58%, 98.5% 48%,
            99.5% 45%, 100% 50%, 100% 100%, 0 100%
          );
        }
      `}</style>
    </section>
  );
}
