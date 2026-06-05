import { useState, useRef } from "react";
import { MapPin, Mail, Phone, ArrowUpRight, Send, Waves, BookOpen } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GeometricBirds } from "./Decorations";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Festival Venue",
    value: ["Gyan Bhawan Exhibition Centre", "North Gandhi Maidan Road", "Patna, Bihar — 800001"],
  },
  {
    icon: Mail,
    label: "Email Enquiries",
    value: ["info@gangalitfest.com", "media@gangalitfest.com"],
  },
  {
    icon: Phone,
    label: "Helpline & Support",
    value: ["+91 98765 43210", "+91 91234 56789"],
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
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-8 h-[2px] bg-glf-gold" />
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-glf-gold">
        {text}
      </span>
      <div className="w-8 h-[2px] bg-glf-gold" />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      leftColRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      rightColRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: sectionRef });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-glf-cream relative overflow-hidden">
      {/* Decorative Wave Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #1B6B6D 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-glf-burgundy/5 rounded-full blur-[100px] pointer-events-none" />
      
      <GeometricBirds className="absolute left-[40%] top-20 w-48 hidden lg:block opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column: Details & Map */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-center">
            <Label text="Get In Touch" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-glf-charcoal leading-tight mb-5">
              Connect with the <span className="text-glf-burgundy">Festival</span>
            </h2>
            <p className="text-glf-slate leading-relaxed text-lg mb-10">
              Whether you are an aspiring author, a potential sponsor, or a literature enthusiast, we would love to hear from you.
            </p>

            {/* Contacts Grid */}
            <div className="flex flex-col gap-6 mb-10">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex gap-5 items-start group">
                  <div className="w-12 h-12 bg-white border border-gray-100 group-hover:border-glf-gold group-hover:bg-glf-gold group-hover:text-white text-glf-burgundy rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:shadow-[0_4px_20px_rgb(201,168,76,0.4)]">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-heading font-bold text-glf-charcoal text-lg mb-1">{item.label}</h4>
                    <div className="text-sm text-glf-slate leading-relaxed">
                      {item.value.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Box (Embedded gracefully) */}
            <div className="w-full h-48 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-glf-burgundy to-glf-gold z-10" />
              <iframe
                title="Gyan Bhawan Patna Map"
                src="https://maps.google.com/maps?q=Gyan+Bhawan,+Patna,+Bihar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-bold text-glf-slate uppercase tracking-widest mb-4">
                Follow our Journey
              </p>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 bg-white border border-gray-100 text-glf-slate hover:bg-glf-burgundy hover:text-white hover:border-glf-burgundy text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {social.svg}
                    {social.label}
                    <ArrowUpRight className="w-3 h-3 opacity-50" strokeWidth={2.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Contact Form */}
          <div ref={rightColRef} className="lg:col-span-7 relative flex items-center">
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 relative">
              
              {/* Literary / Ganga watermarks */}
              <BookOpen className="absolute -right-10 -bottom-10 w-64 h-64 text-glf-cream opacity-50 rotate-12 pointer-events-none" />
              <Waves className="absolute -left-10 top-10 w-40 h-40 text-blue-50 opacity-50 -rotate-12 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="font-heading text-3xl font-bold text-glf-charcoal mb-2">Send a Message</h3>
                <p className="text-glf-slate text-sm mb-8">We usually respond within 24 hours.</p>

                {submitted ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="font-heading text-2xl font-bold text-glf-charcoal mb-2">Message Sent!</h4>
                    <p className="text-glf-slate">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-glf-slate uppercase tracking-widest">
                          Your Name <span className="text-glf-burgundy">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Rabindranath Tagore"
                          required
                          className="w-full bg-gray-50 border border-gray-200 text-glf-charcoal text-sm rounded-lg px-4 py-3.5 focus:bg-white focus:border-glf-burgundy focus:ring-1 focus:ring-glf-burgundy outline-none transition-all"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-glf-slate uppercase tracking-widest">
                          Email Address <span className="text-glf-burgundy">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="hello@example.com"
                          required
                          className="w-full bg-gray-50 border border-gray-200 text-glf-charcoal text-sm rounded-lg px-4 py-3.5 focus:bg-white focus:border-glf-burgundy focus:ring-1 focus:ring-glf-burgundy outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold text-glf-slate uppercase tracking-widest">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full bg-gray-50 border border-gray-200 text-glf-charcoal text-sm rounded-lg px-4 py-3.5 focus:bg-white focus:border-glf-burgundy focus:ring-1 focus:ring-glf-burgundy outline-none transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold text-glf-slate uppercase tracking-widest">
                        Your Message <span className="text-glf-burgundy">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Write your message here..."
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-glf-charcoal text-sm rounded-lg px-4 py-3.5 focus:bg-white focus:border-glf-burgundy focus:ring-1 focus:ring-glf-burgundy outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full group bg-glf-burgundy hover:bg-glf-burgundy-dark text-white font-bold text-sm tracking-widest uppercase py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
