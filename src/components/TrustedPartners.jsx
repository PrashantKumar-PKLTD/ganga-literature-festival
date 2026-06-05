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
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b58b32]/35 to-transparent" />
      <div className="mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
            Partners
          </h3>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-none text-black sm:text-5xl">
            Our Trusted Partners
          </h2>
          <p className="mt-4 text-sm leading-6 text-black/65 sm:text-base">
            Institutions, organizations, and collaborators supporting BIHAAN's
            shared platform.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 items-center gap-x-4 gap-y-8 sm:mt-10 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-12 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group relative z-20 flex min-h-[4.5rem] items-center justify-center transition duration-300 hover:-translate-y-1 sm:min-h-[7rem] lg:min-h-[9rem]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="relative z-10 h-full max-h-[5.25rem] w-full max-w-[5.25rem] object-contain transition duration-300 group-hover:scale-110 sm:max-h-[8rem] sm:max-w-[10rem] lg:max-h-[9.5rem] lg:max-w-[12rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
