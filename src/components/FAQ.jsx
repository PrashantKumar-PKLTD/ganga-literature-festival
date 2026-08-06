import { useState } from "react";

const FAQS = [
  {
    q: "Is registration required to attend the Ganga Literature Festival?",
    a: "Yes. Visitors should register before arriving so entry, seating, and session access can be managed smoothly. Some intimate workshops or special sessions may have limited capacity.",
  },
  {
    q: "Where will the festival take place in Patna?",
    a: "The festival is planned in Patna, Bihar. Final venue details, entry gates, and session room information will be shared with registered visitors before the event.",
  },
  {
    q: "Can students and young readers attend the sessions?",
    a: "Yes. The festival is open to readers, students, writers, educators, publishers, and anyone interested in literature, culture, language, and public conversations.",
  },
  {
    q: "How can authors, speakers, or publishers participate?",
    a: "Authors, speakers, publishers, and cultural organisations can contact the festival team through the enquiry form or official email for programming, partnership, and book launch opportunities.",
  },
  {
    q: "Will books and festival merchandise be available at the venue?",
    a: "Yes. The festival will include curated book counters and partner stalls where visitors can browse books, meet publishers, and purchase selected festival merchandise.",
  },
  {
    q: "Can I volunteer for the festival?",
    a: "Yes. Volunteer applications are welcome for venue support, session coordination, registration, guest assistance, and media operations. Selected volunteers will receive a detailed briefing before the festival.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-cream px-5 py-16 md:px-8 md:py-24 border-t border-gold/10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(200,150,43,0.06) 1px, transparent 1px)",
          backgroundSize: "22.5% 100%",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.25fr] lg:gap-20">
        <div className="lg:pt-2">
          <h2 className="font-serif text-5xl font-light uppercase leading-none tracking-[-0.01em] text-dark md:text-6xl">
            Festival
            <br />
            FAQs
          </h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-dark/70 font-light">
            Have questions about attending the Ganga Literature Festival? Here
            are the essentials for visitors, students, authors, and partners.
          </p>
        </div>

        <div>
          {FAQS.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.q} className="border-b border-gold/20">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="grid w-full grid-cols-[44px_1fr] items-center gap-5 py-6 text-left md:grid-cols-[54px_1fr] md:gap-6 focus:outline-none focus:text-saffron transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span
                    className={`text-4xl font-light leading-none text-saffron transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <span className="font-serif text-lg sm:text-xl lg:text-2xl font-light leading-snug text-dark">
                    {faq.q}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="ml-[44px] max-w-2xl pb-6 text-sm leading-relaxed text-dark/70 md:ml-[54px] md:text-base font-light">
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
