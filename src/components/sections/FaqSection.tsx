"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/data";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-[#f9fafb] py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left col */}
          <div>
            <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
              Časté otázky
            </p>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-[#111827]"
            >
              Máte dotaz?
            </h2>
            <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
              Odpovídáme na nejčastější otázky uchazečů a jejich rodičů. Nenašli
              jste odpověď? Zavolejte nám.
            </p>
            <a
              href="#kontakt"
              className="mt-6 inline-flex items-center text-sm font-semibold text-[#047857] hover:text-[#065f46] underline-offset-4 hover:underline transition-colors"
            >
              Kontaktovat autoškolu →
            </a>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2">
            <Accordion className="w-full space-y-2">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-[#e5e7eb] rounded-lg bg-white px-5 data-[state=open]:border-[#047857] transition-colors"
                >
                  <AccordionTrigger className="text-[1rem] font-medium text-[#111827] py-4 hover:no-underline [&>svg]:text-[#047857] text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.9375rem] text-[#6b7280] leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
