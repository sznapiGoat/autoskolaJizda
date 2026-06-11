import {
  Car,
  HeartHandshake,
  GraduationCap,
  Brain,
  Trophy,
  BookOpenCheck,
} from "lucide-react";
import { WHY_US } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SpotlightCard } from "@/components/ui/motion/SpotlightCard";

const ICON_MAP: Record<string, React.ElementType> = {
  Car,
  HeartHandshake,
  GraduationCap,
  Brain,
  Trophy,
  BookOpenCheck,
};

export default function WhyUsSection() {
  return (
    <section
      id="proc-my"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Proč si nás vybrat
          </p>
          <h2
            id="whyus-heading"
            className="text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight"
          >
            Kvalita, na které záleží
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Od moderní flotily až po osobní přístup každého instruktora.
            Šest důvodů, proč nás absolventi doporučují dál.
          </p>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_US.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Car;
            return (
              <StaggerItem key={item.id} className="h-full">
                <SpotlightCard className="h-full rounded-xl" lift={false}>
                <div className="group flex flex-col gap-4 rounded-xl border border-[#e5e7eb] bg-white p-7 hover:border-[#047857]/40 hover:shadow-md transition-all h-full">
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#f0fdf4] group-hover:bg-[#dcfce7] transition-colors shrink-0"
                    aria-hidden="true"
                  >
                    <Icon size={22} className="text-[#047857]" />
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-semibold text-[#111827] mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[0.9375rem] text-[#6b7280] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
