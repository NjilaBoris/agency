"use client";

import { LogoIcon } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export const SkeletonTwo = () => {
  return (
    <div className="h-full mt-5 px-8 gap-2  rounded-t-3xl flex-1 flex flex-col items-center justify-center  w-full">
      <div className="grid grid-cols-4 justify-center max-w-[18rem] mx-auto gap-1">
        <Item />
        <Item src="/img1.avif" />
        <Item src="/img3.avif" />
        <Item />
      </div>
      <div className="grid grid-cols-5 gap-1">
        <Item />
        <Item src="/img2.avif" />
        <Item
          containerClassName="to-black/50 via-transparent to-black/50"
          className="overflow-hidden"
        >
          <div className="bg-white w-full h-full flex items-center justify-center rounded-xl">
            <LogoIcon className="size-12" />
          </div>
        </Item>
        <Item src="/img4.avif" />
        <Item />
      </div>
      <div className="grid grid-cols-4 justify-center max-w-[18rem] mx-auto gap-1 ">
        <Item />
        <Item src="/img5.avif" />
        <Item src="/img6.avif" />
        <Item />
      </div>
    </div>
  );
};
const Item = ({
  children,
  className,
  containerClassName,
  src,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  src?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full justify-self-center aspect-square rounded-xl border border-dashed border-neutral-200 relative p-px",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-neutral)]/10",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 0.8 + 0.2,
        }}
        className={cn(
          "flex items-center p-px relative justify-center w-full h-full  rounded-xl  z-10",
          src && "bg-linear-to-br from-white via-transparent to-white",
          containerClassName
        )}
      >
        {children ?? (
          <>
            {src && (
              <div>
                <Image
                  src={src}
                  alt="item"
                  height={80}
                  width={80}
                  className="object-cover aspect-square rounded-xl relative z-20"
                />
              </div>
            )}
          </>
        )}
      </motion.div>
      <div className="absolute inset-0  bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] bg-fixed"></div>
    </div>
  );
};
