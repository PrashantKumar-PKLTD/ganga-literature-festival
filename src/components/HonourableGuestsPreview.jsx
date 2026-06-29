import { Link } from "react-router-dom";
import HONOURABLE_GUESTS from "../data/honourableGuests";
import GuestSocialLinks from "./GuestSocialLinks";

const guests = HONOURABLE_GUESTS.slice(0, 4);

export default function HonourableGuestsPreview() {
  return (
    <section className="honourable-guests-section px-4 py-14 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="honourable-guests-kicker text-xs font-black uppercase tracking-[0.24em]">
            Public Leadership
          </p>
          <h2 className="honourable-guests-heading mt-4 font-serif text-4xl font-semibold uppercase leading-none sm:text-5xl md:text-6xl">
            Our Honourable Guests
          </h2>
          <p className="honourable-guests-intro mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 md:text-base">
            Leaders and public representatives joining the wider conversation
            around Bihar's future, culture, knowledge, and civic imagination.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {guests.map((guest) => (
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
                <p className="honourable-guest-role mt-2 line-clamp-2 text-[10px] font-black leading-4 sm:mt-3 sm:text-xs sm:leading-5">
                  {guest.role}
                </p>
                <p className="honourable-guest-affiliation mt-2 text-[9px] font-black uppercase tracking-[0.1em] sm:mt-3 sm:text-xs sm:tracking-[0.14em]">
                  {guest.affiliation}
                </p>
                <GuestSocialLinks social={guest.social} name={guest.name} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/honourable-guests"
            className="honourable-guests-button inline-flex items-center justify-center px-7 py-4 text-sm font-black uppercase tracking-[0.14em]"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
