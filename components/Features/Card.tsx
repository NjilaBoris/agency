import { cn } from "@/lib/utils";
import React from "react";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-50 max-w-2xl mx-auto dark:bg-neutral-400 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "px-4 pb-6 md:px-8 md:pb-12 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-lg md:text-[1.05rem] md:leading-5 font-bold font-display",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      {...rest}
      className={cn(
        "size-5 md:size-8 shrink-0 active:scale-[0.98] transition duration-200 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center",
        className
      )}
    >
      {children}
    </button>
  );
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
        "min-h-40 relative md:min-h-60  perspective-distant overflow-clip mask-radial-from-50% mask-r-from-50% ",
        className
      )}
    >
      {children}
    </div>
  );
};
