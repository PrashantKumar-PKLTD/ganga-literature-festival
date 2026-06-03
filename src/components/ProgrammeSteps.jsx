import { useState } from "react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    stepNumber: "STEP 1",
    title: "Opening ceremony and civilisational keynotes.",
    description:
      "The festival begins beside the Ganga with delegate welcome, lamp-lighting, keynote addresses, and conversations on Bihar's civilisational destiny in India's Viksit Bharat journey.",
    image: "/programme-step-1.png",
    position: "left-0",
  },
  {
    stepNumber: "STEP 2",
    title: "Panels, book launches, and masterclasses.",
    description:
      "Across two days, authors, scholars, journalists, and public thinkers lead sessions on Dharma, democracy, history, national security, entrepreneurship, and writing India.",
    image: "/programme-step-2.png",
    position: "left-[31%]",
  },
  {
    stepNumber: "STEP 3",
    title: "Classical arts evenings by the river.",
    description:
      "Each day closes with SPIC MACAY-curated open-air performances, from Sangam to Gangotri, celebrating Indian music, dance, and cultural memory under the Patna sky.",
    image: "/programme-step-3.png",
    position: "left-[62%]",
  },
];

export default function ProgrammeSteps() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="overflow-hidden bg-[#f8f6f1] px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Programme Flow"
            title="How the Festival Unfolds"
            intro="From morning keynotes and book-led conversations to open-air classical arts by the river, GLF is designed as a complete cultural experience."
          />
        </div>

        <div className="relative flex flex-col gap-5 md:h-[540px] md:block">
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.stepNumber}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`group relative flex w-full cursor-pointer flex-col overflow-hidden border border-black/10 outline-none transition duration-300 md:absolute md:top-0 md:w-[38%] md:pt-10 ${
                  step.position
                } ${
                  isActive
                    ? "z-20 scale-[1.015] bg-white shadow-[0_22px_55px_rgba(181,139,50,0.18)]"
                    : "z-10 bg-white/75 shadow-sm hover:bg-white hover:shadow-xl"
                }`}
              >
                <div className="flex flex-1 flex-col gap-4 px-6 py-7 md:px-7 md:pb-8 md:pr-10 md:pt-6">
                  <div
                    className={`h-px w-full transition-colors duration-300 ${
                      isActive ? "bg-[#b58b32]" : "bg-black/35"
                    }`}
                  />
                  <div
                    className={`text-sm font-black uppercase tracking-[0.18em] transition-colors duration-300 ${
                      isActive ? "text-[#b58b32]" : "text-black"
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <h3
                    className={`font-serif text-3xl font-semibold leading-none transition-colors duration-300 md:text-4xl ${
                      isActive ? "text-black" : "text-black/55"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`max-w-md text-sm leading-6 transition-colors duration-300 md:text-base ${
                      isActive ? "text-black/80" : "text-black/50"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <img
                  src={step.image}
                  alt=""
                  className="h-[180px] w-full object-cover md:h-[230px]"
                  loading="lazy"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
