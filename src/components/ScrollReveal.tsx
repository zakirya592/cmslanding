"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = domRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransitionStyle = () => {
    if (isVisible) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100";
    }

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10 scale-[0.98]";
      case "down":
        return "opacity-0 -translate-y-10 scale-[0.98]";
      case "left":
        return "opacity-0 translate-x-10";
      case "right":
        return "opacity-0 -translate-x-10";
      case "none":
        return "opacity-0 scale-95";
      default:
        return "opacity-0 translate-y-10";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "800ms",
      }}
      className={`transition-all ease-out will-change-transform ${getTransitionStyle()} ${className}`}
    >
      {children}
    </div>
  );
}
