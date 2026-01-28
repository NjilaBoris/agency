import { Arrow, ArrowReverse } from "@/icons";
import { cn } from "@/lib/utils";
import { IconSettings, IconSparkles } from "@tabler/icons-react";
import React from "react";

const SkeletonThree = () => {
  return (
    <div className="inset-0 max-w-lg pt-2 perspective-[4000px] px-2 flex flex-1  w-full rounded-t-3xl gap-2 flex-col absolute">
      <Arrow className="absolute left-40 -top-4 mx-auto z-30" />
      <ArrowReverse className="absolute left-32 -bottom-10 mx-auto blur-[2px]" />
      <div
        className={cn(
          "flex items-center justify-center gap-20 h-[200%]",
          "absolute -inset-x-[150%] -inset-y-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-300)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-700)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-700)_1px,transparent_1px)]"
        )}
        style={{
          transform: "rotateY(20deg) rotateX(50deg) rotateZ(40deg)",
        }}
      >
        <div className="px-4 py-2 rounded-full flex items-center gap-2 bg-orange-100 text-orange-500 font-medium border border-orange-300">
          <IconSettings className="size-5" />
          <span>Processing</span>
        </div>
        <div className="px-4 py-2 rounded-full flex items-center gap-2 bg-green-100 text-green-500 font-medium border border-green-300">
          <IconSparkles className="size-5" />
          <span>Feedback</span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonThree;
