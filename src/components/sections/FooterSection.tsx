import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/data";

const LINKS = [
  { label: "Kurzy", href: "#kurzy" },
  { label: "Ceník", href: "#cenik" },
  { label: "Recenze", href: "#recenze" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const EXTERNAL = [
  { label: "Testové otázky (etesty2)", href: "https://etesty2.mdcr.cz/" },
  { label: "Zákonyprolidi.cz", href: "https://zakonyprolidi.cz/" },
  { label: "BESIP", href: "https://besip.cz/" },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-lg font-bold tracking-tight">{SITE.name}</p>
            <p className="text-sm text-gray-400 mt-1">{SITE.address}, {SITE.city}</p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={14} aria-hidden="true" /> {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={14} aria-hidden="true" /> {SITE.email}
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Patičková navigace">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Navigace
            </p>
            <ul className="flex flex-col gap-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* External links */}
          <nav aria-label="Užitečné odkazy">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Užitečné odkazy
            </p>
            <ul className="flex flex-col gap-2.5">
              {EXTERNAL.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. Všechna práva vyhrazena.
          </p>
          <p>
            Bankovní spojení: {SITE.bankAccount} ({SITE.bankName})
          </p>
        </div>
      </div>
    </footer>
  );
}
