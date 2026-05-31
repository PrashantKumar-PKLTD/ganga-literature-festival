import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/misc";

function Label({ text }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3 justify-center">
      <div className="w-5 h-px bg-amber-400" />
      <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-amber-400"
        style={{ fontFamily: "'Poppins', sans-serif" }}>
        {text}
      </span>
      <div className="w-5 h-px bg-amber-400" />
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white border-b border-gray-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Label text="Help Center" />
          <h2 className="text-[32px] md:text-[38px] font-semibold text-[#0a1a3c] leading-tight mb-4"
              style={{ letterSpacing: "0.01em" }}>
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[2px] bg-amber-400 mx-auto mb-6" />
          <p className="text-[14px] text-gray-500 leading-relaxed font-light">
            Find quick answers to common queries regarding visitor registration, stall availability, venue connectivity, and amenities.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                className={`bg-white border rounded-sm transition-all duration-300 ${isOpen ? 'border-amber-400 shadow-md' : 'border-gray-200 hover:border-gray-300 shadow-sm'}`}
                key={i}
              >
                {/* Question Row */}
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-6 focus:outline-none bg-[#f8f9fb] hover:bg-slate-100 transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`font-semibold text-[14.5px] leading-snug transition-colors duration-300 ${isOpen ? 'text-amber-500' : 'text-[#0a1a3c]'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-amber-400 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} strokeWidth={2.5} />
                  </div>
                </button>

                {/* Answer Row (with transition block) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <div className="p-6 border-t border-gray-100 bg-white">
                    <p className="text-[13.5px] text-gray-500 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
