"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Star, MapPin, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/data";
import { RevealLines } from "@/components/ui/motion/TextReveal";
import { Magnetic } from "@/components/ui/motion/Magnetic";

export default function HeroSection() {
  return (
    <section
      className="relative bg-white pt-24 pb-12 lg:pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Diagonal teal panel — desktop only, right side */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background: "#f0fdf4",
          clipPath: "polygon(54% 0%, 100% 0%, 100% 100%, 42% 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* LEFT — text (single calm entrance) */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 pb-8 lg:py-0"
          >
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#e5e7eb] shadow-sm text-[#111827] text-sm font-semibold px-3 py-1.5 rounded-full mb-8">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" />
                ))}
              </span>
              101× hodnocení 5,0 na Google
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-[3.25rem] sm:text-[4.5rem] lg:text-[5.25rem] font-extrabold text-[#111827] tracking-[-0.03em] leading-[0.92] mb-7"
            >
              <RevealLines delay={0.12} stagger={0.1}>
                {[
                  "Řidičský průkaz",
                  <>
                    <span className="text-[#047857]">s jistotou</span> v Rakovníku.
                  </>,
                ]}
              </RevealLines>
            </h1>

            {/* Sub-headline */}
            <p className="text-[1.0625rem] text-[#4b5563] leading-relaxed mb-8 max-w-md">
              Individuální přístup, moderní klimatizovaná vozidla a výuka i v cizích jazycích.
              Více než sto absolventů, každý s pětihvězdičkovým hodnocením.
            </p>

            {/* CTAs — clear primary vs secondary */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Magnetic strength={7}>
                <a
                  href="/kontakt"
                  className="group inline-flex w-full items-center justify-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-lg shadow-sm hover:bg-[#065f46] hover:shadow-md hover:shadow-[#047857]/20 transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
                >
                  Chci začít jezdit
                  <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 border border-[#d1d5db] bg-white text-[#111827] text-[1rem] font-semibold px-7 py-3.5 rounded-lg hover:bg-[#f9fafb] hover:border-[#9ca3af] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
              >
                <Phone size={16} aria-hidden="true" />
                {SITE.phone}
              </a>
            </div>

            {/* Location */}
            <p className="flex items-center gap-1.5 text-sm text-[#6b7280]">
              <MapPin size={14} className="text-[#047857] shrink-0" aria-hidden="true" />
              {SITE.address}, {SITE.city} {SITE.zip}
            </p>
          </m.div>

          {/* RIGHT — photo (natural aspect ratio, no crop) */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
            className="relative flex items-end justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px]">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/jizda2.png"
                  alt="Instruktor Autoškoly Jízda s žákem před autoškolou"
                  width={1344}
                  height={768}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
                />
              </div>

              {/* Floating rating badge */}
              <m.div
                initial={{ opacity: 0, y: 12, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.55, type: "spring", stiffness: 220, damping: 20, mass: 0.6 }}
                className="absolute -bottom-4 left-4 sm:-left-4 bg-white rounded-xl shadow-lg border border-[#e5e7eb] px-4 py-3 flex items-center gap-3"
              >
                <p className="text-2xl font-extrabold text-[#111827] leading-none">5,0</p>
                <div>
                  <span className="flex" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-gold text-gold" />
                    ))}
                  </span>
                  <p className="text-xs text-[#6b7280] mt-0.5">101 recenzí</p>
                </div>
              </m.div>
            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
