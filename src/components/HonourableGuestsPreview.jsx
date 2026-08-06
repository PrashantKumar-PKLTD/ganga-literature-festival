import { Link } from "react-router-dom";
import HONOURABLE_GUESTS from "../data/honourableGuests";
import GuestSocialLinks from "./GuestSocialLinks";
import { MadhubaniDivider } from "./MadhubaniMotifs";

const guests = HONOURABLE_GUESTS.slice(0, 4);

export default function HonourableGuestsPreview() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:px-8 md:py-24 border-t border-gold/10 relative">
      <MadhubaniDivider color="#C8962B" className="mb-6 opacity-70" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-saffron font-bold text-xs uppercase tracking-[0.24em]">
            Public Leadership
          </p>
          <h2 className="text-dark mt-4 font-serif text-4xl font-light uppercase leading-none sm:text-5xl md:text-6xl">
            Our Honourable Guests
          </h2>
          <p className="text-dark/70 mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed md:text-base">
            Leaders and public representatives joining the wider conversation
            around Bihar's future, culture, knowledge, and civic imagination.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {guests.map((guest) => (
            <article key={guest.name} className="bg-ivory border border-sand/60 rounded-2xl overflow-hidden shadow-sm group transition-all duration-300 hover:border-terracotta hover:shadow-editorial-hover hover:-translate-y-1">
              <div className="aspect-[4/3.5] overflow-hidden bg-charcoal">
                <img
                  src={guest.image}
                  alt={guest.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-5">
                <h3 className="text-charcoal font-serif text-lg font-light leading-tight sm:text-2xl">
                  {guest.name}
                </h3>
                <p className="text-terracotta mt-2 line-clamp-2 text-[10px] font-bold leading-4 sm:mt-3 sm:text-xs sm:leading-5">
                  {guest.role}
                </p>
                <p className="text-charcoal/70 mt-2 text-[9px] font-bold uppercase tracking-[0.1em] sm:mt-3 sm:text-xs sm:tracking-[0.14em]">
                  {guest.affiliation}
                </p>
                <GuestSocialLinks social={guest.social} name={guest.name} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/honourable-guests"
            className="bg-charcoal text-ivory border border-terracotta/80 inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-terracotta hover:text-ivory rounded-xl hover:-translate-y-0.5 shadow-md hover:shadow-editorial"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
