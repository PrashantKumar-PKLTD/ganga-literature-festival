import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Send, CheckCircle2, User, Mail, Phone, BookOpen } from "lucide-react";

export default function RegistrationPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "general" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-glf-cream min-h-screen font-sans antialiased selection:bg-glf-burgundy/20 selection:text-glf-burgundy">
      <Navbar />
      
      {/* Dynamic Background */}
      <style>{`
        @keyframes floatRegistration {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .bg-pattern {
          background-image: radial-gradient(#800020 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.2;
        }
        .animate-float-slow {
          animation: floatRegistration 6s ease-in-out infinite;
        }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none z-0 bg-pattern" />

      {/* Decorative Circles */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-glf-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-glf-burgundy/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-gray-100">
          
          {/* Left Side: Info */}
          <div className="bg-glf-burgundy p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-center">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-40"
              style={{ backgroundImage: 'url("/Images/speakers/Gangaghat.jpg")' }}
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-glf-burgundy via-glf-burgundy/60 to-transparent" />
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 z-0" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-glf-gold/10 rounded-full blur-xl translate-y-1/3 -translate-x-1/4 z-0" />
            
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 leading-tight">
                Join the Celebration of <span className="text-glf-gold">Literature</span>
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                Immerse yourself in two days of inspiring talks, poetry readings, and cultural performances at the Gyan Bhawan, Patna.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="font-heading font-bold text-glf-gold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Engaging Sessions</h4>
                    <p className="text-sm text-white/70">Listen to renowned authors and thought leaders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="font-heading font-bold text-glf-gold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Cultural Programs</h4>
                    <p className="text-sm text-white/70">Experience the rich heritage of Ganga and Bihar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <span className="font-heading font-bold text-glf-gold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Book Signings</h4>
                    <p className="text-sm text-white/70">Meet your favorite authors and get signed copies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-8 md:p-10 bg-white relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-glf-charcoal mb-3">Registration Successful!</h3>
                <p className="text-glf-slate mb-8 leading-relaxed">
                  Thank you, <span className="font-semibold text-glf-burgundy">{form.name}</span>. We've sent your entry pass to your email. We look forward to seeing you at Gyan Bhawan, Patna!
                </p>
                <button
                  onClick={() => { setForm({ name: "", email: "", phone: "", interest: "general" }); setSubmitted(false); }}
                  className="px-6 py-2.5 rounded-full border border-glf-burgundy text-glf-burgundy font-semibold hover:bg-glf-burgundy hover:text-white transition-all duration-300"
                >
                  Register Another Person
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold text-glf-charcoal mb-2">Get Your Pass</h3>
                  <p className="text-sm text-glf-slate">Fill in your details below to register for the festival. Entry is free.</p>
                </div>

                <div className="space-y-4 flex-1">
                  {/* Full Name */}
                  <div className="relative">
                    <label className="block text-[11px] font-bold text-glf-slate uppercase tracking-widest mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-glf-charcoal text-sm rounded-lg pl-11 pr-4 py-3 focus:bg-white focus:border-glf-burgundy focus:ring-1 focus:ring-glf-burgundy outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="block text-[11px] font-bold text-glf-slate uppercase tracking-widest mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-glf-charcoal text-sm rounded-lg pl-11 pr-4 py-3 focus:bg-white focus:border-glf-burgundy focus:ring-1 focus:ring-glf-burgundy outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="block text-[11px] font-bold text-glf-slate uppercase tracking-widest mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-gray-50 border border-gray-200 text-glf-charcoal text-sm rounded-lg pl-11 pr-4 py-3 focus:bg-white focus:border-glf-burgundy focus:ring-1 focus:ring-glf-burgundy outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Interest */}
                  <div className="relative">
                    <label className="block text-[11px] font-bold text-glf-slate uppercase tracking-widest mb-1">
                      Primary Interest
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10 pointer-events-none" />
                      <select
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-glf-charcoal text-sm rounded-lg pl-11 pr-4 py-3 focus:bg-white focus:border-glf-burgundy focus:ring-1 focus:ring-glf-burgundy outline-none transition-all appearance-none relative"
                      >
                        <option value="general">General Admission</option>
                        <option value="poetry">Poetry Sessions</option>
                        <option value="authors">Author Interactions</option>
                        <option value="culture">Cultural Programs</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full group bg-glf-burgundy hover:bg-glf-burgundy-dark text-white font-bold text-sm tracking-widest uppercase py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <span>Complete Registration</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
