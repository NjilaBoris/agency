"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

const LandingImages = () => {
  return (
    <div className="relative min-h-40 lg:min-h-90 md:min-h-80 overflow-clip w-full pt-30 perspective-distant">
      <motion.div
        className="perspective-[4000px] shadow-2xl shadow-neutral-400"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <Image
          src="/Dashboard.png"
          alt="AgentForce"
          height={1080}
          width={1920}
          className={cn(
            "rounded-lg absolute inset-0 mask-r-from-20% mask-b-from-20% shadow-2xl"
          )}
          style={{ transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeOut",
        }}
        className="perspective-[4000px] translate-x-20 -translate-y-40"
      >
        <Image
          src="/Dashboard.png"
          alt="AgentForce"
          height={1080}
          width={1920}
          className={cn(
            "rounded-lg absolute inset-0 mask-r-from-50% md:translate-y-20 mask-b-from-50% shadow-2xl dark:border-neutral-400 border-4 border-neutral-200"
          )}
          style={{ transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)" }}
        />
      </motion.div>
    </div>
  );
};

export default LandingImages;
