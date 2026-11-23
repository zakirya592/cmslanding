import Link from "next/link";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-90" />
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-[350px] w-[650px] rounded-full bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-cyan-500/20 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#11172a] via-[#0d1222] to-[#070a12] p-8 sm:p-14 text-center shadow-2xl shadow-indigo-950/80">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              Instant 30-Second Setup
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.15]">
              Ready to modernize your content architecture?
            </h2>

            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Start building your Next.js application with Stratum for free. Unlimited schemas, instant APIs, and global edge caching from day one.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#pricing"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 px-7 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110 sm:w-auto"
              >
                <span>Deploy Free Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#code"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:bg-white/10 hover:border-white/20 sm:w-auto"
              >
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span>Read Developer Docs</span>
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Free plan forever • No credit card required • SOC2 Type II Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
