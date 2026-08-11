import { ArrowLeft, BookOpen, Clock, Calendar, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { BLOGS, getBlogBySlug } from "../data/blogs";
import MadhubaniDivider from "../components/MadhubaniDivider";
import DecorativeFrame from "../components/DecorativeFrame";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);
  const related = BLOGS.filter((item) => item.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <main className="bg-cream paper-texture px-5 py-32 text-center text-dark">
        <div className="mx-auto max-w-2xl border border-gold/30 bg-white p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-saffron">
            GLF Journal
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-dark">
            Article Not Found
          </h1>
          <Link
            to="/media/blogs"
            className="mt-6 inline-flex items-center gap-2 border border-saffron bg-saffron px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-cream paper-texture min-h-screen pt-[78px] md:pt-[82px]">
      {/* Header Banner */}
      <section className="bg-dark text-white px-5 py-16 md:px-8 md:py-24 border-b border-gold/30">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/media/blogs"
            className="inline-flex items-center gap-2 border border-gold/30 bg-dark/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gold hover:bg-saffron hover:text-white transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Journal
          </Link>

          <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-saffron">
            <span>By {blog.author}</span>
            <span className="h-1 w-1 bg-saffron rounded-full" />
            <span>{blog.date}</span>
          </div>

          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-[1.05] tracking-tight text-white">
            {blog.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-cream/80 font-sans italic border-l-2 border-saffron pl-4">
            {blog.excerpt}
          </p>
        </div>
      </section>

      {/* Main Body */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Main Cover Image */}
          <div className="overflow-hidden border border-gold/30 bg-white aspect-[16/8] shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Editorial Paragraphs */}
          <div className="mt-12 space-y-8 font-serif text-lg sm:text-xl leading-relaxed text-dark/85">
            {blog.body.map((paragraph, index) => (
              <div key={index}>
                <p>{paragraph}</p>
                {index === 1 && (
                  <DecorativeFrame dark={false} className="my-10 shadow-sm">
                    <p className="font-serif text-2xl font-light italic text-dark">
                      "Books are not just objects; they are the living memory of our river and our civilization."
                    </p>
                  </DecorativeFrame>
                )}
              </div>
            ))}
          </div>

          <MadhubaniDivider variant="floral" />

          {/* Author Bio Footer Block */}
          <div className="border border-gold/30 bg-white p-6 sm:p-8 flex items-center gap-6">
            <div className="h-16 w-16 shrink-0 rounded-full border-2 border-saffron bg-parchment flex items-center justify-center font-serif text-2xl font-bold text-saffron">
              {blog.author[0]}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">
                Written By
              </span>
              <h3 className="font-serif text-2xl font-bold text-dark">
                {blog.author}
              </h3>
              <p className="mt-1 text-xs text-dark/70 font-sans">
                Contributor to the Ganga Literature Festival Journal, writing on literature, heritage, and public discourse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white/60 px-5 py-16 md:px-8 md:py-24 border-t border-gold/20">
        <div className="mx-auto max-w-6xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-saffron">
            Further Reading
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-dark">
            More Essays from the Journal
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/media/blogs/${item.slug}`}
                className="group border border-gold/30 bg-white p-5 shadow-sm transition-all hover:border-saffron hover:-translate-y-1 hover:shadow-md"
              >
                <div className="overflow-hidden aspect-[16/10] bg-parchment border border-gold/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-saffron">
                  {item.author} • {item.date}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold text-dark group-hover:text-deep-saffron transition-colors">
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
