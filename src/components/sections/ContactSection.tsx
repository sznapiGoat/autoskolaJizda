import { Phone, Mail, MapPin, CreditCard } from "lucide-react";
import { SITE } from "@/lib/data";

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Kontakt
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            Pojďme to rozjet.
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Zavolejte nebo napište — odpovídáme rychle. Sídlíme v Rakovníku
            na Husově náměstí, 3. patro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact details */}
          <div className="flex flex-col gap-6">
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
                    <p className="text-xs text-[#6b7280] mb-0.5">Telefon (volejte kdykoliv)</p>
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
                  <p className="text-xs text-[#6b7280] mb-0.5">Adresa</p>
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
                  <p className="text-xs text-[#6b7280] mb-0.5">Bankovní spojení</p>
                  <p className="text-[1.0625rem] font-semibold text-[#111827]">
                    {SITE.bankAccount}
                  </p>
                  <p className="text-sm text-[#6b7280]">{SITE.bankName}</p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <a
              href={`tel:${SITE.phonePlain}`}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#065f46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2 self-start"
            >
              <Phone size={17} aria-hidden="true" />
              Zavolat nyní
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-[#e5e7eb] shadow-sm aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
            <iframe
              title="Mapa — Autoškola Jízda, Rakovník"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.3!2d13.7404!3d50.1065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bbce0c8d0f3b7%3A0x8d4b78f6!2sHusovo+n%C3%A1m.+2347%2C+269+01+Rakovn%C3%ADk!5e0!3m2!1scs!2scz!4v1"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa umístění autoškoly"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
