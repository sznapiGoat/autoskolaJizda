"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode, MouseEvent } from "react";

/**
 * SpotlightCard — a subtle cursor-following radial glow + border highlight,
 * inspired by skiper-ui's interactive card surfaces. The teal accent is used
 * sparingly and at low opacity so it reads as premium lighting, not a gimmick.
 *
 * Renders a plain div (no motion overhead) for reduced-motion users.
 */

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  /** glow tint, defaults to the brand teal */
  color?: string;
  /** radius of the spotlight in px */
  radius?: number;
  /** lift the card slightly on hover */
  lift?: boolean;
};

export function SpotlightCard({
  children,
  className,
  color = "4, 120, 87", // emerald-700 as "r, g, b"
  radius = 360,
  lift = true,
}: SpotlightCardProps) {
  const reduce = useReducedMotion();

  const mouseX = useMotionValue(-radius);
  const mouseY = useMotionValue(-radius);
  // ease the spotlight so it trails the cursor with a soft, weighty feel
  const x = useSpring(mouseX, { stiffness: 180, damping: 28, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 180, damping: 28, mass: 0.5 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleLeave() {
    // park the glow off-card so it fades out gracefully
    mouseX.set(-radius);
    mouseY.set(-radius);
  }

  const glow = useMotionTemplate`radial-gradient(${radius}px circle at ${x}px ${y}px, rgba(${color}, 0.07), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(${radius * 0.9}px circle at ${x}px ${y}px, rgba(${color}, 0.45), transparent 65%)`;

  if (reduce) {
    return (
      <div className={cn("group relative", className)}>{children}</div>
    );
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={lift ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 250, damping: 26 }}
      className={cn("group relative", className)}
    >
      {children}
      {/* interior glow — faint teal sheen following the cursor */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      {/* border highlight — sits on the very edge, masked to a 1px ring */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: border,
          padding: 1,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
}
