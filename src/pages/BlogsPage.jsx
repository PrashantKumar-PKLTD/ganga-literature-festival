import { Search } from "lucide-react";

const YEARS = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

const blogs = [
  {
    author: "Charumitra Sardana",
    date: "Jan-21-2026",
    title: "Internet, Culture and Gen-Z",
    excerpt: "A slightly ironic reflection on internet culture, book conversations, and perpetual connection.",
    image: "/gangaimg1.png",
  },
  {
    author: "Stuti Bhatia",
    date: "Jan-21-2026",
    title: "Myths, Semantics and the Women Left Behind",
    excerpt: "History is never neutral. A note on how stories travel through gender, memory, and translation.",
    image: "/gangaimg3.png",
  },
  {
    author: "Samiya Mishra",
    date: "Jan-19-2026",
    title: "Why the Constitution Still Matters",
    excerpt: "A festival session on law, liberty, and the public imagination in contemporary India.",
    image: "/gangaimg5.png",
  },
  {
    author: "Amaya Morgan",
    date: "Jan-19-2026",
    title: "When Images Speak: Storytelling in Many Mediums",
    excerpt: "How visual culture, oral history, cinema, and books meet on the same festival stage.",
    image: "/gangaimg2.png",
  },
  {
    author: "Victoria Harrison",
    date: "Jan-19-2026",
    title: "Bridging Voices",
    excerpt: "A reflection on translation, literary friendship, and the many languages of a river city.",
    image: "/gangaimg4.png",
  },
  {
    author: "Gauri Yadav",
    date: "Jan-19-2026",
    title: "Artificial Intelligence Meets Tamil Mythology",
    excerpt: "A short essay on technology, inheritance, and the new ways myths are being read.",
    image: "/logo.png",
  },
];

export default function BlogsPage() {
  return (
    <main className="pt-[78px] md:pt-[82px]">
      <section
        className="relative min-h-[620px] overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/gangaimg1.png")' }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,139,50,0.22),rgba(0,0,0,0.6))]" />
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center justify-center px-5 text-center md:px-8">
          <div className="relative px-8 py-16">
            <div className="absolute inset-0 border-[8px] border-[#b58b32] opacity-85 [clip-path:polygon(12%_100%,12%_44%,17%_44%,20%_35%,28%_30%,36%_25%,44%_17%,50%_0,56%_17%,64%_25%,72%_30%,80%_35%,83%_44%,88%_44%,88%_100%)]" />
            <div className="relative">
              <p className="font-serif text-3xl font-black uppercase leading-none text-white md:text-4xl">
                Ganga Literature Festival
              </p>
              <h1 className="mt-4 font-serif text-6xl font-black uppercase leading-[0.85] text-white md:text-8xl">
                Blogs
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-white [clip-path:polygon(0_60%,4%_40%,8%_62%,13%_42%,21%_62%,31%_38%,40%_58%,50%_40%,60%_62%,70%_38%,82%_58%,92%_40%,100%_60%,100%_100%,0_100%)]" />
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <h2 className="font-serif text-5xl font-black leading-none text-black md:text-6xl">
              Blog
            </h2>
            <div className="flex w-full overflow-hidden rounded-md border border-[#b58b32]/40 bg-white md:max-w-sm">
              <input
                className="h-14 min-w-0 flex-1 px-5 text-sm outline-none"
                placeholder="Search by blog name..."
              />
              <button className="flex h-14 w-16 items-center justify-center bg-[#b58b32] text-white" aria-label="Search blogs">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto border-b border-[#b58b32]/35 pb-3">
            <div className="flex min-w-max gap-9">
              {YEARS.map((year) => (
                <button
                  key={year}
                  className={`pb-3 text-sm font-bold ${
                    year === "2026"
                      ? "border-b-2 border-[#b58b32] text-[#b58b32]"
                      : "text-black"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article key={blog.title} className="group">
                <div className="overflow-hidden rounded-md bg-[#f8f6f1]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs font-bold text-black/45">
                  {blog.author} | {blog.date}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-black leading-tight text-black">
                  {blog.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{blog.excerpt}</p>
                <button className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-[#b58b32]">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
