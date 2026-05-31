import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Venue Location",
    value: ["Gyan Bhawan Exhibition Centre", "North Gandhi Maidan Road, Muradpur", "Patna, Bihar — 800001"],
  },
  {
    icon: Mail,
    label: "Email Enquiries",
    value: ["info@starexhibitions.in", "sales@starexhibitions.in"],
  },
  {
    icon: Phone,
    label: "Helpline & Booking",
    value: ["+91 72085 22614", "+91 91365 00849"],
  },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "Twitter", href: "#", svg: <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "Facebook", href: "#", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "YouTube", href: "#", svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

function Label({ text }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <div className="w-5 h-px bg-amber-400" />
      <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-amber-400"
        style={{ fontFamily: "'Poppins', sans-serif" }}>
        {text}
      </span>
      <div className="w-5 h-px bg-amber-400" />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-b border-gray-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Label text="Get In Touch" />
            <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0a1a3c] leading-[1.15] mb-5"
                style={{ letterSpacing: "0.01em" }}>
              Expo Coordination & <span className="text-amber-400 font-bold">Help Desk</span>
            </h2>
            <div className="w-12 h-[2px] bg-amber-400 mb-6" />
            <p className="text-[14px] text-gray-500 leading-relaxed font-light mb-10">
              Have questions about exhibitor stall booking rates, early-bird options, sponsorship opportunities, or media guidelines? Get in touch with our team directly.
            </p>

            {/* Contacts Grid */}
            <div className="flex flex-col gap-5 mb-10">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex gap-5 items-start group">
                  <div className="w-12 h-12 bg-[#f8f9fb] border border-gray-100 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-white text-[#0a1a3c] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-semibold text-[#0a1a3c] text-[13px] tracking-widest uppercase mb-2">{item.label}</h4>
                    <div className="text-[13.5px] text-gray-500 font-light leading-relaxed">
                      {item.value.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Follow Updates
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 bg-[#f8f9fb] border border-gray-100 text-gray-500 hover:bg-[#0a1a3c] hover:text-white hover:border-[#0a1a3c] text-[12px] font-medium px-4 py-2.5 rounded-sm transition-all duration-300"
                  >
                    {social.svg}
                    {social.label}
                    <ArrowUpRight className="w-3 h-3 opacity-50" strokeWidth={2.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps */}
          <div className="lg:col-span-7 w-full h-[500px] bg-slate-50 rounded-sm overflow-hidden border border-gray-100 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-[#f59e0b] z-10" />
            <iframe
              title="Gyan Bhawan Patna Map"
              src="https://maps.google.com/maps?q=Gyan+Bhawan,+Patna,+Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-sm"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
