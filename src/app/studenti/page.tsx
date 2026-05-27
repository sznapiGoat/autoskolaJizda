import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Download, ArrowRight, BookOpen, Scale } from "lucide-react";
import { RESOURCES_EXTERNAL, RESOURCES_DOWNLOADS, FAQ_ITEMS } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Pro studenty — Materiály a FAQ",
  description:
    "Studijní materiály, formuláře ke stažení, testové otázky a zákon č. 247/2000 Sb. pro žáky Autoškoly Jízda v Rakovníku.",
};

export default function StudentiPage() {
  return (
    <main id="main-content">
      {/* Page hero */}
      <section className="bg-white pt-36 pb-20 sm:pb-24" aria-labelledby="studenti-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Portál pro studenty
            </p>
            <h1
              id="studenti-heading"
              className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1] mb-6"
            >
              Vše pro úspěšné absolvování
            </h1>
            <p className="text-[1.125rem] text-[#4b5563] leading-relaxed max-w-2xl">
              Formuláře ke stažení, testové otázky, zákonné předpisy a odpovědi na nejčastější
              otázky. Vše na jednom místě.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-[#f9fafb] py-16 sm:py-20" aria-labelledby="downloads-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Download size={16} className="text-[#047857]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest">
                Formuláře ke stažení
              </p>
            </div>
            <h2
              id="downloads-heading"
              className="text-2xl sm:text-3xl font-bold text-[#111827]"
            >
              Dokumenty zdarma
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {RESOURCES_DOWNLOADS.map((res) => (
              <StaggerItem key={res.id}>
                <a
                  href={res.href}
                  download={res.filename}
                  className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 hover:border-[#047857] hover:shadow-sm transition-all group"
                  aria-label={`${res.label} (PDF ke stažení)`}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#047857] shrink-0">
                    <Download size={18} className="text-white" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.9375rem] font-semibold text-[#111827] group-hover:text-[#047857] transition-colors">
                      {res.label}
                    </p>
                    <p className="text-xs text-[#6b7280] mt-0.5">{res.description}</p>
                    <p className="text-xs font-medium text-[#047857] mt-1.5">PDF ke stažení</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* External links */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="links-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 mb-3">
              <ExternalLink size={16} className="text-[#047857]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest">
                Užitečné zdroje
              </p>
            </div>
            <h2
              id="links-heading"
              className="text-2xl sm:text-3xl font-bold text-[#111827]"
            >
              Testové otázky a předpisy
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES_EXTERNAL.map((res) => (
              <StaggerItem key={res.id}>
                <a
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col rounded-xl border border-[#e5e7eb] bg-white p-6 hover:border-[#047857] hover:shadow-sm transition-all group h-full"
                  aria-label={`${res.label} (otevře se v novém okně)`}
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#f0fdf4] mb-4">
                    <ExternalLink size={15} className="text-[#047857]" aria-hidden="true" />
                  </div>
                  <p className="text-[0.9375rem] font-semibold text-[#111827] group-hover:text-[#047857] transition-colors mb-1">
                    {res.label}
                  </p>
                  <p className="text-xs text-[#6b7280] leading-relaxed mt-auto pt-2">
                    {res.description}
                  </p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Law 247/2000 */}
      <section className="bg-[#f0fdf4] py-16 sm:py-20" aria-labelledby="law-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Scale size={16} className="text-[#047857]" aria-hidden="true" />
              <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest">
                Legislativa
              </p>
            </div>
            <h2
              id="law-heading"
              className="text-2xl sm:text-3xl font-bold text-[#111827] mb-5"
            >
              Zákon č. 247/2000 Sb.
            </h2>
            <p className="text-[#4b5563] leading-relaxed mb-4">
              Výuka a výcvik v autoškole se řídí zákonem č. 247/2000 Sb. o získávání a zdokonalování
              odborné způsobilosti k řízení motorových vozidel a o změnách některých zákonů.
            </p>
            <p className="text-[#4b5563] leading-relaxed mb-4">
              Minimální rozsah výuky a výcviku pro skupinu B:
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                "Teorie — minimálně 25 hodin výuky",
                "Praktický výcvik — minimálně 30 jízdních hodin",
                "Výuka zdravotnické přípravy — 2 hodiny",
                "Výuka předpisů o provozu vozidel — obsažena v teoretické části",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[#374151] text-sm">
                  <BookOpen size={14} className="text-[#047857] mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://www.zakonyprolidi.cz/cs/2000-247"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#047857] font-semibold text-sm hover:underline"
              aria-label="Přečíst zákon č. 247/2000 Sb. na zákonyprolidi.cz (otevře se v novém okně)"
            >
              Přečíst celý zákon na zákonyprolidi.cz
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-12">
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827]"
            >
              Nejčastější otázky
            </h2>
          </FadeIn>
          <div className="flex flex-col divide-y divide-[#e5e7eb]">
            {FAQ_ITEMS.map((item) => (
              <FadeIn key={item.id} direction="up" className="py-6">
                <h3 className="text-[1rem] font-semibold text-[#111827] mb-2">
                  {item.question}
                </h3>
                <p className="text-[#6b7280] text-[0.9375rem] leading-relaxed">
                  {item.answer}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#047857] py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-white mb-3">Máte další otázky?</h2>
            <p className="text-[#bbf7d0] mb-7">Zavolejte nám — odpovídáme rychle.</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-[#047857] text-[1rem] font-bold px-8 py-3.5 rounded-md hover:bg-[#f0fdf4] transition-colors"
            >
              Kontaktovat nás
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
