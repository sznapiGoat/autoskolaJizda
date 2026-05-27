import { Counter } from "@/components/ui/Counter";
import { FadeIn } from "@/components/ui/FadeIn";

const STATS = [
  {
    value: 101,
    decimals: 0,
    suffix: "×",
    label: "Hodnocení na Google",
    sub: "Každé si ověříte",
  },
  {
    value: 5.0,
    decimals: 1,
    suffix: " ★",
    label: "Průměrné hodnocení",
    sub: "Maximální skóre",
  },
  {
    value: 100,
    decimals: 0,
    suffix: " %",
    label: "Pětihvězdičkových",
    sub: "Bez jediné výjimky",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-[#047857] py-12 sm:py-14" aria-label="Statistiky autoškoly">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/20">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.15} direction="up" className="text-center px-8">
              <p className="text-[2.75rem] sm:text-[3.25rem] font-bold text-white leading-none tracking-tight">
                <Counter
                  to={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  duration={1.6}
                />
              </p>
              <p className="mt-2 text-base font-semibold text-white/90">{stat.label}</p>
              <p className="mt-0.5 text-sm text-white/60">{stat.sub}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
