"use client";

import { useState } from "react";
import Link from "next/link";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blogs";
import { Sparkles, ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Engineering", "AI & Future", "Design", "Productivity", "Security"];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <AuroraBackground />
      <Navbar />

      <main className="flex-1 mt-5">
        {/* 1. Hero Section */}
        <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-purple-500 dark:text-purple-300" />
              <span>Insights & Architecture</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl sm:leading-[1.12]">
              Latest Thinking from <br />
              <span className="text-purple-glow">The Unni B Team</span>
            </h1>

            <p className="mt-5 mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Explore in-depth articles on distributed edge infrastructure, interface psychology, workflow automation, and engineering leadership.
            </p>
          </div>
        </section>

        {/* 2. Categories Filter */}
        <section className="relative pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "btn-glow-primary text-white shadow-md"
                        : "btn-glass text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Blog Listing */}
        <section className="relative py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="glass-card-interactive group flex flex-col justify-between overflow-hidden rounded-3xl"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-[#05091e]/85 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-purple-300 border border-white/10">
                        {post.category}
                      </span>
                    </div>

                    {/* Content preview */}
                    <div className="p-6 text-left">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-2.5">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors line-clamp-2">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Author & Read more */}
                  <div className="p-6 pt-0">
                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-7 w-7 rounded-full object-cover border border-purple-400/30"
                        />
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {post.author.name}
                        </span>
                      </div>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-300 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Read</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Pagination */}
        <section className="relative py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="btn-glass flex h-10 w-10 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? "btn-glow-primary text-white shadow-md"
                        : "btn-glass text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="btn-glass flex h-10 w-10 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
