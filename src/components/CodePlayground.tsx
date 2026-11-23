"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Code, Cpu, Sparkles } from "lucide-react";

export function CodePlayground() {
  const [activeTab, setActiveTab] = useState<"nextjs" | "graphql" | "sdk" | "curl">("nextjs");
  const [copied, setCopied] = useState(false);

  const snippets = {
    nextjs: `// app/page.tsx - Next.js React Server Component
import { stratum } from "@/lib/stratum";

export default async function Page() {
  // Ultra-fast cached fetch at the Edge (<12ms)
  const article = await stratum.content.getBySlug("landing-hero", {
    locale: "en",
    draft: false,
    tags: ["homepage"],
  });

  return (
    <main>
      <h1>{article.title}</h1>
      <p>{article.metaDescription}</p>
      <div dangerouslySetInnerHTML={{ __html: article.body.html }} />
    </main>
  );
}`,
    graphql: `# Query content with fine-grained field selection
query GetLandingPage($slug: String!) {
  page(filter: { slug: { eq: $slug } }) {
    id
    title
    heroSection {
      badgeText
      headline
      ctaButton {
        label
        href
      }
    }
    author {
      name
      avatarUrl
    }
  }
}`,
    sdk: `import { StratumClient } from "@stratum/sdk";

// Initialize type-safe client with auto-generated schema
const client = new StratumClient({
  apiKey: process.env.STRATUM_API_KEY,
  environment: "production",
});

// Full autocomplete on every field
const { data, errors } = await client.models.blogPosts.findMany({
  where: { status: "published" },
  limit: 10,
  orderBy: { publishedAt: "desc" },
});`,
    curl: `# Instant REST API endpoint with edge caching
curl -X GET "https://api.stratumcms.io/v1/spaces/prod/content/articles" \\
  -H "Authorization: Bearer st_live_89a3f2b1c4e7" \\
  -H "Accept: application/json" \\
  -H "X-Stratum-Cache: force-edge"`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="relative py-20 sm:py-28 bg-[#06080f]/80 border-t border-white/[0.06]">
      {/* Background glow orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Terminal className="h-3.5 w-3.5 text-cyan-400" />
            Developer First Architecture
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Integrate in 3 lines of code. Fetch at the edge.
          </h2>
          <p className="mt-3.5 text-base text-slate-400 sm:text-lg">
            Whether you use Next.js App Router, pure GraphQL, REST endpoints, or our typed TypeScript SDK, Stratum fits directly into your current tech stack.
          </p>
        </div>

        {/* Code Frame */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#090d18] shadow-2xl shadow-indigo-950/60">
          {/* Top Bar with Tabs and Copy Button */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#070a13] px-4 py-2.5">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                type="button"
                onClick={() => setActiveTab("nextjs")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  activeTab === "nextjs"
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Next.js (RSC)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("graphql")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  activeTab === "graphql"
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                GraphQL
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sdk")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  activeTab === "sdk"
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                TypeScript SDK
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("curl")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  activeTab === "curl"
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                REST / cURL
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Code Window Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="p-6 font-mono text-xs sm:text-sm text-slate-200 lg:col-span-8 overflow-x-auto bg-[#080c16]">
              <pre className="leading-relaxed">
                <code>{snippets[activeTab]}</code>
              </pre>
            </div>

            {/* Live Output Simulation Column */}
            <div className="border-t lg:border-t-0 lg:border-l border-white/[0.08] p-6 lg:col-span-4 bg-[#0a0f1d]/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Edge Telemetry
                  </span>
                  <span className="text-cyan-400 font-mono">11.4 ms</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="rounded-lg bg-black/40 p-3 border border-white/5">
                    <span className="text-slate-500 block mb-1 text-[11px]">Cache Status:</span>
                    <span className="text-emerald-400 font-semibold">HIT (Edge Region: iad1)</span>
                  </div>

                  <div className="rounded-lg bg-black/40 p-3 border border-white/5">
                    <span className="text-slate-500 block mb-1 text-[11px]">Payload Size:</span>
                    <span className="text-slate-200">1.84 KB (gzip compressed)</span>
                  </div>

                  <div className="rounded-lg bg-black/40 p-3 border border-white/5">
                    <span className="text-slate-500 block mb-1 text-[11px]">Type Generation:</span>
                    <span className="text-indigo-300">Synchronized (100% TypeSafe)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>Zero runtime dependencies or bloat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
