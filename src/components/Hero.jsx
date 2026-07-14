import { Link } from "react-router-dom";
import GangaJourney from "./GangaJourney";

export default function Hero() {
  const heroBgSrc = "/heroimage.png?v=3";

  return (
    <section id="home" className="relative bg-cream">
      <div className="relative min-h-[720px] overflow-hidden bg-black text-white md:min-h-[760px]">
        <img
          src={heroBgSrc}
          alt="Ganga riverfront at sunrise"
          fetchPriority="high"
          className="hero-bg-animate absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(181,139,50,0.06),transparent_46%)]" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-5 pt-32 text-center md:pt-36">
          <div className="festival-arch relative mx-auto flex min-h-[480px] md:min-h-[520px] h-auto w-full max-w-[760px] items-center justify-center px-8 py-10 md:px-14 md:py-12">
            <div className="relative z-10 w-[min(92vw,920px)] max-w-none">
              <div className="-mt-2 mb-5">
                <p className="font-serif text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  सा विद्या या विमुक्तये — Knowledge is that which liberates
                </p>
                <div className="flex items-center justify-center gap-3 text-white">
                  <span className="h-1.5 w-1.5 rotate-45 bg-saffron" />
                  <span className="text-xl font-bold tracking-[0.24em] md:text-2xl">11 & 12 NOVEMBER 2026</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-saffron" />
                </div>
                <p className="mt-2 font-serif text-xs font-bold uppercase tracking-widest md:text-sm text-cream/70">
                  Patna, Bihar — On the Banks of the Holy Ganga
                </p>
              </div>
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light uppercase leading-[0.95] tracking-tight text-white mb-2">
                Ganga <br />
                <span className="font-serif italic font-light text-gold text-[0.85em] normal-case">Literature Festival</span>
              </h1>
              <p className="mt-4 font-serif text-[13px] md:text-[15px] font-bold uppercase tracking-[0.16em] text-cream/80 max-w-xl mx-auto leading-relaxed">
                Where the river of thought meets the ocean of civilisation
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  to="/festival/register-to-attend"
                  className="bg-saffron px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:bg-gold hover:text-dark hover:-translate-y-0.5 rounded-none"
                >
                  Register Now
                </Link>
                <Link
                  to="/programme"
                  className="border border-cream/40 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:bg-cream hover:text-dark hover:-translate-y-0.5 rounded-none"
                >
                  View Programme
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em]">
                <span className="border border-gold/30 bg-dark/40 px-4 py-2 text-cream rounded-none">Presented by <strong className="text-gold">BIHAAN</strong></span>
                <span className="border border-gold/30 bg-dark/40 px-4 py-2 text-cream rounded-none">Publishing Partner <strong className="text-gold">BluOne Ink</strong></span>
                <span className="border border-gold/30 bg-dark/40 px-4 py-2 text-cream rounded-none">Cultural Partner <strong className="text-gold">SPIC MACAY</strong></span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 h-40 md:h-52">
          <div className="festival-skyline absolute bottom-0 left-1/2 h-full w-[1250px] max-w-none -translate-x-1/2 md:w-[1500px]" />
        </div>
      </div>

      {/* STATS BAR */}
      <div className="relative z-30 mx-auto max-w-7xl px-5 -mt-10 sm:-mt-14 mb-14">
        <div className="bg-dark text-cream border border-gold/20 p-8 shadow-xl">
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-center sm:grid-cols-5 sm:divide-x sm:divide-cream/10">
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl font-light text-gold">2</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60 mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl font-light text-gold">40+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60 mt-1">Speakers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl font-light text-gold">25+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60 mt-1">Sessions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl font-light text-gold">1</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60 mt-1">Evening Concert</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl md:text-4xl font-light text-gold">2047</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60 mt-1">Viksit Horizon</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 mx-auto max-w-5xl px-5">
        <div className="relative left-1/2 w-[100dvw] -translate-x-1/2 bg-cream">
          <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-saffron">
              Ganga in Focus
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-dark md:text-5xl">
              The river behind the festival's name
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-dark/70">
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
