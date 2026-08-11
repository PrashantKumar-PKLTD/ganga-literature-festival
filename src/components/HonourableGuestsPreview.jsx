import { Link } from "react-router-dom";
import HONOURABLE_GUESTS from "../data/honourableGuests";
import GuestSocialLinks from "./GuestSocialLinks";

const guests = HONOURABLE_GUESTS.slice(0, 4);

export default function HonourableGuestsPreview() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:px-8 md:py-24 paper-texture">
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

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {guests.map((guest) => (
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

        <div className="mt-14 flex justify-center">
          <Link
            to="/honourable-guests"
            className="border border-saffron bg-dark px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-300 hover:bg-saffron hover:text-cream rounded-none hover:-translate-y-0.5 shadow-sm"
          >
            View More
          </Link>
        </div>
      </div>
      
      {/* Luxury separating motifs */}
      <div className="luxury-separator mt-16 md:mt-24" />
    </section>
  );
}
