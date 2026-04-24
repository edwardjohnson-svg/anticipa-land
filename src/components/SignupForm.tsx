import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Check, ArrowRight } from "lucide-react";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");

    const { error } = await supabase.from("subscribers").insert({ email });

    if (error) {
      if (error.code === "23505") {
        setStatus("success");
        setMessage("You're already on the list — see you soon.");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
      return;
    }
    setStatus("success");
    setMessage("You're in. We'll be in touch.");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="animate-fade-up flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-6 py-4 text-primary backdrop-blur-md">
        <Check className="h-5 w-5" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="group relative flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="h-14 w-full rounded-full border border-border bg-card/40 px-6 text-base text-foreground placeholder:text-muted-foreground/70 backdrop-blur-md transition-smooth focus:border-primary/60 focus:bg-card/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-gradient-primary group/btn relative inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02] hover:shadow-glow-accent disabled:opacity-70"
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            Notify me
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </>
        )}
      </button>
      {status === "error" && (
        <p className="absolute -bottom-7 left-2 text-xs text-destructive">{message}</p>
      )}
    </form>
  );
}
