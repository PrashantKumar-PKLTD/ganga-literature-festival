import { useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Handshake,
  Mail,
  MapPin,
  Mic2,
  Phone,
  Send,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { FORMSPREE_ENDPOINT, submitToFormspree } from "../utils/formspree";

const tabs = [
  { id: "attendees", label: "Attendees" },
  { id: "speakers", label: "Authors & Speakers" },
  { id: "partners", label: "Partners" },
];

const tabCopy = {
  attendees: {
    role: "Reader / Delegate",
    interestLabel: "Festival Interest",
    interestOptions: ["Reader Pass", "Student Pass", "Delegate Pass", "Workshop Access"],
    message: "Tell us which conversations, workshops, or book events you want to attend.",
    button: "Submit Interest",
  },
  speakers: {
    role: "Author / Speaker",
    interestLabel: "Proposed Session Type",
    interestOptions: ["Panel Conversation", "Book Launch", "Workshop", "Performance / Reading"],
    message: "Share your book, theme, session idea, or speaker profile.",
    button: "Submit Proposal",
  },
  partners: {
    role: "Institution / Sponsor",
    interestLabel: "Partnership Area",
    interestOptions: ["Publishing Partner", "Cultural Partner", "Education Partner", "Sponsor"],
    message: "Tell us how your organisation would like to collaborate with GLF.",
    button: "Start Partnership",
  },
};

const festivalHighlights = [
  {
    icon: BookOpen,
    title: "Books & Ideas",
    desc: "Explore launches, readings, and conversations rooted in Indian thought.",
  },
  {
    icon: Mic2,
    title: "Author Sessions",
    desc: "Meet writers, speakers, scholars, publishers, and cultural voices.",
  },
  {
    icon: Users,
    title: "Community Forum",
    desc: "Participate as a reader, student, delegate, volunteer, or partner.",
  },
  {
    icon: Handshake,
    title: "Collaborations",
    desc: "Build meaningful associations with institutions and festival supporters.",
  },
];

export default function StudyDestinations() {
  const [activeTab, setActiveTab] = useState("attendees");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const activeCopy = tabCopy[activeTab];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setSubmitted(false);
    setSubmitError("");
  };

  return (
    <section id="participate" className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-black leading-tight text-black md:text-4xl">
            A Festival That{" "}
            <span className="relative inline-block">
              Brings Voices Together
              <span className="absolute bottom-1 left-0 h-2 w-full bg-[#b58b32]/35" />
            </span>
          </h2>
          <p className="mt-3 text-base font-semibold text-black/65 md:text-xl">
            Across conversations, performances, books, and community participation
          </p>
        </div>

        <div className="mb-6 flex justify-center border-b border-black/10">
          <div className="flex w-full max-w-2xl justify-center gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={`relative whitespace-nowrap px-4 py-3 text-sm font-black transition md:px-5 md:text-base ${
                  activeTab === tab.id
                    ? "text-[#b58b32]"
                    : "text-black/55 hover:text-black"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#b58b32]" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative overflow-hidden bg-[#080604] p-5 text-white shadow-xl md:p-6">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: 'url("/gangabg.png")' }}
            />
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#b58b32]/25 blur-3xl" />
            <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="grid gap-3">
                {festivalHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="group flex gap-3 border border-[#5f4520] bg-[#15110b] p-3 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-[#ffd978] hover:bg-[#20170d]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#ffd978] text-black shadow-lg shadow-black/30 transition group-hover:bg-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white md:text-base">{item.title}</h4>
                        <p className="mt-0.5 text-sm leading-5 text-[#d7c7aa]">{item.desc}</p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                {[
                  ["3", "Participation tracks"],
                  ["4+", "Festival formats"],
                  ["1", "Shared stage"],
                ].map(([value, label]) => (
                  <div key={label} className="border border-[#d59632]/35 bg-[#f8edd6] p-3 text-center text-black">
                    <div className="font-serif text-2xl font-semibold text-[#8b611b]">{value}</div>
                    <div className="mt-0.5 text-[10px] font-black uppercase tracking-[0.1em] text-black/60">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="flex items-center gap-3 border border-[#5f4520] bg-[#0f0b07] p-3">
                  <CalendarDays className="h-4 w-4 text-[#ffd978]" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#d7c7aa]">
                      Festival Edition
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white">GLF 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-[#5f4520] bg-[#0f0b07] p-3">
                  <MapPin className="h-4 w-4 text-[#ffd978]" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#d7c7aa]">
                      Festival City
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white">Patna, Bihar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-[#d59632]/25 bg-[#f8edd6] p-5 shadow-xl shadow-black/5 md:p-6">
            {submitted ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
                  Received
                </p>
                <h3 className="mt-4 font-serif text-4xl font-semibold text-black">
                  Thank you for connecting with GLF.
                </h3>
                <p className="mt-5 max-w-md text-black/65">
                  Your details have been noted. The festival team will share the next update soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 bg-[#b58b32] px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-black"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="grid gap-3.5"
                onSubmit={async (event) => {
                  setSubmitError("");
                  try {
                    await submitToFormspree(event, () => setSubmitted(true));
                  } catch {
                    setSubmitError("Something went wrong. Please try again.");
                  }
                }}
              >
                <input type="hidden" name="form_source" value="Participation form" />
                <div>
                  <label className="mb-1.5 block text-sm font-black text-black">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b58b32]" />
                    <input
                      required
                      name="name"
                      className="w-full rounded-md border border-[#d59632] bg-white px-4 py-2.5 pl-11 outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-black text-black">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b58b32]" />
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded-md border border-[#d59632] bg-white px-4 py-2.5 pl-11 outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-black text-black">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b58b32]" />
                    <input
                      name="phone"
                      className="w-full rounded-md border border-[#d59632] bg-white px-4 py-2.5 pl-11 outline-none focus:border-black"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-black text-black">City</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b58b32]" />
                      <input name="city" className="w-full rounded-md border border-[#d59632] bg-white px-4 py-2.5 pl-11 outline-none focus:border-black" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-black text-black">Role</label>
                    <input
                      value={activeCopy.role}
                      readOnly
                      name="role"
                      className="w-full rounded-md border border-[#d59632] bg-white px-4 py-2.5 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-black text-black">
                    {activeCopy.interestLabel}
                  </label>
                  <select name="interest" className="w-full rounded-md border border-[#d59632] bg-white px-4 py-2.5 outline-none focus:border-black">
                    {activeCopy.interestOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-black text-black">Your Message</label>
                  <textarea
                    name="message"
                    className="min-h-20 w-full rounded-md border border-[#d59632] bg-white p-3 outline-none focus:border-black"
                    placeholder={activeCopy.message}
                  />
                </div>

                {submitError && <p className="text-sm font-bold text-black">{submitError}</p>}
                <button className="mx-auto flex items-center justify-center gap-2 rounded-md bg-[#ffd978] px-8 py-2.5 text-base font-black text-black transition hover:bg-black hover:text-white">
                  {activeCopy.button}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
