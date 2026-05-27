import { Composition } from "remotion";
import { RatingCard, type RatingCardProps } from "./RatingCard";

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
    </>
  );
};
