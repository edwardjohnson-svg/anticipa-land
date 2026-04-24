import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const socials = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "GitHub", href: "https://github.com", icon: Github },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {socials.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/30 text-muted-foreground backdrop-blur-md transition-smooth hover:border-primary/50 hover:bg-card/60 hover:text-primary hover:shadow-glow"
        >
          <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
