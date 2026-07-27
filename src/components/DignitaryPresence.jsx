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
    <section className="bg-dark relative overflow-hidden px-4 py-16 sm:px-6 md:px-8 md:py-24 border-t border-gold/10">
      {/* Decorative lighting glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(212,96,10,0.24),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(181,139,50,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(181,139,50,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-gold/20 pb-8 md:grid-cols-[0.9fr_1.1fr] md:items-end md:pb-10">
          <div>
            <p className="text-saffron font-bold text-xs uppercase tracking-[0.24em]">
              Festival Dignitaries
            </p>
            <h2 className="text-cream mt-4 font-serif text-4xl font-light uppercase leading-none sm:text-5xl md:text-6xl">
              Honoured Guests
            </h2>
          </div>
          <p className="text-cream/70 max-w-2xl text-sm font-light leading-relaxed md:justify-self-end md:text-right md:text-base">
            Distinguished public leaders joining the Ganga Literature Festival
            conversation in Patna, Bihar.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {dignitaries.map((guest) => (
            <article
              key={guest.name}
              className="dignitary-card bg-cream/5 border-double border-4 border-gold/20 rounded-none group grid overflow-hidden transition-all duration-500 hover:border-saffron hover:shadow-2xl"
            >
              <div className="relative min-h-[220px] sm:min-h-[260px] md:min-h-0 bg-dark dignitary-photo overflow-hidden p-2 border-r border-gold/15">
                <img
                  src={guest.image}
                  alt={guest.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 md:hidden">
                  <p className="text-saffron text-[10px] font-bold uppercase tracking-[0.18em]">
                    {guest.eyebrow}
                  </p>
                </div>
              </div>

              <div className="flex min-h-[180px] flex-col justify-center p-5 sm:min-h-[220px] sm:p-6 md:min-h-[280px] md:p-8">
                <p className="text-saffron hidden text-[10px] font-bold uppercase tracking-[0.22em] md:block">
                  {guest.eyebrow || "Honoured Presence"}
                </p>
                <h3 className="text-gold font-serif text-xl font-light leading-tight sm:text-2xl md:mt-3 md:text-[2rem]">
                  {guest.title}
                </h3>
                <div className="mt-3 h-px w-14 bg-saffron md:mt-4 md:w-20" />
                <p className="text-cream mt-3 text-sm font-bold md:mt-4 md:text-base">
                  {guest.name}
                </p>
                <p className="text-saffron mt-1 text-[10px] font-bold uppercase tracking-[0.12em] md:text-xs md:tracking-[0.16em]">
                  {guest.role}
                </p>
                <p className="text-cream/70 mt-3 line-clamp-3 text-xs font-light leading-relaxed md:mt-4 md:line-clamp-none md:text-sm md:leading-relaxed">
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
