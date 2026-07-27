import { Link } from "react-router-dom";
import Registration from "../components/RegistrationForm";

const categories = [
  {
    title: "Media Registration",
    price: "Free",
    icon: "Press",
    accent: "Media desk",
    desc: "For print, digital, radio, and broadcast media covering the festival.",
  },
  {
    title: "Student Registration",
    price: "INR 100",
    icon: "ID",
    accent: "Campus access",
    desc: "For school and college students attending sessions across festival venues.",
  },
  {
    title: "General Registration",
    price: "INR 200",
    icon: "GLF",
    accent: "Public pass",
    desc: "Access to festival sessions, book spaces, food courts, and public installations.",
  },
  {
    title: "Friend of the Festival",
    price: "Starts at INR 14,000",
    icon: "FOF",
    accent: "Premium hospitality",
    desc: "Premium lounge access, dedicated hospitality, curated evenings, and festival support.",
    featured: true,
    to: "/festival/friend-of-the-festival",
  },
  {
    title: "SPIC MACAY Evening",
    price: "INR 499",
    icon: "Live",
    accent: "Evening entry",
    desc: "Entry to selected classical arts and evening cultural programming.",
  },
  {
    title: "Publishing Track",
    price: "INR 1500",
    icon: "Rights",
    accent: "Publishing track",
    desc: "Publishing, rights, translation, and professional book-industry access.",
  },
  {
    title: "Virtual Session",
    price: "Free",
    icon: "Online",
    accent: "Digital access",
    desc: "Online access to selected festival talks and conversations.",
  },
];

const speakers = [
  { name: "Ami Ganatra", image: "/ani-ganatra.png" },
  { name: "Aditi Banerjee", image: "/aditi_banerjee.jpg" },
  { name: "Anand Ranganathan", image: "/anand-ranganathan.jpg" },
  { name: "Abhijit Majumder", image: "/abhijit_majumdar.jpg" },
  { name: "Abhinav Agarwal", image: "/abhinav-agarwal.jpg" },
  { name: "Aabhas Maldhiyar", image: "/heroimage.png" },
  { name: "Amit Bagaria", image: "/heroimage.png" },
  { name: "Ankur Kakkar", image: "/heroimage.png" },
];

const hotels = [
  {
    name: "Clarks Amer",
    image: "/gangaimg2.png",
    note: "Partner hotel for authors, delegates, and festival guests.",
  },
  {
    name: "Marriott",
    image: "/gangaimg4.png",
    note: "Premium stay with easy access to the festival venue.",
  },
];

function Heading({ eyebrow, title, inverted = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-saffron">
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-[0.92] ${inverted ? "text-cream" : "text-dark"}`}>
        {title}
      </h2>
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <main className="pt-[78px] md:pt-[82px] bg-cream paper-texture">
      <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-saffron">
              Registration
            </p>
            <h1 className="mt-5 font-serif text-5xl font-light leading-[0.9] text-dark md:text-7xl uppercase">
              Celebration of Literature and Culture
            </h1>
            <div className="mt-8 max-w-xl text-base font-light leading-relaxed text-dark/75 lg:mx-0">
              <p>
                Immerse yourself in a vibrant atmosphere filled with inspiring talks,
                performances, workshops, books, and cultural conversations.
              </p>
              <p className="mt-5">
                Discover literary trends, meet authors, and celebrate the rich cultural
                heritage of the Ganga region.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-dark border-double border-4 border-gold/30 luxury-card-shadow p-2">
            <img
              src="/gangaimg1.png"
              alt="Festival culture"
              className="aspect-video w-full object-cover opacity-70 grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-saffron bg-black/40 text-3xl text-cream hover:scale-110 transition duration-300 cursor-pointer">
                ▶
              </span>
            </div>
          </div>
        </div>
      </section>

      <Registration />

      <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <Heading eyebrow="Choose Your Pass" title="Registration Categories" />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-light leading-relaxed text-dark/70">
          Secure your festival access early. Choose a category based on how you want
          to experience the festival: student access, general entry, media access,
          music events, publishing track, virtual sessions, or premium hospitality.
        </p>

        <div className="relative mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const content = (
              <article
                className={`group relative flex h-full min-h-[300px] flex-col p-6 text-left transition-all duration-500 rounded-none border-double border-4 hover:border-saffron hover:shadow-xl hover:-translate-y-2 ${
                  category.featured
                    ? "border-gold/35 bg-dark text-cream lg:col-span-2 lg:row-span-2 lg:min-h-[625px] lg:p-9"
                    : "border-gold/25 bg-cream text-dark"
                }`}
              >
                <div className="absolute right-4 top-4 h-16 w-16 rounded-full border border-gold/10" />
                <div className={`relative mb-8 flex h-14 w-14 items-center justify-center rounded-full border font-serif text-sm font-black ${
                  category.featured ? "border-saffron bg-saffron text-cream" : "border-saffron bg-cream text-saffron"
                }`}>
                  {category.icon}
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-saffron">
                  {category.accent}
                </p>
                <h2 className={`mt-3 font-serif font-light leading-tight uppercase ${
                  category.featured ? "max-w-md text-5xl text-gold" : "text-3xl"
                }`}>
                  {category.title}
                </h2>
                <p className={`mt-4 font-bold uppercase tracking-[0.12em] text-saffron ${
                  category.featured ? "text-base" : "text-sm"
                }`}>
                  {category.price}
                </p>
                <p className={`mt-5 flex-1 leading-relaxed font-light ${category.featured ? "max-w-lg text-base text-cream/75" : "text-sm text-dark/70"}`}>
                  {category.desc}
                </p>
                <div className={`mt-7 flex items-center justify-between border-t pt-5 ${
                  category.featured ? "border-white/15" : "border-dark/10"
                }`}>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-saffron">
                    Opens soon
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron text-cream transition group-hover:bg-dark group-hover:text-cream">
                    →
                  </span>
                </div>
              </article>
            );

            return category.to ? (
              <Link key={category.title} to={category.to}>{content}</Link>
            ) : (
              <div key={category.title}>{content}</div>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24 border-t border-gold/20">
        <Heading eyebrow="Featured Voices" title="Festival Speakers" />
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="text-center group">
              <div className="mx-auto aspect-[4/4.5] overflow-hidden border-double border-4 border-gold/25 bg-cream p-1 shadow-sm transition duration-500 group-hover:border-saffron group-hover:shadow-lg">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover grayscale opacity-90 transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-serif text-lg font-light leading-tight text-dark transition duration-300 group-hover:text-saffron">
                {speaker.name}
              </h3>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/festival/speakers"
            className="border border-saffron bg-dark text-cream inline-flex px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-saffron rounded-none shadow-sm hover:-translate-y-0.5"
          >
            Speakers List
          </Link>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 text-cream md:px-8 md:py-24">
        <Heading eyebrow="Stay With Us" title="Festival Partner Hotels" inverted />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-light leading-relaxed text-cream/70">
          Choose from official partner hotels to make your festival experience
          comfortable. Partner hotel guests may receive transport support and
          preferred festival assistance.
        </p>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {hotels.map((hotel) => (
            <article key={hotel.name} className="text-center group">
              <div className="overflow-hidden border-double border-4 border-gold/20 group-hover:border-saffron transition duration-300 p-2 bg-[#130d07]">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="aspect-[4/3] w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-serif text-3xl font-light text-cream uppercase">{hotel.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70 font-light">{hotel.note}</p>
              <p className="mt-2 text-xl text-gold">★★★★★</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/festival/book-your-festival-hotel"
            className="bg-saffron text-cream border border-saffron inline-flex px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition hover:bg-cream hover:text-dark rounded-none shadow-sm hover:-translate-y-0.5"
          >
            View Hotels
          </Link>
        </div>
      </section>
    </main>
  );
}
