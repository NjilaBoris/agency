import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconExclamationCircle,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

const SkeletonOne = () => {
  return (
    <div className="perspective-distant rotate-z-15 -rotate-y-20 rotate-x-30 scale-[1.2] h-full w-full translate-y-55 -translate-x-12 ">
      <SkeletonCard
        className="absolute bottom-0 left-7 max-w-[90%] z-23"
        badge={<Badge text="10002" variant="danger" />}
        title=" Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using product info, audience
        data, and past results."
        icon={<IconCircleDashedCheck className="size-4" />}
      />
      <SkeletonCard
        className="absolute bottom-10 left-5 z-20"
        badge={<Badge text="10S" variant="success" />}
        title="Issue Tracker"
        description="Creates clear, ready-to-use campaign briefs using product info, audience
        data, and past results."
        icon={<IconExclamationCircle className="size-4" />}
      />
      <SkeletonCard
        className="absolute bottom-20 max-w-[80%] left-3 z-10"
        badge={<Badge text="40S" variant="warning" />}
        title="Risk Tracker"
        description="Creates clear, ready-to-use campaign briefs using product info, audience
        data, and past results."
        icon={<IconPrison className="size-4" />}
      />
    </div>
  );
};

export default SkeletonOne;

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
  badge: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] shadow-2xl h-fit my-auto p-2 mx-auto w-full rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="font-normal text-[0.7rem] dark:text-white text-black">
          {title}
        </p>
        {badge}
      </div>
      <p className="text-[0.7rem] text-neutral-500 dark:text-neutral-400 font-light mt-3">
        {description}
      </p>
      <div className="flex items-center gap-2 flex-wrap mt-2">
        <Tag text="Google Ads" />
        <Tag text="Saas" />
        <Tag text="Content" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="px-2 py-1  text-[0.6rem] font-medium rounded-sm bg-neutral-200 dark:bg-neutral-700">
      {text}
    </div>
  );
};
const Badge = ({
  variant = "success",
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text?: string;
}) => {
  return (
    <div
      className={cn(
        "p-1  rounded-full border inline-flex  items-center  gap-1 w-fit",
        variant === "danger" && "bg-red-300/10  border-red-300 text-red-500",
        variant === "warning" &&
          "bg-yellow-300/10  border-yellow-300 text-yellow-500",
        variant === "success" &&
          "bg-green-300/10  border-green-300 text-green-500"
      )}
    >
      <IconClock className={cn("size-3 shrink-0")} />
      <IconRipple className="size-3 shrink-0" />
      <p className="text-[0.6rem] leading-none font-bold">{text}</p>
    </div>
  );
};
