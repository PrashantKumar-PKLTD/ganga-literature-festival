import { CalendarDays, Search } from "lucide-react";

const YEARS = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];

const news = [
  {
    title: "Ganga Literature Festival Announces Its 2026 Programme In Patna",
    date: "Feb-11-2026",
  },
  {
    title: "Writers, Thinkers, And Performers Join The Festival Lineup",
    date: "Feb-11-2026",
  },
  {
    title: "New Conversations On Language, Memory, And Civilisation Added To GLF 2026",
    date: "Feb-11-2026",
  },
  {
    title: "Festival Partner Hotels And Friend Of The Festival Packages Announced",
    date: "Feb-10-2026",
  },
  {
    title: "Student And Media Registration Categories Open Soon For GLF 2026",
    date: "Feb-10-2026",
  },
  {
    title: "Ganga In Focus: River, Region, And Literary Culture At The Heart Of The Festival",
    date: "Feb-09-2026",
  },
];

const popular = [
  "Bihar's literary culture takes centre stage at Ganga Literature Festival",
  "How regional languages shape India's reading future",
  "With packed venues and provocative talks, GLF 2026 marks its arrival",
  "The quiet art of translation and the making of a literary ecosystem",
  "Which is the oldest language in the world? A conversation returns to Patna",
  "GLF concludes with debate, music, and conversations on freedom of expression",
  "Inside the authors' dinner: hospitality, books, and festival evenings",
];

export default function NewsPage() {
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
                News
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
              News
            </h2>
            <div className="flex w-full overflow-hidden rounded-md border border-[#b58b32]/40 bg-white md:max-w-sm">
              <input
                className="h-14 min-w-0 flex-1 px-5 text-sm outline-none"
                placeholder="Search by title..."
              />
              <button className="flex h-14 w-16 items-center justify-center bg-[#b58b32] text-white" aria-label="Search news">
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

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
            <div>
              {news.map((item) => (
                <article key={item.title} className="border-b border-black/15 py-8">
                  <h3 className="font-serif text-3xl font-black leading-tight text-[#b58b32]">
                    {item.title}
                  </h3>
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-black">
                    <CalendarDays className="h-4 w-4 text-[#b58b32]" />
                    {item.date}
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit bg-[#f8f6f1] p-7">
              <h3 className="font-serif text-3xl font-black text-black">Popular Articles</h3>
              <div className="mt-6 grid gap-5">
                {popular.map((title, index) => (
                  <article key={title}>
                    <p className="text-xs font-bold text-black/45">Jan-{21 - Math.floor(index / 4)}-2026</p>
                    <h4 className="mt-1 font-serif text-lg font-black leading-tight text-black">
                      {title}
                    </h4>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
