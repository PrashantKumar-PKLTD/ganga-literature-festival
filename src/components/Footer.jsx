const footerLogos = [
  { label: "Presented By", image: "/bihaan-logo.png", alt: "BIHAAN" },
  { label: "Initiative", image: "/icon12.png", alt: "Let's Inspire Bihar" },
  { label: "Publishing Partner", image: "/bluone-logo.webp", alt: "BluOne Ink" },
  { label: "Cultural Partner", image: "/spicmacay-logo.svg", alt: "SPIC MACAY" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#b58b32]">
              Ganga Literature Festival
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl font-medium uppercase leading-none md:text-7xl">
              Stories By The River.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-black/65">
              A refined festival website for authors, readers, students,
              publishers, partners, and cultural communities.
            </p>
          </div>

          <div className="grid w-full max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 md:justify-self-end">
            {footerLogos.map((logo) => (
              <div key={logo.alt}>
                <p className="mb-3 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.18em] text-[#b58b32]">
                  {logo.label}
                </p>
                <div className="flex h-24 items-center justify-center border border-[#b58b32]/30 bg-white p-3 shadow-sm">
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs uppercase tracking-[0.18em] text-black/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ganga Literature Festival</p>
          <p>Patna, Bihar</p>
        </div>
      </div>
    </footer>
  );
}
