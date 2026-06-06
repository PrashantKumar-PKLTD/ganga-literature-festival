const festivalThemes = [
  "Gaumukh",
  "Gangotri Glacier",
  "Bhagirathi Begins",
  "Devprayag",
  "Alaknanda Meets Bhagirathi",
  "Ganga Takes Her Name",
  "Rishikesh",
  "Haridwar",
  "Uttar Pradesh Plains",
  "Kanpur",
  "Prayagraj Sangam",
  "Varanasi",
  "Mirzapur",
  "Buxar",
  "Patna",
  "Bhagalpur",
  "Rajmahal Hills",
  "Farakka",
  "Hooghly",
  "Kolkata",
  "Ganga Sagar",
  "Bay of Bengal",
];

export default function FestivalTextRows() {
  return (
    <section aria-label="Festival themes" className="overflow-hidden bg-black py-10 text-white md:py-12">
      <div className="relative">
        <div className="festival-marquee flex w-max whitespace-nowrap">
          {[...Array(3)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex">
              {festivalThemes.map((text) => (
                <span
                  key={`${repeatIndex}-${text}`}
                  className="mx-5 text-3xl font-black leading-none text-white transition-colors duration-300 hover:text-[#b58b32] md:mx-8 md:text-5xl lg:text-6xl"
                >
                  {text} /
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
