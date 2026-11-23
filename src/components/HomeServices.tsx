import Link from "next/link";
import { ArrowRight, Workflow, Cloud, Cpu, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function HomeServices() {
  const services = [
    {
      title: "Intelligent Automation",
      description: "Automate repetitive tasks, streamline handoffs, and eliminate human errors with smart triggers.",
      icon: Workflow,
      tag: "Automation",
      color: "text-purple-500 dark:text-purple-400",
      border: "border-purple-400/30",
    },
    {
      title: "Cloud Infrastructure",
      description: "High-throughput edge replication ensuring 99.9% uptime and sub-15ms response times worldwide.",
      icon: Cloud,
      tag: "Cloud Edge",
      color: "text-blue-500 dark:text-blue-400",
      border: "border-blue-400/30",
    },
    {
      title: "AI Co-Pilot & Insights",
      description: "Harness embedded predictive analytics and generative intelligence directly inside your daily workflows.",
      icon: Cpu,
      tag: "AI Powered",
      color: "text-cyan-500 dark:text-cyan-400",
      border: "border-cyan-400/30",
    },
    {
      title: "Security & Governance",
      description: "Granular access controls, end-to-end encryption, and enterprise compliance out of the box.",
      icon: ShieldCheck,
      tag: "Enterprise",
      color: "text-emerald-500 dark:text-emerald-400",
      border: "border-emerald-400/30",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <div className="animate-shimmer inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <span className="text-purple-500 dark:text-purple-300">✦</span>
            <span>Tailored Services</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Services Built for Growth
          </h2>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            From smart workflows to enterprise cloud federation, we power your operational excellence.
          </p>
        </ScrollReveal>

        {/* Services Grid with Staggered ScrollReveal */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} direction="up" delay={index * 120}>
                <div className="glass-card-interactive group flex flex-col justify-between rounded-2xl p-7 text-left h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-400/30 transition-transform group-hover:scale-110 duration-300">
                        <Icon className={`h-6 w-6 ${service.color}`} />
                      </div>
                      <span className="rounded-full border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-300">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-200 transition"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
