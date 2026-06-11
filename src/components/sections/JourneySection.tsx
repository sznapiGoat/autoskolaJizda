"use client";

import { useRef } from "react";
import {
  m,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ClipboardCheck, BookOpen, Car, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/motion/Reveal";
import { TextReveal } from "@/components/ui/motion/TextReveal";

/**
 * JourneySection — a tasteful adaptation of the scroll-linked stroke effect.
 * A single teal line draws itself down the page as you scroll through the four
 * real steps to a licence, with each node lighting up as the draw reaches it.
 *
 * Restraint over spectacle: minimalist white surface, the brand teal used as the
 * one accent (exactly where a drawn line earns it), natural height (no 350vh),
 * and full prefers-reduced-motion support.
 */

const STEPS = [
  {
    Icon: ClipboardCheck,
    label: "Zápis",
    body: "Ozvěte se a vyberte termín. Žádné fronty ani čekání — začínáme podle vás.",
  },
  {
    Icon: BookOpen,
    label: "Teorie",
    body: "Moderní výuka pravidel a příprava na testy. V češtině i v cizím jazyce.",
  },
  {
    Icon: Car,
    label: "Jízdy",
    body: "Klidný instruktor, klimatizovaná vozidla a tempo přizpůsobené přesně vám.",
  },
  {
    Icon: BadgeCheck,
    label: "Zkouška",
    body: "Připravíme vás s jistotou. Vysoká úspěšnost u zkoušek napoprvé.",
  },
];

export default function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // progress runs 0 → 1 while the steps block travels through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 75%"],
  });

  // the drawn line fills downward; the tip trails the scroll position
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const tipTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const tipOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.96, 1],
    [0, 1, 1, 0]
  );

  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#047857]">
            Jak to probíhá
          </p>
          <TextReveal
            as="h2"
            id="journey-heading"
            stagger={0.05}
            className="text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl"
          >
            Vaše cesta k řidičáku
          </TextReveal>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-[#6b7280]">
            Čtyři klidné kroky od prvního telefonu po samostatné jízdy. Bez stresu,
            vlastním tempem.
          </p>
        </Reveal>

        {/* Steps with the scroll-drawn connector */}
        <div ref={ref} className="relative">
          {/* Rail — sits on the left (mobile) / centre (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-2 left-[27px] w-px md:left-1/2 md:-translate-x-1/2"
          >
            {/* static track */}
            <div className="absolute inset-0 bg-[#e5e7eb]" />
            {/* teal fill that "draws" with scroll */}
            <m.div
              className="absolute inset-x-0 top-0 h-full origin-top bg-[#047857]"
              style={{ scaleY: reduce ? 1 : fillScale }}
            />
            {/* soft draw-tip that trails the scroll */}
            {!reduce && (
              <m.div
                className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#047857]"
                style={{
                  top: tipTop,
                  opacity: tipOpacity,
                  boxShadow: "0 0 16px 4px rgba(4,120,87,0.45)",
                }}
              />
            )}
          </div>

          <ol className="space-y-12 sm:space-y-16">
            {STEPS.map((step, i) => (
              <Step
                key={step.label}
                index={i}
                total={STEPS.length}
                scrollYProgress={scrollYProgress}
                reduce={!!reduce}
                {...step}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({
  index,
  total,
  scrollYProgress,
  reduce,
  Icon,
  label,
  body,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  reduce: boolean;
  Icon: React.ElementType;
  label: string;
  body: string;
}) {
  // the point in the scroll where the drawn line reaches this node
  const threshold = (index + 0.5) / total;

  const nodeBg = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold],
    ["#ffffff", "#047857"]
  );
  const nodeColor = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold],
    ["#9ca3af", "#ffffff"]
  );
  const nodeBorder = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold],
    ["#e5e7eb", "#047857"]
  );

  const alignRight = index % 2 === 1;

  return (
    <li className="relative pl-16 md:grid md:grid-cols-2 md:items-center md:gap-x-16 md:pl-0">
      {/* Node on the rail */}
      <m.span
        aria-hidden="true"
        className="absolute left-[13px] top-0 flex h-7 w-7 items-center justify-center rounded-full border text-[13px] font-bold md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
        style={
          reduce
            ? { background: "#047857", color: "#ffffff", borderColor: "#047857" }
            : { background: nodeBg, color: nodeColor, borderColor: nodeBorder }
        }
      >
        {index + 1}
      </m.span>

      {/* Card — alternates sides on desktop */}
      <Reveal
        direction={alignRight ? "left" : "right"}
        className={
          alignRight
            ? "md:col-start-2"
            : "md:col-start-1 md:row-start-1 md:text-right"
        }
      >
        <div
          className={`group inline-flex max-w-md flex-col gap-3 ${
            alignRight ? "" : "md:ml-auto md:items-end"
          }`}
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0fdf4] transition-colors group-hover:bg-[#dcfce7]"
            aria-hidden="true"
          >
            <Icon size={22} className="text-[#047857]" />
          </span>
          <h3 className="text-xl font-bold text-[#111827]">{label}</h3>
          <p className="text-[0.9375rem] leading-relaxed text-[#6b7280]">{body}</p>
        </div>
      </Reveal>
    </li>
  );
}
