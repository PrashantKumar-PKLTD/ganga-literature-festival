import { useState } from "react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    state: "Uttarakhand",
    title: "Where the sacred river awakens.",
    description:
      "From the Himalayan glaciers, Bhagirathi and Alaknanda unite at Devprayag. There, the river receives her immortal name - Ganga - and descends as the living current of Bharat's soul.",
    image: "/gangaimg1.png",
    position: "left-0",
  },
  {
    state: "Uttar Pradesh",
    title: "Across the vast plains of faith and civilization.",
    description:
      "Through Haridwar, Kanpur, Prayagraj, Mirzapur, and Varanasi, the Ganga nourishes the heartland. At the Sangam, the Yamuna joins her, deepening her sacred flow.",
    image: "/gangaimg2.png",
    position: "left-[19%]",
  },
  {
    state: "Bihar",
    title: "Through the ancient heart of knowledge and wisdom.",
    description:
      "Entering near Buxar, the Ganga moves past Patna and Bhagalpur. Her banks remember Pataliputra, Nalanda, Vikramashila, and Bihar's great inheritance of learning and dharma.",
    image: "/gangaimg3.png",
    position: "left-[38%]",
  },
  {
    state: "Jharkhand",
    title: "Along the hills, forests, and ancient river paths.",
    description:
      "Near Sahibganj and the Rajmahal hills, the Ganga bends along Jharkhand's edge, gathering old trade routes, river communities, and the quiet strength of the land.",
    image: "/gangaimg4.png",
    position: "left-[57%]",
  },
  {
    state: "West Bengal",
    title: "Toward the delta, the ocean, and eternity.",
    description:
      "At Farakka, the Ganga divides into the Hooghly and Padma, spreading across Bengal's delta toward Kolkata, the Sundarbans, and the Bay of Bengal.",
    image: "/gangaimg5.png",
    position: "left-[76%]",
  },
];

export default function ProgrammeSteps() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="overflow-hidden bg-[#f8f6f1] px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Maa Ganga "
            title="Where the Ganga Flows, Bharat Speaks"
            intro="From the Himalayas to the Bay of Bengal, the Ganga moves through landscapes, cities, knowledge traditions, and living cultures."
          />
        </div>

        <div className="relative flex flex-col gap-5 md:h-[620px] md:block">
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <article
                key={step.state}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                tabIndex={0}
                className={`group relative flex w-full cursor-pointer flex-col overflow-hidden border border-black/10 outline-none transition duration-300 md:absolute md:top-0 md:h-[580px] md:w-[24%] md:pt-10 ${
                  step.position
                } ${
                  isActive
                    ? "z-20 scale-[1.015] bg-white shadow-[0_22px_55px_rgba(181,139,50,0.18)]"
                    : "z-10 bg-white/75 shadow-sm hover:bg-white hover:shadow-xl"
                }`}
              >
                <div className="flex flex-1 flex-col gap-4 px-6 py-7 md:px-7 md:pb-6 md:pr-8 md:pt-6">
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
                    {step.state}
                  </div>
                  <h3
                    className={`font-serif text-3xl font-semibold leading-none transition-colors duration-300 md:text-[1.9rem] ${
                      isActive ? "text-black" : "text-black/55"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`max-w-md text-sm leading-6 transition-colors duration-300 md:text-[0.95rem] ${
                      isActive ? "text-black/80" : "text-black/50"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <img
                  src={step.image}
                  alt=""
                  className="mt-auto h-[180px] w-full object-cover md:h-[190px]"
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
