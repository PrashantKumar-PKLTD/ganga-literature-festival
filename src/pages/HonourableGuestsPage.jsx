import { Link } from "react-router-dom";
import HONOURABLE_GUESTS from "../data/honourableGuests";
import GuestSocialLinks from "../components/GuestSocialLinks";

export default function HonourableGuestsPage() {
  return (
    <main className="pt-[78px] md:pt-[82px] bg-cream paper-texture">
      <section className="relative overflow-hidden bg-dark px-5 py-20 text-center text-cream md:px-8 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,96,10,0.24),transparent_65%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(181,139,50,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(181,139,50,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-saffron">
            Public Leadership
          </p>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl font-light uppercase tracking-tight text-white">
            Our Honourable Guests
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-cream/75 md:text-base">
            Leaders and public representatives joining the wider conversation
            around Bihar's future, culture, knowledge, and civic imagination.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 border-b border-gold/25 pb-8 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-saffron font-bold text-xs uppercase tracking-[0.24em]">
                Guest Directory
              </p>
              <h2 className="text-dark mt-3 font-serif text-4xl font-light uppercase leading-none md:text-5xl">
                Invited Dignitaries
              </h2>
            </div>
            <Link
              to="/"
              className="border border-saffron bg-dark text-cream inline-flex w-fit items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 hover:bg-saffron hover:text-cream rounded-none hover:-translate-y-0.5 shadow-sm"
            >
              Back Home
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {HONOURABLE_GUESTS.map((guest) => (
              <article key={guest.name} className="group bg-cream p-3 border-double border-4 border-gold/25 shadow-sm hover:border-saffron hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-none flex flex-col">
                <div className="border border-gold/15 p-2 h-full flex flex-col justify-between">
                  <div>
                    <div className="aspect-[4/3.5] overflow-hidden border border-gold/10">
                      <img
                        src={guest.image}
                        alt={guest.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-top grayscale opacity-90 transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-dark font-serif text-lg font-light leading-tight sm:text-2xl group-hover:text-saffron transition-colors duration-300">
                        {guest.name}
                      </h3>
                      <p className="text-saffron mt-2 line-clamp-2 text-[10px] font-bold leading-4 uppercase tracking-wider">
                        {guest.role}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-dark/50 mt-2 text-[9px] font-bold uppercase tracking-[0.14em]">
                      {guest.affiliation}
                    </p>
                    <GuestSocialLinks social={guest.social} name={guest.name} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
