"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS, SITE } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

function StarRow({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} z 5 hvězd`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-[#047857] text-[#047857]" aria-hidden="true" />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] flex flex-col gap-3.5 rounded-xl border border-[#e5e7eb] bg-white px-6 py-5 shadow-sm mx-3">
      <div className="flex items-center justify-between">
        <StarRow count={review.rating} />
        <time dateTime={review.date} className="text-xs text-[#6b7280]">
          {new Date(review.date + "-01").toLocaleDateString("cs-CZ", {
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
      <blockquote className="text-sm text-[#374151] leading-relaxed line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-2.5 pt-2 border-t border-[#f3f4f6]">
        <div
          className="w-7 h-7 rounded-full bg-[#047857] flex items-center justify-center text-white text-[10px] font-bold shrink-0"
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <p className="text-sm font-semibold text-[#111827]">{review.name}</p>
      </div>
    </div>
  );
}

const DOUBLED = [...TESTIMONIALS, ...TESTIMONIALS];

export default function TestimonialsSection() {
  return (
    <section
      id="recenze"
      className="bg-white py-20 sm:py-28 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Google recenze
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            {SITE.reviewCount} recenzí. Průměr {SITE.googleRating.toFixed(1)}&thinsp;★.
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Každé hodnocení si lze ověřit přímo na Google. Nechlubíme se čísly — necháváme mluvit
            naše absolventy.
          </p>
        </FadeIn>

        {/* Aggregate badge */}
        <FadeIn direction="up" delay={0.1} className="mb-12">
          <div
            className="inline-flex items-center gap-5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-6 py-4"
            aria-label={`Celkové hodnocení: ${SITE.googleRating} z 5, ${SITE.reviewCount} recenzí`}
          >
            <div>
              <p className="text-[2rem] font-bold text-[#111827] leading-none">
                {SITE.googleRating.toFixed(1)}
              </p>
              <StarRow count={5} />
            </div>
            <div className="h-10 w-px bg-[#bbf7d0]" aria-hidden="true" />
            <div>
              <p className="text-xl font-bold text-[#111827] leading-none">{SITE.reviewCount}</p>
              <p className="text-sm text-[#6b7280] mt-0.5">recenzí na Google</p>
            </div>
            <div className="h-10 w-px bg-[#bbf7d0]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#047857]">100 %</p>
              <p className="text-sm text-[#6b7280]">pětihvězdičkových</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Marquee — edge-to-edge */}
      <div className="relative" aria-label="Přehled recenzí">
        {/* Left fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent"
        />
        {/* Right fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent"
        />

        {/* Row 1 — left */}
        <motion.div
          className="flex py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          {DOUBLED.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </motion.div>

        {/* Row 2 — right */}
        <motion.div
          className="flex py-2 mt-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        >
          {DOUBLED.map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mt-10 text-sm text-[#6b7280] text-center">
          Ověřte si všech {SITE.reviewCount} recenzí na{" "}
          <a
            href="https://www.google.com/maps/search/Autoškola+Jízda+Rakovník"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#047857] underline underline-offset-2 hover:text-[#065f46]"
          >
            Google Maps
          </a>
          .
        </p>
      </div>
    </section>
  );
}
