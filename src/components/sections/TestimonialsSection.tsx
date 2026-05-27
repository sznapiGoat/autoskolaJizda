import { Star } from "lucide-react";
import { TESTIMONIALS, SITE } from "@/lib/data";

function StarRow({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} z 5 hvězd`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#047857] text-[#047857]" aria-hidden="true" />
      ))}
    </span>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="recenze"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Google recenze
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            {SITE.reviewCount} recenzí. Průměr {SITE.googleRating.toFixed(1)} ★.
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Každé hodnocení si lze ověřit přímo na Google. Nechlubíme se čísly — necháváme mluvit
            naše absolventy.
          </p>
        </div>

        {/* Aggregate badge */}
        <div
          className="inline-flex items-center gap-5 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-6 py-4 mb-12"
          aria-label={`Celkové hodnocení: ${SITE.googleRating} z 5, ${SITE.reviewCount} recenzí`}
        >
          <div>
            <p className="text-[2.25rem] font-bold text-[#111827] leading-none">
              {SITE.googleRating.toFixed(1)}
            </p>
            <StarRow count={5} />
          </div>
          <div className="h-10 w-px bg-[#bbf7d0]" aria-hidden="true" />
          <div>
            <p className="text-2xl font-bold text-[#111827] leading-none">
              {SITE.reviewCount}
            </p>
            <p className="text-sm text-[#6b7280] mt-0.5">recenzí na Google</p>
          </div>
          <div className="h-10 w-px bg-[#bbf7d0]" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-[#047857]">100 %</p>
            <p className="text-sm text-[#6b7280]">pětihvězdičkových</p>
          </div>
        </div>

        {/* Cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          aria-label="Recenze zákazníků"
        >
          {TESTIMONIALS.map((review) => (
            <li
              key={review.id}
              className="flex flex-col gap-4 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars + date */}
              <div className="flex items-center justify-between">
                <StarRow count={review.rating} />
                <time
                  dateTime={review.date}
                  className="text-xs text-[#6b7280]"
                >
                  {new Date(review.date + "-01").toLocaleDateString("cs-CZ", {
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[#374151] leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#f3f4f6]">
                <div
                  className="w-8 h-8 rounded-full bg-[#047857] flex items-center justify-center text-white text-xs font-bold shrink-0"
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <p className="text-sm font-semibold text-[#111827]">{review.name}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-[#6b7280] text-center">
          Ověřte si všech {SITE.reviewCount} recenzí na{" "}
          <a
            href="https://www.google.com/maps/search/Autoškola+Jízda+Rakovník"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#047857] underline underline-offset-2 hover:text-[#065f46]"
          >
            Google Maps
          </a>
          .
        </p>
      </div>
    </section>
  );
}
