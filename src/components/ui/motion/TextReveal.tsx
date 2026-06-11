"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

/**
 * TextReveal — premium per-word entrance for headings & value propositions.
 * Each word rises from a soft blur into focus on scroll. Inspired by cult-ui's
 * text primitives, tuned for a calm Apple/Vercel cadence (no bounce, no slop).
 */

const EASE = [0.16, 1, 0.3, 1] as const; // expressive-out: fast settle, organic tail

type TextRevealProps = {
  children: string;
  as?: ElementType;
  className?: string;
  id?: string;
  /** delay before the first word begins (s) */
  delay?: number;
  /** gap between consecutive words (s) */
  stagger?: number;
  /** start animating only once, when scrolled into view */
  once?: boolean;
};

export function TextReveal({
  children,
  as: Tag = "span",
  className,
  id,
  delay = 0,
  stagger = 0.045,
  once = true,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = children.split(" ");

  const MotionTag = useMemo(() => m.create(Tag), [Tag]);

  if (reduce) {
    return <Tag className={className} id={id}>{children}</Tag>;
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { y: "0.5em", opacity: 0, filter: "blur(8px)" },
    visible: {
      y: "0em",
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <MotionTag
      id={id}
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ padding: "0.14em 0", margin: "-0.14em 0" }}
        >
          <m.span variants={word} className="inline-block">
            {w}
          </m.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </MotionTag>
  );
}

/**
 * RevealLines — same physics, but reveals discrete blocks (e.g. styled spans
 * on separate lines) rather than splitting a single string into words. Use when
 * a heading mixes colored emphasis or manual line breaks.
 */
export function RevealLines({
  children,
  className,
  delay = 0,
  stagger = 0.09,
  once = true,
}: {
  children: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <m.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children.map((line, i) => (
        <span key={i} className="block overflow-hidden" style={{ padding: "0.14em 0", margin: "-0.14em 0" }}>
          <m.span
            className="block"
            variants={{
              hidden: { y: "0.6em", opacity: 0, filter: "blur(8px)" },
              visible: {
                y: "0em",
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: EASE },
              },
            }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </m.span>
  );
}
