import type { Metadata } from "next";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import {
  Workflow,
  Cloud,
  Cpu,
  ShieldCheck,
  Code2,
  Users2,
  CheckCircle2,
  Sparkles,
  Zap,
  Clock,
  TrendingUp,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Unni B",
  description: "Explore our comprehensive suite of intelligent digital services, edge cloud architecture, and AI-powered solutions.",
};

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "Intelligent Workflow Automation",
      description:
        "Automate complex business processes, route approvals dynamically, and trigger third-party actions with our visual workflow orchestration engine.",
      icon: Workflow,
      iconColor: "text-purple-500 dark:text-purple-400",
      features: ["Custom Webhooks & Triggers", "Conditional Logic Branching", "Zero-Code Integrations"],
    },
    {
      title: "Global Edge Infrastructure",
      description:
        "Deploy APIs and content delivery on 320+ edge points-of-presence globally. Minimize latency to under 15ms and eliminate single points of failure.",
      icon: Cloud,
      iconColor: "text-blue-500 dark:text-blue-400",
      features: ["Sub-15ms Global TTFB", "Active-Active Multi-Region", "Automated Cache Purging"],
    },
    {
      title: "Embedded AI & Copilot Solutions",
      description:
        "Supercharge team efficiency with predictive suggestions, instant multi-language localization, automated data synthesis, and smart auto-tagging.",
      icon: Cpu,
      iconColor: "text-cyan-500 dark:text-cyan-400",
      features: ["Real-Time Summaries", "50+ Language Translations", "Custom LLM Fine-Tuning"],
    },
    {
      title: "Real-Time Collaboration Canvas",
      description:
        "Empower cross-functional teams with Figma-style multi-player editing, conflict-free CRDT synchronization, and visual commenting threads.",
      icon: Users2,
      iconColor: "text-pink-500 dark:text-pink-400",
      features: ["Live Presence Cursors", "Revision History & Rollbacks", "Granular Draft Previews"],
    },
    {
      title: "Type-Safe API & SDK Development",
      description:
        "Auto-generate typed TypeScript SDKs and GraphQL schemas on every save. Eliminate runtime serialization bugs across all your frontends.",
      icon: Code2,
      iconColor: "text-emerald-500 dark:text-emerald-400",
      features: ["Instant TypeScript Types", "GraphQL & REST Endpoints", "Next.js App Router Native"],
    },
    {
      title: "Enterprise Security & Governance",
      description:
        "Safeguard critical operations with role-based access control, SAML/Okta single sign-on, immutable audit logging, and SOC2 compliance.",
      icon: ShieldCheck,
      iconColor: "text-indigo-500 dark:text-indigo-400",
      features: ["SAML / SSO / MFA", "SOC2 Type II Certified", "Automated Compliance Audits"],
    },
  ];

  const benefits = [
    {
      title: "10x Faster Time to Market",
      description: "Pre-built modular architecture allows your team to launch production features in days instead of months.",
      icon: Zap,
    },
    {
      title: "65% Reduced Operational Overhead",
      description: "Automate repetitive DevOps tasks, monitoring, and database scaling automatically at the edge.",
      icon: TrendingUp,
    },
    {
      title: "Zero-Downtime Guarantee",
      description: "Enjoy enterprise reliability backed by a financially backed 99.9% uptime SLA.",
      icon: Clock,
    },
    {
      title: "24/7 Dedicated Architecture Support",
      description: "Direct access to our senior engineering team via dedicated Slack channels and video consultations.",
      icon: Headphones,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <AuroraBackground />
      <Navbar />

      <main className="flex-1 mt-5">
        {/* 1. Hero Section */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-purple-500 dark:text-purple-300" />
              <span>Full-Stack Capabilities</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl sm:leading-[1.12]">
              Services Tailored for <br />
              <span className="text-purple-glow">High-Velocity Teams</span>
            </h1>

            <p className="mt-5 mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Explore our comprehensive suite of edge infrastructure, workflow automation, and custom digital services built to scale your business.
            </p>
          </div>
        </section>

        {/* 2. Service Cards Section */}
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="glass-card-interactive flex flex-col justify-between rounded-3xl p-8 text-left"
                  >
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-400/30 mb-6">
                        <Icon className={`h-7 w-7 ${service.iconColor}`} />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-2.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                            <CheckCircle2 className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4">
                      <Link
                        href="/contact"
                        className="btn-glass block w-full text-center rounded-full py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                      >
                        Request Consultation
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Benefits Section */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-panel rounded-3xl p-8 sm:p-14 shadow-2xl">
              <div className="mx-auto max-w-2xl text-center mb-14">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Key Benefits
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                  Why Leading Companies Choose Unni B
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  Measurable advantages that give your organization an undeniable competitive edge.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="rounded-2xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-6 text-left"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-400/20 mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {benefit.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. CTA Section */}
        <CtaSection
          title="Ready to Scale Your Operations with Our Services?"
          subtitle="Talk to an enterprise architect to evaluate your technical requirements and receive a custom implementation blueprint."
          primaryCta="Schedule Strategy Call"
          primaryHref="/contact"
          secondaryCta="Explore Blog Insights"
          secondaryHref="/blogs"
        />
      </main>

      <Footer />
    </div>
  );
}
