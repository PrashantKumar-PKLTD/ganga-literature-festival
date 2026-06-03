import { useState } from "react";
import { X } from "lucide-react";

const teamMembers = [
  {
    id: 3,
    name: "Dr. C.P. Thakur",
    title: "Visionary Inspiration",
    image: "/cpthakur.jpg",
    imagePosition: "center 18%",
  },
  {
    id: 10,
    name: "Dr Rajmohan Pillai",
    title: "Visionary Inspiration",
    image: "/rajmohan.jpeg",
    imagePosition: "center 12%",
  },
  {
    id: 7,
    name: "Mrs. Laxmi Kumari",
    title: "Founder & Chairperson",
    image: "/laxmi.jpeg",
    imagePosition: "center 12%",
  },
  {
    id: 14,
    name: "Abhishek Ranjan",
    title: "Managing Partner",
    image: "/abhishekranjan.jpeg",
    imagePosition: "center top",
  },
  {
    id: 22,
    name: "Ajit Kumar",
    title: "Managing Partner",
    image: "/ajitkumar.jpeg",
    imagePosition: "center top",
  },
  {
    id: 23,
    name: "Ankit Kumar",
    title: "Managing Partner",
    image: "/ankitkumar.jpeg",
    imagePosition: "center top",
  },
  {
    id: 24,
    name: "Manish Kumar Rai",
    title: "Managing Partner",
    image: "/manishkumarrai.jpeg",
    imagePosition: "center top",
  },
  {
    id: 25,
    name: "Md Maaz",
    title: "Managing Partner",
    image: "/mdmaaz.jpeg",
    imagePosition: "center top",
  },
  {
    id: 26,
    name: "Rubi Kumar",
    title: "Managing Partner",
    image: "/rubikumar.jpeg",
    imagePosition: "center top",
  },
  {
    id: 12,
    name: "Ajeet Kumar",
    title: "Strategic Advisor",
    image: "/ajeet.jpeg",
    imagePosition: "center 18%",
  },
  {
    id: 8,
    name: "Deepak Thakur",
    title: "Managing Partner",
    image: "/deepakthakur.png",
    imagePosition: "center 18%",
  },
  {
    id: 16,
    name: "Dhiraj Singh",
    title: "Managing Partner",
    image: "/dhirajsingh.jpeg",
    imagePosition: "center top",
  },
  {
    id: 20,
    name: "Hari Shankar Kumar",
    title: "Managing Partner",
    image: "/harishankar.jpeg",
    imagePosition: "62% 8%",
  },
  {
    id: 9,
    name: "Kumod Kumar",
    title: "Managing Partner",
    image: "/kumod.jpeg",
    imagePosition: "center 12%",
  },
  {
    id: 1,
    name: "Prashant Kumar",
    title: "Managing Partner",
    image: "/Prashant.JPEG",
    imagePosition: "center 16%",
  },
  {
    id: 21,
    name: "Rakesh Kumar Singh",
    title: "Managing Partner",
    image: "/rakeshkumarsingh.jpeg",
    imagePosition: "center top",
  },
  {
    id: 6,
    name: "Dr. Ravi Ranjan",
    title: "Managing Partner",
    image: "/raviranjan.webp",
    imagePosition: "center 12%",
  },
  {
    id: 17,
    name: "Dr. Sandeep Bhardwaj",
    title: "Managing Partner",
    image: "/sandeepbharadwaj.jpeg",
    imagePosition: "center top",
  },
  {
    id: 11,
    name: "Satyajit Singh",
    title: "Managing Partner",
    image: "/satayajit.jpeg",
    imagePosition: "center 14%",
  },
  {
    id: 19,
    name: "Dr. Shivani Rai",
    title: "Managing Partner",
    image: "/drshrivanirai.jpeg",
    imagePosition: "center 32%",
  },
  {
    id: 13,
    name: "Vikas Vaibhav, IPS",
    title: "Managing Partner",
    image: "/vikash-vaibhav.jpg",
    imagePosition: "center top",
  },
  {
    id: 15,
    name: "Vishal Tiwari",
    title: "Managing Partner",
    image: "/vishaltiwari.jpeg",
    imagePosition: "center top",
  },
  {
    id: 18,
    name: "Dr. Yogesh Rai",
    title: "Managing Partner",
    image: "/yogeshrai.jpeg",
    imagePosition: "center top",
  },
];

const sortByName = (members) =>
  [...members].sort((firstMember, secondMember) =>
    firstMember.name.localeCompare(secondMember.name),
  );

const patronMembers = sortByName(
  teamMembers.filter((member) => member.title === "Visionary Inspiration"),
);
const directorNames = ["Mrs. Laxmi Kumari", "Prashant Kumar"];
const directorMembers = directorNames
  .map((name) => teamMembers.find((member) => member.name === name))
  .filter(Boolean)
  .sort((firstMember, secondMember) =>
    firstMember.name.localeCompare(secondMember.name),
  );
const secondRowNames = [
  "Deepak Thakur",
  "Dr. Sandeep Bhardwaj",
  "Kumod Kumar",
  "Satyajit Singh",
  "Vikas Vaibhav, IPS",
  "Vishal Tiwari",
  "Ajit Kumar",
  "Dr. Ravi Ranjan",
];
const secondRowMembers = secondRowNames
  .map((name) => teamMembers.find((member) => member.name === name))
  .filter(Boolean)
  .sort((firstMember, secondMember) =>
    firstMember.name.localeCompare(secondMember.name),
  );
const teamMemberNames = [
  "Ankit Kumar",
  "Md Maaz",
  "Rubi Kumar",
  "Dhiraj Singh",
  "Rakesh Kumar Singh",
];
const teamMemberRowMembers = teamMemberNames
  .map((name) => teamMembers.find((member) => member.name === name))
  .filter(Boolean)
  .sort((firstMember, secondMember) =>
    firstMember.name.localeCompare(secondMember.name),
  );
const thirdRowMembers = sortByName(
  teamMembers.filter(
    (member) =>
      member.title !== "Visionary Inspiration" &&
      !directorNames.includes(member.name) &&
      !secondRowNames.includes(member.name) &&
      !teamMemberNames.includes(member.name),
  ),
);
const displayTeamMembers = [
  ...patronMembers,
  ...directorMembers,
  ...secondRowMembers,
  ...thirdRowMembers,
  ...teamMemberRowMembers,
];

const toColumnFillOrder = (items, rowCount) => {
  const columnCount = Math.ceil(items.length / rowCount);
  const rows = Array.from({ length: rowCount }, (_, rowIndex) =>
    items.slice(rowIndex * columnCount, (rowIndex + 1) * columnCount),
  );

  return Array.from({ length: columnCount }).flatMap((_, columnIndex) =>
    rows.map((row) => row[columnIndex]).filter(Boolean),
  );
};

const mobileTeamMembers = toColumnFillOrder(displayTeamMembers, 3);

function TeamMemberCard({ member }) {
  return (
    <article className="group w-full snap-start overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-0.5 hover:border-[#b58b32]/45 hover:shadow-[0_10px_22px_rgba(0,0,0,0.1)]">
      <div className="h-20 overflow-hidden bg-white sm:h-28 lg:h-28 xl:h-[7.5rem]">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: member.imagePosition || "center 15%" }}
        />
      </div>

      <div className="p-2">
        <div className="mb-1.5 h-0.5 w-5 bg-[#b58b32] transition-all duration-300 group-hover:w-8 sm:w-6 sm:group-hover:w-9" />
        <h3 className="text-[0.66rem] font-semibold leading-tight text-black sm:text-[0.74rem]">
          {member.name}
        </h3>
        <p className="mt-0.5 text-[0.6rem] font-medium leading-tight text-black/60 sm:text-[0.64rem]">
          {member.title}
        </p>
      </div>
    </article>
  );
}

export default function ExecutiveTeam() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[#f8f6f1] py-16 text-black sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
            Leadership
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold uppercase leading-none text-black sm:text-5xl">
            Executive Team
          </h2>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormOpen(true);
            }}
            className="mt-6 inline-flex items-center justify-center bg-black px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-[#b58b32]"
          >
            Join Our Team
          </button>
          <p className="mt-5 text-base leading-7 text-black/65 sm:text-lg">
            Leaders and partners guiding BIHAAN across community, enterprise,
            culture, and global partnerships.
          </p>
        </div>

        <div className="-mx-5 mt-8 grid max-w-[100vw] auto-cols-[calc((100vw-3.75rem)/3)] grid-flow-col grid-rows-3 snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-hidden px-5 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden">
          {mobileTeamMembers.map((member) => (
            <TeamMemberCard key={`mobile-${member.id}-${member.name}`} member={member} />
          ))}
        </div>

        <div className="mt-10 hidden sm:block">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#b58b32]">
            Visionary Inspirations
          </p>
          <div className="grid grid-cols-4 gap-2.5 lg:grid-cols-7 xl:grid-cols-8">
          {patronMembers.map((member) => (
            <TeamMemberCard key={`${member.id}-${member.name}`} member={member} />
          ))}
          </div>
        </div>

        <div className="mt-8 hidden sm:block">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#b58b32]">
            Founder & Director
          </p>
          <div className="grid grid-cols-4 gap-2.5 lg:grid-cols-7 xl:grid-cols-8">
          {directorMembers.map((member) => (
            <TeamMemberCard key={`${member.id}-${member.name}`} member={member} />
          ))}
          </div>
        </div>

        <div className="mt-8 hidden sm:block">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#b58b32]">
            Executive Community
          </p>
          <div className="grid grid-cols-4 gap-2.5 lg:grid-cols-7 xl:grid-cols-8">
          {secondRowMembers.map((member) => (
            <TeamMemberCard key={`${member.id}-${member.name}`} member={member} />
          ))}
          </div>
        </div>

        <div className="mt-8 hidden sm:block">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#b58b32]">
            Core Committee
          </p>
          <div className="grid grid-cols-4 gap-2.5 lg:grid-cols-7 xl:grid-cols-8">
          {thirdRowMembers.map((member) => (
            <TeamMemberCard key={`${member.id}-${member.name}`} member={member} />
          ))}
          </div>
        </div>

        <div className="mt-8 hidden sm:block">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#b58b32]">
            Team Member
          </p>
          <div className="grid grid-cols-4 gap-2.5 lg:grid-cols-7 xl:grid-cols-8">
          {teamMemberRowMembers.map((member) => (
            <TeamMemberCard key={`${member.id}-${member.name}`} member={member} />
          ))}
          </div>
        </div>
      </div>

      {formOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/35 px-5 py-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-team-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close join team form"
            onClick={() => setFormOpen(false)}
          />

          <div className="relative w-full max-w-xl border border-[#b58b32]/60 bg-white p-6 shadow-[0_28px_90px_rgba(0,0,0,0.35)] md:p-9">
            <button
              type="button"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center text-black transition hover:text-[#b58b32]"
              aria-label="Close join team form"
              onClick={() => setFormOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
                  Received
                </p>
                <h3
                  id="join-team-title"
                  className="mt-4 font-serif text-4xl font-semibold uppercase leading-none text-black"
                >
                  Thank You
                </h3>
                <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-black/65">
                  We have received your details. The team will review your
                  interest and connect with you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="pr-10">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
                    Join Us
                  </p>
                  <h3
                    id="join-team-title"
                    className="mt-3 font-serif text-4xl font-semibold uppercase leading-none text-black"
                  >
                    Join Our Team
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/65">
                    Share your details and tell us how you would like to
                    contribute to the Ganga Literature Festival.
                  </p>
                </div>

                <form
                  className="mt-7 grid gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <input
                    required
                    className="w-full border border-black/15 bg-white px-4 py-4 outline-none focus:border-[#b58b32]"
                    placeholder="Full Name"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      required
                      type="email"
                      className="w-full border border-black/15 bg-white px-4 py-4 outline-none focus:border-[#b58b32]"
                      placeholder="Email"
                    />
                    <input
                      className="w-full border border-black/15 bg-white px-4 py-4 outline-none focus:border-[#b58b32]"
                      placeholder="Phone"
                    />
                  </div>
                  <select className="w-full border border-black/15 bg-white px-4 py-4 outline-none focus:border-[#b58b32]">
                    <option>Volunteer</option>
                    <option>Partnership</option>
                    <option>Programming Support</option>
                    <option>Media / Communications</option>
                    <option>Operations</option>
                  </select>
                  <textarea
                    className="min-h-28 w-full border border-black/15 bg-white px-4 py-4 outline-none focus:border-[#b58b32]"
                    placeholder="Tell us why you would like to join..."
                  />
                  <button className="bg-black px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#b58b32]">
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
