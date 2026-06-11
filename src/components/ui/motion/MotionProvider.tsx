"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * MotionProvider — wraps the app in LazyMotion with only the `domAnimation`
 * feature set (animations, variants, whileInView, hover/tap/focus gestures).
 *
 * This deliberately excludes Framer Motion's layout-projection and drag systems
 * — the heaviest part of the library — which we don't use. Combined with the
 * lightweight `m` component (instead of `motion`), this trims a large chunk of
 * unused JavaScript from the bundle. `strict` guarantees we never accidentally
 * pull the full `motion` proxy back in.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
