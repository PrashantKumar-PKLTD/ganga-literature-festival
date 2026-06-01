import { useState } from "react";
import { CheckCircle2, Ticket, User, Mail, Phone, Building, MessageSquare, Send } from "lucide-react";

const PASSES = [
  { name: "Visitor Pass", desc: "Free entry to all exhibition halls & basic product demos", price: "Free", value: "visitor" },
  { name: "Delegate Pass", desc: "Access to scientific sessions, priority seating, & B2B matchmaking", price: "₹1,999", value: "delegate" },
  { name: "VIP Pass", desc: "Everything included, networking lounge, speaker access, & reception dinner", price: "₹4,999", value: "vip" },
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

export default function Registration() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", category: "visitor", org: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); if (form.name && form.email) setSubmitted(true); };

  return (
    <section id="register" className="py-24 bg-white border-b border-gray-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Label text="Secure Your Access" />
            <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0a1a3c] leading-[1.15] mb-5"
                style={{ letterSpacing: "0.01em" }}>
              Register for your <span className="text-amber-400 font-bold">entry badge</span> today
            </h2>
            <div className="w-12 h-[2px] bg-amber-400 mb-6" />
            <p className="text-[14px] text-gray-500 leading-relaxed font-light mb-10">
              Admission is free for healthcare professionals, clinical doctors, administrators, and trade buyers who register prior to <strong className="font-semibold text-gray-700">November 15, 2026</strong>.
            </p>

            {/* Pass Tiers List */}
            <div className="flex flex-col gap-5">
              {PASSES.map((p) => (
                <div
                  key={p.value}
                  className={`border ${form.category === p.value ? 'border-amber-400 shadow-md bg-amber-50/30' : 'border-gray-100 bg-[#f8f9fb] hover:border-gray-300'} rounded-sm p-6 flex justify-between items-center gap-5 transition-all duration-300 cursor-pointer`}
                  onClick={() => setForm({ ...form, category: p.value })}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${form.category === p.value ? 'bg-amber-400 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <Ticket className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a1a3c] text-[15px] tracking-wide mb-1.5">{p.name}</h4>
                      <p className="text-[12.5px] text-gray-500 leading-relaxed font-light pr-4">{p.desc}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`inline-block text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm ${p.price === 'Free' ? 'bg-[#10b981]/10 text-[#10b981]' : 'bg-[#0a1a3c]/5 text-[#0a1a3c]'}`}>
                      {p.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-sm p-8 md:p-12 relative overflow-hidden">
              
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-[#f59e0b]" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0a1a3c] mb-3">Registration Received!</h3>
                  <div className="w-10 h-[2px] bg-emerald-500 mx-auto mb-6" />
                  <p className="text-[14px] text-gray-500 leading-relaxed font-light max-w-md mx-auto mb-6">
                    Thank you <strong className="font-medium text-gray-800">{form.name}</strong>. An email confirmation and your electronic badge details have been dispatched to <strong className="font-medium text-gray-800">{form.email}</strong>.
                  </p>
                  <div className="bg-slate-50 border border-gray-100 rounded-sm p-4 w-full mb-8">
                    <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest leading-relaxed">
                      Show your QR-code at the Gyan Bhawan entrance desk to print your physical badge.
                    </p>
                  </div>
                  <button
                    onClick={() => { setForm({ name: "", email: "", phone: "", category: "visitor", org: "", message: "" }); setSubmitted(false); }}
                    className="inline-flex items-center gap-2 text-[13px] text-[#0a1a3c] hover:text-amber-500 font-semibold tracking-wide transition-colors"
                  >
                    Register Another Person
                  </button>
                </div>
              ) : (
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-[#0a1a3c] mb-2">Expo Registration Desk</h3>
                    <p className="text-[13px] text-gray-500 font-light">Please provide accurate credential information for badge printing.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 mb-7">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                        </div>
                        <input
                          name="name"
                          type="text"
                          placeholder="Dr. Rajesh Kumar"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-[#f8f9fb] border border-gray-100 focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-sm pl-11 pr-4 py-3.5 text-[14px] text-gray-800 outline-none transition-all placeholder-gray-400 font-light"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                        </div>
                        <input
                          name="email"
                          type="email"
                          placeholder="dr.rajesh@hospital.org"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-[#f8f9fb] border border-gray-100 focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-sm pl-11 pr-4 py-3.5 text-[14px] text-gray-800 outline-none transition-all placeholder-gray-400 font-light"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                        </div>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-[#f8f9fb] border border-gray-100 focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-sm pl-11 pr-4 py-3.5 text-[14px] text-gray-800 outline-none transition-all placeholder-gray-400 font-light"
                        />
                      </div>
                    </div>

                    {/* Organization / Hospital */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">
                        Organization
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                        </div>
                        <input
                          name="org"
                          type="text"
                          placeholder="AIIMS Patna"
                          value={form.org}
                          onChange={handleChange}
                          className="w-full bg-[#f8f9fb] border border-gray-100 focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-sm pl-11 pr-4 py-3.5 text-[14px] text-gray-800 outline-none transition-all placeholder-gray-400 font-light"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 mb-8">
                    <label className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">
                      Visitor Comments
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                        <MessageSquare className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                      </div>
                      <textarea
                        name="message"
                        rows="3"
                        placeholder="Any specific products you are looking to source..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-[#f8f9fb] border border-gray-100 focus:bg-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-sm pl-11 pr-4 py-3.5 text-[14px] text-gray-800 outline-none transition-all placeholder-gray-400 font-light resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0a1a3c] hover:bg-amber-500 text-white font-bold text-[13px] tracking-[0.15em] uppercase py-4 rounded-sm transition-colors duration-300 flex items-center justify-center gap-3"
                  >
                    <span>Generate Entry Badge</span>
                    <Send className="w-4 h-4" strokeWidth={2} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
