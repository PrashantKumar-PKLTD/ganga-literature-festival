import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { BLOGS, getBlogBySlug } from "../data/blogs";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  const related = BLOGS.filter((item) => item.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <main className="bg-white px-5 py-32 pt-[140px] md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
            Blog
          </p>
          <h1 className="mt-5 font-serif text-5xl font-black text-black">
            Article not found
          </h1>
          <Link
            to="/media/blogs"
            className="mt-8 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-[#b58b32]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[78px] md:pt-[82px]">
      <article>
        <section className="bg-[#f8f6f1] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/media/blogs"
              className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-[#b58b32]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blogs
            </Link>
            <p className="mt-10 text-xs font-black uppercase tracking-[0.24em] text-[#b58b32]">
              {blog.author} | {blog.date}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black leading-[0.95] text-black md:text-7xl">
              {blog.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-black/70">
              {blog.excerpt}
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-5xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="aspect-[16/7] w-full rounded-md object-cover"
            />
            <div className="mx-auto mt-12 max-w-3xl space-y-7 text-lg font-medium leading-9 text-black/75">
              {blog.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="bg-[#f8f6f1] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
            More From The Blog
          </p>
          <h2 className="mt-4 font-serif text-4xl font-black text-black md:text-5xl">
            Continue Reading
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/media/blogs/${item.slug}`}
                className="group bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/10] w-full rounded-md object-cover"
                />
                <p className="mt-4 text-xs font-bold text-black/45">
                  {item.author} | {item.date}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-black leading-tight text-black group-hover:text-[#b58b32]">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
