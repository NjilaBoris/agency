import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-xl md:text-3xl lg:text-5xl  tracking-light font-bold",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
