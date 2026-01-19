import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import ShieldIllustration from "@/Illustration/General";
import React from "react";

const SkeletonThree = () => {
  return (
    <div className="flex   items-center justify-center">
      <ShieldIllustration />
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-70% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-700"
        glowColorLightVar="--color-neutral-700"
        colorDarkVar="--color-neutral-600"
        glowColorDarkVar="--color-sky-900"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
};

export default SkeletonThree;
