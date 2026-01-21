"use client";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

import { motion } from "motion/react";
import { SkeletonOne } from "./Skeleton/First";

const FeaturesSecondary = () => {
  return (
    <section className="pt-5 md:pt-15 lg:pt-15 overflow-hidden relative">
      <Container className="">
        <div className="grid grid-cols-1 divide-x divide-neutral-200 dark:divide-neutral-800 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800">
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800">Agent Studio</h2>
            <CardDescription>
              Design, Launch and customize AI agents for marketing, sales,
              support and ops, built around your workflows
            </CardDescription>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800">
              Multi-Agent orchestration
            </h2>
            <CardDescription>
              Coordinate multiple agents across workflow using memory,
              interrups, and conditional logic
            </CardDescription>
            <CardSkeleton>avb</CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 md:text-[0.8rem] mt-2 max-w-sm text-balance">
      {children}
    </p>
  );
};

export default FeaturesSecondary;

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-80 sm:h-60 relative md:h-80 flex flex-col perspective-distant ",
        className
      )}
    >
      {children}
    </div>
  );
};
