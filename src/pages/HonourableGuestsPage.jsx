import { Link } from "react-router-dom";
import HONOURABLE_GUESTS from "../data/honourableGuests";

export default function HonourableGuestsPage() {
  return (
    <main className="pt-[78px] md:pt-[82px]">
      <section className="relative overflow-hidden bg-black px-5 py-24 text-center text-white md:px-8 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(181,139,50,0.22),transparent_55%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(181,139,50,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(181,139,50,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
            Public Leadership
          </p>
          <h1 className="mt-5 font-serif text-5xl font-semibold uppercase leading-none text-white md:text-7xl">
            Our Honourable Guests
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/72 md:text-base">
            Leaders and public representatives joining the wider conversation
            around Bihar's future, culture, knowledge, and civic imagination.
          </p>
        </div>
      </section>

      <section className="honourable-guests-section px-4 py-14 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="honourable-guests-kicker text-xs font-black uppercase tracking-[0.24em]">
                Guest Directory
              </p>
              <h2 className="honourable-guests-heading mt-3 font-serif text-4xl font-semibold uppercase leading-none md:text-5xl">
                Invited Dignitaries
              </h2>
            </div>
            <Link
              to="/"
              className="honourable-guests-button inline-flex w-fit items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-[0.14em]"
            >
              Back Home
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {HONOURABLE_GUESTS.map((guest) => (
              <article key={guest.name} className="honourable-guest-card group">
                <div className="honourable-guest-image-wrap">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="honourable-guest-name font-serif text-lg font-semibold leading-tight sm:text-2xl">
                    {guest.name}
                  </h3>
                  <p className="honourable-guest-role mt-2 text-[10px] font-black leading-4 sm:mt-3 sm:text-xs sm:leading-5">
                    {guest.role}
                  </p>
                  <p className="honourable-guest-affiliation mt-2 text-[9px] font-black uppercase tracking-[0.1em] sm:mt-3 sm:text-xs sm:tracking-[0.14em]">
                    {guest.affiliation}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
