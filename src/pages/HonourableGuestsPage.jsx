import { Link } from "react-router-dom";
import HONOURABLE_GUESTS from "../data/honourableGuests";
import GuestSocialLinks from "../components/GuestSocialLinks";

export default function HonourableGuestsPage() {
  return (
    <main className="pt-[78px] md:pt-[82px]">
      <section className="relative overflow-hidden bg-dark px-5 py-20 text-center text-cream md:px-8 md:py-28 border-t border-gold/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,150,43,0.22),transparent_55%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(181,139,50,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(181,139,50,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
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

      <section className="bg-cream px-4 py-16 sm:px-6 md:px-8 md:py-24 border-t border-gold/10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
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
              className="bg-dark text-cream border border-saffron inline-flex w-fit items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 hover:bg-saffron hover:text-cream rounded-none"
            >
              Back Home
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {HONOURABLE_GUESTS.map((guest) => (
              <article key={guest.name} className="bg-cream border border-gold/20 rounded-none overflow-hidden shadow-sm group transition duration-300 hover:border-saffron hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-[4/3.5] overflow-hidden bg-dark">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="text-dark font-serif text-lg font-light leading-tight sm:text-2xl">
                    {guest.name}
                  </h3>
                  <p className="text-saffron mt-2 text-[10px] font-bold leading-4 sm:mt-3 sm:text-xs sm:leading-5">
                    {guest.role}
                  </p>
                  <p className="text-dark/70 mt-2 text-[9px] font-bold uppercase tracking-[0.1em] sm:mt-3 sm:text-xs sm:tracking-[0.14em]">
                    {guest.affiliation}
                  </p>
                  <GuestSocialLinks social={guest.social} name={guest.name} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
