import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SignupForm } from "@/components/SignupForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Sparkles } from "lucide-react";

// Easy to swap — update these with your real brand info.
const COMPANY = {
  name: "Your Company",
  tagline: "Something extraordinary is on the way",
  description:
    "We're building the next generation of tools to reshape how teams work, create, and ship. Be the first to know when we go live.",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${COMPANY.name} — Coming Soon` },
      {
        name: "description",
        content: `${COMPANY.tagline}. Sign up to get notified when ${COMPANY.name} launches.`,
      },
      { property: "og:title", content: `${COMPANY.name} — Coming Soon` },
      { property: "og:description", content: COMPANY.tagline },
    ],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <AnimatedBackground />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-8 sm:px-12">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">
            {COMPANY.name}
          </span>
        </div>
        <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground sm:inline">
          Launching soon
        </span>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center sm:px-12">
        <div
          className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="animate-pulse-glow inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          Coming Soon
        </div>

        <h1
          className="animate-fade-up max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          {COMPANY.tagline.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="text-gradient-primary">
            {COMPANY.tagline.split(" ").slice(-2).join(" ")}
          </span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          {COMPANY.description}
        </p>

        <div
          className="animate-fade-up mt-12 flex w-full justify-center"
          style={{ animationDelay: "0.45s" }}
        >
          <SignupForm />
        </div>

        <p
          className="animate-fade-up mt-5 text-xs text-muted-foreground/70"
          style={{ animationDelay: "0.55s" }}
        >
          No spam. Unsubscribe anytime.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row sm:px-12">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <SocialLinks />
      </footer>
    </main>
  );
}
