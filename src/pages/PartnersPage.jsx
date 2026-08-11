import { useState } from "react";
import { ArrowRight, PenLine, X, Building2, Handshake } from "lucide-react";
import { FORMSPREE_ENDPOINT, submitToFormspree } from "../utils/formspree";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

const partnerGroups = [
  {
    label: "Presenting Partner",
    partners: [{ name: "Janata", logo: "/partner-logos/icon1.png" }],
  },
  {
    label: "Government and Industry Partners",
    partners: [
      { name: "BIADA Department of Industries", logo: "/partner-logos/icon5.png" },
      { name: "CII", logo: "/partner-logos/icon4.png" },
      { name: "TiE Patna", logo: "/partner-logos/icon6.png" },
    ],
  },
  {
    label: "Institutional and Knowledge Partners",
    partners: [
      { name: "CIMP", logo: "/partner-logos/icon7.png" },
      { name: "CIMP-BIIF", logo: "/partner-logos/icon8.png" },
      { name: "Let's Inspire Bihar", logo: "/partner-logos/icon12.png" },
      { name: "Vishwa Hindi Parishad", logo: "/partner-logos/icon17.png" },
    ],
  },
  {
    label: "Healthcare and Social Impact Partners",
    partners: [
      { name: "QA Stem Cell Centre", logo: "/partner-logos/icon3.png" },
      { name: "Sulabh", logo: "/partner-logos/icon10.png" },
      { name: "Ruban", logo: "/partner-logos/icon9.png" },
      { name: "Indian Medical Association", logo: "/partner-logos/icon11.png" },
      { name: "eSSAA Foundation", logo: "/partner-logos/icon20.png" },
    ],
  },
  {
    label: "Media and Outreach Partners",
    partners: [
      { name: "MATV", logo: "/partner-logos/icon2.png" },
      { name: "Earshot", logo: "/partner-logos/icon14.png" },
      { name: "RBM News", logo: "/partner-logos/icon21.png" },
      { name: "Apisode", logo: "/partner-logos/apisode.png" },
    ],
  },
  {
    label: "Innovation, Education and Business Partners",
    partners: [
      { name: "Digital for Humanity", logo: "/partner-logos/icon13.png" },
      { name: "The Pro Educator", logo: "/partner-logos/icon15.png" },
      { name: "Startup Legal", logo: "/partner-logos/icon16.png" },
      { name: "B-Hub Maurya Lok", logo: "/partner-logos/icon18.png" },
      { name: "Prashant Kumar LTD", logo: "/partner-logos/icon19.png" },
    ],
  },
];

export default function PartnersPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Hero Header */}
      <PageHero
        eyebrow="Institutional Ecosystem"
        title="Partners &"
        italicTitle="Sponsors"
        intro="We collaborate with government bodies, cultural institutions, media platforms, education networks, and corporate sponsors who share our vision."
        badge="GLF Partner Coalition"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Support System"
            title="Sponsor & Partner Network"
            intro="Building an enduring literature festival for Bihar through public-private partnerships and institutional support."
          />

          {/* Partnership Enquiry Bar */}
          <div className="mt-10 border border-gold/40 bg-white p-6 sm:p-8 flex flex-col items-center justify-between gap-6 md:flex-row shadow-sm">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                Become a Festival Partner
              </span>
              <p className="mt-1 text-sm font-semibold text-dark font-sans">
                For brand sponsorship, stage naming rights, and institutional collaboration:
              </p>
              <a
                href="mailto:partnership@gangalitfest.in"
                className="text-xs font-bold text-saffron underline hover:text-dark transition"
              >
                partnership@gangalitfest.in
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setSubmitError("");
                setFormOpen(true);
              }}
              className="border border-saffron bg-saffron px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition shrink-0"
            >
              Enquire Partnership
            </button>
          </div>

          <MadhubaniDivider variant="compact" />

          {/* Partner Groups */}
          <div className="mt-12 space-y-16">
            {partnerGroups.map((group) => (
              <div key={group.label} className="border border-gold/20 bg-white/70 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gold/25 pb-4 mb-6">
                  <h3 className="font-serif text-2xl font-bold text-dark">
                    {group.label}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-saffron">
                    GLF 2026 Partner Tier
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center">
                  {group.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="group flex min-h-[90px] items-center justify-center border border-gold/20 bg-white p-4 transition-all duration-300 hover:border-saffron hover:shadow-md"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                        className="max-h-16 w-full max-w-[160px] object-contain transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg border-2 border-gold bg-cream p-6 sm:p-8 shadow-2xl text-dark">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-gold/40 text-dark hover:bg-saffron hover:text-white transition"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-saffron">
                  Submitted Successfully
                </span>
                <h3 className="mt-2 font-serif text-3xl font-bold text-dark">
                  Thank You
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-dark/75 font-sans">
                  Your partnership request has been received. Our festival team will reach out to discuss collaboration options.
                </p>
              </div>
            ) : (
              <>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                  Partnership Enquiry
                </span>
                <h3 className="mt-1 font-serif text-3xl font-bold text-dark">
                  Partner with GLF 2026
                </h3>

                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  className="mt-6 space-y-4"
                  onSubmit={async (event) => {
                    setSubmitError("");
                    try {
                      await submitToFormspree(event, () => setSubmitted(true));
                    } catch {
                      setSubmitError("Submission failed. Please try again.");
                    }
                  }}
                >
                  <input type="hidden" name="form_source" value="Partner Enquiry Form" />
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/70 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full border border-gold/30 bg-white p-2.5 text-xs font-sans text-dark outline-none focus:border-saffron"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/70 mb-1">
                      Official Email *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full border border-gold/30 bg-white p-2.5 text-xs font-sans text-dark outline-none focus:border-saffron"
                      placeholder="name@organisation.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/70 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border border-gold/30 bg-white p-2.5 text-xs font-sans text-dark outline-none focus:border-saffron"
                      placeholder="+91 Phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/70 mb-1">
                      Partnership Proposal / Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      className="w-full border border-gold/30 bg-white p-2.5 text-xs font-sans text-dark outline-none focus:border-saffron resize-none"
                      placeholder="Tell us how you would like to collaborate..."
                    />
                  </div>

                  {submitError && <p className="text-xs font-bold text-saffron">{submitError}</p>}

                  <button
                    type="submit"
                    className="w-full border border-saffron bg-saffron py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
