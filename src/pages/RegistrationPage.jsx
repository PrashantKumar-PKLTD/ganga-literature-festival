import { Link } from "react-router-dom";
import Registration from "../components/RegistrationForm";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

const categories = [
  {
    title: "Media Registration",
    price: "Free Pass",
    icon: "Press",
    accent: "Media & Press Desk",
    desc: "For print, digital, podcast, and broadcast journalists covering the festival.",
  },
  {
    title: "Student Registration",
    price: "INR 100",
    icon: "Student",
    accent: "Campus & Youth Access",
    desc: "For school and university students attending sessions across Patna venues.",
  },
  {
    title: "General Reader Pass",
    price: "INR 200",
    icon: "Reader",
    accent: "Public Pass",
    desc: "Access to author talks, book stalls, food courts, and open-air Ganga stages.",
  },
  {
    title: "Friend of the Festival",
    price: "Starts at INR 14,000",
    icon: "Patron",
    accent: "Premium Hospitality",
    desc: "Hosted patron lounge access, priority seating, author dinners, and concierge support.",
    featured: true,
    to: "/festival/friend-of-the-festival",
  },
  {
    title: "SPIC MACAY Evening",
    price: "INR 499",
    icon: "Arts",
    accent: "Cultural Evening",
    desc: "Reserved entry to classical music, dance, and folk performances under the stars.",
  },
  {
    title: "Publishing Track",
    price: "INR 1,500",
    icon: "Industry",
    accent: "Publishing & Rights",
    desc: "For publishers, editors, agents, and translators exchanging book rights.",
  },
];

const speakers = [
  { name: "Ami Ganatra", image: "/ani-ganatra.png" },
  { name: "Aditi Banerjee", image: "/aditi_banerjee.jpg" },
  { name: "Anand Ranganathan", image: "/anand-ranganathan.jpg" },
  { name: "Abhijit Majumder", image: "/abhijit_majumdar.jpg" },
];

export default function RegistrationPage() {
  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="Visitor Passes & Access"
        title="Register to"
        italicTitle="Attend GLF 2026"
        intro="Reserve your place at Patna's premier cultural gathering. Select from Reader Passes, Student Access, Media Accreditation, or hosted Friend of the Festival passes."
        badge="Patna • 11 & 12 November 2026"
      />

      {/* Embedded Interactive Form */}
      <Registration />

      <MadhubaniDivider variant="floral" />

      {/* Category Grid Section */}
      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose Your Pass"
            title="Registration Categories"
            intro="Secure your access early for talks, classical music, masterclasses, and hosted delegate lounges."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const cardContent = (
                <div
                  className={`group relative flex h-full flex-col justify-between border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    cat.featured
                      ? "border-gold bg-dark text-white hover:border-saffron"
                      : "border-gold/30 bg-white text-dark hover:border-saffron"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                        {cat.accent}
                      </span>
                      <span className="font-serif text-lg font-bold text-gold">
                        {cat.price}
                      </span>
                    </div>

                    <h3 className={`mt-3 font-serif text-3xl font-bold leading-tight ${cat.featured ? "text-gold" : "text-dark"}`}>
                      {cat.title}
                    </h3>

                    <p className={`mt-4 text-xs sm:text-sm leading-relaxed ${cat.featured ? "text-cream/80" : "text-dark/75"} font-sans`}>
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gold/20 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-saffron">
                      {cat.featured ? "View Hosted Benefits" : "Registration Open"}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center border border-gold/40 text-saffron group-hover:bg-saffron group-hover:text-white transition">
                      →
                    </span>
                  </div>
                </div>
              );

              return cat.to ? (
                <Link key={cat.title} to={cat.to}>{cardContent}</Link>
              ) : (
                <div key={cat.title}>{cardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Speakers Snippet */}
      <section className="bg-white/70 px-5 py-16 md:px-8 md:py-24 border-t border-gold/20">
        <div className="mx-auto max-w-6xl text-center">
          <SectionHeading
            eyebrow="Keynote Authors"
            title="Voices You Will Hear in Patna"
          />

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {speakers.map((spk) => (
              <div key={spk.name} className="border border-gold/30 bg-cream p-4 text-center group hover:border-saffron transition">
                <div className="aspect-[4/4.5] overflow-hidden border border-gold/20 bg-dark">
                  <img
                    src={spk.image}
                    alt={spk.name}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h4 className="mt-3 font-serif text-lg font-bold text-dark group-hover:text-saffron transition-colors">
                  {spk.name}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/festival/speakers"
              className="border border-saffron bg-saffron px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
            >
              Explore Full Speaker Roster
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
