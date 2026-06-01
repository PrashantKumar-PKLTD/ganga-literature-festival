import React, { useState } from 'react';
import { BookOpen, Mail, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscribedEmail.trim())) {
      setSubscribeSuccess(true);
      setTimeout(() => {
        setSubscribedEmail('');
      }, 3000);
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const offsetTop = targetEl.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Branding */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center focus:outline-none group"
            >
              <img
                src="/images/logo.png"
                alt="Ganga Literature Festival Logo"
                className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
              />
            </a>
            
            <p className="text-gray-300 text-sm leading-relaxed font-sans max-w-sm">
              Celebrating Literature, Culture, Innovation, and Ideas. A premier national convergence uniting authors, historians, poets, and scholars on the scenic banks of Ganga.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Speakers', href: '#speakers' },
                { label: 'Schedule', href: '#schedule' },
                { label: 'FAQ', href: '#faq' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-secondary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Secondary sections */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary font-display">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {[
                { label: 'Gallery Highlights', href: '#gallery' },
                { label: 'Register Seat', href: '#register' },
                { label: 'Contact Organizers', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-secondary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary font-display">
              Festival Circulars
            </h4>
            <p className="text-gray-300 text-sm font-sans leading-relaxed">
              Subscribe to obtain immediate notifications regarding schedule updates, speaker booklets, and accommodation guidance.
            </p>
            
            {/* Input wrap */}
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <div className="relative">
                <input
                  type="email"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  disabled={subscribeSuccess}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent text-white pr-12 transition-all"
                  placeholder="Enter email address"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribeSuccess}
                  className="absolute inset-y-0 right-0 px-3.5 flex items-center justify-center text-secondary hover:text-white disabled:text-gray-400 transition-colors"
                  aria-label="Subscribe"
                >
                  {subscribeSuccess ? (
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              {subscribeSuccess && (
                <p className="text-secondary text-xs font-semibold mt-2 flex items-center gap-1 animate-fade-in">
                  ✓ Successfully subscribed to newsletters!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright & partners */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xs text-gray-400 font-sans leading-relaxed">
            <p>© 2026 Ganga Literature Festival. All rights reserved.</p>
            <p className="mt-1">
              Organised in association with the <span className="text-gray-300 font-semibold">Department of Art, Culture & Youth, Govt. of Bihar</span>.
            </p>
          </div>
          
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
