import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PRICING_TIERS, MUNICIPALITY_FEES, CANCELLATION_POLICY, CONDITIONAL_FEES, KONDICE_FEES } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ceník kurzů",
  description:
    "Transparentní ceník kurzů autoškoly Jízda v Rakovníku. Kurz skupiny B od 17 000 Kč, Exclusive s výukou v cizím jazyce od 40 000 Kč. Správní poplatky a podmínky storna.",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(price);
}

const GROUP_B = PRICING_TIERS.filter((t) => t.id === "basic" || t.id === "standard");
const FOREIGN_LANG = PRICING_TIERS.filter((t) => t.id === "exclusive" || t.id === "vip");

function PricingCard({
  tier,
  detailHref,
}: {
  tier: (typeof PRICING_TIERS)[0];
  detailHref: string;
}) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-xl border bg-white p-8 h-full",
        tier.highlighted
          ? "border-[#047857] shadow-md ring-1 ring-[#047857]"
          : "border-[#e5e7eb] shadow-sm"
      )}
      aria-label={`Kurz ${tier.name}, ${formatPrice(tier.price)}`}
    >
      {tier.badge && (
        <div className="absolute -top-3 left-6">
          <span
            className={cn(
              "text-[11px] font-semibold px-2.5 py-0.5 rounded-full",
              tier.highlighted
                ? "bg-[#047857] text-white"
                : "bg-[#f0fdf4] text-[#047857] border border-[#bbf7d0]"
            )}
          >
            {tier.badge}
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-[#111827] mb-1">{tier.name}</h3>
      <p className="text-[2.25rem] font-bold text-[#111827] leading-none mb-2">
        {formatPrice(tier.price)}
      </p>
      <p className="text-sm text-[#6b7280] mb-6 leading-relaxed">{tier.description}</p>
      <ul className="flex flex-col gap-2 mb-8" aria-label="Součásti kurzu">
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
          "block text-center text-sm font-semibold py-3 px-4 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2",
          tier.highlighted
            ? "bg-[#047857] text-white hover:bg-[#065f46]"
            : "border border-[#e5e7eb] text-[#111827] hover:bg-[#f9fafb]"
        )}
      >
        Mám zájem
      </Link>
      <Link
        href={detailHref}
        className="mt-3 text-center text-xs text-[#6b7280] hover:text-[#047857] transition-colors"
      >
        Zjistit více →
      </Link>
    </article>
  );
}

export default function CenikPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="bg-white pt-36 pb-16 sm:pb-20" aria-labelledby="cenik-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Ceník
            </p>
            <h1
              id="cenik-heading"
              className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1] mb-5"
            >
              Transparentní ceny bez překvapení
            </h1>
            <p className="text-[1.125rem] text-[#4b5563] leading-relaxed">
              Veškeré učební materiály (hodnota cca 500 Kč) jsou součástí každého kurzu.
              Správní poplatky se hradí přímo na magistrátu — přehled níže.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Výcvik skupiny B */}
      <section className="bg-[#f9fafb] py-16 sm:py-20" aria-labelledby="b-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs font-semibold text-[#047857] uppercase tracking-widest mb-1">
                  Skupina B
                </p>
                <h2
                  id="b-heading"
                  className="text-2xl sm:text-3xl font-bold text-[#111827]"
                >
                  Výcvik skupiny B
                </h2>
              </div>
              <Link
                href="/vycvik-b"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#047857] hover:text-[#065f46] transition-colors"
              >
                Detail kurzu
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {GROUP_B.map((tier) => (
              <StaggerItem key={tier.id}>
                <PricingCard tier={tier} detailHref="/vycvik-b" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Exclusive & VIP */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="exclusive-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs font-semibold text-[#047857] uppercase tracking-widest mb-1">
                  Výuka v cizím jazyce
                </p>
                <h2
                  id="exclusive-heading"
                  className="text-2xl sm:text-3xl font-bold text-[#111827]"
                >
                  Exclusive &amp; VIP
                </h2>
              </div>
              <Link
                href="/exclusive"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#047857] hover:text-[#065f46] transition-colors"
              >
                Detail kurzu
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FOREIGN_LANG.map((tier) => (
              <StaggerItem key={tier.id}>
                <PricingCard tier={tier} detailHref="/exclusive" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Conditional fees + kondiční jízdy */}
      <section className="bg-[#f9fafb] py-16 sm:py-20" aria-labelledby="dalsi-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-10">
            <h2 id="dalsi-heading" className="text-2xl font-bold text-[#111827] mb-2">
              Další služby
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn direction="left">
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-7">
                <h3 className="text-base font-semibold text-[#111827] mb-5">Vrácení ŘP</h3>
                <ul className="flex flex-col gap-4">
                  {CONDITIONAL_FEES.map((fee) => (
                    <li key={fee.item} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-[#111827]">{fee.item}</p>
                        {fee.note && (
                          <p className="text-xs text-[#6b7280] mt-0.5">{fee.note}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-[#047857]">
                        {fee.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-7">
                <h3 className="text-base font-semibold text-[#111827] mb-5">Kondiční jízdy</h3>
                <ul className="flex flex-col gap-3">
                  {KONDICE_FEES.map((k) => (
                    <li
                      key={k.duration}
                      className="flex items-center justify-between border-b border-[#e5e7eb] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-[#374151]">{k.duration}</span>
                      <span className="text-sm font-semibold text-[#047857]">{k.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Administrative fees + cancellation */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="poplatky-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-10">
            <h2 id="poplatky-heading" className="text-2xl font-bold text-[#111827] mb-2">
              Správní poplatky &amp; podmínky
            </h2>
            <p className="text-sm text-[#6b7280]">
              Správní poplatky jsou hrazeny přímo na příslušném magistrátu — nejsou součástí
              ceny kurzu.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="rounded-xl border border-[#e5e7eb] overflow-hidden">
                <table className="w-full text-sm" aria-label="Přehled správních poplatků">
                  <thead>
                    <tr className="bg-[#f3f4f6]">
                      <th scope="col" className="px-5 py-3 text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Položka</th>
                      <th scope="col" className="px-5 py-3 text-right text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Poplatek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7eb] bg-white">
                    {MUNICIPALITY_FEES.map((fee) => (
                      <tr key={fee.item} className="hover:bg-[#f9fafb]">
                        <td className="px-5 py-4 text-[#374151]">{fee.item}</td>
                        <td className="px-5 py-4 text-right font-semibold text-[#111827]">{fee.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="px-5 py-3 text-xs text-[#6b7280] bg-[#f9fafb]">
                  * Poplatky se mohou měnit. Aktuální sazby ověřte na magistrátu.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <h3 className="text-base font-semibold text-[#111827] mb-4">
                  Podmínky zrušení jízdy
                </h3>
                <ul className="flex flex-col gap-3">
                  {CANCELLATION_POLICY.map((rule) => {
                    const isGreen = rule.color === "green";
                    return (
                      <li
                        key={rule.condition}
                        className="flex items-start gap-3 rounded-lg border border-[#e5e7eb] bg-white px-5 py-4"
                      >
                        {isGreen ? (
                          <CheckCircle2 size={17} className="text-[#047857] mt-0.5 shrink-0" aria-hidden="true" />
                        ) : (
                          <AlertCircle size={17} className="text-[#dc2626] mt-0.5 shrink-0" aria-hidden="true" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-[#111827]">{rule.condition}</p>
                          <p className={`text-sm mt-0.5 font-semibold ${isGreen ? "text-[#047857]" : "text-[#dc2626]"}`}>
                            {rule.consequence}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#047857] py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-white mb-3">Připraveni začít?</h2>
            <p className="text-[#bbf7d0] mb-7">
              Zapište se dnes — volejte kdykoliv, odpovídáme rychle.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-[#047857] text-[1rem] font-bold px-8 py-3.5 rounded-md hover:bg-[#f0fdf4] transition-colors"
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
