"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const reviews = [
    {
      name: "Michael Chen",
      role: "VP, Tech Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      quote: "Unni B has completely transformed the way I work. Highly recommended!",
      stars: 5,
    },
    {
      name: "Sarah Ali",
      role: "Product Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
      quote: "Incredible performance and beautiful design. A must-have tool!",
      stars: 5,
    },
    {
      name: "David Kim",
      role: "Founder, StartupX",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
      quote: "Super easy to use and packed with features. Love it!",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <div className="animate-shimmer inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <span className="text-purple-500 dark:text-purple-300">✦</span>
            <span>What Our Users Say</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Trusted by Professionals
          </h2>
        </ScrollReveal>

        {/* Testimonials Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.name} direction="up" delay={index * 140}>
              <div className="glass-card-interactive flex flex-col justify-between rounded-2xl p-7 text-left h-full">
                <div className="space-y-4">
                  {/* User info header */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-12 w-12 rounded-full border border-purple-400/40 object-cover shadow-md transition-transform hover:scale-110 duration-200"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">{review.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{review.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* 5 Yellow Stars */}
                <div className="mt-6 flex items-center gap-1 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Carousel pagination indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === i
                  ? "w-7 bg-purple-600 dark:bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  : "w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
