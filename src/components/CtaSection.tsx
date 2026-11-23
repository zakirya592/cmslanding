import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function CtaSection({
  title = "Ready to Transform Your Workflow with Unni B?",
  subtitle = "Join over 10,000+ modern teams operating smarter, faster, and better. Set up in less than 2 minutes.",
  primaryCta = "Get Started Free",
  primaryHref = "/contact",
  secondaryCta = "Explore Services",
  secondaryHref = "/services",
}: {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center shadow-2xl">
            {/* Subtle Ambient Glow */}
            <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-600/25 to-blue-500/20 blur-[110px]" />

            <div className="relative mx-auto max-w-2xl">
              <div className="animate-shimmer animate-pulse-glow inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-purple-500 dark:text-purple-300" />
                <span>Instant Setup</span>
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl sm:leading-[1.15]">
                {title}
              </h2>

              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={primaryHref}
                  className="btn-glow-primary group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs font-bold text-white tracking-wide shadow-lg w-full sm:w-auto"
                >
                  <span>{primaryCta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={secondaryHref}
                  className="btn-glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white w-full sm:w-auto"
                >
                  <span>{secondaryCta}</span>
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  No credit card required
                </span>
                <span>•</span>
                <span>Cancel anytime</span>
                <span>•</span>
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
