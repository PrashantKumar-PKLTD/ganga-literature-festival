import { useEffect, useState } from "react";

const highestImageNumber = 67;
const missingImages = new Set([8, 55]);

const imageSources = [
  "/with-b-l-santhosh-ji-laxmi.jpeg",
  "/with-b-l-santhosh-ji-prashant.jpeg",
  ...Array.from({ length: highestImageNumber }, (_, index) => index + 1)
    .filter((number) => !missingImages.has(number))
    .map((number) => `/im${number}.jpg`),
];

export default function EventImageGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);
  const showNext = () =>
    setActiveIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex + 1) % imageSources.length,
    );
  const showPrev = () =>
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? null
        : (currentIndex - 1 + imageSources.length) % imageSources.length,
    );

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKey = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section className="bg-white px-2 py-10 sm:px-3 md:px-5 md:py-16">
      <div className="mx-auto max-w-[118rem]">
        <div className="mb-6 text-center md:mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b58b32] sm:text-xs sm:tracking-[0.28em]">
            Gallery
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold uppercase leading-none text-black sm:text-4xl md:text-5xl">
            Festival Moments
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-1 sm:grid-cols-5 sm:gap-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
          {imageSources.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="aspect-[4/3] overflow-hidden rounded-md bg-black outline-none transition hover:-translate-y-0.5"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img
                src={src}
                alt={`Event gallery ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-black/85 p-5"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-6 top-5 text-4xl font-light text-white"
            onClick={closeModal}
            aria-label="Close gallery"
          >
            X
          </button>
          <button
            type="button"
            className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-3xl text-white"
            onClick={showPrev}
            aria-label="Previous image"
          >
            {"<"}
          </button>
          <img
            src={imageSources[activeIndex]}
            alt={`Gallery image ${activeIndex + 1}`}
            decoding="async"
            className="max-h-[82vh] max-w-[84vw] rounded-lg object-contain shadow-2xl"
          />
          <button
            type="button"
            className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-3xl text-white"
            onClick={showNext}
            aria-label="Next image"
          >
            {">"}
          </button>
        </div>
      )}
    </section>
  );
}
