import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SignupForm } from "@/components/SignupForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Sparkles, Workflow, BrainCircuit, Plug, ArrowRight } from "lucide-react";

const COMPANY = {
  name: "EliTech Nexus",
  shortName: "EliTech",
  tagline: "The AI operating layer for modern business",
  description:
    "EliTech Nexus is building Eli AI — a proactive AI operating layer that automates workflows, sharpens decision-making, and executes real operational tasks across your CRM, email, and internal systems.",
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Capabilities" },
  { id: "notify", label: "Get notified" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${COMPANY.name} — Proactive AI for Business | Coming Soon` },
      {
        name: "description",
        content:
          "EliTech Nexus is building Eli AI, an AI operating layer that automates workflows and executes real tasks across CRM, email, and internal tools. Join the waitlist.",
      },
      { property: "og:title", content: `${COMPANY.name} — Proactive AI for Business` },
      { property: "og:description", content: COMPANY.tagline },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ComingSoon,
});

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ComingSoon() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <AnimatedBackground />

      {/* Top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/40 bg-background/40 px-6 py-4 backdrop-blur-xl sm:px-12">
        <button
          onClick={() => scrollToId("home")}
          className="flex items-center gap-2 transition-smooth hover:opacity-80"
          aria-label="EliTech Nexus home"
        >
          <div className="bg-gradient-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-glow">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">
            {COMPANY.name}
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:bg-card/40 hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToId("notify")}
          className="bg-gradient-primary hidden h-9 items-center gap-1.5 rounded-full px-4 text-xs font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.03] sm:inline-flex"
        >
          Join waitlist
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 flex min-h-[88vh] flex-col items-center justify-center px-6 py-16 text-center sm:px-12"
      >
        <div
          className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="animate-pulse-glow inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          Coming Soon · Early access opening
        </div>

        <h1
          className="animate-fade-up max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          The AI operating layer for{" "}
          <span className="text-gradient-primary">modern business</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          Meet <span className="font-semibold text-foreground">Eli AI</span> — a proactive
          intelligence that automates workflows, optimizes decisions, and executes real
          operational tasks across the tools your team already uses.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => scrollToId("notify")}
            className="bg-gradient-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.03] hover:shadow-glow-accent"
          >
            Get notified at launch
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => scrollToId("about")}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card/30 px-7 text-sm font-semibold text-foreground backdrop-blur-md transition-smooth hover:bg-card/60"
          >
            Learn more
          </button>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 sm:px-12"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
          About
        </div>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          An AI that doesn't just answer —{" "}
          <span className="text-gradient-primary">it operates.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {COMPANY.description}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We believe the next leap in productivity won't come from another chatbot — it will
          come from an AI layer that understands your business context and acts on it,
          continuously and autonomously.
        </p>
      </section>

      {/* Capabilities */}
      <section
        id="features"
        className="relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24 sm:px-12"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
          Capabilities
        </div>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          What Eli AI does for your team
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: "Workflow automation",
              desc: "Eli AI handles repetitive operational work end-to-end — across departments, tools, and time zones.",
            },
            {
              icon: BrainCircuit,
              title: "Smarter decisions",
              desc: "Real-time signals from your stack, synthesized into clear recommendations and proactive actions.",
            },
            {
              icon: Plug,
              title: "Plugs into your stack",
              desc: "Connects to your CRM, email, and internal systems to execute real tasks, not just suggest them.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-md transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:bg-card/50"
            >
              <div className="bg-gradient-primary mb-5 flex h-11 w-11 items-center justify-center rounded-xl shadow-glow">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notify / Signup */}
      <section
        id="notify"
        className="relative z-10 mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-24 text-center sm:px-12"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
          Get notified
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Be first to access <span className="text-gradient-primary">Eli AI</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Join the waitlist and we'll reach out the moment early access opens.
        </p>

        <div className="mt-10 flex justify-center">
          <SignupForm />
        </div>
        <p className="mt-5 text-xs text-muted-foreground/70">
          No spam. Unsubscribe anytime.
        </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-auto flex flex-col items-center justify-between gap-6 border-t border-border/40 px-6 py-8 sm:flex-row sm:px-12">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <SocialLinks />
      </footer>
    </main>
  );
}
