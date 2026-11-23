import Link from "next/link";
import { ArrowRight, Play, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section id="home" className="relative pt-12 mt-5 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline and CTAs with entrance animations */}
          <div className="text-left lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" delay={50}>
              <div className="animate-shimmer animate-pulse-glow inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.25)] backdrop-blur-md">
                <span className="text-purple-500 dark:text-purple-300">✦</span>
                <span>Next-Gen Solution</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl sm:leading-[1.1]">
                Unni B <br />
                Smarter. Faster. <span className="text-cyan-glow">Better.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg max-w-xl">
                Experience the next generation of productivity with Unni B — a powerful, beautiful and easy-to-use solution for your modern workflow.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="btn-glow-primary group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold text-white tracking-wide shadow-lg"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/about"
                  className="btn-glass group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200/60 dark:bg-white/10 transition-transform group-hover:scale-110">
                    <Play className="h-2.5 w-2.5 fill-slate-700 dark:fill-white text-slate-700 dark:text-white ml-0.5" />
                  </div>
                  <span>Watch Demo</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={450}>
              <div className="flex items-center gap-3 pt-4">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-[#081232] object-cover transition-transform hover:scale-115 hover:z-10"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                    alt="User 1"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-[#081232] object-cover transition-transform hover:scale-115 hover:z-10"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="User 2"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-[#081232] object-cover transition-transform hover:scale-115 hover:z-10"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                    alt="User 3"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-[#081232] object-cover transition-transform hover:scale-115 hover:z-10"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                    alt="User 4"
                  />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Trusted by 10k+ users</p>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">worldwide</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Luminous 3D Glass Dashboard */}
          <div className="relative lg:col-span-6 flex justify-center">
            <ScrollReveal direction="left" delay={200} className="w-full max-w-lg">
              {/* Ambient Backlight Behind Card */}
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 dark:from-purple-600/30 dark:via-indigo-600/30 dark:to-blue-600/30 blur-3xl opacity-75" />

              {/* Main Glass Dashboard Card with floating animation */}
              <div className="glass-panel relative w-full rounded-2xl p-6 sm:p-7 shadow-2xl animate-float-slow">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Welcome back!</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">User Dashboard Overview</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
                        alt="User avatar"
                        className="h-8 w-8 rounded-full border border-purple-400/40 object-cover"
                      />
                      <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-[#070b24]" />
                    </div>
                  </div>
                </div>

                {/* Card Body: Graph + Right Stats */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  {/* Glowing Wave Chart */}
                  <div className="sm:col-span-8 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Performance Analytics</span>
                      <span className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-300 font-mono font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Live
                      </span>
                    </div>

                    {/* SVG Wave Line with Glowing Gradient */}
                    <div className="relative h-36 w-full overflow-hidden rounded-xl bg-slate-950/[0.04] dark:bg-[#060a22]/60 p-2 border border-black/[0.05] dark:border-white/5">
                      <svg className="h-full w-full" viewBox="0 0 260 110" fill="none">
                        <defs>
                          <linearGradient id="chartWaveGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.45" />
                            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="40%" stopColor="#a855f7" />
                            <stop offset="80%" stopColor="#38bdf8" />
                          </linearGradient>
                        </defs>

                        {/* Area Fill */}
                        <path
                          d="M0 85 C 30 75, 55 95, 80 50 C 110 5, 140 60, 175 35 C 205 15, 230 45, 260 20 L 260 110 L 0 110 Z"
                          fill="url(#chartWaveGrad)"
                        />

                        {/* Stroke Line */}
                        <path
                          d="M0 85 C 30 75, 55 95, 80 50 C 110 5, 140 60, 175 35 C 205 15, 230 45, 260 20"
                          stroke="url(#lineGrad)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          filter="drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))"
                        />

                        {/* Glowing Points with animated rings */}
                        <circle cx="80" cy="50" r="4.5" fill="#ffffff" stroke="#a855f7" strokeWidth="2.5" />
                        <circle cx="175" cy="35" r="4.5" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />
                        <circle cx="260" cy="20" r="4.5" fill="#ffffff" stroke="#38bdf8" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Right Quick Metrics with hover scale */}
                  <div className="sm:col-span-4 flex flex-col gap-2.5">
                    <div className="rounded-xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-2.5 transition-transform hover:scale-103">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Total Revenue</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">+24%</span>
                        <TrendingUp className="h-3 w-3 text-emerald-500" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-2.5 transition-transform hover:scale-103">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Active Users</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">12.5k</span>
                        <Users className="h-3 w-3 text-indigo-500" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-2.5 transition-transform hover:scale-103">
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Conversion Rate</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">99.9%</span>
                        <CheckCircle2 className="h-3 w-3 text-cyan-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating 3D Translucent Glass "U" Cube with 3D float animation */}
              <div className="glass-cube absolute -bottom-6 -left-6 sm:-left-8 flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-2xl animate-float-cube z-20 shadow-[0_15px_35px_rgba(168,85,247,0.4)] cursor-pointer">
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 dark:from-purple-200 dark:via-white dark:to-blue-200">
                  U
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
