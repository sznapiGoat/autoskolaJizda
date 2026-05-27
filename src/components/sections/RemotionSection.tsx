"use client";

import { Player } from "@remotion/player";
import { RatingCard } from "@/remotion/RatingCard";
import { FadeIn } from "@/components/ui/FadeIn";

export default function RemotionSection() {
  return (
    <section
      className="bg-[#f9fafb] py-20 sm:py-28"
      aria-labelledby="video-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Naše čísla
          </p>
          <h2
            id="video-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            101 hodnocení. Každé s 5&thinsp;★.
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Toto číslo sami nemůžeme ovlivnit — píší ho naši absolventi. Stiskněte
            play a nechte čísla promluvit.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg mx-auto max-w-3xl">
            <Player
              component={RatingCard}
              inputProps={{
                schoolName: "Autoškola Jízda",
                city: "Rakovník",
                reviewCount: 101,
                rating: 5.0,
              }}
              durationInFrames={450}
              fps={30}
              compositionWidth={1920}
              compositionHeight={1080}
              style={{ width: "100%", aspectRatio: "16/9" }}
              controls
              loop
              autoPlay={false}
              clickToPlay
              acknowledgeRemotionLicense
            />
          </div>
          <p className="mt-4 text-center text-sm text-[#6b7280]">
            Klikněte pro přehrání · Video lze sdílet na sociálních sítích
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
