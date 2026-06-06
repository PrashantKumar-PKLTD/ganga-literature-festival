const dignitaries = [
  {
    eyebrow: "Chief Guest",
    title: "Hon'ble Governor of Bihar",
    name: "Lt Gen Syed Ata Hasnain (Retd.)",
    role: "Constitutional Head of Bihar",
    body: "We are deeply honored to welcome the Hon'ble Governor of Bihar. His presence reflects the importance of public leadership, learning, and cultural dialogue in shaping the future of our state and nation.",
    image:
      "https://aisummitbihar.com/wp-content/uploads/2026/04/202603171146785208-683x1024.jpeg",
  },
  {
    eyebrow: "Honoured Presence",
    title: "Hon'ble Chief Minister of Bihar",
    name: "Shri Samrat Choudhary",
    role: "Chief Minister of Bihar",
    body: "We are honored to welcome Shri Samrat Choudhary. His leadership and commitment to Bihar's future continue to inspire conversations around knowledge, youth empowerment, culture, and development.",
    image:
      "https://aisummitbihar.com/wp-content/uploads/2026/05/hbbchndvuhv-683x1024.png",
  },
];

export default function DignitaryPresence() {
  return (
    <section className="dignitary-section relative overflow-hidden px-4 py-14 sm:px-6 md:px-8 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b58b32]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(181,139,50,0.22),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(181,139,50,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(181,139,50,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-[#b58b32]/25 pb-8 md:grid-cols-[0.9fr_1.1fr] md:items-end md:pb-10">
          <div>
            <p className="dignitary-kicker text-xs font-black uppercase tracking-[0.24em]">
              Festival Dignitaries
            </p>
            <h2 className="dignitary-heading mt-4 font-serif text-4xl font-semibold uppercase leading-none sm:text-5xl md:text-6xl">
              Honoured Guests
            </h2>
          </div>
          <p className="dignitary-intro max-w-2xl text-sm font-semibold leading-7 md:justify-self-end md:text-right md:text-base">
            Distinguished public leaders joining the Ganga Literature Festival
            conversation in Patna, Bihar.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {dignitaries.map((guest) => (
            <article
              key={guest.name}
              className="dignitary-card group grid overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
            >
              <div className="dignitary-photo relative min-h-[180px] overflow-hidden sm:min-h-[220px] md:min-h-0">
                <img
                  src={guest.image}
                  alt={guest.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                  <p className="dignitary-kicker text-[10px] font-black uppercase tracking-[0.18em]">
                    {guest.eyebrow}
                  </p>
                </div>
              </div>

              <div className="flex min-h-[180px] flex-col justify-center p-4 sm:min-h-[220px] sm:p-6 md:min-h-[280px] md:p-8">
                <p className="dignitary-kicker hidden text-xs font-black uppercase tracking-[0.22em] md:block">
                  {guest.eyebrow}
                </p>
                <h3 className="dignitary-title font-serif text-2xl font-semibold leading-tight sm:text-3xl md:mt-4 md:text-[2.35rem]">
                  {guest.title}
                </h3>
                <div className="mt-3 h-px w-14 bg-[#b58b32] md:mt-5 md:w-20" />
                <p className="dignitary-name mt-3 text-sm font-black md:mt-5 md:text-base">
                  {guest.name}
                </p>
                <p className="dignitary-role mt-1 text-[10px] font-black uppercase tracking-[0.12em] md:text-xs md:tracking-[0.16em]">
                  {guest.role}
                </p>
                <p className="dignitary-body mt-3 line-clamp-3 text-xs font-semibold leading-5 md:mt-5 md:line-clamp-none md:text-sm md:leading-7">
                  {guest.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
