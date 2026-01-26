"use client";

import { Slack, Stripe } from "@/icons";
import { cn } from "@/lib/utils";
import { IconBrandBlogger, IconCircleDashedCheck } from "@tabler/icons-react";
import { motion } from "motion/react";

export const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg) ",
        overflow: "hidden",
      }}
      className="bg-neutral-100   border   border-neutral-200 flex items-center justify-center  rounded-t-3xl flex-1   w-full"
    >
      <Circle className="flex absolute  translate-y-1/2 items-center justify-center border-neutral-200 shadow-sm">
        <IconBrandBlogger className="stroke-neutral-400 size-8 stroke-1 " />
      </Circle>
      <Circle className="shadow-sm  translate-y-[1%] animate-orbit [--orbit-transition:13s] size-50 bg-neutral-100/80 z-9 relative">
        <div className="flex items-center absolute -translate-x-10 justify-center z-20 bg-white rounded-sm p-1 ring-1 ring-black/10 border border-transparent shadow-black/10 size-8">
          <Slack className="size-10 " />
        </div>
      </Circle>
      <Circle className="shadow-sm translate-y-[3%] animate-orbit [--orbit-transition:8s]  size-75 bg-neutral-50/30 z-8">
        <div className="flex items-center absolute translate-x-1 justify-center z-20 bg-white rounded-sm p-1 ring-1 ring-black/10 border border-transparent shadow-black/10 size-8">
          <SkeletonCard
            className="absolute bottom-0 left-12 shadow-sm"
            title="Campaign Planner"
            description="Creates clear, ready-to-use campaign briefs using brief info, audience data, and past results"
            icon={
              <IconCircleDashedCheck className="size-5 fill-blue-300 stroke-blue-400" />
            }
          />
          <Stripe className="size-10 " />
        </div>
      </Circle>
      <Circle className="shadow-sm  size-95 -translate-y-[8%] bg-neutral-50/30 z-7"></Circle>
    </div>
  );
};

export const Circle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "size-40 bg-white border z-10  border-transparent rounded-full absolute inset-0 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        " shadow-2xl h-fit my-auto p-2 mx-auto w-fit rounded-2xl bg-neutral-100 border border-neutral-200 dark:border-neutral-700",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="font-normal text-[0.2rem] text-balance dark:text-white text-black">
          {title}
        </p>
        {badge}
      </div>
      <p className="text-[0.2rem]  text-neutral-400/80 dark:text-neutral-400 font-medium mt-1">
        {description}
      </p>
    </div>
  );
};
