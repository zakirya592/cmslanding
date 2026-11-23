import { Gauge, Server, Activity, Globe, Shield, RefreshCw } from "lucide-react";

export function ArchitectureStats() {
  const stats = [
    {
      value: "99.99%",
      label: "Guaranteed SLA",
      detail: "Zero-downtime multi-region active-active clusters",
      icon: Shield,
    },
    {
      value: "< 14ms",
      label: "Global Edge Latency",
      detail: "Cached at 320+ edge locations worldwide",
      icon: Gauge,
    },
    {
      value: "1.8B+",
      label: "Requests / Month",
      detail: "Trusted by high-throughput enterprise architectures",
      icon: Activity,
    },
    {
      value: "50,000+",
      label: "Developers Building",
      detail: "From indie hackers to Fortune 500 engineering teams",
      icon: Globe,
    },
  ];

  return (
    <section id="architecture" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
            <Server className="h-3.5 w-3.5 text-indigo-400" />
            Global Edge Infrastructure
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Battle-tested architecture built to handle any traffic surge.
          </h2>
          <p className="mt-3.5 text-base text-slate-400 sm:text-lg">
            Whether it&apos;s a Black Friday product drop or a global breaking news flash, our distributed network guarantees instantaneous responses without breaking a sweat.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0c101e]/60 p-6 backdrop-blur-xl transition hover:border-indigo-500/40 hover:bg-[#0f1528]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4 transition group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {item.value}
                </div>
                <div className="mt-1.5 text-sm font-semibold text-slate-200">
                  {item.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
