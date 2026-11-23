"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        suppressHydrationWarning
        aria-label="Toggle theme"
        className={`h-9 w-9 rounded-full border border-white/10 bg-white/5 opacity-50 ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
        isDark
          ? "border-white/15 bg-white/[0.06] text-amber-300 hover:border-amber-400/40 hover:bg-amber-400/10 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]"
          : "border-slate-300 bg-white/80 text-indigo-600 shadow-sm hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
      } ${className}`}
    >
      <div className="relative h-4.5 w-4.5 transition-transform duration-500 group-hover:rotate-45">
        {isDark ? (
          <Sun className="h-4.5 w-4.5 transition-all text-amber-300 fill-amber-300/30" />
        ) : (
          <Moon className="h-4.5 w-4.5 transition-all text-indigo-600 fill-indigo-600/30" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
