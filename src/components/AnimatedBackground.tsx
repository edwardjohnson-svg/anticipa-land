import heroBg from "@/assets/hero-bg.jpg";
import { Starfield } from "./Starfield";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base image */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-bg)" }}
      />
      {/* Floating orbs */}
      <div
        aria-hidden
        className="animate-float-orb absolute -left-32 top-10 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden
        className="animate-float-orb absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-primary)", animationDelay: "-9s" }}
      />
      {/* Animated grid */}
      <div
        aria-hidden
        className="animate-grid-drift absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          color: "oklch(0.78 0.16 210)",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Sparkling stars */}
      <Starfield />
      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0.02 250 / 0.7) 100%)",
        }}
      />
    </div>
  );
}
