import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CONTACTS = [
  { icon: MapPin, label: "Festival City", value: "Patna, Bihar" },
  { icon: Mail, label: "Email", value: "info@gangalitfest.in" },
  { icon: Phone, label: "Helpline", value: "+91 612 222 0000" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Plan Your Visit"
              intro="For partnerships, school participation, speaker proposals, media access, and volunteer support, reach the festival desk."
            />
            <div className="mt-10 grid gap-4">
              {CONTACTS.map((item) => (
                <div key={item.label} className="flex gap-4 border border-black/10 p-5">
                  <item.icon className="h-6 w-6 text-[#b58b32]" />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-black/50">{item.label}</p>
                    <p className="mt-1 font-serif text-2xl text-black">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-[#b58b32]/40 bg-black">
            <img src="/heroimage.png" alt="Ganga riverfront" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">Venue Note</p>
              <h3 className="mt-3 font-serif text-5xl font-semibold leading-none">Arrive Early. Stay For The Evenings.</h3>
              <p className="mt-4 max-w-xl leading-7 text-white/80">
                Sessions, book counters, food spaces, cultural performances, and river-inspired installations are planned as a full-day festival experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
