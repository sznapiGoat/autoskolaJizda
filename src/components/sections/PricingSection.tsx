import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PRICING_TIERS, CONDITIONAL_FEES, KONDICE_FEES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

function formatPrice(price: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function PricingSection() {
  return (
    <section
      id="cenik"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Ceník
          </p>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            Transparentní ceny bez překvapení
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Veškeré učební materiály (v hodnotě cca 500 Kč) jsou součástí každého kurzu.
            Správní poplatky jsou hrazeny přímo na magistrátu — viz tabulka níže.
          </p>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {PRICING_TIERS.map((tier) => (
            <StaggerItem key={tier.id}>
              <article
                className={cn(
                  "relative flex flex-col rounded-xl border bg-white p-7 h-full",
                  tier.highlighted
                    ? "border-[#047857] shadow-md ring-1 ring-[#047857]"
                    : "border-[#e5e7eb] shadow-sm"
                )}
                aria-label={`Kurz ${tier.name}, ${formatPrice(tier.price)}`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-5">
                    <Badge
                      className={cn(
                        "text-[11px] font-semibold px-2 py-0.5",
                        tier.highlighted
                          ? "bg-[#047857] text-white border-[#047857]"
                          : "bg-[#f0fdf4] text-[#047857] border-[#bbf7d0]"
                      )}
                    >
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-5">
                  <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest mb-1">
                    Skupina B
                  </p>
                  <h3 className="text-xl font-bold text-[#111827]">{tier.name}</h3>
                  <p className="mt-3 text-[2rem] font-bold text-[#111827] leading-none">
                    {formatPrice(tier.price)}
                  </p>
                  <p className="mt-2 text-sm text-[#6b7280] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 mt-auto" aria-label="Součásti kurzu">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151]">
                      <Check size={15} className="text-[#047857] mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={cn(
                    "mt-7 block text-center text-sm font-semibold py-2.5 px-4 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2",
                    tier.highlighted
                      ? "bg-[#047857] text-white hover:bg-[#065f46]"
                      : "border border-[#e5e7eb] text-[#111827] hover:bg-[#f9fafb]"
                  )}
                >
                  Mám zájem
                </a>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-7 h-full">
              <h3 className="text-base font-semibold text-[#111827] mb-5">Další služby</h3>
              <ul className="flex flex-col gap-4">
                {CONDITIONAL_FEES.map((fee) => (
                  <li key={fee.item} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#111827]">{fee.item}</p>
                      {fee.note && (
                        <p className="text-xs text-[#6b7280] mt-0.5">{fee.note}</p>
                      )}
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-[#047857]">{fee.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-7 h-full">
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
  );
}
