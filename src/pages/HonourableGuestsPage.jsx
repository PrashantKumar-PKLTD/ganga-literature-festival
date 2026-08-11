import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Award, ExternalLink } from "lucide-react";
import HONOURABLE_GUESTS from "../data/honourableGuests";
import GuestSocialLinks from "../components/GuestSocialLinks";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

export default function HonourableGuestsPage() {
  const [selectedGuest, setSelectedGuest] = useState(null);

  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Hero Header */}
      <PageHero
        eyebrow="Public Leadership & Patronage"
        title="Honourable"
        italicTitle="Guests & Dignitaries"
        intro="Distinguished leaders, public representatives, policy thinkers, and cultural patrons joining the Ganga Literature Festival conversation."
        badge="Patna • 11 & 12 November 2026"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Leadership Directory"
            title="Invited Public Dignitaries"
            intro="Honouring leaders who shape civic imagination, public service, and civilisational progress."
          />

          <MadhubaniDivider variant="compact" />

          {/* Guests Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {HONOURABLE_GUESTS.map((guest) => (
              <div
                key={guest.name}
                onClick={() => setSelectedGuest(guest)}
                className="group relative cursor-pointer border border-gold/30 bg-white p-4 transition-all duration-500 hover:-translate-y-1 hover:border-saffron hover:shadow-xl"
              >
                <div className="aspect-[4/3.5] overflow-hidden border border-gold/20 bg-parchment">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top grayscale contrast-105 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                  />
                </div>

                <div className="mt-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold leading-tight text-dark group-hover:text-deep-saffron transition-colors">
                      {guest.name}
                    </h3>
                    <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-saffron leading-tight">
                      {guest.role}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-dark/60 truncate max-w-[170px]">
                      {guest.affiliation}
                    </span>
                    <GuestSocialLinks social={guest.social} name={guest.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Modal */}
      {selectedGuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl border-2 border-gold bg-cream p-6 sm:p-8 shadow-2xl text-dark">
            <button
              onClick={() => setSelectedGuest(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-gold/40 text-dark hover:bg-saffron hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-6 sm:grid-cols-[200px_1fr] items-start">
              <div className="overflow-hidden border-2 border-gold/40 aspect-[4/4.5] bg-dark">
                <img
                  src={selectedGuest.image}
                  alt={selectedGuest.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                  {selectedGuest.affiliation}
                </span>
                <h3 className="mt-1 font-serif text-3xl font-bold leading-none text-dark">
                  {selectedGuest.name}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider text-deep-saffron">
                  {selectedGuest.role}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-dark/80 font-sans">
                  Invited guest to the Ganga Literature Festival 2026, participating in public sessions, civilisational discourse, and state reception events in Patna.
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gold/30 pt-4">
                  <GuestSocialLinks social={selectedGuest.social} name={selectedGuest.name} />
                  <button
                    onClick={() => setSelectedGuest(null)}
                    className="border border-dark/30 px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-dark hover:bg-dark hover:text-white transition"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
