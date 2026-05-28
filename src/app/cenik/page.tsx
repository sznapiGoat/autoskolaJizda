import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import {
  PRICING_TIERS,
  MUNICIPALITY_FEES,
  CANCELLATION_POLICY,
  CONDITIONAL_FEES,
  KONDICE_FEES,
} from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Ceník",
  description:
    "Ceník kurzů Autoškoly Jízda Rakovník. Kurz skupiny B od 17 000 Kč, výuka v cizím jazyce od 40 000 Kč. Správní poplatky a podmínky storna.",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function CenikPage() {
  return (
    <main id="main-content" className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">

        {/* Page title */}
        <FadeIn direction="up" className="mb-12">
          <h1 className="text-3xl font-bold text-[#111827] mb-2">Ceník</h1>
          <p className="text-[#6b7280] text-[0.9375rem]">
            Všechny ceny jsou uvedeny včetně DPH. Učební materiály (cca 500 Kč) jsou součástí
            každého kurzu. Správní poplatky se hradí přímo na magistrátu.
          </p>
        </FadeIn>

        {/* Kurzy skupiny B */}
        <FadeIn direction="up" className="mb-10">
          <h2 className="text-lg font-semibold text-[#111827] mb-4 pb-2 border-b border-[#e5e7eb]">
            Kurzy skupiny B
          </h2>
          <table className="w-full text-sm" aria-label="Ceník kurzů skupiny B">
            <thead>
              <tr>
                <th scope="col" className="text-left font-semibold text-[#374151] pb-2 pr-4">Kurz</th>
                <th scope="col" className="text-left font-semibold text-[#374151] pb-2 pr-4">Cena</th>
                <th scope="col" className="text-left font-semibold text-[#374151] pb-2">Popis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3f4f6]">
              {PRICING_TIERS.filter((t) => t.id === "basic" || t.id === "standard").map((tier) => (
                <tr key={tier.id}>
                  <td className="py-3 pr-4 font-medium text-[#111827] align-top whitespace-nowrap">
                    {tier.name}
                  </td>
                  <td className="py-3 pr-4 text-[#111827] font-semibold align-top whitespace-nowrap">
                    {formatPrice(tier.price)}
                  </td>
                  <td className="py-3 text-[#6b7280] align-top leading-relaxed">
                    {tier.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-[#6b7280]">
            Záloha 3 000 Kč splatná při podpisu smlouvy. Zbytek před zahájením výcviku nebo ve splátkách po dohodě.{" "}
            <Link href="/kurzy" className="text-[#047857] hover:underline">Detail kurzů →</Link>
          </p>
        </FadeIn>

        {/* Kurzy v cizím jazyce */}
        <FadeIn direction="up" className="mb-10">
          <h2 className="text-lg font-semibold text-[#111827] mb-4 pb-2 border-b border-[#e5e7eb]">
            Výuka v cizím jazyce
          </h2>
          <table className="w-full text-sm" aria-label="Ceník kurzů v cizím jazyce">
            <thead>
              <tr>
                <th scope="col" className="text-left font-semibold text-[#374151] pb-2 pr-4">Kurz</th>
                <th scope="col" className="text-left font-semibold text-[#374151] pb-2 pr-4">Cena</th>
                <th scope="col" className="text-left font-semibold text-[#374151] pb-2">Popis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f3f4f6]">
              {PRICING_TIERS.filter((t) => t.id === "exclusive" || t.id === "vip").map((tier) => (
                <tr key={tier.id}>
                  <td className="py-3 pr-4 font-medium text-[#111827] align-top whitespace-nowrap">
                    {tier.name}
                  </td>
                  <td className="py-3 pr-4 text-[#111827] font-semibold align-top whitespace-nowrap">
                    {formatPrice(tier.price)}
                  </td>
                  <td className="py-3 text-[#6b7280] align-top leading-relaxed">
                    {tier.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-[#6b7280]">
            Arabština, vietnamština, ruština, angličtina a čínština. Tlumočník zajištěn v ceně.{" "}
            <Link href="/exclusive" className="text-[#047857] hover:underline">Více informací →</Link>
          </p>
        </FadeIn>

        {/* Vrácení ŘP */}
        <FadeIn direction="up" className="mb-10">
          <h2 className="text-lg font-semibold text-[#111827] mb-4 pb-2 border-b border-[#e5e7eb]">
            Vrácení řidičského průkazu
          </h2>
          <table className="w-full text-sm" aria-label="Ceník vrácení ŘP">
            <tbody className="divide-y divide-[#f3f4f6]">
              {CONDITIONAL_FEES.map((fee) => (
                <tr key={fee.item}>
                  <td className="py-3 pr-4 text-[#374151] align-top">{fee.item}</td>
                  <td className="py-3 pr-4 font-semibold text-[#111827] align-top whitespace-nowrap">
                    {fee.price}
                  </td>
                  {fee.note && (
                    <td className="py-3 text-[#6b7280] text-xs align-top">{fee.note}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        {/* Kondiční jízdy */}
        <FadeIn direction="up" className="mb-10">
          <h2 className="text-lg font-semibold text-[#111827] mb-4 pb-2 border-b border-[#e5e7eb]">
            Kondiční jízdy
          </h2>
          <table className="w-full text-sm" aria-label="Ceník kondičních jízd">
            <tbody className="divide-y divide-[#f3f4f6]">
              {KONDICE_FEES.map((k) => (
                <tr key={k.duration}>
                  <td className="py-3 pr-4 text-[#374151]">{k.duration}</td>
                  <td className="py-3 font-semibold text-[#111827]">{k.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        {/* Správní poplatky */}
        <FadeIn direction="up" className="mb-10">
          <h2 className="text-lg font-semibold text-[#111827] mb-2 pb-2 border-b border-[#e5e7eb]">
            Správní poplatky (magistrát)
          </h2>
          <p className="text-xs text-[#6b7280] mb-4">
            Níže uvedené poplatky se hradí přímo na příslušném magistrátu. Nejsou součástí ceny kurzu.
          </p>
          <table className="w-full text-sm" aria-label="Přehled správních poplatků">
            <tbody className="divide-y divide-[#f3f4f6]">
              {MUNICIPALITY_FEES.map((fee) => (
                <tr key={fee.item}>
                  <td className="py-3 pr-4 text-[#374151]">{fee.item}</td>
                  <td className="py-3 font-semibold text-[#111827] whitespace-nowrap">{fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-[#6b7280]">
            Sazby poplatků se mohou měnit na základě platných vyhlášek.
          </p>
        </FadeIn>

        {/* Podmínky storna */}
        <FadeIn direction="up" className="mb-10">
          <h2 className="text-lg font-semibold text-[#111827] mb-4 pb-2 border-b border-[#e5e7eb]">
            Podmínky zrušení jízdy
          </h2>
          <ul className="flex flex-col gap-2.5">
            {CANCELLATION_POLICY.map((rule) => {
              const ok = rule.color === "green";
              return (
                <li key={rule.condition} className="flex items-start gap-3 text-sm">
                  {ok ? (
                    <CheckCircle2 size={15} className="text-[#047857] mt-0.5 shrink-0" aria-hidden="true" />
                  ) : (
                    <AlertCircle size={15} className="text-[#dc2626] mt-0.5 shrink-0" aria-hidden="true" />
                  )}
                  <div>
                    <span className="text-[#374151]">{rule.condition}: </span>
                    <span className={`font-semibold ${ok ? "text-[#047857]" : "text-[#dc2626]"}`}>
                      {rule.consequence}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </FadeIn>

        {/* Platba */}
        <FadeIn direction="up">
          <h2 className="text-lg font-semibold text-[#111827] mb-3 pb-2 border-b border-[#e5e7eb]">
            Způsob platby
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed">
            Hotově nebo bankovním převodem na účet <span className="font-semibold">2801649861/2010</span> (Fio Banka).
            Platba ve splátkách po dohodě.
          </p>
        </FadeIn>

      </div>
    </main>
  );
}
