import { Users, Globe, Star, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function StatsBar() {
  const stats = [
    {
      value: "10K+",
      label: "Happy Users",
      icon: Users,
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      value: "50+",
      label: "Countries",
      icon: Globe,
      iconColor: "text-purple-500 dark:text-purple-400",
    },
    {
      value: "4.9/5",
      label: "Customer Rating",
      icon: Star,
      iconColor: "text-amber-500 dark:text-amber-400",
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: Zap,
      iconColor: "text-cyan-500 dark:text-cyan-400",
    },
  ];

  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          {/* Full-width Luminous Glass Pill Bar */}
          <div className="glass-panel relative rounded-3xl sm:rounded-full px-6 py-6 sm:py-7 shadow-[0_15px_40px_rgba(2,6,23,0.15)] dark:shadow-[0_15px_40px_rgba(2,6,23,0.7)]">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/[0.08]">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`flex items-center justify-center gap-3.5 transition-transform hover:scale-105 duration-200 ${
                      i > 0 ? "pt-4 sm:pt-0" : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/10 shadow-inner">
                      <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
