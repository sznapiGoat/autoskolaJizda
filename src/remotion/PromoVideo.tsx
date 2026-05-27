import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";

export interface PromoVideoProps {
  schoolName: string;
  city: string;
  phone: string;
  reviewCount: number;
  rating: number;
  languages: string[];
}

/* ── shared helpers ── */

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1);
}

function StarRow({ count, delay, fps }: { count: number; delay: number; fps: number }) {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {Array.from({ length: count }).map((_, i) => {
        const sc = spring({ frame: frame - delay - i * 6, fps, config: { damping: 14, stiffness: 220 } });
        return (
          <span key={i} style={{ fontSize: 56, transform: `scale(${sc})`, display: "inline-block", color: "#047857" }}>
            ★
          </span>
        );
      })}
    </div>
  );
}

/* ── ACT 1: 101 Google Reviews (frames 0–149) ── */

function Act1({ reviewCount, rating }: { reviewCount: number; rating: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const containerY = interpolate(frame, [0, 18], [30, 0], { extrapolateRight: "clamp" });

  const rawCount = lerp(0, reviewCount, easeOut(Math.min(frame / 90, 1)));
  const displayCount = Math.round(rawCount);

  const rawRating = lerp(0, rating, easeOut(Math.min(frame / 80, 1)));
  const displayRating = rawRating.toFixed(1);

  const labelOpacity = interpolate(frame, [30, 55], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        opacity: containerOpacity,
        transform: `translateY(${containerY}px)`,
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#e5e7eb 1px,transparent 1px),linear-gradient(90deg,#e5e7eb 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.25,
        }}
      />

      {/* Label */}
      <p
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: "#6b7280",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          opacity: labelOpacity,
          position: "relative",
        }}
      >
        Google recenze
      </p>

      {/* Card */}
      <div
        style={{
          position: "relative",
          background: "#fff",
          border: "2px solid #e5e7eb",
          borderRadius: 28,
          padding: "56px 96px",
          boxShadow: "0 24px 72px rgba(0,0,0,0.09)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          minWidth: 640,
        }}
      >
        <StarRow count={5} delay={20} fps={fps} />
        <p
          style={{
            fontSize: 128,
            fontWeight: 900,
            color: "#111827",
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          {displayCount}×
        </p>
        <div style={{ width: 80, height: 3, background: "#047857", borderRadius: 3 }} />
        <p style={{ fontSize: 52, fontWeight: 700, color: "#047857" }}>
          Průměr {displayRating} ★
        </p>
      </div>
    </AbsoluteFill>
  );
}

/* ── ACT 2: Sliding languages (frames 150–299) ── */

function Act2({ languages }: { languages: string[] }) {
  const frame = useCurrentFrame();

  const bgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const headlineY = interpolate(frame, [8, 35], [40, 0], { extrapolateRight: "clamp" });
  const headlineOpacity = interpolate(frame, [8, 35], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#f0fdf4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 52,
        opacity: bgOpacity,
      }}
    >
      {/* Border accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: "6px solid #047857",
          borderRadius: 0,
          pointerEvents: "none",
          opacity: 0.15,
        }}
      />

      <p
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: "#047857",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
        }}
      >
        Výuka v cizích jazycích
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
          width: "100%",
          maxWidth: 720,
        }}
      >
        {languages.map((lang, i) => {
          const entryProgress = interpolate(
            frame,
            [i * 16 + 10, i * 16 + 38],
            [0, 1],
            { extrapolateRight: "clamp" }
          );
          return (
            <div
              key={lang}
              style={{
                opacity: entryProgress,
                transform: `translateX(${lerp(60, 0, easeOut(entryProgress))}px)`,
                display: "flex",
                alignItems: "center",
                gap: 24,
                background: "#fff",
                border: "2px solid #bbf7d0",
                borderRadius: 16,
                padding: "20px 40px",
                width: "100%",
                boxShadow: "0 4px 20px rgba(4,120,87,0.06)",
              }}
            >
              <span style={{ fontSize: 42, lineHeight: 1 }}>{lang.split("|")[0]}</span>
              <span style={{ fontSize: 32, fontWeight: 600, color: "#111827" }}>
                {lang.split("|")[1]}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

/* ── ACT 3: Final frame (frames 300–449) ── */

function Act3({ schoolName, city, phone }: { schoolName: string; city: string; phone: string }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const badgeScale = spring({ frame: frame - 15, fps, config: { damping: 12, stiffness: 180 } });
  const nameOpacity = interpolate(frame, [25, 50], [0, 1], { extrapolateRight: "clamp" });
  const nameY = interpolate(frame, [25, 50], [30, 0], { extrapolateRight: "clamp" });
  const phoneOpacity = interpolate(frame, [45, 70], [0, 1], { extrapolateRight: "clamp" });
  const ctaOpacity = interpolate(frame, [65, 90], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 36,
        opacity: bgOpacity,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#e5e7eb 1px,transparent 1px),linear-gradient(90deg,#e5e7eb 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.25,
        }}
      />

      {/* L badge */}
      <div
        style={{
          width: 96,
          height: 96,
          background: "#047857",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${badgeScale})`,
          position: "relative",
        }}
      >
        <span style={{ fontSize: 56, fontWeight: 900, color: "#fff", lineHeight: 1 }}>L</span>
      </div>

      {/* School name */}
      <div
        style={{
          textAlign: "center",
          opacity: nameOpacity,
          transform: `translateY(${nameY}px)`,
          position: "relative",
        }}
      >
        <p style={{ fontSize: 28, fontWeight: 600, color: "#6b7280", marginBottom: 8, letterSpacing: "0.08em" }}>
          {city}
        </p>
        <p
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#111827",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {schoolName}
        </p>
      </div>

      {/* Divider */}
      <div style={{ width: 80, height: 3, background: "#047857", borderRadius: 3, position: "relative" }} />

      {/* Phone */}
      <p
        style={{
          fontSize: 52,
          fontWeight: 700,
          color: "#047857",
          opacity: phoneOpacity,
          position: "relative",
        }}
      >
        {phone}
      </p>

      {/* CTA tag */}
      <p
        style={{
          fontSize: 26,
          color: "#6b7280",
          fontWeight: 400,
          opacity: ctaOpacity,
          position: "relative",
        }}
      >
        Volejte kdykoliv · autoskolajizda.cz
      </p>
    </AbsoluteFill>
  );
}

/* ── Main composition ── */

export const PromoVideo: React.FC<PromoVideoProps> = ({
  schoolName,
  city,
  phone,
  reviewCount,
  rating,
  languages,
}) => {
  return (
    <AbsoluteFill style={{ background: "#ffffff", fontFamily: "system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={150}>
        <Act1 reviewCount={reviewCount} rating={rating} />
      </Sequence>

      <Sequence from={150} durationInFrames={150}>
        <Act2 languages={languages} />
      </Sequence>

      <Sequence from={300} durationInFrames={150}>
        <Act3 schoolName={schoolName} city={city} phone={phone} />
      </Sequence>
    </AbsoluteFill>
  );
};
