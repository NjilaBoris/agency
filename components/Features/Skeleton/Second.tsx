import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";

const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
      }}
      className={cn(
        "max-w-[85%] shadow-2xl h-full flex flex-col  my-auto p-2 mx-auto w-full rounded-2xl bg-neutral-100 border border-neutral-300 dark:border-neutral-700",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
        "perspective-distant group"
      )}
    >
      <div className="flex gap-3 items-center">
        <IconCircleDashedCheck className="size-4" />
        <p className="font-normal text-[0.7rem] dark:text-white text-black">
          Campaign Planner
        </p>
      </div>
      <div className="h-50  relative bg-neutral-200 mt-4 border border-neutral-200 rounded-2xl">
        <Pattern />
        <div className="absolute scale-110 group-hover:scale-100 transition-all group-hover:translate-y-0 group-hover:translate-x-0 duration-300  translate-x-5 -translate-y-5 inset-0  bg-white h-full w-full">
          <Row
            icon={<IconCheck className="size-4 stroke-white fill-green-500" />}
            text="Fetching Data"
            time="10s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4 stroke-white fill-green-500" />}
            text="Processing Data"
            time="20s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4 stroke-white fill-green-500" />}
            text="Perfoming Action"
            time="30s"
          />
          <GradientHr />
          <Row
            icon={<IconCheck className="size-4 stroke-white fill-green-500" />}
            text="Waiting"
            time="40s"
          />
          <GradientHr />
          <Row
            icon={<IconLoader2 className="size-4 text-white animate-spin" />}
            text="Generating Report"
            time="50s"
            variant="warning"
          />
        </div>
      </div>
    </div>
  );
};
const Row = ({
  icon,
  text,
  time,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  variant?: "success" | "danger" | "warning";
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "size-4 flex items-center justify-center rounded-full",
            variant === "danger" && "bg-red-500 ",
            variant === "warning" && "bg-yellow-500",
            variant === "success" && "bg-green-500"
          )}
        >
          {icon}
        </div>
        <p className="text-neutral-500 text-[0.8rem] font-medium">{text}</p>
      </div>
      <div className="flex items-center gap-1 text-neutral-400">
        <IconRipple className="size-3" />
        <p className="text-[0.8rem] font-bold">{time}</p>
      </div>
    </div>
  );
};

const GradientHr = () => {
  return (
    <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>
  );
};

export default SkeletonTwo;

const Pattern = () => {
  return (
    <div className="absolute inset-0  bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};
