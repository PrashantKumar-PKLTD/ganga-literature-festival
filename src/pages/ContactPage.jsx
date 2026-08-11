import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Building, MessageSquare } from "lucide-react";
import { FORMSPREE_ENDPOINT, submitToFormspree } from "../utils/formspree";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

const DEPARTMENTS = [
  { name: "General Enquiries", email: "info@gangalitfest.in", desc: "Passes, schedules, venue info & visitor advisories" },
  { name: "Partnerships & Brands", email: "partnership@gangalitfest.in", desc: "Sponsorships, stage naming & corporate patrons" },
  { name: "Media & Press Desk", email: "media@gangalitfest.in", desc: "Accreditation, interview slots & press kits" },
  { name: "Schools & Volunteers", email: "outreach@gangalitfest.in", desc: "Student group visits, campus ambassadors & volunteer desk" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="Connect & Support"
        title="Contact"
        italicTitle="Festival Desk"
        intro="Have questions about registration, delegate passes, school participation, or media accreditation? Reach out to the Ganga Literature Festival team."
        badge="Festival Secretariat • Patna"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Direct Desk Access"
            title="Department Directory"
            intro="Connect directly with the appropriate team for faster response."
          />

          {/* Department Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.name}
                className="border border-gold/30 bg-white p-6 shadow-sm transition-all duration-300 hover:border-saffron hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">
                  Department Desk
                </span>
                <h3 className="mt-2 font-serif text-2xl font-bold text-dark">
                  {dept.name}
                </h3>
                <p className="mt-3 text-xs text-dark/70 font-sans leading-relaxed">
                  {dept.desc}
                </p>
                <a
                  href={`mailto:${dept.email}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-saffron underline hover:text-dark transition"
                >
                  <Mail className="h-3.5 w-3.5" /> {dept.email}
                </a>
              </div>
            ))}
          </div>

          <MadhubaniDivider variant="floral" />

          {/* Interactive Form & Address Grid */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            {/* Contact Form */}
            <div className="lg:col-span-7 border border-gold/30 bg-white p-8 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron block mb-1">
                Send an Enquiry
              </span>
              <h3 className="font-serif text-3xl font-bold text-dark mb-6">
                Get in Touch with GLF Team
              </h3>

              {submitted ? (
                <div className="py-12 text-center border border-gold/30 bg-cream p-6">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-saffron mb-3" />
                  <h4 className="font-serif text-3xl font-bold text-dark">Message Received</h4>
                  <p className="mt-2 text-xs sm:text-sm text-dark/75 font-sans">
                    Thank you for reaching out. The festival secretariat will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  action={FORMSPREE_ENDPOINT}
                  method="POST"
                  className="space-y-4"
                  onSubmit={async (e) => {
                    setErrorMsg("");
                    try {
                      await submitToFormspree(e, () => setSubmitted(true));
                    } catch {
                      setErrorMsg("Something went wrong. Please try again.");
                    }
                  }}
                >
                  <input type="hidden" name="form_source" value="Contact Us Page Form" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/70 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        className="w-full border border-gold/30 bg-cream p-3 text-xs font-sans text-dark outline-none focus:border-saffron"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/70 mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        className="w-full border border-gold/30 bg-cream p-3 text-xs font-sans text-dark outline-none focus:border-saffron"
                        placeholder="name@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/70 mb-1">
                      Subject / Enquiry Type
                    </label>
                    <select
                      name="subject"
                      className="w-full border border-gold/30 bg-cream p-3 text-xs font-sans text-dark outline-none focus:border-saffron"
                    >
                      <option value="General Query">General Visitor Query</option>
                      <option value="Registration Assistance">Registration & Pass Assistance</option>
                      <option value="Media Accreditation">Media Accreditation</option>
                      <option value="Speaker Proposal">Speaker Proposal</option>
                      <option value="Volunteer Application">Volunteer Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark/70 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      name="message"
                      rows="5"
                      className="w-full border border-gold/30 bg-cream p-3 text-xs font-sans text-dark outline-none focus:border-saffron resize-none"
                      placeholder="Write your query or message..."
                    />
                  </div>

                  {errorMsg && <p className="text-xs font-bold text-saffron">{errorMsg}</p>}

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 border border-saffron bg-saffron px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
                  >
                    Send Message <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Secretariat Information Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-gold/40 bg-dark p-8 text-white shadow-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold block mb-2">
                  Festival Secretariat
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mb-4">
                  Ganga Literature Festival Desk
                </h3>
                <div className="space-y-4 text-xs sm:text-sm font-sans text-cream/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-saffron shrink-0 mt-0.5" />
                    <span>Patna, Bihar — On the Banks of the Holy Ganga</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-saffron shrink-0 mt-0.5" />
                    <span>info@gangalitfest.in</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-saffron shrink-0 mt-0.5" />
                    <span>+91 612 222 0000</span>
                  </div>
                </div>
              </div>

              <div className="border border-gold/30 bg-white p-6 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron block mb-2">
                  Festival Hours
                </span>
                <h4 className="font-serif text-xl font-bold text-dark">
                  11 & 12 November 2026
                </h4>
                <p className="mt-2 text-xs text-dark/70 font-sans leading-relaxed">
                  Day sessions run from 9:30 AM to 5:30 PM. SPIC MACAY cultural evenings begin at 6:30 PM at the Ganga Amphitheatre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
