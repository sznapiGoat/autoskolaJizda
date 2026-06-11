"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import type { MouseEvent, ReactNode } from "react";

/**
 * Magnetic — a restrained magnetic pull toward the cursor. The element drifts
 * a few pixels and settles with a high-damping spring, so it feels weighted and
 * intentional rather than springy/arcade. Best on a single hero CTA.
 */

export function Magnetic({
  children,
  className,
  /** max travel in px */
  strength = 6,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 20, mass: 0.4 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX * strength * 2);
    y.set(relY * strength * 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
