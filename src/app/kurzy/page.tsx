import type { Metadata } from "next";
import Link from "next/link";
import { FileText, GraduationCap, Car, ClipboardCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Kurzy",
  description:
    "Kurzy řidičských průkazů — Autoškola Jízda Rakovník. Skupina B, L17 mentoring, kondiční jízdy, výuka v cizích jazycích.",
};

const INCLUDED = [
  "Zákonný rozsah výuky a výcviku skupiny B",
  "Výuka teorie v učebně formou přednášek",
  "Praktické jízdy s instruktorem",
  "Zdravotnická příprava (2 hodiny)",
  "Učební materiály v ceně (cca 500 Kč)",
  "Moderní klimatizované výcvikové vozidlo",
  "Příprava na zkoušku — teorie i jízda",
];

const STEPS = [
  {
    Icon: FileText,
    title: "Zápis",
    desc: "Podpíšeme smlouvu, zaplatíte zálohu 3 000 Kč. Obdržíte učební materiály.",
  },
  {
    Icon: GraduationCap,
    title: "Teorie",
    desc: "Přednášky v učebně. Zákonné předpisy, dopravní značky, pravidla provozu. Rozvrh sdělíme při zápisu.",
  },
  {
    Icon: Car,
    title: "Praktický výcvik",
    desc: "Jízdy s instruktorem dle vašich možností. Termíny se přizpůsobují — ráno, odpoledne i večer.",
  },
  {
    Icon: ClipboardCheck,
    title: "Zkouška",
    desc: "Teoretická část + jízdní zkouška na magistrátu. Instruktor vás na zkoušku připraví.",
  },
];

const OTHER_COURSES = [
  {
    title: "Výuka v cizím jazyce",
    desc: "Arabština, vietnamština, ruština, angličtina, čínština. Tlumočník zajištěn v ceně kurzu.",
    href: "/exclusive",
  },
  {
    title: "L17 — doprovod mentorem",
    desc: "Teoretická příprava mentora a společná výcviková jízda se žákem. Cena dle dohody.",
    href: "/kontakt",
  },
  {
    title: "Kondiční jízdy",
    desc: "Pro řidiče s průkazem, kteří si chtějí zopakovat nebo zdokonalit jízdu. 45 / 60 / 90 minut.",
    href: "/cenik",
  },
  {
    title: "Vrácení řidičského průkazu",
    desc: "Kurz pro uchazeče vracející se po odebrání ŘP. Podmínky a cenu upřesníme při kontaktu.",
    href: "/kontakt",
  },
];

export default function KurzyPage() {
  return (
    <main id="main-content">
      {/* Header */}
      <section className="bg-white pt-36 pb-16" aria-labelledby="kurzy-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h1
              id="kurzy-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4"
            >
              Kurzy
            </h1>
            <p className="text-[1.0625rem] text-[#4b5563] leading-relaxed max-w-2xl">
              Nabízíme kurzy řidičských průkazů skupiny B, výuku v cizích jazycích, L17 mentoring
              a kondiční jízdy. Výcvik probíhá v Rakovníku a okolí.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Skupina B — hlavní kurz */}
      <section className="bg-[#f9fafb] py-14 sm:py-16" aria-labelledby="b-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-8">
            <h2 id="b-heading" className="text-2xl font-bold text-[#111827] mb-2">
              Kurz skupiny B
            </h2>
            <p className="text-[#6b7280] text-[0.9375rem]">
              Základní kurz pro získání řidičského průkazu skupiny B.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Co je součástí */}
            <FadeIn direction="left">
              <h3 className="text-sm font-semibold text-[#374151] uppercase tracking-widest mb-4">
                Co je v ceně
              </h3>
              <ul className="flex flex-col gap-2.5">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-[#374151]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#047857] shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[#6b7280]">
                Ceny kurzů skupiny B:{" "}
                <Link href="/cenik" className="text-[#047857] hover:underline">
                  viz ceník →
                </Link>
              </p>
            </FadeIn>

            {/* Průběh */}
            <FadeIn direction="right">
              <h3 className="text-sm font-semibold text-[#374151] uppercase tracking-widest mb-4">
                Průběh kurzu
              </h3>
              <ol className="flex flex-col gap-5" aria-label="Kroky kurzu">
                {STEPS.map(({ Icon, title, desc }, i) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#047857] text-white text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-[0.9375rem] font-semibold text-[#111827]">{title}</p>
                      <p className="text-sm text-[#6b7280] mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ostatní kurzy */}
      <section className="bg-white py-14 sm:py-16" aria-labelledby="ostatni-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-8">
            <h2 id="ostatni-heading" className="text-2xl font-bold text-[#111827] mb-2">
              Ostatní kurzy a služby
            </h2>
          </FadeIn>
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OTHER_COURSES.map(({ title, desc, href }) => (
              <StaggerItem key={title}>
                <Link
                  href={href}
                  className="block rounded-lg border border-[#e5e7eb] bg-white p-6 hover:border-[#047857] transition-colors group"
                >
                  <p className="text-[0.9375rem] font-semibold text-[#111827] group-hover:text-[#047857] transition-colors mb-1.5">
                    {title}
                  </p>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Zápis */}
      <section className="bg-[#f9fafb] py-12 border-t border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-[#374151] mb-3">
              <span className="font-semibold">Zápis:</span> Kontaktujte nás telefonicky nebo e-mailem.
              Upřesníme volné termíny a podmínky kurzu.
            </p>
            <Link href="/kontakt" className="text-[#047857] font-semibold text-sm hover:underline">
              Kontaktní informace →
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
