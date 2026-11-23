"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white/60 dark:bg-[#030718]/60 backdrop-blur-2xl border-b border-white/70 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-colors duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500 p-[1.5px] shadow-lg shadow-purple-500/30">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#060a20] dark:bg-[#060a20] light:bg-white transition group-hover:opacity-90">
              <span className="text-lg font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 via-indigo-400 to-blue-400 dark:from-purple-300 dark:via-white dark:to-blue-300">
                U
              </span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Unni <span className="font-light text-purple-600 dark:text-purple-300">B</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center rounded-full border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] px-3 py-1.5 backdrop-blur-md shadow-sm dark:shadow-none">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-white bg-gradient-to-r from-purple-600/80 to-indigo-600/80 dark:from-purple-600/50 dark:to-indigo-600/50 shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-400/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/contact"
            className="btn-glow-primary rounded-full px-6 py-2.5 text-xs font-semibold text-white tracking-wide shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Actions: Theme Toggle + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#040822]/95 px-6 pt-3 pb-6 backdrop-blur-2xl md:hidden transition-colors">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-purple-600/20 text-purple-600 dark:text-purple-300 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-glow-primary block w-full text-center rounded-full py-2.5 text-xs font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
