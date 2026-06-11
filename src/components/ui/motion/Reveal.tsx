"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Reveal / RevealGroup / RevealChild — scroll-triggered entrances built on
 * Framer Motion springs. Higher damping + modest stiffness gives an organic,
 * "expensive" settle with no visible bounce. Honours prefers-reduced-motion.
 */

const SPRING = { type: "spring" as const, stiffness: 130, damping: 22, mass: 0.7 };

const OFFSET: Record<string, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

type Dir = keyof typeof OFFSET;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Dir;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const offset = reduce ? {} : OFFSET[direction];

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ ...SPRING, delay }}
    >
      {children}
    </m.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  visible: (stagger: number = 0.08) => ({
    transition: { staggerChildren: stagger },
  }),
};

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <m.div
      className={className}
      variants={groupVariants}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </m.div>
  );
}

const childVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: SPRING,
  },
};

export function RevealChild({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <m.div className={cn(className)} variants={childVariants}>
      {children}
    </m.div>
  );
}
