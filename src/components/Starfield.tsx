import { useMemo } from "react";

type Star = {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

function makeStars(count: number, seed: number): Star[] {
  // Simple seeded pseudo-random so SSR and client produce the same output.
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    top: `${rand() * 100}%`,
    left: `${rand() * 100}%`,
    size: 1 + rand() * 2.5,
    duration: 2 + rand() * 4,
    delay: rand() * 5,
    opacity: 0.4 + rand() * 0.6,
  }));
}

export function Starfield() {
  const smallStars = useMemo(() => makeStars(80, 12345), []);
  const bigStars = useMemo(() => makeStars(20, 67890), []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="animate-star-drift absolute inset-0">
        {smallStars.map((star, i) => (
          <span
            key={`s-${i}`}
            className="animate-twinkle absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow: "0 0 4px rgba(255,255,255,0.8)",
            }}
          />
        ))}
        {bigStars.map((star, i) => (
          <span
            key={`b-${i}`}
            className="animate-twinkle absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size + 1.5}px`,
              height: `${star.size + 1.5}px`,
              background: "oklch(0.95 0.08 210)",
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow:
                "0 0 8px oklch(0.78 0.16 210 / 0.9), 0 0 16px oklch(0.7 0.18 300 / 0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
