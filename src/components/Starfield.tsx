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
      size: 0.6 + rand() * 2.4,
      duration: 1.6 + rand() * 4.5,
      delay: rand() * 6,
      opacity: 0.35 + rand() * 0.65,
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
  const tinyStars = useMemo(() => makeStars(180, 12345), []);
  const midStars = useMemo(() => makeStars(70, 67890), []);
  const bigStars = useMemo(() => makeStars(18, 24680), []);
  const shooting = useMemo(() => makeShootingStars(5, 13579), []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
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
      <div className="animate-star-drift-fast absolute inset-0">
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

      {/* Shooting stars */}
      {shooting.map((s, i) => (
        <span
          key={`sh-${i}`}
          className="animate-shooting absolute block"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.length}px`,
            height: "1.5px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 60%, white 100%)",
            transform: `rotate(${s.angle}deg)`,
            transformOrigin: "left center",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            filter: "drop-shadow(0 0 6px white)",
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
