"use client";
import Container from "@/components/Container";
import { cn } from "@/lib/utils";

import { motion } from "motion/react";
import { SkeletonOne } from "./Skeleton/First";
import { SkeletonTwo } from "./Skeleton/Second";
import { IconDesk, IconNetworkOff } from "@tabler/icons-react";

const FeaturesSecondary = () => {
  return (
    <section className="pt-5 md:pt-15 lg:pt-15 overflow-hidden relative">
      <Container className="">
        <div className="grid grid-cols-1 divide-x divide-neutral-200 dark:divide-neutral-800 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800">
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Agent Studio
              </h2>
              <CardDescription>
                Design, Launch and customize AI agents for marketing, sales,
                support and ops, built around your workflows
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mask-radial-from-50% mask-b-from-90% ">
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800">
                Multi-Agent orchestration
              </h2>
              <CardDescription>
                Coordinate multiple agents across workflow using memory,
                interrups, and conditional logic
              </CardDescription>
            </CardContent>
            <CardSkeleton className="mt-2 overflow-hidden mask-radial-from-50% mask-r-from-90%  mask-l-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 mt-10 md:mt-20">
          <div className="p-2">
            <div className="flex items-center gap-2">
              <IconDesk className="fill-neutral-200 stroke-neutral-400 size-5" />
              <h3 className="font-bold leading-0 text-[0.9rem] text-neutral-600">
                WorkFlow Automation
              </h3>
            </div>
            <p className="text-neutral-600 mt-2 text-[0.8rem]">
              Automate campaigns, tickets and CRM updates without manual
              handoffs
            </p>
          </div>
          <div className=" p-2">
            <div className="flex items-center gap-2">
              <IconNetworkOff className="fill-neutral-200 stroke-neutral-400 size-5" />
              <h3 className="font-bold leading-0 text-[0.9rem] text-neutral-600">
                Integration Fabric
              </h3>
            </div>
            <p className="text-neutral-600  mt-2 text-[0.8rem]">
              Connect CRMs, service desk, data warehouse and cloud app
              seamlessly
            </p>
          </div>
          <div className=" p-2">
            <div className="flex items-center gap-2">
              <IconDesk className="fill-neutral-200 stroke-neutral-400 size-5" />
              <h3 className="font-bold leading-0  text-[0.9rem] text-neutral-600">
                Human-in-The-loop
              </h3>
            </div>
            <p className="text-neutral-600  mt-2 text-[0.8rem]">
              App reviews, approvals and escalations without slowing work
            </p>
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
        "h-80 sm:h-60 relative overflow-clip  md:h-80 flex  flex-col perspective-distant ",
        className
      )}
    >
      {children}
    </div>
  );
};
