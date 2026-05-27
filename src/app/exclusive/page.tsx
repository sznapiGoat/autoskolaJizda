import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import { LANGUAGES, PRICING_TIERS } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Exclusive — Výuka v cizím jazyce",
  description:
    "Výcvik řidičského průkazu skupiny B v arabštině, vietnamštině, ruštině, angličtině nebo čínštině. Rakovník. Tlumočník zajištěn, prioritní termíny.",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(price);
}

const premiumTiers = PRICING_TIERS.filter((t) => t.id === "exclusive" || t.id === "vip");

const PROCESS = [
  { step: "01", text: "Kontaktujte nás — sdělte preferovaný jazyk a termín" },
  { step: "02", text: "Zajistíme tlumočníka pro výuku i zkoušky" },
  { step: "03", text: "Přizpůsobíme rozvrh prioritním termínům" },
  { step: "04", text: "Doprovázíme vás i na magistrát při zkouškách" },
];

export default function ExclusivePage() {
  return (
    <main id="main-content">
      {/* Page hero */}
      <section
        className="relative bg-white pt-36 pb-20 sm:pb-28 overflow-hidden"
        aria-labelledby="exclusive-heading"
      >
        {/* Teal radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(4,120,87,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
              <Star size={12} className="fill-[#047857] text-[#047857]" aria-hidden="true" />
              Výlučná specialita Autoškoly Jízda
            </div>
            <h1
              id="exclusive-heading"
              className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1] mb-6"
            >
              Výcvik v{" "}
              <span className="text-[#047857]">cizím jazyce</span>
            </h1>
            <p className="text-[1.125rem] text-[#4b5563] leading-relaxed mb-8 max-w-2xl">
              Jediná autoškola v Rakovníku specializovaná na řidiče-cizince. Zajistíme
              certifikovaného tlumočníka pro celý průběh výcviku i při zkouškách na magistrátu.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang.code}
                  className="inline-flex items-center gap-1.5 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-sm font-semibold px-3 py-1.5 rounded-full"
                >
                  <span aria-hidden="true">{lang.flag}</span>
                  {lang.name}
                </span>
              ))}
            </div>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#065f46] transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
            >
              Mám zájem
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f9fafb] py-20 sm:py-24" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-12">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Jak fungujeme
            </p>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827]"
            >
              Vše zařídíme za vás
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROCESS.map(({ step, text }) => (
              <StaggerItem key={step}>
                <div className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6">
                  <span className="shrink-0 text-2xl font-black text-[#047857]">{step}</span>
                  <p className="text-[#374151] text-[0.9375rem] leading-relaxed">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing: Exclusive + VIP */}
      <section className="bg-white py-20 sm:py-28" aria-labelledby="exclusive-pricing-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Ceník
            </p>
            <h2
              id="exclusive-pricing-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827]"
            >
              Exclusive & VIP balíčky
            </h2>
            <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
              Vyberte si úroveň služeb. V ceně jsou zahrnuty veškeré učební materiály,
              překladatelské služby a doprovod při zkouškách.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {premiumTiers.map((tier) => (
              <StaggerItem key={tier.id}>
                <article
                  className={cn(
                    "relative flex flex-col rounded-xl border bg-white p-8 h-full",
                    tier.id === "exclusive"
                      ? "border-[#047857] shadow-md ring-1 ring-[#047857]"
                      : "border-[#e5e7eb] shadow-sm"
                  )}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-6">
                      <span className="text-[11px] font-semibold bg-[#047857] text-white px-2.5 py-0.5 rounded-full">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-1">
                    Skupina B — cizí jazyk
                  </p>
                  <h3 className="text-2xl font-bold text-[#111827] mb-3">{tier.name}</h3>
                  <p className="text-[2.25rem] font-bold text-[#111827] leading-none mb-2">
                    {formatPrice(tier.price)}
                  </p>
                  <p className="text-sm text-[#6b7280] mb-6 leading-relaxed">{tier.description}</p>

                  <ul className="flex flex-col gap-2.5 mb-8" aria-label="Součásti kurzu">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151]">
                        <Check size={15} className="text-[#047857] mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className={cn(
                      "mt-auto block text-center text-sm font-semibold py-3 px-4 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2",
                      tier.id === "exclusive"
                        ? "bg-[#047857] text-white hover:bg-[#065f46]"
                        : "border border-[#e5e7eb] text-[#111827] hover:bg-[#f9fafb]"
                    )}
                  >
                    Mám zájem
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" className="mt-10">
            <p className="text-sm text-[#6b7280]">
              Hledáte standardní kurz skupiny B?{" "}
              <Link href="/kurzy" className="text-[#047857] font-semibold hover:underline">
                Prohlédněte si ceník Basic a Standard
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Language cards grid */}
      <section className="bg-[#f0fdf4] py-16 sm:py-20" aria-labelledby="langs-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-10">
            <h2
              id="langs-heading"
              className="text-2xl font-bold text-[#111827]"
            >
              Jazyky, ve kterých vyučujeme
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.08} className="flex flex-wrap justify-center gap-4">
            {LANGUAGES.map((lang) => (
              <StaggerItem key={lang.code}>
                <div className="flex flex-col items-center gap-2 bg-white rounded-xl border border-[#bbf7d0] px-8 py-6 shadow-sm min-w-[120px]">
                  <span className="text-4xl" aria-hidden="true">{lang.flag}</span>
                  <span className="text-sm font-semibold text-[#111827]">{lang.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
