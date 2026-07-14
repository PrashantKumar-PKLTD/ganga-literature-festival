const partners = Array.from({ length: 21 }, (_, index) => {
  const number = index + 1;

  return {
    name: `Partner ${number}`,
    logo: `/icon${number}.png`,
  };
}).concat({
  name: "Apisode",
  logo: "/apisode.jpeg",
});

export default function TrustedPartners() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24 border-t border-gold/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <div className="mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-saffron">
            Partners
          </h3>
          <h2 className="mt-3 font-serif text-4xl font-light leading-none text-dark sm:text-5xl">
            Our Trusted Partners
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-dark/70 sm:text-base font-light">
            Institutions, organizations, and collaborators supporting BIHAAN's
            shared platform.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 items-center gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group relative flex h-20 sm:h-28 items-center justify-center border border-gold/20 bg-cream p-3 shadow-sm transition duration-300 hover:border-saffron hover:scale-105 hover:-translate-y-0.5 rounded-none"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-full w-full object-contain filter grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
