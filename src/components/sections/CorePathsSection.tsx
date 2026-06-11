import Link from "next/link";
import { Car, Globe, PhoneCall, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { FadeIn } from "@/components/ui/FadeIn";
import { SpotlightCard } from "@/components/ui/motion/SpotlightCard";

const PATHS = [
  {
    href: "/kurzy",
    Icon: Car,
    label: "Kurzy",
    desc: "Kompletní kurz řidičského průkazu skupiny B. Klidný instruktor, klimatizovaná vozidla, individuální přístup a vysoká úspěšnost u zkoušek.",
    cta: "Zjistit více",
    highlighted: false,
    badge: null,
  },
  {
    href: "/exclusive",
    Icon: Globe,
    label: "Výuka v cizím jazyce",
    desc: "Specializujeme se na řidiče-cizince. Arabština, vietnamština, ruština, angličtina, čínština. Tlumočník zajištěn v ceně.",
    cta: "Exclusive & VIP",
    highlighted: true,
    badge: "Výlučná specialita",
  },
  {
    href: "/kontakt",
    Icon: PhoneCall,
    label: "Zapsat se dnes",
    desc: "Volejte kdykoliv, bez čekání a bez fronty. Zapište se ihned a začněte jezdit dle vašeho vlastního tempa.",
    cta: "Kontaktovat nás",
    highlighted: false,
    badge: null,
  },
];

export default function CorePathsSection() {
  return (
    <section
      className="bg-[#f9fafb] py-20 sm:py-28"
      aria-labelledby="paths-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Co pro vás máme
          </p>
          <h2
            id="paths-heading"
            className="text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight"
          >
            Vyberte si svou cestu
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Ať jste místní, cizinec nebo hledáte dárkový kurz. Máme řešení přesně pro vás.
          </p>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PATHS.map(({ href, Icon, label, desc, cta, highlighted, badge }) => (
            <StaggerItem key={href} className="h-full">
              <SpotlightCard className="h-full rounded-xl">
              <article
                className={`relative flex flex-col rounded-xl border h-full p-8 transition-shadow hover:shadow-md ${
                  highlighted
                    ? "border-[#047857] bg-white ring-1 ring-[#047857]"
                    : "border-[#e5e7eb] bg-white"
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-6 text-[11px] font-semibold bg-[#047857] text-white px-2.5 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}

                <div
                  className={`w-11 h-11 flex items-center justify-center rounded-lg mb-5 ${
                    highlighted ? "bg-[#047857]" : "bg-[#f0fdf4]"
                  }`}
                >
                  <Icon
                    size={20}
                    className={highlighted ? "text-white" : "text-[#047857]"}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#111827] mb-3">{label}</h3>
                <p className="text-[#6b7280] text-[0.9375rem] leading-relaxed flex-1">
                  {desc}
                </p>

                <Link
                  href={href}
                  className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors group ${
                    highlighted
                      ? "text-[#047857] hover:text-[#065f46]"
                      : "text-[#374151] hover:text-[#047857]"
                  }`}
                >
                  {cta}
                  <ArrowRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </article>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
