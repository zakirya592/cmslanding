import type { Metadata } from "next";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { Target, Compass, Sparkles, Award, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Unni B",
  description: "Learn about Unni B's mission, vision, team, and company overview.",
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Marcus Vance",
      role: "Founder & Chief Executive",
      bio: "Former VP of Engineering with 15+ years experience building hyper-scale distributed software architectures.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Elena Rostova",
      role: "Head of Product Design",
      bio: "Award-winning designer obsessed with seamless human-computer interaction and minimalist aesthetics.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Kaelen Chen",
      role: "VP of Engineering",
      bio: "Pioneer in distributed real-time systems, CRDT synchronization, and global edge acceleration.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Sophia Martinez",
      role: "Lead AI & Research Scientist",
      bio: "Specializing in autonomous reasoning, context-aware agents, and assistive workspace automation.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
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
              <span>Who We Are</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl sm:leading-[1.12]">
              Architecting the Future of <br />
              <span className="text-purple-glow">Modern Productivity</span>
            </h1>

            <p className="mt-5 mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              We started Unni B with a singular conviction: work tools should inspire clarity and velocity, not cognitive overload.
            </p>
          </div>
        </section>

        {/* 2. Company Overview */}
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-panel rounded-3xl p-8 sm:p-14 shadow-2xl">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                    Company Overview
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                    Built for companies that move at the speed of thought.
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    Founded in 2024, Unni B has grown from a visionary concept into a trusted platform serving over 10,000 teams across 50 countries. Our platform combines low-latency architecture, intuitive design, and AI automation to unlock human ingenuity.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Every feature we craft is tested against our core philosophy: will this help our users accomplish their goals faster, with less friction and higher delight?
                  </p>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">10k+</div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Active Teams</div>
                  </div>
                  <div className="rounded-2xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">99.9%</div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Uptime SLA</div>
                  </div>
                  <div className="rounded-2xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">50+</div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Countries Served</div>
                  </div>
                  <div className="rounded-2xl border border-black/[0.06] dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">&lt;15ms</div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Average Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. Mission & Vision */}
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Mission Card */}
              <div className="glass-card-interactive rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 border border-purple-400/40 text-purple-600 dark:text-purple-300 mb-6">
                  <Target className="h-7 w-7" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Our Mission
                </span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Democratize high-velocity workflows for everyone.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  To eliminate technological barriers so engineering, marketing, and design teams can innovate with zero friction, building digital experiences at lightning speed.
                </p>
              </div>

              {/* Vision Card */}
              <div className="glass-card-interactive rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 border border-cyan-400/40 text-cyan-600 dark:text-cyan-300 mb-6">
                  <Compass className="h-7 w-7" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Our Vision
                </span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Software that fades away into sheer creative flow.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  We envision a world where software adapts seamlessly to humans rather than forcing humans to adapt to rigid interfaces, unlocking peak collective potential worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Team Section */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
                <Users className="h-3.5 w-3.5 text-purple-500 dark:text-purple-300" />
                <span>Leadership & Visionaries</span>
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Meet the Team Behind Unni B
              </h2>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
                Engineers, designers, and dreamers dedicated to building the ultimate work platform.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="glass-card-interactive group rounded-2xl p-6 text-center"
                >
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-purple-400/40 shadow-lg">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-purple-600 dark:text-purple-300">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CtaSection
          title="Want to join our mission or work with us?"
          subtitle="Explore open positions or schedule an introductory architecture consultation with our team."
          primaryCta="Get In Touch"
          primaryHref="/contact"
          secondaryCta="View Services"
          secondaryHref="/services"
        />
      </main>

      <Footer />
    </div>
  );
}
