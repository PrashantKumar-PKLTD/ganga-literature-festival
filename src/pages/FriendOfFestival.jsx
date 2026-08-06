import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Exclusive Festival Access",
    image: "/gangaimg1.png",
    items: [
      "Receive your gate pass in advance.",
      "Enjoy exclusive access badges and a welcome kit.",
      "Avail transport assistance with the festival team.",
    ],
  },
  {
    title: "Dedicated Hospitality",
    image: "/gangaimg3.png",
    items: [
      "Access the private Friend of the Festival Lounge.",
      "All-day tea and coffee bar with like-minded guests.",
      "Private lunch and dinner hospitality during festival days.",
      "Festival programme brochure and merchandise.",
    ],
  },
  {
    title: "Specially Curated Evenings",
    image: "/gangaimg5.png",
    items: [
      "Entry to selected evening cultural programmes.",
      "Cocktail hours with musical performances.",
      "Author interviews and intimate conversations.",
      "Heritage evening and writers' ball experiences.",
    ],
  },
];

const packages = [
  {
    date: "15th, 16th & 17th Jan 2026",
    price: "INR 14,000 per day",
    desc: "Festival lounge access, priority support, refreshments, and selected music stage programming.",
  },
  {
    date: "18th Jan 2026",
    price: "INR 18,000",
    desc: "A majestic evening inclusive of cultural performances, dinner, and premium hospitality.",
  },
  {
    date: "19th Jan 2026",
    price: "INR 18,000",
    desc: "A closing celebration with authors, speakers, readers, cultural performances, and dinner.",
  },
];

const hotels = [
  {
    name: "Clarks Amer",
    image: "/gangaimg2.png",
    note: "Jawahar Lal Nehru Marg, opposite Fortis Escorts Hospital",
  },
  {
    name: "Marriott",
    image: "/gangaimg4.png",
    note: "Distance from festival venue: 3 mins drive",
  },
];

function Ornament() {
  return (
    <div className="mx-auto my-5 h-10 w-28 bg-[#b58b32] [clip-path:polygon(50%_0,62%_35%,100%_45%,62%_55%,50%_100%,38%_55%,0_45%,38%_35%)]" />
  );
}

function Flower({ className = "" }) {
  return (
    <span
      className={`pointer-events-none absolute h-14 w-14 text-5xl font-black leading-none text-[#b58b32] ${className}`}
      aria-hidden="true"
    >
      *
    </span>
  );
}

export default function FriendOfFestival() {
  return (
    <main className="pt-[78px] md:pt-[82px] bg-cream">
      <section className="relative overflow-hidden bg-cream px-5 py-16 text-center text-dark md:px-8 md:py-24">
        <Flower className="left-10 top-28 text-saffron/25" />
        <Flower className="right-10 top-48 text-saffron/25" />

        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-saffron">
            Friend of the Festival
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl font-serif text-5xl md:text-7xl font-light uppercase tracking-tight text-dark">
            What your Experience includes
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-dark/70 sm:text-lg">
            Become a Friend of the Festival and access the finest hospitality,
            curated evenings, lounge benefits, and premium festival support.
          </p>
          <Link
            to="/#register"
            className="mt-8 inline-flex border border-saffron bg-dark text-cream px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 hover:bg-saffron hover:text-cream rounded-none hover:-translate-y-0.5 shadow-sm"
          >
            Book Package
          </Link>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-8 lg:grid-cols-3 lg:items-start">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className={`p-6 border border-gold/20 bg-cream/30 rounded-none shadow-sm transition hover:border-saffron hover:-translate-y-0.5 duration-300 ${index === 1 ? "lg:-translate-y-6" : ""}`}>
              <Ornament />
              <div className="overflow-hidden border border-gold/10">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="mx-auto aspect-[4/3] w-full max-w-sm object-cover grayscale hover:grayscale-0 transition duration-500"
                  loading="lazy"
                />
              </div>
              <Ornament />
              <h2 className="font-serif text-2xl font-light uppercase text-dark mt-4">
                {benefit.title}
              </h2>
              <div className="mx-auto mt-6 grid max-w-sm gap-2 text-sm leading-relaxed text-dark/70 font-light">
                {benefit.items.map((item) => (
                  <p key={item} className="border-b border-gold/15 pb-3">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-none border border-gold/30 bg-dark px-7 py-8 text-cream shadow-md">
          <p className="text-sm font-light leading-relaxed">
            First India News Jaipur Music Stage offers programming on selected
            festival days. Guests must book packages for those dates to avail
            the offer.
          </p>
          <p className="mt-3 text-sm font-bold text-saffron">
            Heritage Evening will be on 18th January and Writers' Ball will be on 19th January.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-dark px-5 py-16 text-center text-cream md:px-8 md:py-24 border-t border-gold/10">
        <Flower className="bottom-10 left-8 text-saffron/25" />
        <Flower className="right-10 top-20 text-saffron/25" />

        <h2 className="mx-auto max-w-xl font-serif text-5xl font-light uppercase leading-[0.9] text-gold md:text-6xl">
          FOF Packages and pricing
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-cream/70">
          Before booking your package, check the schedule of exclusive evening
          programmes available as part of the Friend of the Festival packages.
        </p>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-3 lg:items-center">
          {packages.map((pkg, index) => (
            <article
              key={pkg.price}
              className={`rounded-none border border-gold/20 bg-cream/5 px-7 py-10 text-cream transition duration-300 hover:border-saffron hover:shadow-2xl ${
                index === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-saffron">{pkg.date}</p>
              <h3 className="mt-2 font-serif text-3xl font-light text-gold uppercase">{pkg.price}</h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-cream/70">{pkg.desc}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-24 flex max-w-3xl flex-col gap-8 text-base font-semibold md:flex-row md:items-center md:justify-center">
          <p className="tracking-wide">10% discount<br /><span className="text-xs font-light text-cream/60 uppercase tracking-widest mt-1 block">book any 2-3 days</span></p>
          <span className="hidden h-12 w-px bg-gold/20 md:block" />
          <p className="tracking-wide">15% discount<br /><span className="text-xs font-light text-cream/60 uppercase tracking-widest mt-1 block">book any 4 days</span></p>
          <span className="hidden h-12 w-px bg-gold/20 md:block" />
          <p className="tracking-wide">20% discount<br /><span className="text-xs font-light text-cream/60 uppercase tracking-widest mt-1 block">book all 5 days</span></p>
        </div>

        <p className="mx-auto mt-16 max-w-xl text-sm font-light text-cream/70">
          For any queries related to your Friend of the Festival experience,
          please email us at <span className="text-saffron font-bold">info@gangalitfest.in</span>
        </p>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-16 text-center text-dark md:px-8 md:py-24 border-t border-gold/10">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-dark [clip-path:polygon(0_45%,5%_35%,8%_60%,12%_38%,18%_62%,26%_40%,34%_58%,42%_32%,52%_60%,62%_38%,72%_60%,84%_35%,100%_58%,100%_100%,0_100%)]" />

        <h2 className="mx-auto max-w-lg font-serif text-5xl font-light uppercase leading-[0.9] md:text-6xl text-dark">
          Festival Partner Hotels
        </h2>
        <div className="mx-auto mt-8 max-w-3xl text-base font-light leading-relaxed text-dark/70">
          <p>
            Choose from official partner hotels to make your festival experience
            comfortable and memorable. These hotels support authors, guests, and
            Friends of the Festival.
          </p>
          <p className="mt-4">
            Guests staying at partner hotels may receive discounted rates,
            airport transfers, and transport support between hotel and festival venues.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {hotels.map((hotel) => (
            <article key={hotel.name} className="bg-cream border border-gold/20 p-4 rounded-none shadow-sm group hover:border-saffron transition duration-300">
              <div className="overflow-hidden border border-gold/10">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="aspect-[4/3] w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-light text-dark uppercase">{hotel.name}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-dark/70">{hotel.note}</p>
              <p className="mt-2 text-xl text-gold">★★★★★</p>
            </article>
          ))}
        </div>

        <Link
          to="/festival/book-your-festival-hotel"
          className="relative z-10 mt-12 inline-flex border border-saffron bg-dark text-cream px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 hover:bg-saffron shadow-sm hover:-translate-y-0.5 rounded-none"
        >
          View Hotels
        </Link>
      </section>
    </main>
  );
}
