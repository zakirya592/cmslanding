"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Stratum CMS compare to monolithic platforms like WordPress?",
      answer:
        "Unlike monolithic CMSs that tightly couple backend content with frontend templates and slow SQL databases, Stratum is completely headless and API-first. You get ultra-fast GraphQL and REST APIs, automated edge caching, and the freedom to build your frontend with Next.js, Remix, Astro, or mobile apps.",
    },
    {
      question: "How does Stratum integrate with Next.js App Router and Server Components?",
      answer:
        "Stratum provides a first-class React Server Component (RSC) client with zero bundle overhead on the client side. You can fetch content directly inside async Server Components, take advantage of Next.js tag-based revalidation (revalidateTag), and trigger instant cache purges via our edge webhooks.",
    },
    {
      question: "How does edge caching and global cache invalidation work?",
      answer:
        "Our edge network is federated across 320+ Cloudflare and Fastly locations worldwide. When content is queried, it is cached closest to your visitor. Whenever an editor hits 'Publish', our distributed cache invalidation purges the stale content globally in under 250 milliseconds.",
    },
    {
      question: "Can non-technical editors preview draft content before publishing?",
      answer:
        "Yes! Stratum includes live preview mode. Editors can see exactly how content looks in your production or staging Next.js environment before clicking publish. We also support visual commenting, branch revisions, and scheduled publication.",
    },
    {
      question: "What happens if our product goes viral and traffic surges?",
      answer:
        "Our architecture is built on auto-scaling distributed clusters. We handle sudden 100x traffic spikes seamlessly without throttling or downtime. On paid plans, you receive soft limit alerts instead of abrupt service cutoffs.",
    },
    {
      question: "Can we migrate our existing content from Contentful, Strapi, or Sanity?",
      answer:
        "Absolutely. We provide one-click CLI migration tools (`npx stratum-migrate`) and automated JSON/CSV importers that map existing schemas, relationships, and media assets in minutes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090e]/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
            <HelpCircle className="h-3.5 w-3.5 text-indigo-400" />
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3.5 text-base text-slate-400">
            Everything you need to know about our headless content infrastructure.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c101e]/60 transition-colors hover:border-white/15"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-slate-200 transition hover:text-white"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-indigo-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-400 border-t border-white/[0.04] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
