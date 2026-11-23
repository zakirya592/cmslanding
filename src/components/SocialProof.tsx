export function SocialProof() {
  const companies = [
    { name: "Hyperion Cloud", badge: "Cloud Platform" },
    { name: "Veloce Commerce", badge: "Global Retail" },
    { name: "Synthetix AI", badge: "AI Copilots" },
    { name: "PulseCore", badge: "Fintech Leader" },
    { name: "Orbit Systems", badge: "Enterprise SaaS" },
    { name: "PrismaFlow", badge: "Developer Tools" },
  ];

  return (
    <section className="relative border-y border-white/[0.06] bg-[#07090e]/60 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-wider uppercase text-slate-400">
          Trusted by high-growth engineering teams delivering content across 140+ countries
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.015] px-4 py-3.5 transition-all duration-200 hover:border-indigo-500/30 hover:bg-white/[0.04]"
            >
              <span className="text-sm font-bold tracking-tight text-slate-300 transition group-hover:text-white">
                {company.name}
              </span>
              <span className="text-[10px] text-slate-400 transition group-hover:text-indigo-400">
                {company.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
