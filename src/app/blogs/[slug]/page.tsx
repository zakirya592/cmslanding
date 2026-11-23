import { notFound } from "next/navigation";
import Link from "next/link";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blogs";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Sparkles } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related blogs (other posts, prioritizing same category)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <AuroraBackground />
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 mt-5">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-200 transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all articles</span>
            </Link>
          </div>

          {/* 2. Title & Metadata Header */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-purple-500/10 dark:bg-purple-500/20 px-3.5 py-1 text-xs font-semibold text-purple-600 dark:text-purple-300 border border-purple-400/30">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl sm:leading-[1.18]">
              {post.title}
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Bar */}
            <div className="flex items-center justify-between pt-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full object-cover border-2 border-purple-400/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 1. Cover Image */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-black/[0.08] dark:border-white/10 shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-72 sm:h-[450px] w-full object-cover"
            />
          </div>

          {/* 3. Content Section */}
          <div className="glass-panel mt-10 rounded-3xl p-8 sm:p-12 text-left shadow-xl space-y-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200"
              >
                {paragraph}
              </p>
            ))}

            {/* Inset Quote Highlight */}
            <div className="my-8 rounded-2xl border-l-4 border-purple-500 bg-purple-500/5 dark:bg-purple-500/10 p-6">
              <p className="text-sm sm:text-base font-semibold italic text-slate-800 dark:text-slate-100">
                &ldquo;By unifying edge infrastructure, intuitive interface design, and context-aware intelligence, organizations can accomplish in hours what used to take weeks.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-semibold text-purple-600 dark:text-purple-300">
                — {post.author.name}, {post.author.role}
              </span>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200">
              As we continue to develop the Unni B platform, our core objective remains unwavering: to create tools that amplify human intuition and unleash team potential across the globe.
            </p>
          </div>

          {/* 4. Related Blogs Section */}
          <section className="mt-20 pt-12 border-t border-black/[0.08] dark:border-white/[0.08] text-left">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Continue Reading
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Related Blogs
                </h3>
              </div>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-200"
              >
                <span>View all</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="glass-card-interactive group overflow-hidden rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                      <img
                        src={related.coverImage}
                        alt={related.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] font-semibold text-purple-600 dark:text-purple-300">
                        {related.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors line-clamp-2 mt-1">
                        <Link href={`/blogs/${related.slug}`}>{related.title}</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Link
                      href={`/blogs/${related.slug}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-600 dark:text-purple-300"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
