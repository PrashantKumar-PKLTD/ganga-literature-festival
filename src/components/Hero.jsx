import { Link } from "react-router-dom";
import GangaJourney from "./GangaJourney";
import { MadhubaniWatermark, MadhubaniCorner, MadhubaniDivider } from "./MadhubaniMotifs";

export default function Hero() {
  const heroBgSrc = "/madhubani-hero.jpg";

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
        <MadhubaniWatermark className="absolute inset-0 m-auto z-[3] hidden sm:flex" opacity={0.07} size={580} />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col items-center justify-center px-5 pt-28 text-center md:pt-32">
          <div className="relative mx-auto flex h-auto w-full max-w-[920px] flex-col items-center justify-center px-4 py-8">
            <div className="relative z-10 w-full">
              {/* Slogan & Date Header */}
              <div className="mb-6 space-y-3">
                <p className="font-serif text-xs md:text-sm font-bold uppercase tracking-[0.24em] text-[#F2C94C] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] transition-all duration-300 hover:text-[#FFFFFF] hover:tracking-[0.28em] inline-block cursor-default">
                  सा विद्या या विमुक्तये — Knowledge is that which liberates
                </p>
                <div className="flex items-center justify-center gap-3 text-white transition-transform duration-300 hover:scale-105 cursor-default drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                  <span className="h-2 w-2 rotate-45 bg-[#E07A5F] shadow-sm" />
                  <span className="text-xl font-extrabold tracking-[0.26em] md:text-2xl text-[#FFFFFF] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">11 & 12 NOVEMBER 2026</span>
                  <span className="h-2 w-2 rotate-45 bg-[#E07A5F] shadow-sm" />
                </div>
                <p className="font-serif text-xs font-bold uppercase tracking-[0.22em] md:text-sm text-[#F4EADA] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition-colors duration-300 hover:text-[#FFFFFF]">
                  Patna, Bihar — On the Banks of the Holy Ganga
                </p>
              </div>

              {/* Main Transparent Festival Title */}
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[105px] font-light uppercase leading-[0.92] tracking-tight text-white my-4 select-none">
                <span className="inline-block transition-all duration-500 ease-out hover:scale-[1.06] hover:text-[#FFFFFF] hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.9)] cursor-pointer drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Ganga
                </span>
                <br />
                <span className="font-serif italic font-light text-[#F2C94C] text-[0.82em] normal-case inline-block transition-all duration-500 ease-out hover:scale-[1.06] hover:text-[#FFD700] hover:drop-shadow-[0_0_45px_rgba(242,201,76,1)] cursor-pointer mt-1 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  Literature Festival
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-5 font-serif text-[13px] md:text-[15px] font-bold uppercase tracking-[0.18em] text-[#FAF6EE] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-xl mx-auto leading-relaxed transition-colors duration-300 hover:text-[#FFFFFF]">
                Where the river of thought meets the ocean of civilisation
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/festival/register-to-attend"
                  className="bg-gradient-to-r from-[#A85032] via-[#C8603A] to-[#6A2432] px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#FAF6EE] border border-[#FAF6EE]/30 transition-all duration-300 hover:shadow-[0_12px_35px_rgba(168,80,50,0.6)] hover:-translate-y-1 hover:scale-105 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                >
                  Register Now
                </Link>
                <Link
                  to="/programme"
                  className="border-2 border-[#F2C94C] bg-[#1C1208]/50 backdrop-blur-sm px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#FAF6EE] transition-all duration-300 hover:bg-[#F2C94C] hover:text-[#1C1208] hover:border-[#F2C94C] hover:-translate-y-1 hover:scale-105 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                >
                  View Programme
                </Link>
              </div>

              {/* Partners Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em]">
                <span className="border border-[#F2C94C]/40 bg-[#1C1208]/65 backdrop-blur-md px-4 py-2 text-[#FAF6EE] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 hover:border-[#F2C94C]">Presented by <strong className="text-[#F2C94C]">BIHAAN</strong></span>
                <span className="border border-[#F2C94C]/40 bg-[#1C1208]/65 backdrop-blur-md px-4 py-2 text-[#FAF6EE] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 hover:border-[#F2C94C]">Publishing Partner <strong className="text-[#F2C94C]">BluOne Ink</strong></span>
                <span className="border border-[#F2C94C]/40 bg-[#1C1208]/65 backdrop-blur-md px-4 py-2 text-[#FAF6EE] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 hover:border-[#F2C94C]">Cultural Partner <strong className="text-[#F2C94C]">SPIC MACAY</strong></span>
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
        <div className="relative bg-gradient-to-r from-[#FBF9F4] via-[#F8F4EA] to-[#F5EFE0] border border-[#C8A24A]/40 p-7 md:p-10 shadow-[0_20px_50px_rgba(45,45,45,0.08),0_8px_24px_rgba(200,162,74,0.16)] rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-md">
          <MadhubaniCorner position="top-left" className="top-1.5 left-1.5 opacity-70" color="#C8A24A" />
          <MadhubaniCorner position="bottom-right" className="bottom-1.5 right-1.5 opacity-70" color="#C8A24A" />
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-center sm:grid-cols-5 sm:divide-x sm:divide-[#C8A24A]/25">
            <div className="flex flex-col items-center justify-center px-2">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#A85032] tracking-tight transition-transform duration-300 hover:scale-105">2</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#6A2432] mt-2">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center px-2">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#A85032] tracking-tight transition-transform duration-300 hover:scale-105">40+</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#6A2432] mt-2">Speakers</span>
            </div>
            <div className="flex flex-col items-center justify-center px-2">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#A85032] tracking-tight transition-transform duration-300 hover:scale-105">25+</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#6A2432] mt-2">Sessions</span>
            </div>
            <div className="flex flex-col items-center justify-center px-2">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#A85032] tracking-tight transition-transform duration-300 hover:scale-105">1</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#6A2432] mt-2">Evening Concert</span>
            </div>
            <div className="flex flex-col items-center justify-center px-2">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#A85032] tracking-tight transition-transform duration-300 hover:scale-105">2047</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#6A2432] mt-2">Viksit Horizon</span>
            </div>
          </div>
        </div>
      </div>

      <MadhubaniDivider color="#C84B31" className="opacity-80 max-w-4xl mx-auto" />

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
