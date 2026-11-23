import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { HomeServices } from "@/components/HomeServices";
import { Features } from "@/components/Features";
import { StatsBar } from "@/components/StatsBar";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Dynamic Luminous Aurora Waves Background */}
      <AuroraBackground />

      {/* Navigation */}
      <Navbar />

      {/* Home Sections: Hero, About, Services, Features, Testimonials, CTA */}
      <main className="flex-1 mt-5">
        <Hero />
        <Showcase />
        <HomeServices />
        <Features />
        <StatsBar />
        <Testimonials />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
