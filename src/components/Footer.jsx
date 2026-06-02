const LINKS = ["About", "Speakers", "Schedule", "Gallery", "Register", "FAQ", "Contact"];

export default function Footer() {
  const handleClick = (event, label) => {
    event.preventDefault();
    const el = document.querySelector(`#${label.toLowerCase()}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-[#b58b32]">Ganga Literature Festival</p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl font-medium uppercase leading-none md:text-7xl">
              Stories By The River.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/65">
              A refined festival website for authors, readers, students, publishers, partners, and cultural communities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {LINKS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={(event) => handleClick(event, label)}
                className="border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75 transition hover:border-[#b58b32] hover:text-[#b58b32]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ganga Literature Festival</p>
          <p>Patna, Bihar</p>
        </div>
      </div>
    </footer>
  );
}
