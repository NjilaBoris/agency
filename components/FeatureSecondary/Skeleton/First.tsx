"use client";

import { cn } from "@/lib/utils";
import {
  IconBrandSharik,
  IconCloudFilled,
  IconExclamationCircleFilled,
  IconFilePlus,
  IconFileSpreadsheet,
  IconSettings,
} from "@tabler/icons-react";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Item = {
  title: string;
  description: string;
  topIcon: React.ReactNode;
  topIconClassName?: string;
  tags?: { text: string; icon: React.ReactNode }[];
};

export const SkeletonOne = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const intervalRef = useRef<number | null>(null);

  const items: Item[] = [
    {
      title: "Connect Data",
      description:
        "Link CRMs, helpdesks, and APIs to give agents secure, role-based access",
      topIcon: <IconFilePlus className="stroke-white" />,
      tags: [
        {
          icon: <IconCloudFilled className="fill-blue-500 size-4" />,
          text: "Salesforce",
        },
        {
          icon: (
            <IconBrandSharik className="fill-red-500 size-4 stroke-white" />
          ),
          text: "Hubspot",
        },
        {
          icon: (
            <IconFileSpreadsheet className="fill-green-500 stroke-white size-4" />
          ),
          text: "Sheets",
        },
      ],
    },
    {
      title: "Define Processing Logic",
      description:
        "Create workflows, decision points, and conditional actions for each task",
      topIconClassName: "bg-green-500",
      topIcon: <IconSettings className="stroke-white size-4" />,
    },
    {
      title: "Manage Errors",
      description:
        "Add retries, fallback paths, to handle failures automatically",
      topIconClassName: "bg-red-500",
      topIcon: (
        <IconExclamationCircleFilled className="fill-white stroke-white size-4" />
      ),
    },
  ];

  const [activeCards, setActiveCards] = useState<Item[]>([]);

  useEffect(() => {
    if (!isInView || intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      setActiveCards((prev) => {
        if (prev.length >= items.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return prev;
        }
        return [items[prev.length], ...prev];
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isInView, items]);

  return (
    <motion.div
      ref={ref}
      layout
      className="bg-neutral-100 p-2 border mt-5 space-y-2 overflow-hidden border-neutral-200 rounded-t-3xl flex-1 max-w-90 w-full mx-auto"
    >
      {activeCards.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

const Card = ({
  topIcon,
  topIconClassName,
  title,
  description,
  tags,
}: Item) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="p-4 shadow-black/40 gap-4 ring-1 bg-white flex items-start ring-neutral-400 border border-neutral-300 rounded-2xl"
    >
      <div
        className={cn(
          "rounded-full shrink-0 size-8 bg-blue-500 flex items-center justify-center",
          topIconClassName
        )}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-sm font-bold text-neutral-800">{title}</p>
        <p className="text-[0.8rem] text-neutral-600">{description}</p>
        {tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag.text} {...tag} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center rounded-sm gap-2 px-1 py-0.5 border border-neutral-100">
      {icon}
      <p className="text-[0.6rem] text-neutral-500">{text}</p>
    </div>
  );
};
