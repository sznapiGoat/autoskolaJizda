import {
  Star,
  UserCheck,
  Globe,
  BookOpen,
  Package,
  Brain,
} from "lucide-react";
import { ADVANTAGES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Star,
  UserCheck,
  Globe,
  BookOpen,
  Package,
  Brain,
};

export default function AdvantagesSection() {
  return (
    <section
      id="kurzy"
      className="bg-[#f9fafb] py-20 sm:py-28"
      aria-labelledby="advantages-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Proč Autoškola Jízda
          </p>
          <h2
            id="advantages-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            Co nás odlišuje od ostatních
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Výcvik přizpůsobujeme každému žadateli. Nenajdete u nás fronty ani
            anonymní systém — jen kvalitní výuka a lidský přístup.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e7eb]"
          aria-label="Výhody autoškoly"
        >
          {ADVANTAGES.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Star;
            return (
              <li
                key={item.id}
                className="bg-white p-8 flex flex-col gap-4 hover:bg-[#f9fafb] transition-colors"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f0fdf4]"
                  aria-hidden="true"
                >
                  <Icon size={20} className="text-[#047857]" />
                </div>
                <div>
                  <h3 className="text-[1rem] font-semibold text-[#111827] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] text-[#6b7280] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
