import { Zap, ShieldCheck, Palette, Headphones } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Features() {
  const features = [
    {
      title: "Blazing Fast",
      description: "Experience lightning-fast performance with optimized workflows.",
      icon: Zap,
      iconColor: "text-purple-600 dark:text-purple-400",
      bgGlow: "from-purple-500/20 to-indigo-500/10",
      iconBorder: "border-purple-400/40",
    },
    {
      title: "Secure & Reliable",
      description: "Your data is always safe with enterprise-grade security.",
      icon: ShieldCheck,
      iconColor: "text-emerald-600 dark:text-emerald-400",
      bgGlow: "from-emerald-500/20 to-teal-500/10",
      iconBorder: "border-emerald-400/40",
    },
    {
      title: "Beautiful Design",
      description: "A modern and intuitive interface you'll love.",
      icon: Palette,
      iconColor: "text-pink-600 dark:text-pink-400",
      bgGlow: "from-pink-500/20 to-rose-500/10",
      iconBorder: "border-pink-400/40",
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is here to help you around the clock.",
      icon: Headphones,
      iconColor: "text-cyan-600 dark:text-cyan-400",
      bgGlow: "from-cyan-500/20 to-blue-500/10",
      iconBorder: "border-cyan-400/40",
    },
  ];

  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="mx-auto max-w-2xl text-center">
          <div className="animate-shimmer inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <span className="text-purple-500 dark:text-purple-300">✦</span>
            <span>Powerful Features</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything You Need
          </h2>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Powerful features to help you work smarter and achieve more.
          </p>
        </ScrollReveal>

        {/* 4 Glass Cards Grid with Staggered ScrollReveal */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} direction="up" delay={index * 120}>
                <div className="glass-card-interactive group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 text-left h-full">
                  <div>
                    {/* Glowing Icon Circle */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.bgGlow} border ${feature.iconBorder} shadow-md transition-transform group-hover:scale-110 duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-[11px] font-medium text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    Explore feature →
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
