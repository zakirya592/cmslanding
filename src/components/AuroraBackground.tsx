export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-colors duration-500">
      {/* Deep Base Gradient */}
      <div className="absolute inset-0 bg-[#eef3fc] dark:bg-[#030617] transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200/40 via-indigo-100/30 to-blue-200/40 dark:from-[#040822] dark:via-[#030617] dark:to-[#020410] transition-colors duration-500" />

      {/* Top Left Aurora Glow Orb with Drifting Animation */}
      <div className="animate-aurora-orb-1 absolute -top-32 -left-32 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-purple-500/35 via-indigo-400/30 to-blue-400/35 dark:from-purple-600/35 dark:via-indigo-600/25 dark:to-blue-600/10 blur-[120px] transition-all" />

      {/* Hero Top Right Electric Blue / Violet Swirl with Reverse Drift */}
      <div className="animate-aurora-orb-2 absolute top-12 -right-20 h-[750px] w-[750px] rounded-full bg-gradient-to-bl from-blue-500/35 via-cyan-400/30 to-purple-500/35 dark:from-blue-600/35 dark:via-cyan-500/20 dark:to-purple-700/25 blur-[130px] transition-all" />

      {/* Center Wave Glow */}
      <div className="animate-aurora-orb-1 absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[1000px] rounded-full bg-gradient-to-tr from-indigo-400/25 via-blue-400/25 to-purple-400/25 dark:from-indigo-700/20 dark:via-blue-600/20 dark:to-purple-600/20 blur-[140px] transition-all" />

      {/* Bottom Wave Glow */}
      <div className="animate-aurora-orb-2 absolute -bottom-40 right-[-10%] h-[800px] w-[850px] rounded-full bg-gradient-to-tl from-purple-500/30 via-indigo-400/25 to-blue-400/30 dark:from-purple-600/30 dark:via-indigo-700/25 dark:to-blue-500/20 blur-[130px] transition-all" />

      {/* Luminous Flowing Wave SVG Ribbons */}
      <svg
        className="animate-wave-flow absolute inset-0 h-full w-full opacity-40 dark:opacity-35 mix-blend-multiply dark:mix-blend-screen transition-opacity"
        preserveAspectRatio="none"
        viewBox="0 0 1440 3200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 250 C 300 100, 600 450, 1100 200 C 1300 100, 1500 220, 1600 180"
          stroke="url(#aurora-grad-1)"
          strokeWidth="120"
          strokeLinecap="round"
          filter="blur(50px)"
        />
        <path
          d="M-50 750 C 450 600, 800 1050, 1300 850 C 1500 780, 1650 900, 1700 880"
          stroke="url(#aurora-grad-2)"
          strokeWidth="160"
          strokeLinecap="round"
          filter="blur(70px)"
        />
        <path
          d="M-120 1600 C 350 1450, 750 1850, 1250 1600 C 1450 1500, 1600 1620, 1700 1580"
          stroke="url(#aurora-grad-1)"
          strokeWidth="140"
          strokeLinecap="round"
          filter="blur(65px)"
        />
        <path
          d="M-80 2400 C 400 2200, 850 2650, 1350 2400 C 1500 2300, 1650 2420, 1750 2380"
          stroke="url(#aurora-grad-3)"
          strokeWidth="150"
          strokeLinecap="round"
          filter="blur(60px)"
        />

        <defs>
          <linearGradient id="aurora-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="aurora-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="aurora-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
