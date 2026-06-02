export default function Hero() {
  const gangaMapSrc = "/gangamap.png";
  const heroBgSrc = "/heroimage.png?v=3";

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="relative min-h-[720px] overflow-hidden bg-black text-white md:min-h-[760px]">
        <img
          src={heroBgSrc}
          alt="Ganga riverfront at sunrise"
          className="hero-bg-animate absolute inset-0 z-0 h-full w-full object-cover object-center opacity-95"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-black/10 to-black/35" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(181,139,50,0.1),transparent_46%)]" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-5 pt-32 text-center md:pt-36">
          <div className="festival-arch relative mx-auto flex h-[440px] w-full max-w-[760px] items-center justify-center px-8 pb-14 pt-28 md:h-[500px] md:px-14">
            <div className="relative z-10 w-[min(92vw,920px)] max-w-none">
              <div className="-mt-2 mb-5">
                <div className="flex items-center justify-center gap-3 text-white">
                  <span className="h-2 w-2 rotate-45 bg-current" />
                  <span className="text-2xl font-black tracking-[0.32em] md:text-3xl">2026</span>
                  <span className="h-2 w-2 rotate-45 bg-current" />
                </div>
                <p className="mt-2 font-serif text-sm font-black uppercase tracking-wide md:text-base">
                  Patna, Bihar
                </p>
              </div>
              <p className="font-serif text-8xl font-black uppercase leading-[0.86] tracking-tight md:text-7xl">
                Ganga
                <span className="block whitespace-nowrap text-[clamp(2.5rem,4vw,4.5rem)]">Literature Festival</span>
              </p>
              <h1 className="mt-5 font-serif text-3xl font-black uppercase leading-[0.9] tracking-tight md:text-4xl">
                Programme
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 h-40 md:h-52">
          <div className="festival-skyline absolute bottom-0 left-1/2 h-full w-[1250px] max-w-none -translate-x-1/2 md:w-[1500px]" />
        </div>
      </div>

      <div className="relative z-30 -mt-8 mx-auto max-w-5xl px-5 md:-mt-14">
        <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-xl shadow-black/10 md:flex-row md:items-center md:justify-between">
          <div className="grid grid-cols-5 gap-2">
            {[
              ["Thu", "15", "January"],
              ["Fri", "16", "January"],
              ["Sat", "17", "January"],
              ["Sun", "18", "January"],
              ["Mon", "19", "January"],
            ].map(([day, date, month], index) => (
              <button
                key={day}
                className={`min-w-0 rounded-md border border-[#b58b32] px-3 py-2 text-center leading-none ${
                  index === 0 ? "bg-[#b58b32] text-white" : "bg-white text-black"
                }`}
              >
                <span className="block text-[11px] font-bold">{day}</span>
                <span className="block text-2xl font-black">{date}</span>
                <span className="block text-[11px] font-semibold">{month}</span>
              </button>
            ))}
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-3 md:max-w-md">
            <input
              className="h-12 min-w-0 flex-1 rounded-md border border-[#b58b32] bg-white px-4 text-sm text-black outline-none focus:border-[#b58b32]"
              placeholder="Search by title, author, speaker..."
            />
            <button className="h-12 rounded-md bg-[#b58b32] px-5 text-sm font-bold text-white">
              Search
            </button>
          </div>
        </div>

        <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden bg-white">
          <div className="mx-auto max-w-5xl px-5 py-6 md:px-8 md:py-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
              Ganga in Focus
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-black md:text-4xl">
              The river behind the festival's name
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-black/70">
              This festival draws its identity from the Ganga, a river that carries memory,
              culture, conflict, and renewal across northern India.
            </p>
          </div>
          <figure className="relative bg-white">
            <img
              src={gangaMapSrc}
              alt="Infographic map showing pollution data along the Ganga river"
              className="block w-full object-cover"
            />
          </figure>
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
