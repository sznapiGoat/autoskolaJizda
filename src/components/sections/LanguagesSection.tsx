"use client";

import { m } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import { LANGUAGES } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export default function LanguagesSection() {
  return (
    <section
      id="jazyky"
      className="relative overflow-hidden bg-[#f0fdf4] py-20 sm:py-28 border-y border-[#bbf7d0]"
      aria-labelledby="languages-heading"
    >
      {/* Subtle teal radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(4,120,87,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <FadeIn direction="left">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#047857] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
                <Globe size={12} aria-hidden="true" />
                Výlučná specialita
              </div>

              <h2
                id="languages-heading"
                className="text-3xl sm:text-4xl font-bold text-[#111827] mb-5"
              >
                Výuka v cizím jazyce:{" "}
                <span className="text-[#047857]">kurz Exclusive</span>
              </h2>

              <p className="text-[1.0625rem] text-[#4b5563] leading-relaxed mb-6">
                Specializujeme se na řidiče-cizince. Zajišťujeme překladatele přímo
                pro vaše jízdy i teoretickou výuku. Vše zvládnete i bez češtiny.
              </p>

              <ul className="space-y-2 mb-8" aria-label="Dostupné jazyky výuky">
                {LANGUAGES.map((lang) => (
                  <li
                    key={lang.code}
                    className="flex items-center gap-3 text-[1rem] text-[#111827] font-medium"
                  >
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {lang.flag}
                    </span>
                    <span>{lang.name}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-[#6b7280] mb-8">
                Spolupracujeme s ověřenými překladateli. Stačí nám jazyk sdělit
                při zápisu, vše ostatní zařídíme.
              </p>

              <a
                href="#cenik"
                className="group inline-flex items-center gap-2 bg-[#047857] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#065f46] transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
              >
                Zobrazit kurz Exclusive
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </FadeIn>

          {/* Right — animated language cards */}
          <FadeIn direction="right" delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {LANGUAGES.map((lang, i) => (
                <m.div
                  key={lang.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.45, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#bbf7d0] bg-white p-6 shadow-sm hover:shadow-md hover:border-[#047857]/50 transition-all"
                  aria-label={lang.name}
                >
                  <span className="text-4xl leading-none" aria-hidden="true">
                    {lang.flag}
                  </span>
                  <span className="text-sm font-semibold text-[#111827] text-center">
                    {lang.name}
                  </span>
                </m.div>
              ))}
              {/* + more card */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: LANGUAGES.length * 0.1 + 0.2, duration: 0.45, ease: "easeOut" }}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#047857]/40 bg-[#f0fdf4] p-6"
              >
                <span className="text-2xl font-bold text-[#047857]" aria-hidden="true">+</span>
                <span className="text-sm font-medium text-[#047857] text-center">
                  Další jazyky dle dohody
                </span>
              </m.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
