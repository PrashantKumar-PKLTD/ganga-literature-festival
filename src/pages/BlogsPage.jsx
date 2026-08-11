import { useMemo, useState } from "react";
import { Search, ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs";
import PageHero from "../components/PageHero";
import MadhubaniDivider from "../components/MadhubaniDivider";
import SectionHeading from "../components/SectionHeading";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return BLOGS;
    return BLOGS.filter(
      (b) =>
        b.title.toLowerCase().includes(query) ||
        b.excerpt.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const featuredBlog = BLOGS[0];

  return (
    <main className="bg-cream paper-texture min-h-screen">
      {/* Page Hero Header */}
      <PageHero
        eyebrow="Literary Reflections & Essays"
        title="Festival"
        italicTitle="Journal & Essays"
        intro="Read reflections, interviews, author features, and civilisational perspectives published by writers and readers of the Ganga Literature Festival."
        badge="GLF Literary Publication"
      />

      <section className="relative px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Featured Article Banner */}
          {featuredBlog && !searchQuery && (
            <div className="mb-16 border border-gold/40 bg-white p-6 md:p-10 shadow-lg transition-all duration-300 hover:border-saffron">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7 overflow-hidden border border-gold/20 aspect-[16/10] bg-parchment">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-saffron">
                      <span>Featured Story</span>
                      <span className="h-1 w-1 bg-saffron rounded-full" />
                      <span>{featuredBlog.date}</span>
                    </div>

                    <Link to={`/media/blogs/${featuredBlog.slug}`}>
                      <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-dark hover:text-deep-saffron transition-colors">
                        {featuredBlog.title}
                      </h2>
                    </Link>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-dark/75 font-sans">
                      {featuredBlog.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gold/20 text-xs font-semibold text-dark/60">
                      <span>By {featuredBlog.author}</span>
                      <span className="h-1 w-1 bg-gold rounded-full" />
                      <span>5 min read</span>
                    </div>
                  </div>

                  <Link
                    to={`/media/blogs/${featuredBlog.slug}`}
                    className="mt-8 inline-flex items-center gap-2 border border-saffron bg-saffron px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-gold hover:border-gold hover:text-dark transition w-fit"
                  >
                    Read Full Essay <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          <SectionHeading
            eyebrow="Recent Publications"
            title="Literary Journal & Articles"
          />

          {/* Search Bar */}
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-md items-center border border-gold/40 bg-white">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 flex-1 px-4 text-xs font-sans outline-none text-dark bg-transparent placeholder:text-dark/40"
                placeholder="Search essays by title or author..."
              />
              <div className="flex h-12 w-12 items-center justify-center bg-saffron text-white">
                <Search className="h-4 w-4" />
              </div>
            </div>
          </div>

          <MadhubaniDivider variant="compact" />

          {/* Articles Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.slug}
                  className="group flex flex-col justify-between border border-gold/30 bg-white p-5 transition-all duration-300 hover:border-saffron hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <Link to={`/media/blogs/${blog.slug}`} className="block overflow-hidden aspect-[16/10] bg-parchment border border-gold/20">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </Link>

                    <div className="mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em] text-saffron">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>

                    <Link to={`/media/blogs/${blog.slug}`}>
                      <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-dark group-hover:text-deep-saffron transition-colors">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-dark/70 font-sans line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between">
                    <Link
                      to={`/media/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-saffron hover:text-dark transition"
                    >
                      Read Essay <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center py-12 bg-white border border-gold/30 p-6">
              <p className="text-sm font-bold text-dark/60 font-sans">
                No essays found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-xs font-bold uppercase tracking-wider text-saffron underline hover:text-dark transition"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
