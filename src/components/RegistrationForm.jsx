import { useState } from "react";
import { Mail, Phone, Send, User } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FORMSPREE_ENDPOINT, submitToFormspree } from "../utils/formspree";

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  return (
    <section id="register" className="relative overflow-hidden bg-cream py-16 md:py-24 border-t border-gold/10">
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-20 lg:block"
        style={{ backgroundImage: 'url("/heroimage.png")' }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Register"
              title="Reserve Your Festival Pass"
              intro="Register for programme updates, session access, author signings, volunteer opportunities, and festival announcements."
            />

            <div className="mt-10 grid gap-4">
              {[
                ["Reader Pass", "General access to open sessions and the book bazaar."],
                ["Student Pass", "Priority student seating for selected conversations."],
                ["Delegate Pass", "Reserved access for workshops, networking, and launches."],
              ].map(([name, desc]) => (
                <div key={name} className="border border-gold/20 bg-cream/40 p-5 rounded-none shadow-sm transition duration-300 hover:border-saffron hover:bg-cream">
                  <h3 className="font-serif text-2xl font-light text-dark">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark/70 font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gold/20 bg-cream p-6 shadow-md md:p-10 rounded-none transition duration-300 focus-within:border-saffron">
            {submitted ? (
              <div className="py-16 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-saffron">Registration Received</p>
                <h3 className="mt-4 font-serif text-4xl font-light text-dark uppercase">See you at the festival.</h3>
                <p className="mx-auto mt-5 max-w-md text-dark/70 font-light">We have noted your details. Festival updates and session information will be shared by email.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 border border-saffron bg-dark text-cream hover:bg-saffron px-6 py-3.5 text-xs font-bold uppercase rounded-none transition">
                  Register Another
                </button>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="grid gap-5"
                onSubmit={async (event) => {
                  setSubmitError("");
                  try {
                    await submitToFormspree(event, () => setSubmitted(true));
                  } catch {
                    setSubmitError("Something went wrong. Please try again.");
                  }
                }}
              >
                <input type="hidden" name="form_source" value="Festival registration" />
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-dark/70">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-saffron" />
                    <input required name="name" className="w-full border border-gold/30 bg-cream py-4 pl-11 pr-4 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition rounded-none text-dark" placeholder="Your name" />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-dark/70">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-saffron" />
                      <input required type="email" name="email" className="w-full border border-gold/30 bg-cream py-4 pl-11 pr-4 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition rounded-none text-dark" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-dark/70">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-saffron" />
                      <input name="phone" className="w-full border border-gold/30 bg-cream py-4 pl-11 pr-4 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition rounded-none text-dark" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-dark/70">Interest</label>
                  <select name="interest" className="w-full border border-gold/30 bg-cream px-4 py-4 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition rounded-none text-dark">
                    <option>Reader Pass</option>
                    <option>Student Pass</option>
                    <option>Delegate Pass</option>
                    <option>Volunteer</option>
                    <option>Speaker / Publisher enquiry</option>
                  </select>
                </div>
                <textarea name="message" className="min-h-32 w-full border border-gold/30 bg-cream p-4 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition rounded-none text-dark" placeholder="Tell us what you are interested in..." />
                {submitError && <p className="text-sm font-bold text-red-700">{submitError}</p>}
                <button className="flex items-center justify-center gap-3 bg-dark px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-cream border border-saffron transition duration-300 hover:bg-saffron rounded-none hover:-translate-y-0.5 shadow-sm">
                  Submit Registration <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
