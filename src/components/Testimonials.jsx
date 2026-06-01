import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Prof. Harish Trivedi',
    role: 'Renowned Translator & Scholar',
    org: 'Indian Translation Guild',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    quote: 'Flowing like the Ganga itself, the intellectual energy of the panels and the depth of the dialogues make this literature festival an absolute national landmark.',
    rating: 5,
  },
  {
    name: 'Shoma Sen',
    role: 'Editorial Director',
    org: 'Heritage Press India',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    quote: 'We discovered exceptionally talented vernacular writers during the pitching sessions on Day 2. The Ganga Literature Festival is a true incubator of original ideas.',
    rating: 5,
  },
  {
    name: 'Dr. Ranjeet Kumar',
    role: 'Head of History Department',
    org: 'Patna College',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    quote: 'Bridging technical scanning algorithms with ancient Sanskrit treatises was the highlight of GLF. It makes academic research incredibly alive and accessible.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const currentReview = REVIEWS[index];

  // Motion variants for slide transition
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 mt-4 tracking-tight">
            Loved by Authors & Delegates
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel viewport */}
        <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="w-full flex flex-col sm:flex-row gap-6 md:gap-8 items-center bg-neutral-bg border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-xl"
            >
              {/* Headshot */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-secondary shadow-lg flex-shrink-0 select-none">
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quotes & details */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 text-secondary mb-3">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 italic text-sm sm:text-base md:text-lg leading-relaxed font-sans font-medium">
                    "{currentReview.quote}"
                  </p>
                </div>

                {/* Author Name */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-extrabold text-gray-900 text-sm sm:text-base leading-tight font-display">
                    {currentReview.name}
                  </h4>
                  <p className="text-primary font-semibold text-xs mt-1">
                    {currentReview.role} — <span className="text-gray-400 font-medium uppercase tracking-wider">{currentReview.org}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] sm:left-[-40px] p-2.5 rounded-full bg-white border border-gray-100 text-gray-500 hover:text-primary hover:shadow-lg hover:scale-105 active:scale-95 transition-all focus:outline-none z-10"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] sm:right-[-40px] p-2.5 rounded-full bg-white border border-gray-100 text-gray-500 hover:text-primary hover:shadow-lg hover:scale-105 active:scale-95 transition-all focus:outline-none z-10"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
