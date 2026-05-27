import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Clock, FileText, Car, GraduationCap } from "lucide-react";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PricingSection from "@/components/sections/PricingSection";
import FeesSection from "@/components/sections/FeesSection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Výcvik skupiny B",
  description:
    "Kurz řidičského průkazu skupiny B v Rakovníku. Klidný instruktor, klimatizovaná vozidla, vysoká úspěšnost. Basic od 17 000 Kč, Standard od 21 000 Kč.",
};

const TIMELINE = [
  {
    icon: FileText,
    step: "01",
    title: "Zápis",
    desc: "Podpíšeme smlouvu, zaplatíte zálohu 3 000 Kč a obdržíte veškeré učební materiály zdarma (hodnota cca 500 Kč).",
  },
  {
    icon: GraduationCap,
    step: "02",
    title: "Teorie",
    desc: "Přednášky v učebně — zákonné předpisy, dopravní značky, pravidla silničního provozu. Přesný rozvrh sdělíme při zápisu.",
  },
  {
    icon: Car,
    step: "03",
    title: "Praktický výcvik",
    desc: "Jízdy s instruktorem na moderním klimatizovaném vozidle. Termíny flexibilně dle vašich možností — ráno, odpoledne i večer.",
  },
  {
    icon: Check,
    step: "04",
    title: "Zkouška",
    desc: "Teoretická zkouška + praktická jízda na magistrátu. Instruktor vás doprovází a připraví na každou situaci.",
  },
];

export default function VycvikBPage() {
  return (
    <main id="main-content">
      {/* Page hero */}
      <section className="bg-white pt-36 pb-20 sm:pb-28" aria-labelledby="vycvik-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Skupina B
            </p>
            <h1
              id="vycvik-heading"
              className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1] mb-6"
            >
              Řidičský průkaz s&nbsp;klidnou hlavou
            </h1>
            <p className="text-[1.125rem] text-[#4b5563] leading-relaxed mb-8 max-w-2xl">
              Individuální přístup, žádný stres. Naši instruktoři mají dlouholetou praxi a
              výcvik přizpůsobují vašemu tempu — ať jste naprostý začátečník nebo se vracíte
              po přestávce.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#065f46] transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
              >
                Zapsat se nyní
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/exclusive"
                className="inline-flex items-center justify-center gap-2 border border-[#e5e7eb] bg-white text-[#111827] text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-colors"
              >
                Výuka v cizím jazyce →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-[#f9fafb] py-20 sm:py-28" aria-labelledby="timeline-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Jak to probíhá
            </p>
            <h2
              id="timeline-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827]"
            >
              Čtyři kroky k řidičskému průkazu
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map(({ icon: Icon, step, title, desc }) => (
              <StaggerItem key={step}>
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#047857]">
                      <Icon size={18} className="text-white" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-[#047857] uppercase tracking-widest">
                      Krok {step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why us */}
      <WhyUsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Fees & cancellation */}
      <FeesSection />

      {/* Bottom CTA */}
      <section className="bg-[#047857] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-white mb-4">Připraveni začít?</h2>
            <p className="text-[#bbf7d0] text-[1.0625rem] mb-8 max-w-xl mx-auto">
              Zavolejte nám nebo napište — zapíšeme vás do nejbližšího volného termínu.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-[#047857] text-[1rem] font-bold px-8 py-3.5 rounded-md hover:bg-[#f0fdf4] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#047857]"
            >
              Kontaktovat autoškolu
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
