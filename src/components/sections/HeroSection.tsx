import Link from "next/link";
import { Star, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      className="relative bg-white pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.35,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] text-[#065f46] text-sm font-semibold px-3 py-1.5 rounded-full mb-8">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-[#047857] text-[#047857]"
                />
              ))}
            </span>
            <span>
              {SITE.reviewCount}× hodnocení 5,0 na Google
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] font-bold text-[#111827] tracking-tight leading-[1.1] mb-6"
          >
            Řidičský průkaz
            <br />
            <span className="text-[#047857]">s jistotou</span> — v Rakovníku.
          </h1>

          {/* Sub-headline */}
          <p className="text-[1.125rem] sm:text-[1.25rem] text-[#374151] leading-relaxed mb-10 max-w-xl">
            Individuální přístup, moderní vozidla a výuka i v cizích jazycích.
            Více než sto spokojených absolventů — každý s pětihvězdičkovým hodnocením.
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#047857] text-white text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#065f46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
            >
              Chci začít jezdit
            </a>
            <a
              href={`tel:${SITE.phonePlain}`}
              className="inline-flex items-center justify-center gap-2 border border-[#e5e7eb] bg-white text-[#111827] text-[1rem] font-semibold px-7 py-3.5 rounded-md hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
            >
              <Phone size={17} aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>

          {/* Location note */}
          <p className="mt-8 flex items-center gap-1.5 text-sm text-[#6b7280]">
            <MapPin size={14} className="text-[#047857] shrink-0" aria-hidden="true" />
            <span>
              {SITE.address}, {SITE.city} {SITE.zip}
            </span>
          </p>
        </div>

        {/* Floating stat card — desktop */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-56 bg-white border border-[#e5e7eb] rounded-xl shadow-md p-6 select-none"
        >
          <p className="text-[2.5rem] font-bold text-[#111827] leading-none">101</p>
          <p className="text-sm text-[#6b7280] mt-1">Google recenzí</p>
          <div className="mt-3 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-[#047857] text-[#047857]"
              />
            ))}
          </div>
          <p className="mt-2 text-xs font-semibold text-[#047857]">Průměr 5,0 ★</p>
        </div>
      </div>
    </section>
  );
}
