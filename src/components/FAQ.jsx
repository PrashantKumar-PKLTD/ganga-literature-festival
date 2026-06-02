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
    <section id="faq" className="bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center justify-center gap-8 md:mb-20">
          <span className="hidden h-px w-20 bg-black/40 md:block" />
          <h2 className="text-center font-serif text-5xl font-medium uppercase leading-none text-black md:text-7xl">
            Frequently Asked Questions
          </h2>
          <span className="hidden h-px w-20 bg-black/40 md:block" />
        </div>

        <div className="mx-auto max-w-6xl border-t border-black/15">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.q} className="border-b border-black/15">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-8 py-8 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl font-medium uppercase leading-snug text-black md:text-2xl">
                    {faq.q}
                  </span>
                  <span className="relative h-8 w-8 shrink-0 text-black" aria-hidden="true">
                    <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-black" />
                    <span
                      className={`absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-black transition-transform duration-300 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-8 text-base leading-8 text-black/70 md:text-lg">
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
