import { useState } from "react";
import { Mail, Phone, Send, User } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FORMSPREE_ENDPOINT, submitToFormspree } from "../utils/formspree";

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  return (
    <section id="register" className="relative overflow-hidden bg-[#f8f6f1] py-24 md:py-32">
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
                <div key={name} className="border border-black/10 bg-white p-5">
                  <h3 className="font-serif text-2xl font-semibold text-black">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/65">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#b58b32]/50 bg-white p-6 shadow-xl md:p-10">
            {submitted ? (
              <div className="py-16 text-center">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">Registration Received</p>
                <h3 className="mt-4 font-serif text-5xl font-semibold text-black">See you at the festival.</h3>
                <p className="mx-auto mt-5 max-w-md text-black/65">We have noted your details. Festival updates and session information will be shared by email.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 border border-[#b58b32] px-6 py-3 text-sm font-black uppercase tracking-[0.14em]">
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
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-black/70">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b58b32]" />
                    <input required name="name" className="w-full border border-black/15 bg-white py-4 pl-11 pr-4 outline-none focus:border-[#b58b32]" placeholder="Your name" />
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-black/70">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b58b32]" />
                      <input required type="email" name="email" className="w-full border border-black/15 bg-white py-4 pl-11 pr-4 outline-none focus:border-[#b58b32]" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-black/70">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b58b32]" />
                      <input name="phone" className="w-full border border-black/15 bg-white py-4 pl-11 pr-4 outline-none focus:border-[#b58b32]" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-black/70">Interest</label>
                  <select name="interest" className="w-full border border-black/15 bg-white px-4 py-4 outline-none focus:border-[#b58b32]">
                    <option>Reader Pass</option>
                    <option>Student Pass</option>
                    <option>Delegate Pass</option>
                    <option>Volunteer</option>
                    <option>Speaker / Publisher enquiry</option>
                  </select>
                </div>
                <textarea name="message" className="min-h-32 w-full border border-black/15 bg-white p-4 outline-none focus:border-[#b58b32]" placeholder="Tell us what you are interested in..." />
                {submitError && <p className="text-sm font-bold text-red-700">{submitError}</p>}
                <button className="flex items-center justify-center gap-3 bg-black px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b58b32]">
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
