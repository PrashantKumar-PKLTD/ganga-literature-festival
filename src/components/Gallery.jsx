import ImageReveal from "./ImageReveal";

/* ── Inject Poppins + gallery styles once ── */
if (typeof document !== "undefined" && !document.getElementById("gallery-globals")) {
  const s = document.createElement("style");
  s.id = "gallery-globals";
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    /* Fixed summit background */
    .gallery-fixed-bg {
      position: fixed;
      inset: 0;
      z-index: 0;
      background-image: url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=75&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      filter: brightness(0.55) saturate(0.8);
      transform: scale(1.02);
      pointer-events: none;
    }
    .gallery-fixed-bg::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(6, 15, 40, 0.6) 0%, rgba(6, 15, 40, 0.45) 50%, rgba(6, 15, 40, 0.65) 100%);
    }

    /* Masonry columns */
    .gallery-masonry {
      columns: 4;
      column-gap: 10px;
    }
    @media (max-width: 1024px) { .gallery-masonry { columns: 3; } }
    @media (max-width: 640px)  { .gallery-masonry { columns: 2; } }

    .gallery-item {
      break-inside: avoid;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;
      display: block;
      cursor: pointer;
    }

    /* Grayscale by default, color on hover */
    .gallery-item img {
      width: 100%;
      height: auto;
      display: block;
      filter: grayscale(100%) brightness(0.85);
      transition: filter 0.55s ease, transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    .gallery-item:hover img {
      filter: grayscale(0%) brightness(1);
      transform: scale(1.04);
    }

    /* Caption overlay */
    .gallery-caption {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(6,15,40,0.82) 0%, transparent 50%);
      opacity: 0;
      transition: opacity 0.4s ease;
      display: flex;
      align-items: flex-end;
      padding: 14px;
    }
    .gallery-item:hover .gallery-caption {
      opacity: 1;
    }
    .gallery-caption span {
      font-family: 'Poppins', sans-serif;
      font-size: 11px;
      font-weight: 500;
      color: #fff;
      letter-spacing: 0.04em;
      line-height: 1.4;
    }

    /* Amber top-sweep on hover */
    .gallery-item::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      height: 2px; width: 0;
      background: #f5a623;
      transition: width 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
      z-index: 5;
    }
    .gallery-item:hover::after { width: 100%; }
  `;
  document.head.appendChild(s);
}

/* ── 24 medical expo Unsplash images ── */
const GALLERY_IMGS = [
  { src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80", alt: "Diagnostics Showcase" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", alt: "Expo Exhibition Hall" },
  { src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80", alt: "Conference Panel" },
  { src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80", alt: "Networking Session" },
  { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80", alt: "Surgical Equipment" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80", alt: "Hospital Infrastructure" },
  { src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80", alt: "Lab Equipment Zone" },
  { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", alt: "Clinical Expert Session" },
  { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80", alt: "Healthcare Professional" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", alt: "Exhibition Floor" },
  { src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80", alt: "Medical Specialist" },
  { src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80", alt: "Product Demonstration" },
  { src: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?w=600&q=80", alt: "Award Ceremony" },
  { src: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80", alt: "B2B Meeting Zone" },
  { src: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&q=80", alt: "Vaccine & Pharma Display" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80", alt: "Delegate Registration" },
  { src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80", alt: "ICU Equipment Zone" },
  { src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&q=80", alt: "Expert Discussion" },
  { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80", alt: "Diagnostic Instruments" },
  { src: "https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?w=600&q=80", alt: "Healthcare Innovation" },
  { src: "https://images.unsplash.com/photo-1565071559227-20ab25b7685e?w=600&q=80", alt: "Stall Branding" },
  { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80", alt: "Scientific Session" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80", alt: "Closing Ceremony" },
];

/* ── Section label ── */
function Label({ text }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <div className="w-5 h-px bg-amber-400" />
      <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-amber-400"
        style={{ fontFamily: "'Poppins', sans-serif" }}>
        {text}
      </span>
      <div className="w-5 h-px bg-amber-400" />
    </div>
  );
}

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="relative"
      style={{ fontFamily: "'Poppins', sans-serif", clipPath: "inset(0)" }}
    >
      {/* ── Fixed summit background ── */}
      <div className="gallery-fixed-bg" />

      {/* ── Content panel over fixed bg ── */}
      <div className="relative z-10 py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          {/* Header */}
          <div className="text-center mb-14">
            <Label text="Media Centre" />
            <h2
              className="text-[28px] md:text-[32px] font-semibold text-white mt-1 mb-3"
              style={{ letterSpacing: "0.02em" }}
            >
              Highlights from{" "}
              <span className="text-amber-400 font-bold">Past Editions</span>
            </h2>
            <div className="w-10 h-[2px] bg-amber-400 mx-auto mb-4" />
            <p className="text-[13px] text-white/50 font-light max-w-lg mx-auto leading-relaxed">
              A visual journey through busy exhibition halls, medical networking sessions,
              product launches, and award ceremonies from our previous successful trade expos.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="gallery-masonry">
            {GALLERY_IMGS.map((img, i) => (
              <div className="gallery-item" key={i}>
                <ImageReveal
                  src={img.src}
                  alt={img.alt}
                  delay={(i % 4) * 100}
                />
                <div className="gallery-caption">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="flex justify-center mt-10">
            <div
              className="inline-flex items-center gap-3 border border-white/10 rounded-sm px-6 py-2.5 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <span className="w-10 h-px bg-amber-400/40" />
              <span className="text-[10.5px] font-medium text-white/40 tracking-[0.2em] uppercase">
                Hover over images to view in colour
              </span>
              <span className="w-10 h-px bg-amber-400/40" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}