import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export interface RatingCardProps {
  schoolName: string;
  city: string;
  reviewCount: number;
  rating: number;
}

function Star({ delay, fps }: { delay: number; fps: number }) {
  const frame = useCurrentFrame();
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 72,
        transform: `scale(${scale})`,
        color: "#047857",
        lineHeight: 1,
      }}
    >
      ★
    </span>
  );
}

export const RatingCard: React.FC<RatingCardProps> = ({
  schoolName,
  city,
  reviewCount,
  rating,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in background
  const bgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Logo slide up
  const logoY = interpolate(frame, [10, 40], [40, 0], { extrapolateRight: "clamp" });
  const logoOpacity = interpolate(frame, [10, 40], [0, 1], { extrapolateRight: "clamp" });

  // Rating number count up
  const ratingDisplay = interpolate(frame, [30, 90], [0, rating], {
    extrapolateRight: "clamp",
  }).toFixed(1);

  // Review count count up
  const countDisplay = Math.round(
    interpolate(frame, [40, 110], [0, reviewCount], { extrapolateRight: "clamp" })
  );

  // Card scale
  const cardScale = spring({ frame: frame - 5, fps, config: { damping: 14 } });

  // Tagline fade in
  const tagOpacity = interpolate(frame, [120, 160], [0, 1], { extrapolateRight: "clamp" });

  // Outro fade to white
  const outroOpacity = interpolate(frame, [400, 450], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#ffffff",
        opacity: bgOpacity,
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
      }}
    >
      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.3,
        }}
      />

      {/* School name */}
      <div
        style={{
          transform: `translateY(${logoY}px)`,
          opacity: logoOpacity,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#6b7280",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {city}
        </p>
        <p
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#111827",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {schoolName}
        </p>
      </div>

      {/* Rating card */}
      <div
        style={{
          transform: `scale(${cardScale})`,
          zIndex: 1,
          backgroundColor: "#ffffff",
          border: "2px solid #e5e7eb",
          borderRadius: 24,
          padding: "48px 80px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          minWidth: 640,
        }}
      >
        {/* Stars */}
        <div style={{ display: "flex", gap: 16 }}>
          {[0, 8, 16, 24, 32].map((delay, i) => (
            <Star key={i} delay={delay + 30} fps={fps} />
          ))}
        </div>

        {/* Rating */}
        <p
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#111827",
            lineHeight: 1,
            letterSpacing: "-0.05em",
          }}
        >
          {ratingDisplay}
        </p>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 2,
            backgroundColor: "#047857",
            borderRadius: 2,
          }}
        />

        {/* Review count */}
        <p
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#047857",
          }}
        >
          {countDisplay}× hodnocení Google
        </p>
      </div>

      {/* Tagline */}
      <p
        style={{
          opacity: tagOpacity,
          fontSize: 32,
          color: "#6b7280",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          zIndex: 1,
        }}
      >
        Řidičský průkaz v Rakovníku. S lidským přístupem.
      </p>

      {/* Outro white overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          opacity: outroOpacity,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
