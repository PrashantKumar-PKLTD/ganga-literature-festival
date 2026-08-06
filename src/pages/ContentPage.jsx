import { Link } from "react-router-dom";

export default function ContentPage({ page }) {
  return (
    <main className="pt-[86px]">
      <section className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-8 md:py-32">
        <img
          src="/heroimage.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
            {page.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black leading-none text-white md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="border border-black/10 bg-white p-7 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b58b32]">
              Details
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-black">
              {page.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-black/70">
              {page.intro}
            </p>

            {page.facts?.length > 0 && (
              <div className="mt-8 grid gap-3">
                {page.facts.map((fact) => (
                  <div key={fact} className="border-l-4 border-[#b58b32] bg-[#f8f6f1] px-5 py-4 text-sm leading-7 text-black/75">
                    {fact}
                  </div>
                ))}
              </div>
            )}

            {page.sections?.length > 0 && (
              <div className="mt-10 grid gap-6">
                {page.sections.map(([heading, body]) => (
                  <section key={heading}>
                    <h3 className="font-serif text-3xl font-semibold text-black">
                      {heading}
                    </h3>
                    <p className="mt-3 text-base leading-8 text-black/70">{body}</p>
                  </section>
                ))}
              </div>
            )}
          </article>

          <aside className="h-fit border border-[#b58b32]/40 bg-[#b58b32]/10 p-7">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b58b32]">Quick Action</p>
            <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-black">
              Plan your festival visit
            </h3>
            <p className="mt-4 text-sm leading-7 text-black/70">
              Use this page as a working detail page. Replace or expand the researched draft copy as final festival information is confirmed.
            </p>
            <Link
              to="/festival/register-to-attend"
              className="mt-5 inline-flex bg-[#b58b32] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white"
            >
              {page.cta || "Register"}
            </Link>
            {page.source && (
              <a
                href={page.source}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block text-sm font-bold text-black underline decoration-[#b58b32] underline-offset-4"
              >
                Reference source
              </a>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
