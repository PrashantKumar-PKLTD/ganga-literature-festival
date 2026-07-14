import { Link } from "react-router-dom";

const hotels = [
  {
    name: "Clarks Amer",
    image: "/gangaimg2.png",
    address: "Jawahar Lal Nehru Marg, opposite Fortis Escorts Hospital",
    distance: "Near festival hospitality route",
  },
  {
    name: "Marriott",
    image: "/gangaimg4.png",
    address: "Distance from festival venue: 3 mins drive",
    distance: "Premium partner stay",
  },
];

const perks = [
  {
    title: "Airport transfers",
    desc: "Coordinated pickup support for guests booking festival hotel packages.",
  },
  {
    title: "Discounted rates",
    desc: "Preferred partner rates for Friends of the Festival and delegates.",
  },
  {
    title: "Stay with guests",
    desc: "Hotels selected for comfort, access, and festival hospitality support.",
  },
];

function MotifTitle({ eyebrow, title, inverted = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-saffron">
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-[0.9] ${inverted ? "text-cream" : "text-dark"}`}>
        {title}
      </h2>
    </div>
  );
}

export default function HotelsPage() {
  return (
    <main className="pt-[78px] md:pt-[82px] bg-cream">
      <section
        className="relative min-h-[500px] overflow-hidden bg-cover bg-center text-white md:min-h-[560px]"
        style={{ backgroundImage: 'url("/gangaimg1.png")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,96,10,0.14),rgba(28,18,8,0.72))]" />
        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center justify-center px-5 py-16 text-center md:min-h-[560px] md:px-8">
          <div className="relative mx-auto max-w-xl px-8 py-16">
            <div className="absolute inset-0 border-[8px] border-saffron opacity-80 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
            <div className="relative text-center">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
                Where to
              </p>
              <h1 className="mt-3 font-serif text-6xl font-light uppercase leading-[0.85] text-white md:text-8xl">
                Stay in<br />Patna
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-cream [clip-path:polygon(0_60%,4%_40%,8%_62%,13%_42%,21%_62%,31%_38%,40%_58%,50%_40%,60%_62%,70%_38%,82%_58%,92%_40%,100%_60%,100%_100%,0_100%)]" />
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-16 md:px-8 md:py-24 border-t border-gold/10">
        <span className="absolute left-10 top-16 text-6xl font-light text-saffron/25">*</span>
        <span className="absolute right-14 top-28 text-5xl font-light text-saffron/25">*</span>

        <MotifTitle eyebrow="Festival Stay" title="Festival Hotels" />
        <div className="mx-auto mt-10 max-w-2xl text-center text-sm font-light leading-relaxed text-dark/70">
          <p>Stay near, book early, and let the festival desk take care of the rest.</p>
          <p className="mt-4">
            Partner hotel guests can access discounted rates and additional support
            during their festival visit.
          </p>
          <p className="mt-4 italic">
            Friends of the Festival may avail airport transfers and festival shuttle assistance.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-2">
          {hotels.map((hotel) => (
            <article key={hotel.name} className="text-center bg-cream border border-gold/20 p-6 rounded-none shadow-sm transition duration-300 hover:border-saffron hover:shadow-lg group">
              <div className="overflow-hidden border border-gold/10 rounded-none">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="aspect-[4/3] w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-dark uppercase">
                {hotel.name}
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-sm font-light leading-relaxed text-dark/70">
                {hotel.address}
              </p>
              <p className="mt-2 text-xl text-gold">★★★★★</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-saffron">
                {hotel.distance}
              </p>
              <a
                href="mailto:info@gangalitfest.in?subject=Festival%20Hotel%20Booking"
                className="mt-6 inline-flex border border-saffron bg-dark text-cream px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 hover:bg-saffron rounded-none hover:-translate-y-0.5 shadow-sm"
              >
                Book Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream px-5 py-16 md:px-8 md:py-24 border-t border-gold/10">
        <MotifTitle eyebrow="Why Book With Us" title="Stay Close, Savour More" />
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-light leading-relaxed text-dark/70">
          Book your festival hotel and Friend of the Festival package together to
          access the finest visitor support and hospitality benefits.
        </p>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {perks.map((perk, index) => (
            <article
              key={perk.title}
              className={`border border-gold/20 bg-cream/40 p-7 text-center rounded-none transition duration-300 hover:border-saffron hover:bg-cream ${
                index === 1 ? "md:-mt-8 md:bg-dark md:text-cream md:border-gold/30" : ""
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-saffron font-serif text-2xl font-light text-cream border border-gold/20">
                {index + 1}
              </div>
              <h3 className={`mt-6 font-serif text-2xl font-light uppercase ${index === 1 ? "text-cream" : "text-dark"}`}>{perk.title}</h3>
              <p className={`mt-4 text-sm leading-relaxed font-light ${index === 1 ? "text-cream/70" : "text-dark/70"}`}>
                {perk.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream px-5 py-16 md:px-8 md:py-24 border-t border-gold/10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="text-center">
            <MotifTitle eyebrow="Travel Desk" title="Distance From The Venue" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Patna+Bihar"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex border border-saffron bg-dark text-cream px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-300 hover:bg-saffron rounded-none hover:-translate-y-0.5 shadow-sm"
            >
              Venue Direction
            </a>
          </div>
          <div className="overflow-hidden border border-gold/20 bg-dark rounded-none">
            <iframe
              title="Festival venue map"
              src="https://www.google.com/maps?q=Patna%20Bihar&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-dark [clip-path:polygon(0_55%,5%_35%,10%_65%,18%_42%,26%_60%,36%_38%,47%_65%,58%_40%,68%_60%,78%_35%,88%_62%,100%_42%,100%_100%,0_100%)]" />
      </section>
    </main>
  );
}
