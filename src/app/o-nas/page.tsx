import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight, HeartHandshake, Trophy, Globe } from "lucide-react";
import { SITE, LANGUAGES } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Autoškola Jízda Rakovník — kdo jsme, jak pracujeme a proč nám důvěřuje přes 101 absolventů. Individuální přístup, moderní vozidla, výuka i v cizích jazycích.",
};

const VALUES = [
  {
    Icon: HeartHandshake,
    title: "Klidný a lidský přístup",
    body: "Každý se učí jinak. Výcvik přizpůsobujeme tempu žáka bez zbytečného tlaku. Mnoho absolventů nám říká, že to byl nejklidnější kurz, jaký absolvovali.",
  },
  {
    Icon: Trophy,
    title: "Vysoká úspěšnost",
    body: "Naši žáci dosahují u zkoušek výrazně nadprůměrných výsledků. Svědčí o tom i 101 pětihvězdičkových hodnocení na Google — každé ověřitelné.",
  },
  {
    Icon: Globe,
    title: "Výuka v cizích jazycích",
    body: "Jediná autoškola v Rakovníku specializovaná na řidiče-cizince. Arabština, vietnamština, ruština, angličtina a čínština — s certifikovaným tlumočníkem.",
  },
];

export default function ONasPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section
        className="relative bg-white pt-24 pb-20 sm:pb-28 overflow-hidden"
        aria-labelledby="o-nas-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <FadeIn direction="up">
              {/* Rating pill */}
              <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-[#047857] text-[#047857]" />
                  ))}
                </span>
                {SITE.reviewCount}× hodnocení 5,0 na Google
              </div>

              <h1
                id="o-nas-heading"
                className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1] mb-6"
              >
                Jsme{" "}
                <span className="text-[#047857]">Autoškola Jízda</span>
              </h1>
              <p className="text-[1.125rem] text-[#4b5563] leading-relaxed mb-6">
                Rodinná autoškola v srdci Rakovníku. Nejsme velká franšíza — každého žáka
                vnímáme jako jednotlivce a výcvik přizpůsobujeme jeho potřebám a tempu.
              </p>
              <p className="text-[1.0625rem] text-[#4b5563] leading-relaxed mb-8">
                Od svého vzniku jsme vychovali přes sto absolventů — každý z nich nám zanechal
                pětihvězdičkové hodnocení. Sídlíme na Husově náměstí v Rakovníku (3. patro),
                výcvikové jízdy probíhají flexibilně dle vašich možností.
              </p>

              <div className="flex items-center gap-2 text-sm text-[#6b7280] mb-8">
                <MapPin size={14} className="text-[#047857] shrink-0" aria-hidden="true" />
                {SITE.address}, {SITE.city} {SITE.zip}
              </div>

              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#065f46] transition-all hover:gap-3"
              >
                Zapsat se
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </FadeIn>

            {/* Photo */}
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/jizda1.jpg"
                  alt="Výcvikové vozidlo Autoškoly Jízda — Škoda Fabia s označením L"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-lg border border-[#e5e7eb] px-5 py-3">
                  <p className="text-[1.75rem] font-bold text-[#111827] leading-none">
                    {SITE.reviewCount}
                  </p>
                  <p className="text-xs text-[#6b7280] mt-0.5">Google recenzí</p>
                  <div className="mt-1.5 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="fill-[#047857] text-[#047857]" />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f9fafb] py-20 sm:py-24" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Naše hodnoty
            </p>
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827]"
            >
              Proč si vybrat právě nás
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(({ Icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="flex flex-col rounded-xl border border-[#e5e7eb] bg-white p-8 h-full">
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#f0fdf4] mb-5">
                    <Icon size={20} className="text-[#047857]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-3">{title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="langs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Výlučná specialita
            </p>
            <h2
              id="langs-heading"
              className="text-2xl sm:text-3xl font-bold text-[#111827] mb-4"
            >
              Vyučujeme v cizích jazycích
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              Zajistíme certifikovaného tlumočníka pro celý průběh kurzu — od teorie přes
              jízdy až po zkoušky na magistrátu. Stačí nám to říct předem.
            </p>
          </FadeIn>
          <StaggerContainer staggerDelay={0.08} className="flex flex-wrap gap-4">
            {LANGUAGES.map((lang) => (
              <StaggerItem key={lang.code}>
                <div className="flex items-center gap-3 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-5 py-3.5">
                  <span className="text-2xl" aria-hidden="true">{lang.flag}</span>
                  <span className="text-sm font-semibold text-[#065f46]">{lang.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn direction="up" className="mt-8">
            <Link
              href="/exclusive"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#047857] hover:text-[#065f46] transition-colors"
            >
              Kurzy Exclusive a VIP →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Ratings stats */}
      <section className="bg-[#047857] py-16 sm:py-20" aria-label="Statistiky hodnocení">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {[
              { value: `${SITE.reviewCount}×`, label: "hodnocení na Google" },
              { value: `${SITE.googleRating.toFixed(1)} ★`, label: "průměrné skóre" },
              { value: "100 %", label: "pětihvězdičkových" },
            ].map(({ value, label }) => (
              <FadeIn key={label} direction="up">
                <div>
                  <p className="text-4xl font-bold mb-1">{value}</p>
                  <p className="text-[#bbf7d0] text-sm">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">
              Chcete být naším dalším absolventem?
            </h2>
            <p className="text-[#6b7280] mb-8 max-w-lg mx-auto">
              Zavolejte nám nebo napište. Zapíšeme vás do nejbližšího volného termínu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#065f46] transition-colors"
              >
                Kontaktovat nás
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/cenik"
                className="inline-flex items-center justify-center gap-2 border border-[#e5e7eb] text-[#111827] text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#f9fafb] transition-colors"
              >
                Prohlédnout ceník
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
