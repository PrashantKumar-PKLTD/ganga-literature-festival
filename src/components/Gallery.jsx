import SectionHeading from "./SectionHeading";

const IMAGES = [
  { src: "/gangaimg1.png", alt: "Ganga riverfront" },
  { src: "/gangaimg2.png", alt: "Audience gathering" },
  { src: "/gangaimg3.png", alt: "Evening event" },
  { src: "/gangaimg4.png", alt: "Workshop table" },
  { src: "/gangaimg5.png", alt: "Books and reading" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14">
          <SectionHeading
            align="left"
            inverted
            eyebrow="Festival Moments"
            title="A Visual Journey"
            intro="The website experience uses river imagery, reading spaces, stage moments, and warm cultural scenes to feel like a real public festival."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {IMAGES.map((image) => (
            <figure
              key={image.alt}
              className="group relative overflow-hidden border border-white/15"
            >
              <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#b58b32]">{image.alt}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
