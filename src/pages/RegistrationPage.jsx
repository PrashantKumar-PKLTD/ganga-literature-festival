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
      <p className={`text-xs font-black uppercase tracking-[0.28em] ${inverted ? "text-[#b58b32]" : "text-[#b58b32]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-serif text-5xl font-black leading-[0.92] md:text-7xl ${inverted ? "text-white" : "text-black"}`}>
        {title}
      </h2>
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <main className="pt-[78px] md:pt-[82px]">
      <section className="relative overflow-hidden bg-[#f8f6f1] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
              Registration
            </p>
            <h1 className="mt-5 font-serif text-5xl font-black leading-[0.9] text-black md:text-7xl">
              Celebration of Literature and Culture
            </h1>
            <div className="mt-8 max-w-xl text-base font-semibold leading-8 text-black/75 lg:mx-0">
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

          <div className="relative overflow-hidden bg-black">
            <img
              src="/gangaimg1.png"
              alt="Festival culture"
              className="aspect-video w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#b58b32] bg-black/40 text-3xl text-white">
                ▶
              </span>
            </div>
          </div>
        </div>
      </section>

      <Registration />

      <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full border border-[#b58b32]/20" />
        <div className="pointer-events-none absolute right-[-4rem] top-24 h-64 w-64 rounded-full border border-[#b58b32]/20" />
        <Heading eyebrow="Choose Your Pass" title="Registration Categories" />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-semibold leading-7 text-black/70">
          Secure your festival access early. Choose a category based on how you want
          to experience the festival: student access, general entry, media access,
          music events, publishing track, virtual sessions, or premium hospitality.
        </p>

        <div className="relative mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const content = (
              <article
                className={`group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-md border p-6 text-left transition duration-300 hover:-translate-y-1 ${
                  category.featured
                    ? "border-[#b58b32] bg-black text-white lg:col-span-2 lg:row-span-2 lg:min-h-[625px] lg:p-9"
                    : "border-[#b58b32]/55 bg-[#f8f6f1] text-black hover:border-[#b58b32]"
                }`}
              >
                <div className="absolute right-4 top-4 h-16 w-16 rounded-full border border-[#b58b32]/30" />
                <div className={`relative mb-8 flex h-14 w-14 items-center justify-center rounded-full border font-serif text-sm font-black ${
                  category.featured ? "border-[#b58b32] bg-[#b58b32] text-white" : "border-[#b58b32] bg-white text-[#b58b32]"
                }`}>
                  {category.icon}
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#b58b32]">
                  {category.accent}
                </p>
                <h2 className={`mt-3 font-serif font-black leading-tight ${
                  category.featured ? "max-w-md text-5xl" : "text-3xl"
                }`}>
                  {category.title}
                </h2>
                <p className={`mt-4 font-black uppercase tracking-[0.12em] text-[#b58b32] ${
                  category.featured ? "text-base" : "text-sm"
                }`}>
                  {category.price}
                </p>
                <p className={`mt-5 flex-1 leading-7 ${category.featured ? "max-w-lg text-base text-white/75" : "text-sm text-black/70"}`}>
                  {category.desc}
                </p>
                <div className={`mt-7 flex items-center justify-between border-t pt-5 ${
                  category.featured ? "border-white/15" : "border-black/10"
                }`}>
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#b58b32]">
                    Opens soon
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b58b32] text-white transition group-hover:bg-black group-hover:text-white">
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

      <section className="bg-[#f8f6f1] px-5 py-20 md:px-8 md:py-28">
        <Heading eyebrow="Featured Voices" title="Festival Speakers" />
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {speakers.map((speaker) => (
            <article key={speaker.name} className="text-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="mx-auto h-32 w-32 rounded-full object-cover grayscale"
              />
              <h3 className="mt-4 font-serif text-xl font-black leading-tight text-black">
                {speaker.name}
              </h3>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/festival/speakers"
            className="inline-flex bg-[#b58b32] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-black"
          >
            Speakers List
          </Link>
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-white md:px-8 md:py-28">
        <Heading eyebrow="Stay With Us" title="Festival Partner Hotels" inverted />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-semibold leading-7 text-white/70">
          Choose from official partner hotels to make your festival experience
          comfortable. Partner hotel guests may receive transport support and
          preferred festival assistance.
        </p>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {hotels.map((hotel) => (
            <article key={hotel.name} className="text-center">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
              <h3 className="mt-4 font-serif text-3xl font-black text-white">{hotel.name}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{hotel.note}</p>
              <p className="mt-2 text-xl text-[#b58b32]">*****</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/festival/book-your-festival-hotel"
            className="inline-flex bg-[#b58b32] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
          >
            View Hotels
          </Link>
        </div>
      </section>
    </main>
  );
}
