"use client";

import { Player } from "@remotion/player";
import { PromoVideo } from "@/remotion/PromoVideo";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE, LANGUAGES } from "@/lib/data";

const LANG_PROPS = LANGUAGES.map((l) => `${l.flag}|${l.name}`);

export default function RemotionSection() {
  return (
    <section
      id="video"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="video-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Naše příběh v číslech
          </p>
          <h2
            id="video-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            101 recenzí. 5 jazyků. 1 autoškola.
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Stiskněte play. Třicet sekund, které shrnou, proč si nás vybírají
            absolventi z celého světa.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          {/* Glassmorphism-style container */}
          <div className="relative mx-auto max-w-3xl">
            {/* Subtle glow behind player */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
              style={{ background: "radial-gradient(ellipse, #047857 0%, transparent 70%)" }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-xl ring-1 ring-black/5">
              <Player
                component={PromoVideo}
                inputProps={{
                  schoolName: SITE.shortName,
                  city: SITE.city,
                  phone: SITE.phone,
                  reviewCount: SITE.reviewCount,
                  rating: SITE.googleRating,
                  languages: LANG_PROPS,
                }}
                durationInFrames={450}
                fps={30}
                compositionWidth={1920}
                compositionHeight={1080}
                style={{ width: "100%", aspectRatio: "16/9" }}
                controls
                loop
                autoPlay
                clickToPlay
                acknowledgeRemotionLicense
              />
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-[#6b7280]">
            Klikněte na video pro přehrání nebo pozastavení
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
