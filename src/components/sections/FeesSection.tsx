import { AlertCircle, CheckCircle2 } from "lucide-react";
import { MUNICIPALITY_FEES, CANCELLATION_POLICY } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";

export default function FeesSection() {
  return (
    <section
      className="bg-[#f9fafb] py-20 sm:py-28"
      aria-labelledby="fees-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Transparentnost
          </p>
          <h2
            id="fees-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            Správní poplatky &amp; podmínky
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Správní poplatky jsou hrazeny přímo na příslušném magistrátu. Nejsou součástí
            ceny kurzu. Přehled všech poplatků pro skupinu B.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div>
              <h3 className="text-base font-semibold text-[#111827] mb-4">
                Správní poplatky (magistrát)
              </h3>
              <div className="rounded-xl border border-[#e5e7eb] overflow-hidden">
                <table className="w-full text-sm" aria-label="Přehled správních poplatků">
                  <thead>
                    <tr className="bg-[#f3f4f6]">
                      <th scope="col" className="px-5 py-3 text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Položka</th>
                      <th scope="col" className="px-5 py-3 text-right text-xs font-semibold text-[#6b7280] uppercase tracking-wide">Poplatek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7eb] bg-white">
                    {MUNICIPALITY_FEES.map((fee) => (
                      <tr key={fee.item} className="hover:bg-[#f9fafb]">
                        <td className="px-5 py-4 text-[#374151]">{fee.item}</td>
                        <td className="px-5 py-4 text-right font-semibold text-[#111827]">{fee.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-[#6b7280]">
                * Poplatky se mohou měnit na základě vyhlášek. Aktuální sazby ověřte na magistrátu.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <h3 className="text-base font-semibold text-[#111827] mb-4">
                Podmínky zrušení jízdy
              </h3>
              <ul className="flex flex-col gap-3" aria-label="Podmínky zrušení jízdy">
                {CANCELLATION_POLICY.map((rule) => {
                  const isGreen = rule.color === "green";
                  return (
                    <li
                      key={rule.condition}
                      className="flex items-start gap-3 rounded-lg border border-[#e5e7eb] bg-white px-5 py-4"
                    >
                      {isGreen ? (
                        <CheckCircle2 size={17} className="text-[#047857] mt-0.5 shrink-0" aria-hidden="true" />
                      ) : (
                        <AlertCircle size={17} className="text-[#dc2626] mt-0.5 shrink-0" aria-hidden="true" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-[#111827]">{rule.condition}</p>
                        <p className={`text-sm mt-0.5 font-semibold ${isGreen ? "text-[#047857]" : "text-[#dc2626]"}`}>
                          {rule.consequence}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
