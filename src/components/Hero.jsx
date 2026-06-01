import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Quote } from 'lucide-react';

/**
 * Animated counter module that increments from 0 to target
 * using requestAnimationFrame for premium smoothness.
 */
function StatCounter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const endValue = parseInt(target, 10);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * endValue);
      
      setCount(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span className="font-extrabold text-3xl md:text-5xl text-secondary font-display block leading-none">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Hero() {
  const handleScrollTo = (id) => {
    const targetEl = document.querySelector(id);
    if (targetEl) {
      const offsetTop = targetEl.offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0B1020] overflow-hidden pt-24"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/ganga_lit_fest_hero.png"
          alt="Ganga Literature Festival Background"
          className="w-full h-full object-cover object-center opacity-25 scale-102"
        />
        {/* Layered dark radial mesh gradient overlay */}
        <div className="absolute inset-0 bg-mesh-dark/85" />
      </div>

      {/* Floating Parallax Literary Element: Keep only ONE subtle drifting quote */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none select-none">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[30%] right-[12%] hidden lg:flex p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md text-white/40 shadow-2xl flex-col gap-2 max-w-[190px]"
        >
          <Quote className="w-4 h-4 text-secondary" />
          <p className="text-[10px] font-sans italic leading-relaxed text-gray-300">
            "Ideas shape our world; rivers shape our soul."
          </p>
        </motion.div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-white flex flex-col justify-between h-full w-full">
        
        {/* Main Content Info */}
        <div className="max-w-3xl mb-14">
          
          {/* Animated Glow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            National Literary Summit
          </motion.div>

          {/* Dominant Hero Title - Focal Point */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-extrabold font-display leading-tight tracking-tight mb-6"
          >
            Ganga Literature <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-yellow-300 to-white">
              Festival 2026
            </span>
          </motion.h1>

          {/* Subtitle Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-sans leading-relaxed mb-8 max-w-2xl"
          >
            Celebrating Ideas, Literature, Culture & Innovation. Join the convergence of global authors, thinkers, and visionaries on the banks of the sacred river.
          </motion.p>

          {/* Logistics metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm text-gray-100"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shadow-inner">
                <Calendar className="w-4.5 h-4.5 text-secondary" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Event Date</p>
                <p className="font-semibold text-gray-100">15–16 August 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shadow-inner">
                <MapPin className="w-4.5 h-4.5 text-secondary" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Event Venue</p>
                <p className="font-semibold text-gray-100">Gyan Bhawan, Patna, Bihar</p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => handleScrollTo('#register')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-primary bg-secondary rounded-xl shadow-lg hover:bg-secondary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('#about')}
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 backdrop-blur-md focus:outline-none"
            >
              Explore Event
            </button>
          </motion.div>
        </div>

        {/* Counter Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mt-8"
        >
          {[
            { target: '50', suffix: '+', label: 'Speakers' },
            { target: '5000', suffix: '+', label: 'Attendees' },
            { target: '30', suffix: '+', label: 'Sessions' },
            { target: '20', suffix: '+', label: 'Partners' },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 shadow-2xl group hover:bg-white/10"
            >
              <StatCounter target={stat.target} suffix={stat.suffix} />
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-gray-400 mt-3 font-display uppercase group-hover:text-white transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
