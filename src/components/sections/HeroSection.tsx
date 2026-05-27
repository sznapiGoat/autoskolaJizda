"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/data";

const WORD_VARIANTS = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const words1 = ["Řidičský", "průkaz"];
const words2 = ["s jistotou", "—", "v Rakovníku."];

export default function HeroSection() {
  return (
    <section
      className="relative bg-white pt-24 pb-0 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.3,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end">

          {/* LEFT — text */}
          <div className="pt-8 pb-16 lg:pb-20">

            {/* Rating pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "backOut" }}
              className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-sm font-semibold px-3 py-1.5 rounded-full mb-8"
            >
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-[#047857] text-[#047857]" />
                ))}
              </span>
              101× hodnocení 5,0 na Google
            </motion.div>

            {/* Animated headline */}
            <h1
              id="hero-heading"
              className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-bold text-[#111827] tracking-tight leading-[1.1] mb-6"
            >
              <span className="block overflow-hidden">
                {words1.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i}
                    variants={WORD_VARIANTS}
                    initial="hidden"
                    animate="visible"
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {words2.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i + words1.length}
                    variants={WORD_VARIANTS}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block mr-[0.2em] ${word === "s jistotou" ? "text-[#047857]" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="text-[1.125rem] sm:text-[1.1875rem] text-[#4b5563] leading-relaxed mb-8 max-w-lg"
            >
              Individuální přístup, moderní klimatizovaná vozidla a výuka i v cizích jazycích.
              Více než sto absolventů — každý s pětihvězdičkovým hodnocením.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#065f46] transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
              >
                Chci začít jezdit
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 border border-[#e5e7eb] bg-white text-[#111827] text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
              >
                <Phone size={16} aria-hidden="true" />
                {SITE.phone}
              </a>
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex items-center gap-1.5 text-sm text-[#6b7280]"
            >
              <MapPin size={14} className="text-[#047857] shrink-0" aria-hidden="true" />
              {SITE.address}, {SITE.city} {SITE.zip}
            </motion.p>
          </div>

          {/* RIGHT — car image */}
          <div className="relative flex items-end justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-[560px]"
            >
              {/* Image */}
              <div className="relative rounded-t-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/jizda1.jpg"
                  alt="Výcvikové vozidlo Autoškoly Jízda — Škoda Fabia s označením L"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                {/* Dark overlay gradient at bottom */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
                />
              </div>



            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
