import { Link } from "react-router-dom";
import { Hotel, MapPin, Sparkles, Navigation, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

const hotels = [
  {
    name: "Clarks Amer",
    image: "/gangaimg2.png",
    address: "Jawahar Lal Nehru Marg, Patna",
    distance: "Near main festival venue route",
    rating: "5 Star Luxury",
  },
  {
    name: "Marriott Patna",
    image: "/gangaimg4.png",
    address: "Central Patna, 5 mins from Ganga Ghats",
    distance: "Official delegate partner hotel",
    rating: "5 Star Luxury",
  },
];

const perks = [
  {
    title: "Airport & Station Transfers",
    desc: "Coordinated pickup support for delegates and hosted patrons booking festival hotel packages.",
  },
  {
    title: "Preferred Partner Tariffs",
    desc: "Exclusive festival rate cards for registered attendees and Friend of the Festival patrons.",
  },
  {
    title: "Dedicated Festival Desk",
    desc: "On-site festival helpdesk at partner hotel lobbies with daily schedule updates and shuttle info.",
  },
];

export default function HotelsPage() {
  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="Visitor Accommodation & Hospitality"
        title="Festival Stay &"
        italicTitle="Hotels"
        intro="Planning your multi-day visit to Patna? Reserve stays at official partner hotels offering transport assistance, preferred tariffs, and proximity to festival venues."
        badge="Patna Hospitality Guide"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Curated Accommodation"
            title="Partner Hotels in Patna"
            intro="Book early to secure preferred rates and dedicated festival shuttle services."
          />

          <MadhubaniDivider variant="compact" />

          {/* Hotel Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {hotels.map((hotel) => (
              <div
                key={hotel.name}
                className="group border border-gold/30 bg-white p-6 transition-all duration-300 hover:border-saffron hover:shadow-xl"
              >
                <div className="overflow-hidden aspect-[4/3] bg-dark border border-gold/20">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover grayscale opacity-90 transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                      {hotel.rating}
                    </span>
                    <span className="text-xs text-gold">★★★★★</span>
                  </div>

                  <h3 className="mt-1 font-serif text-3xl font-bold text-dark group-hover:text-deep-saffron transition-colors">
                    {hotel.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-dark/75 font-sans flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-saffron shrink-0" />
                    {hotel.address}
                  </p>

                  <p className="mt-1 text-xs text-gold-dark font-bold uppercase tracking-wider">
                    {hotel.distance}
                  </p>

                  <a
                    href="mailto:info@gangalitfest.in?subject=Festival%20Hotel%20Booking%20Inquiry"
                    className="mt-6 inline-flex w-full items-center justify-center border border-saffron bg-saffron py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
                  >
                    Reserve Partner Rate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="bg-white/70 px-5 py-16 md:px-8 md:py-24 border-t border-gold/20">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="Visitor Conveniences"
            title="Why Book Through GLF Desk"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {perks.map((p, idx) => (
              <div key={p.title} className="border border-gold/30 bg-cream p-8 text-left hover:border-saffron transition">
                <span className="flex h-10 w-10 items-center justify-center border border-saffron bg-saffron/10 font-serif text-lg font-bold text-saffron mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-bold text-dark">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-dark/75 leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-5 py-16 md:px-8 md:py-24 border-t border-gold/20">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
              Location & Transport
            </span>
            <h2 className="mt-2 font-serif text-4xl font-bold text-dark">
              Patna Venue Map & Directions
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-dark/75 leading-relaxed font-sans">
              All official festival venues in Patna are situated near the iconic Ganga riverfront, within 15-20 minutes of Jayprakash Narayan International Airport (PAT) and Patna Junction Railway Station.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Patna+Bihar"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-dark bg-dark px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-saffron hover:border-saffron transition"
            >
              Open Live Directions <Navigation className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="lg:col-span-7 border-2 border-gold/30 bg-dark overflow-hidden h-[340px]">
            <iframe
              title="Festival venue map"
              src="https://www.google.com/maps?q=Patna%20Bihar&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
