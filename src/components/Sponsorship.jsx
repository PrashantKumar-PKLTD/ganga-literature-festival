import { Handshake, Megaphone, Sparkles, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TIERS = [
  {
    name: "Presenting Partner",
    note: "Festival-wide association with a purposeful cultural platform dedicated to Bihar's intellectual life.",
  },
  {
    name: "Publishing Partner",
    note: "Support books, authors, launches, translation, rights conversations, and purposeful publishing.",
  },
  {
    name: "Cultural Partner",
    note: "Enable classical music, arts evenings, student outreach, and living heritage programming.",
  },
];

const BENEFITS = [
  { icon: Megaphone, label: "Brand Visibility" },
  { icon: Users, label: "Audience Access" },
  { icon: Sparkles, label: "Curated Activations" },
  { icon: Handshake, label: "Institutional Goodwill" },
];

export default function Sponsorship() {
  return (
    <section id="sponsorship" className="relative overflow-hidden bg-black py-24 text-white md:py-32">
      <img
        src="/heroimage.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Partners"
              title="BIHAAN. BluOne Ink. SPIC MACAY."
              intro="GLF is presented by BIHAAN, with BluOne Ink as publishing partner and SPIC MACAY as cultural partner, bringing books, national conversation, and classical heritage to Patna."
              inverted
            />
            <a
              href="mailto:info@gangalitfest.in?subject=Sponsorship%20Enquiry"
              className="mt-9 inline-flex bg-[#b58b32] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
            >
              Request Sponsorship Deck
            </a>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <div key={benefit.label} className="border border-white/15 bg-white/10 p-5">
                  <benefit.icon className="h-7 w-7 text-[#b58b32]" strokeWidth={1.8} />
                  <p className="mt-4 font-serif text-2xl font-semibold text-white">
                    {benefit.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {TIERS.map((tier) => (
                <article key={tier.name} className="border border-[#b58b32]/45 bg-black/45 p-6">
                  <h3 className="font-serif text-3xl font-semibold text-white">{tier.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{tier.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
