import Link from "next/link";
import { ArrowRight, Check, Rocket, BarChart3, Clock, TrendingUp } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Showcase() {
  const checklist = [
    { text: "Increase Productivity", icon: BarChart3 },
    { text: "Save Time & Effort", icon: Clock },
    { text: "Grow Your Business", icon: TrendingUp },
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text & Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up" delay={50}>
              <div className="animate-shimmer animate-pulse-glow inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
                <span className="text-purple-500 dark:text-purple-300">✦</span>
                <span>Step Into The Future</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl sm:leading-[1.15]">
                Built for a <br />
                <span className="text-purple-glow">Smarter Tomorrow</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                Unni B is designed to boost your productivity, simplify your workflow, and help you achieve your goals faster than ever before.
              </p>
            </ScrollReveal>

            {/* Checklist items with hover effect */}
            <div className="space-y-3 pt-2">
              {checklist.map((item, idx) => (
                <ScrollReveal key={item.text} direction="up" delay={300 + idx * 80}>
                  <div className="flex items-center gap-3 transition-transform hover:translate-x-1.5 duration-200">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.text}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Button */}
            <ScrollReveal direction="up" delay={550}>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="btn-glow-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold text-white tracking-wide shadow-lg"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Laptop Mockup & Floating Glass Badge */}
          <div className="relative lg:col-span-7 flex items-center justify-center">
            <ScrollReveal direction="left" delay={200} className="w-full flex items-center justify-center">
              {/* Ambient Backlight */}
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 dark:from-blue-600/30 dark:via-indigo-600/30 dark:to-purple-600/30 blur-3xl opacity-80" />

              {/* Laptop Device Container with Floating Animation */}
              <div className="relative w-full max-w-xl animate-float-slow">
                {/* Laptop Screen Bezel */}
                <div className="relative rounded-t-2xl border-[3px] border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-900 p-2 shadow-2xl shadow-indigo-950/40">
                  {/* Webcam dot */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                  </div>

                  {/* Laptop Inner Screen */}
                  <div className="overflow-hidden rounded-lg bg-white dark:bg-[#070b1e] border border-slate-300 dark:border-white/10 p-3 sm:p-4 text-xs font-sans shadow-inner">
                    {/* Dashboard Top Header */}
                    <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-2.5 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-tr from-purple-500 to-indigo-500 text-[10px] font-bold text-white">
                          U
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white text-[11px]">Dashboard</span>
                        <span className="text-slate-500 dark:text-slate-400 text-[10px]">/ Overview</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
                        <span>Pro Workspace</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                    </div>

                    {/* 3 Metric Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-2 transition-transform hover:scale-103">
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Total Projects</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">24</p>
                      </div>
                      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2 transition-transform hover:scale-103">
                        <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Completed</p>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-300 mt-0.5">18</p>
                      </div>
                      <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-2 transition-transform hover:scale-103">
                        <p className="text-[10px] text-purple-600 dark:text-purple-400">In Progress</p>
                        <p className="text-sm font-bold text-purple-600 dark:text-purple-300 mt-0.5">6</p>
                      </div>
                    </div>

                    {/* Graph Area */}
                    <div className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#050819] p-2.5">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 mb-1.5">
                        <span>Workflow Velocity</span>
                        <span className="rounded bg-indigo-500/10 dark:bg-indigo-500/20 px-1.5 py-0.2 text-[9px] text-indigo-600 dark:text-indigo-300 font-semibold">
                          +24% vs last week
                        </span>
                      </div>

                      <div className="h-20 w-full">
                        <svg className="h-full w-full" viewBox="0 0 300 80" fill="none">
                          <defs>
                            <linearGradient id="laptopGraphGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0 65 Q 40 40, 80 50 T 160 25 T 240 35 T 300 15 L 300 80 L 0 80 Z"
                            fill="url(#laptopGraphGrad)"
                          />
                          <path
                            d="M0 65 Q 40 40, 80 50 T 160 25 T 240 35 T 300 15"
                            stroke="#a855f7"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Keyboard Base & Hinge */}
                <div className="relative mx-auto h-3 w-[104%] -left-[2%] rounded-b-xl bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 shadow-xl border-t border-slate-400 dark:border-slate-500">
                  {/* Thumb notch */}
                  <div className="mx-auto h-1 w-16 rounded-b bg-slate-400 dark:bg-slate-800" />
                </div>
              </div>

              {/* Floating Glass Badge ("Work Smarter") with 3D float */}
              <div className="glass-panel absolute -bottom-4 right-0 sm:right-4 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-[0_15px_30px_rgba(59,130,246,0.3)] animate-float-cube z-20 cursor-pointer">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 text-white shadow-md">
                  <Rocket className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Work Smarter</p>
                  <p className="text-[10px] text-cyan-600 dark:text-cyan-300">Automate your day</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
