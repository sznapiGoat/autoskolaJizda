import { Star } from "lucide-react";
import { TESTIMONIALS, SITE } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

// Curated, varied selection (calm approach, fear → enjoyment, foreign students)
const FEATURED_IDS = [1, 3, 4, 6, 8, 33];
const FEATURED = FEATURED_IDS.map(
  (id) => TESTIMONIALS.find((t) => t.id === id)!
).filter(Boolean);

const AVATAR_TONES = [
  "bg-[#047857]",
  "bg-[#0e7490]",
  "bg-[#b45309]",
  "bg-[#7c3aed]",
  "bg-[#be123c]",
  "bg-[#1d4ed8]",
];

function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34A21.97 21.97 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.13 29.93 1 24 1 15.4 1 7.96 5.93 4.34 13.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} z 5 hvězd`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} className="fill-gold text-gold" aria-hidden="true" />
      ))}
    </span>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="recenze"
      className="bg-[#f0fdf4] py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="max-w-2xl mb-10">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            <GoogleG size={16} /> Google recenze
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight"
          >
            {SITE.reviewCount} recenzí. Průměr {SITE.googleRating.toFixed(1)}&thinsp;★.
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#4b5563] leading-relaxed">
            Každé hodnocení si lze ověřit přímo na Google. Nechlubíme se čísly,
            necháváme mluvit naše absolventy.
          </p>
        </FadeIn>

        {/* Summary pill */}
        <FadeIn direction="up" delay={0.1} className="mb-12">
          <div
            className="inline-flex items-center gap-5 bg-white border border-[#bbf7d0] rounded-2xl px-6 py-4 shadow-sm"
            aria-label={`Celkové hodnocení: ${SITE.googleRating} z 5, ${SITE.reviewCount} recenzí`}
          >
            <div className="flex items-center gap-2">
              <GoogleG size={26} />
              <p className="text-[2rem] font-extrabold text-[#111827] leading-none">
                {SITE.googleRating.toFixed(1)}
              </p>
            </div>
            <StarRow count={5} />
            <div className="h-10 w-px bg-[#bbf7d0]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#047857]">100 %</p>
              <p className="text-sm text-[#6b7280]">pětihvězdičkových</p>
            </div>
          </div>
        </FadeIn>

        {/* Static grid of best reviews */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {FEATURED.map((review, i) => (
            <StaggerItem key={review.id}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-[#e5e7eb] bg-white px-6 py-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <StarRow count={review.rating} />
                  <GoogleG size={16} />
                </div>
                <blockquote className="flex-1 text-[0.9375rem] text-[#374151] leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-3 border-t border-[#f3f4f6]">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-white text-xs font-bold shrink-0 ring-2 ring-white shadow ${
                      AVATAR_TONES[i % AVATAR_TONES.length]
                    }`}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#111827]">{review.name}</p>
                    <time dateTime={review.date} className="text-xs text-[#6b7280]">
                      {new Date(review.date + "-01").toLocaleDateString("cs-CZ", {
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/search/Autoškola+Jízda+Rakovník"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#d1d5db] bg-white px-6 py-3 text-sm font-semibold text-[#111827] shadow-sm hover:border-[#9ca3af] hover:bg-[#f9fafb] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
          >
            <GoogleG size={16} />
            Zobrazit všech {SITE.reviewCount} recenzí na Google
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
