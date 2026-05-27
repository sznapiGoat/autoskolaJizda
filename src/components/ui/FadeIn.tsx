"use client";

import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from "react";
import type { ReactNode, ReactElement, CSSProperties } from "react";

const TRANSLATE: Record<string, string> = {
  up:    "translateY(22px)",
  down:  "translateY(-22px)",
  left:  "translateX(22px)",
  right: "translateX(-22px)",
  none:  "none",
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.55,
  _staggerIndex,
  _staggerDelay,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  _staggerIndex?: number;
  _staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const effectiveDelay =
    _staggerIndex !== undefined && _staggerDelay !== undefined
      ? _staggerIndex * _staggerDelay
      : delay;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : (TRANSLATE[direction] ?? TRANSLATE.up),
    transition: `opacity ${duration}s ease ${effectiveDelay}s, transform ${duration}s ease ${effectiveDelay}s`,
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) =>
        isValidElement(child)
          ? cloneElement(
              child as ReactElement<{ _staggerIndex?: number; _staggerDelay?: number }>,
              { _staggerIndex: i, _staggerDelay: staggerDelay }
            )
          : child
      )}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  _staggerIndex,
  _staggerDelay,
}: {
  children: ReactNode;
  className?: string;
  _staggerIndex?: number;
  _staggerDelay?: number;
}) {
  return (
    <FadeIn
      className={className}
      _staggerIndex={_staggerIndex}
      _staggerDelay={_staggerDelay}
    >
      {children}
    </FadeIn>
  );
}
