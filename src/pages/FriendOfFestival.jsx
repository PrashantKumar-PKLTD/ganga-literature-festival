import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Wine, Heart, Award, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

const benefits = [
  {
    title: "Exclusive Gate & Pass Access",
    items: [
      "Advance priority gate pass delivery.",
      "Custom engraved brass name badge & gift hamper.",
      "Dedicated concierge transport desk.",
    ],
  },
  {
    title: "Dedicated Patron Hospitality",
    items: [
      "Access to private Friend of Festival Air-Conditioned Lounge.",
      "All-day artisanal tea, coffee & gourmet regional buffet.",
      "Hosted author lunches & private seating areas.",
    ],
  },
  {
    title: "Curated Cultural Evenings",
    items: [
      "Front-row reserved seating at SPIC MACAY classical evenings.",
      "Cocktail hours with musical fusion performances.",
      "Entry to the official Writers' Gala Dinner in Patna.",
    ],
  },
];

const packages = [
  {
    date: "Day 1 Pass • 11 November 2026",
    price: "INR 14,000",
    desc: "Full Hosted Lounge access, priority front-row seating, author lunch, and SPIC MACAY evening entry.",
  },
  {
    date: "Day 2 Pass • 12 November 2026",
    price: "INR 14,000",
    desc: "Closing day Hosted Lounge access, keynotes, author lunch, and entry to the Writers' Gala Reception.",
  },
  {
    date: "Full Festival Patron • Both Days",
    price: "INR 25,000",
    desc: "Complete 2-day VIP experience including hosted lounge, author lunches, classical evenings, and private networking.",
    featured: true,
  },
];

export default function FriendOfFestival() {
  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Hero Header */}
      <PageHero
        eyebrow="Patron & Hosted Experience"
        title="Friend of the"
        italicTitle="Festival"
        intro="An exclusive hosted experience for patrons, scholars, and cultural supporters seeking dedicated hospitality, VIP lounge access, and intimate author interactions."
        badge="VIP Patron Delegate Pass"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Privileges & Hospitality"
            title="What Your Experience Includes"
            intro="Designed for patrons who want a seamless, high-touch literature festival experience on the banks of the Ganga."
          />

          <MadhubaniDivider variant="compact" />

          {/* Benefits Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="border border-gold/30 bg-white p-8 shadow-sm transition-all duration-300 hover:border-saffron hover:shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-gold/20 pb-4 mb-6">
                  <span className="font-serif text-2xl font-bold text-dark">
                    {benefit.title}
                  </span>
                  <Sparkles className="h-5 w-5 text-saffron" />
                </div>

                <ul className="space-y-4 font-sans text-xs sm:text-sm text-dark/80">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-saffron mt-0.5">♦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Special Note Box */}
          <div className="mt-14 border border-gold bg-dark p-8 text-cream max-w-3xl mx-auto shadow-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Hosted Programme Notice
            </span>
            <h4 className="font-serif text-2xl font-bold text-white mt-1">
              SPIC MACAY Evening & Writers' Gala
            </h4>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-cream/75 font-sans">
              Friend of the Festival passes include complimentary entry and reserved front-row seating for all evening classical arts performances and hosted receptions.
            </p>
          </div>
        </div>
      </section>

      {/* Package Tier Options */}
      <section className="relative overflow-hidden bg-dark px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="Hosted Tiers"
            title="Patron Passes & Pricing"
            intro="Choose your delegate duration for Patna 2026."
            inverted={true}
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.date}
                className={`relative flex flex-col justify-between border p-8 transition-all duration-300 ${
                  pkg.featured
                    ? "border-gold bg-dark/95 shadow-2xl scale-105"
                    : "border-gold/30 bg-dark/60 hover:border-gold"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron px-4 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                    Recommended Patron Pass
                  </span>
                )}

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                    {pkg.date}
                  </span>
                  <h3 className="mt-3 font-serif text-4xl font-bold text-white">
                    {pkg.price}
                  </h3>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-cream/75 font-sans">
                    {pkg.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gold/20">
                  <Link
                    to="/festival/register-to-attend"
                    className="block w-full border border-saffron bg-saffron py-3 text-center text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
                  >
                    Enquire Patron Pass
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-xs text-cream/70 font-sans">
            For patron desk assistance or group institutional passes, write to{" "}
            <span className="text-gold font-bold">info@gangalitfest.in</span>
          </div>
        </div>
      </section>
    </main>
  );
}
