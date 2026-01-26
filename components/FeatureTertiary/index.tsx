"use client";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

import { motion } from "motion/react";
import { SkeletonOne } from "./Skeleton/First";
import { SkeletonTwo } from "./Skeleton/Second";
import { IconDesk, IconNetworkOff } from "@tabler/icons-react";

const FeaturesTertiary = () => {
  return (
    <section className="pt-5 md:pt-15 lg:pt-15 overflow-hidden relative">
      <Container className="">
        <div className="grid grid-cols-1 divide-x divide-neutral-200 dark:divide-neutral-800 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800">
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800">Audit Trail</h2>
            <CardDescription>
              Track every agent action with full input-output visibility and
              timestamps.
            </CardDescription>
            <CardSkeleton className="mt-5">
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800">
              Role-Based Access
            </h2>
            <CardDescription>
              Controls who can launch, review, or manage agents based on roles
            </CardDescription>
            <CardSkeleton className="mt-2 overflow-hidden mask-radial-from-50% mask-r-from-90%  mask-l-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
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

export default FeaturesTertiary;

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
        "h-full sm:h-60 relative overflow-clip w-full  md:h-80 flex  flex-col perspective-distant ",
        className
      )}
    >
      {children}
    </div>
  );
};
