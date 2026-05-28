import type { Metadata } from "next";
import { Phone, Mail, MapPin, CreditCard, Clock, Brain } from "lucide-react";
import { SITE } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Autoškolu Jízda v Rakovníku. Telefon +420 728 492 692, Husovo náměstí 2347, 3. patro. Zapište se dnes.",
};

const MAP_EMBED =
  "https://maps.google.com/maps?q=Auto%C5%A1kola+J%C3%ADzda+Rakovn%C3%ADk&output=embed&z=16&hl=cs";

const HOURS = [
  { day: "Pondělí – Čtvrtek", time: "7:30 – 16:30" },
  { day: "Pátek", time: "7:30 – 15:00" },
  { day: "Sobota – Neděle", time: "Dle dohody" },
];

export default function KontaktPage() {
  return (
    <main id="main-content">
      {/* Page hero */}
      <section className="bg-white pt-24 pb-12" aria-labelledby="kontakt-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-sm font-semibold px-3 py-1.5 rounded-full mb-6">
              <Phone size={12} aria-hidden="true" />
              VOLEJTE KDYKOLIV
            </div>
            <h1
              id="kontakt-heading"
              className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-[1.1] mb-4"
            >
              Pojďme to rozjet
            </h1>
            <p className="text-[1.125rem] text-[#4b5563] leading-relaxed">
              Zavolejte nebo napište. Odpovídáme rychle, bez čekání a bez fronty.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main contact grid */}
      <section className="bg-white py-12 sm:py-16" aria-label="Kontaktní informace">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: contact details + hours + psychologist */}
            <div className="flex flex-col gap-8">
              {/* Contact details */}
              <FadeIn direction="left">
                <div className="rounded-xl border border-[#e5e7eb] bg-white p-7">
                  <h2 className="text-lg font-bold text-[#111827] mb-5">
                    Kontaktní údaje
                  </h2>
                  <ul className="flex flex-col gap-5" aria-label="Kontaktní informace">
                    <li>
                      <a
                        href={`tel:${SITE.phonePlain}`}
                        className="flex items-center gap-4 group"
                        aria-label={`Zavolat na číslo ${SITE.phone}`}
                      >
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#f0fdf4] group-hover:bg-[#dcfce7] transition-colors shrink-0">
                          <Phone size={18} className="text-[#047857]" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs text-[#6b7280] mb-0.5">
                            Telefon (volejte kdykoliv)
                          </p>
                          <p className="text-[1.0625rem] font-semibold text-[#111827] group-hover:text-[#047857] transition-colors">
                            {SITE.phone}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="flex items-center gap-4 group"
                        aria-label={`Napsat e-mail na ${SITE.email}`}
                      >
                        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#f0fdf4] group-hover:bg-[#dcfce7] transition-colors shrink-0">
                          <Mail size={18} className="text-[#047857]" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs text-[#6b7280] mb-0.5">E-mail</p>
                          <p className="text-[1.0625rem] font-semibold text-[#111827] group-hover:text-[#047857] transition-colors">
                            {SITE.email}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#f0fdf4] shrink-0">
                        <MapPin size={18} className="text-[#047857]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-0.5">Adresa (3. patro)</p>
                        <address className="text-[1.0625rem] font-semibold text-[#111827] not-italic">
                          {SITE.address}
                          <br />
                          {SITE.city} {SITE.zip}
                        </address>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#f0fdf4] shrink-0">
                        <CreditCard size={18} className="text-[#047857]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6b7280] mb-0.5">
                          Bankovní spojení (Fio Banka)
                        </p>
                        <p className="text-[1.0625rem] font-semibold text-[#111827]">
                          {SITE.bankAccount}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <a
                    href={`tel:${SITE.phonePlain}`}
                    className="mt-6 inline-flex items-center justify-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#065f46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
                  >
                    <Phone size={17} aria-hidden="true" />
                    Zavolat nyní
                  </a>
                </div>
              </FadeIn>

              {/* Office hours */}
              <FadeIn direction="left">
                <div className="rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock size={16} className="text-[#047857]" aria-hidden="true" />
                    <h2 className="text-base font-bold text-[#111827]">Úřední hodiny</h2>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {HOURS.map(({ day, time }) => (
                      <li
                        key={day}
                        className="flex items-center justify-between border-b border-[#e5e7eb] pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-[#374151]">{day}</span>
                        <span className="text-sm font-semibold text-[#111827]">{time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-[#6b7280]">
                    Jízdy probíhají od rána do večera dle vašich možností.
                  </p>
                </div>
              </FadeIn>

              {/* Traffic psychologist */}
              <FadeIn direction="left">
                <div className="rounded-xl border border-[#e5e7eb] bg-white p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain size={16} className="text-[#047857]" aria-hidden="true" />
                    <h2 className="text-base font-bold text-[#111827]">Dopravní psycholog</h2>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    Externě spolupracujeme s dopravním psychologem. Dopravně-psychologické
                    vyšetření zajistíme přímo za vás. Ideální pro uchazeče o vrácení ŘP i
                    pro profesionální řidiče. Kontaktujte nás pro více informací.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: map + form */}
            <div className="flex flex-col gap-8">
              {/* Map */}
              <FadeIn direction="right">
                <div className="rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm h-[320px]">
                  <iframe
                    title="Mapa — Autoškola Jízda, Rakovník"
                    src={MAP_EMBED}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Mapa umístění autoškoly v Rakovníku"
                  />
                </div>
              </FadeIn>

              {/* Contact form */}
              <FadeIn direction="right">
                <div className="rounded-xl border border-[#e5e7eb] bg-white p-7">
                  <h2 className="text-lg font-bold text-[#111827] mb-5">Napište nám</h2>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
