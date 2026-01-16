import { cn } from "@/lib/utils";
import React from "react";

const SubHeading = ({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "p";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-base md:text-[0.9rem] text-neutral-400 dark:text-neutral-600 leading-5  font-inter max-w-md",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SubHeading;
