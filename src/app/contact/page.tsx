"use client";

import { useState } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Globe2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 4000);
  };

  const contactInfo = [
    {
      title: "Email Us",
      value: "hello@unnib.com",
      subtext: "Expect a response within 2 hours",
      icon: Mail,
      color: "text-purple-500 dark:text-purple-400",
    },
    {
      title: "Call Our Team",
      value: "+1 (800) 555-8664",
      subtext: "Monday to Friday, 9am - 6pm PST",
      icon: Phone,
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      title: "Global Headquarters",
      value: "500 Howard St, Suite 400",
      subtext: "San Francisco, CA 94105",
      icon: MapPin,
      color: "text-pink-500 dark:text-pink-400",
    },
    {
      title: "Hours of Operation",
      value: "24/7 Support Available",
      subtext: "Round-the-clock for Pro & Enterprise",
      icon: Clock,
      color: "text-emerald-500 dark:text-emerald-400",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <AuroraBackground />
      <Navbar />

      <main className="flex-1 mt-5">
        {/* 1. Hero Section */}
        <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 dark:bg-purple-500/15 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-purple-500 dark:text-purple-300" />
              <span>Let&apos;s Connect</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl sm:leading-[1.12]">
              Get in Touch with <br />
              <span className="text-purple-glow">Our Team</span>
            </h1>

            <p className="mt-5 mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Have questions about Unni B, want a customized enterprise demo, or need support? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* 2 & 3. Contact Information + Contact Form */}
        <section className="relative py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Left Column: 2. Contact Information Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                    We&apos;re here to help you succeed.
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Reach out through any of our channels, or fill out the form and our team will get back to you promptly.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-2">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.title}
                        className="glass-card-interactive flex items-start gap-4 rounded-2xl p-5 text-left"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-400/30">
                          <Icon className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {info.title}
                          </h4>
                          <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                            {info.value}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {info.subtext}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: 3. Interactive Contact Form */}
              <div className="lg:col-span-7">
                <div className="glass-panel relative rounded-3xl p-8 sm:p-10 shadow-2xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                    Fill in your details below and our product specialists will reply within hours.
                  </p>

                  {submitted ? (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center text-emerald-400">
                      <CheckCircle2 className="h-12 w-12 mb-3 text-emerald-500 animate-bounce" />
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Delivered!</h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 max-w-sm">
                        Thank you for reaching out. One of our specialists will be in contact with you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="Alex"
                            className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-black/30 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-purple-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Rivera"
                            className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-black/30 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-purple-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="alex@company.com"
                            className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-black/30 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-purple-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Acme Inc."
                            className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-black/30 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-purple-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                          Inquiry Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-[#070a1e] px-4 py-2.5 text-xs text-slate-900 dark:text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Sales / Enterprise Demo">Sales / Enterprise Demo</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership Proposal">Partnership Proposal</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-200 mb-1.5">
                          Your Message *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your team, your goals, or what you'd like to achieve..."
                          className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-black/30 px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-purple-500 focus:outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-glow-primary flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold text-white tracking-wide shadow-lg"
                      >
                        <span>Send Message</span>
                        <Send className="h-3.5 w-3.5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Map Section */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-panel overflow-hidden rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Global Edge Network & Headquarters
                    </h3>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    San Francisco HQ (37.789° N, 122.398° W) • Connected to 320+ Edge nodes globally
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold self-start sm:self-auto">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>All Global Nodes Online</span>
                </div>
              </div>

              {/* Styled Interactive / Stylized Map Visualization */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-slate-950/[0.04] dark:bg-[#070b1e] border border-slate-200 dark:border-white/10 p-4 flex items-center justify-center">
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-grid-white opacity-20" />

                {/* World Map SVG Vector */}
                <svg
                  className="h-full w-full opacity-60 text-indigo-400 dark:text-indigo-500"
                  viewBox="0 0 1000 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="210" cy="180" r="8" fill="#a855f7" className="animate-pulse" />
                  <circle cx="210" cy="180" r="18" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
                  <text x="225" y="185" fill="currentColor" fontSize="11" fontWeight="bold">San Francisco (HQ)</text>

                  <circle cx="310" cy="190" r="5" fill="#38bdf8" />
                  <text x="320" y="194" fill="currentColor" fontSize="10">New York</text>

                  <circle cx="500" cy="160" r="5" fill="#38bdf8" />
                  <text x="510" y="164" fill="currentColor" fontSize="10">London</text>

                  <circle cx="540" cy="175" r="5" fill="#38bdf8" />
                  <text x="550" y="179" fill="currentColor" fontSize="10">Frankfurt</text>

                  <circle cx="780" cy="270" r="5" fill="#38bdf8" />
                  <text x="790" y="274" fill="currentColor" fontSize="10">Singapore</text>

                  <circle cx="840" cy="200" r="5" fill="#38bdf8" />
                  <text x="850" y="204" fill="currentColor" fontSize="10">Tokyo</text>

                  <circle cx="880" cy="380" r="5" fill="#38bdf8" />
                  <text x="890" y="384" fill="currentColor" fontSize="10">Sydney</text>

                  {/* Connecting lines */}
                  <path
                    d="M 210 180 Q 260 140, 310 190 Q 400 130, 500 160 Q 640 180, 780 270 Q 810 230, 840 200"
                    stroke="#a855f7"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.5"
                  />
                </svg>

                <div className="glass-panel absolute bottom-4 left-4 rounded-xl px-4 py-2 text-xs">
                  <p className="font-semibold text-slate-900 dark:text-white">Headquarters</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">500 Howard Street, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
