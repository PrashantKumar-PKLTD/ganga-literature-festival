import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'How do I register for the festival?',
    answer: 'You can register directly on this website by navigating to the "Register" section and filling out our 3-step registration questionnaire. A digital delegate pass and Gyan Bhawan entry bar-code will be dispatched to your email instantly.',
  },
  {
    question: 'Is participation free for everyone?',
    answer: 'Yes, entry to all keynote sessions, panel discussions, book exhibitions, literature workshops, and cultural performances at Gyan Bhawan is completely free of charge. However, prior registration is mandatory to claim your entry badge.',
  },
  {
    question: 'Will participation certificates be provided?',
    answer: 'Yes! All registered student and professional delegates who attend the sessions across both days of the event will be provided with an official Certificate of Participation endorsed by the organizing council.',
  },
  {
    question: 'Can students participate in workshops and pitch sessions?',
    answer: 'Absolutely! We highly encourage active student participation. Students get exclusive access to our manuscript preservation workshops and can pitch their creative drafts directly to publishers during Day 2 sessions.',
  },
  {
    question: 'How can I contact the organizing committee?',
    answer: 'You can get in touch with our team via email at contact@gangalitfest.org or by calling our official event helpline. Detailed office addresses and direct social channels are listed under our Contact page.',
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-neutral-bg overflow-hidden bg-mesh-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-hidden">
          <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-5 font-sans leading-relaxed text-sm sm:text-base">
            Have questions about registrations, workshop seating, certificates, or travel logistics? Find quick answers curated by our committee.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-300 bg-white reveal-hidden ${
                  isOpen
                    ? 'border-primary/20 shadow-md ring-1 ring-primary/5'
                    : 'border-gray-100 shadow-sm hover:border-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-7 focus:outline-none select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold font-display text-base sm:text-lg text-gray-900 pr-4 leading-tight">
                    {item.question}
                  </span>
                  
                  {/* Rotating Toggle Node */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>

                {/* Collapsible Answer Pane (Framer Motion) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-gray-600 leading-relaxed font-sans border-t border-gray-50/50 pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
