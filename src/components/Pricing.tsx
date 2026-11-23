import Link from "next/link";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      subtitle: "Perfect for starters",
      price: "$0",
      period: "/ month",
      isPopular: false,
      ctaText: "Get Started",
      features: ["Basic Features", "Community Support", "Up to 3 Projects", "1 GB Cloud Storage"],
    },
    {
      name: "Pro Plan",
      subtitle: "For growing professionals",
      price: "$19",
      period: "/ month",
      isPopular: true,
      badge: "✦ Most Popular",
      ctaText: "Get Pro Now",
      features: [
        "All Free Features",
        "Advanced Analytics & AI",
        "Priority 24/7 Support",
        "Unlimited Projects",
        "100 GB Cloud Storage",
      ],
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations",
      price: "Contact Us",
      period: "",
      isPopular: false,
      ctaText: "Talk to Sales",
      features: [
        "Custom Solutions & Integrations",
        "Dedicated Account Support",
        "Custom SLA & Security",
        "Unlimited Storage & Seats",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <span className="text-purple-500 dark:text-purple-300">✦</span>
            <span>Simple & Transparent</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Flexible Pricing Plans
          </h2>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Choose the perfect plan for your needs.
          </p>
        </div>

        {/* 3 Pricing Glass Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-2xl transition-all duration-300 ${
                plan.isPopular
                  ? "border-2 border-purple-500 bg-gradient-to-b from-white via-purple-50/50 to-white dark:from-[#181c44]/90 dark:to-[#0c1232]/85 shadow-[0_0_40px_rgba(168,85,247,0.25)] dark:shadow-[0_0_40px_rgba(168,85,247,0.35)] lg:-translate-y-2"
                  : "glass-card-interactive"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-1 text-[11px] font-bold text-white shadow-lg shadow-purple-500/40">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{plan.subtitle}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-xs text-slate-500 dark:text-slate-400">{plan.period}</span>
                  )}
                </div>

                <div className="mt-8 space-y-3 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-200">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-500/15 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="#pricing"
                  className={`block w-full text-center rounded-full py-3.5 text-xs font-bold transition tracking-wide ${
                    plan.isPopular
                      ? "btn-glow-primary text-white"
                      : "btn-glass text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
