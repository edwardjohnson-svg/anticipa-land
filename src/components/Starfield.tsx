import { useMemo } from "react";

type Star = {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  hue: "white" | "blue" | "violet";
};

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function makeStars(count: number, seed: number): Star[] {
  const rand = seededRandom(seed);
  return Array.from({ length: count }, (_, i) => {
    const r = rand();
    const hue: Star["hue"] = r < 0.7 ? "white" : r < 0.88 ? "blue" : "violet";
    return {
      top: `${rand() * 100}%`,
      left: `${rand() * 100}%`,
      size: 1.2 + rand() * 2,
      duration: 5 + rand() * 7,
      delay: rand() * 10,
      opacity: 0.6 + rand() * 0.4,
      hue,
    };
  });
}

type Shooting = {
  top: string;
  left: string;
  delay: number;
  duration: number;
  angle: number;
  length: number;
};

function makeShootingStars(count: number, seed: number): Shooting[] {
  const rand = seededRandom(seed);
  return Array.from({ length: count }, () => ({
    top: `${rand() * 60}%`,
    left: `${rand() * 80}%`,
    delay: rand() * 14,
    duration: 2 + rand() * 2.5,
    angle: 15 + rand() * 25,
    length: 120 + rand() * 180,
  }));
}

const colorFor = (hue: Star["hue"]) =>
  hue === "blue"
    ? "oklch(0.88 0.13 220)"
    : hue === "violet"
      ? "oklch(0.85 0.16 300)"
      : "oklch(0.98 0.01 250)";

export function Starfield() {
  const tinyStars = useMemo(() => makeStars(45, 12345), []);
  const midStars = useMemo(() => makeStars(18, 67890), []);
  const bigStars = useMemo(() => makeStars(6, 24680), []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Slow parallax layer */}
      <div className="absolute inset-0">
        {tinyStars.map((star, i) => (
          <span
            key={`t-${i}`}
            className="animate-twinkle absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: colorFor(star.hue),
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 2}px ${colorFor(star.hue)}`,
            }}
          />
        ))}
      </div>

      {/* Mid layer */}
      <div className="absolute inset-0">
        {midStars.map((star, i) => (
          <span
            key={`m-${i}`}
            className="animate-twinkle absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size + 0.6}px`,
              height: `${star.size + 0.6}px`,
              background: colorFor(star.hue),
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${(star.size + 1) * 3}px ${colorFor(star.hue)}`,
            }}
          />
        ))}
      </div>

      {/* Bright foreground stars with cross-glow */}
      <div className="absolute inset-0">
        {bigStars.map((star, i) => (
          <span
            key={`b-${i}`}
            className="animate-twinkle absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size + 1.8}px`,
              height: `${star.size + 1.8}px`,
              background: "white",
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 10px white, 0 0 20px ${colorFor(star.hue)}, 0 0 40px ${colorFor(star.hue)}`,
            }}
          />
        ))}
      </div>

    </div>
  );
}
