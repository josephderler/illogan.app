import type { CSSProperties } from "react";
import { cn } from "@/lib/hooks";

// Glossy number bubbles in the style of the in-game answer buttons.

export type BallColor = "sun" | "coral" | "leaf" | "berry" | "sky" | "grape" | "mint" | "blue";

const COLORS: Record<BallColor, [string, string]> = {
  sun: ["#ffd84d", "#f5a300"],
  coral: ["#ff8a6b", "#e8462b"],
  leaf: ["#3fd36a", "#0f9a3e"],
  berry: ["#ff6fa8", "#e0306f"],
  sky: ["#5cc8ff", "#1c8fe0"],
  grape: ["#b48cf2", "#7c4fd6"],
  mint: ["#6ee3d1", "#1fae9a"],
  blue: ["#7db9ff", "#2b72d9"],
};

export function NumberBall({
  n,
  color,
  className,
  style,
}: {
  n: number | string;
  color: BallColor;
  className?: string;
  style?: CSSProperties;
}) {
  const [from, to] = COLORS[color];
  // Callers often float the ball with "absolute ..."; only fall back to
  // "relative" (needed for the highlight) when no position is given, since
  // two position utilities on one element would fight each other.
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className ?? "");
  return (
    <span
      aria-hidden="true"
      style={{
        background: `radial-gradient(circle at 32% 28%, ${from} 0%, ${to} 78%)`,
        ...style,
      }}
      className={cn(
        "aspect-square place-items-center rounded-full font-display font-semibold leading-none text-white ring-[5px] ring-white shadow-[0_10px_22px_-10px_rgb(19_64_126/0.55)]",
        !positioned && "relative",
        !/(^|\s)(hidden|inline-grid|grid)(\s|$)/.test(className ?? "") && "inline-grid",
        className
      )}
    >
      <span className="pointer-events-none absolute left-[22%] top-[14%] h-[18%] w-[30%] -rotate-[25deg] rounded-full bg-white/55" />
      <span className="relative drop-shadow-[0_2px_0_rgb(0_0_0/0.12)]">{n}</span>
    </span>
  );
}
