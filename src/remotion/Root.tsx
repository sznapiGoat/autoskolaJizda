import { Composition } from "remotion";
import { RatingCard, type RatingCardProps } from "./RatingCard";
import { PromoVideo, type PromoVideoProps } from "./PromoVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AutoskolaRatingCard"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={RatingCard as any}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          schoolName: "Autoškola Jízda",
          city: "Rakovník",
          reviewCount: 101,
          rating: 5.0,
        }}
      />
      <Composition
        id="PromoVideo"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={PromoVideo as any}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          schoolName: "Autoškola Jízda",
          city: "Rakovník",
          phone: "+420 728 492 692",
          reviewCount: 101,
          rating: 5.0,
          languages: [
            "🇸🇦|Arabština",
            "🇻🇳|Vietnamština",
            "🇷🇺|Ruština",
            "🇬🇧|Angličtina",
            "🇨🇳|Čínština",
          ],
        } satisfies PromoVideoProps}
      />
    </>
  );
};
