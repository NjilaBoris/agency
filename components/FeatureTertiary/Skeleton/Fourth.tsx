"use client";
import { cn } from "@/lib/utils";
import {
  IconBrandSharik,
  IconClipboardData,
  IconCloudFilled,
  IconFeatherFilled,
  IconFileDotsFilled,
  IconFileSpreadsheet,
  IconFilter2Search,
  IconPointerUp,
} from "@tabler/icons-react";

import { motion } from "motion/react";

import { useEffect, useRef, useState } from "react";

export const SkeletonFour = () => {
  const items = [
    {
      className: "bg-blue-100 border border-blue-200",
      title: "Brand & Style",
      icon: <IconClipboardData className="size-4 text-blue-500" />,
      description:
        " Link CRMs, helpdesks, and APIs to give agents secure, role-based access",
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
            <IconFileSpreadsheet className="fill-green-500 stroke-white stroke-[1px] size-4" />
          ),

          text: "Sheets",
        },
      ],
    },
    {
      title: "Compliance & Policy",
      className: "bg-green-100 border border-green-200",
      icon: <IconFileDotsFilled className="text-green-500 size-4" />,
      description:
        " Ensure your AI agents follow company policies and regulatory requirement with built-in compliance controls",
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
            <IconFileSpreadsheet className="fill-green-500 stroke-white stroke-[1px] size-4" />
          ),

          text: "Sheets",
        },
      ],
    },
    {
      className: "bg-indigo-100 border border-indigo-200",
      title: "Content Safety Filters",
      icon: <IconFeatherFilled className="text-indigo-500 size-4" />,
      description:
        "Protect your brand from harmful content with built-in safety filters that block sentitive or innappropriate amterial",
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
            <IconFileSpreadsheet className="fill-green-500 stroke-white stroke-[1px] size-4" />
          ),

          text: "Sheets",
        },
      ],
    },
    {
      className: "bg-neutral-100 border border-neutral-200",
      title: "Approval Triggers",
      icon: <IconPointerUp className="text-neutral-500 size-4" />,
      description:
        "Automate content review by setting custom approval triggers based on content type, tone, or sensitivity",
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
            <IconFileSpreadsheet className="fill-green-500 stroke-white stroke-[1px] size-4" />
          ),

          text: "Sheets",
        },
      ],
    },
    {
      className: "bg-purple-100 border border-purple-200",
      title: "Output Quality Checks",
      icon: <IconFilter2Search className="text-purple-500 size-4" />,
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
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
            <IconFileSpreadsheet className="fill-green-500 stroke-white stroke-[1px] size-4" />
          ),

          text: "Sheets",
        },
      ],
    },
  ];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);
  const [selected, setSelected] = useState(items[0]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % items.length;
      setSelected(items[currentIndexRef.current]);
    }, 2000);
  };
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <div>
      <div className="flex items-center mx-auto max-w-lg justify-center gap-4 flex-wrap mb-4">
        {items.map((item, index) => (
          <button
            onClick={() => setSelected(item)}
            key={index}
            className={cn(
              "px-2 py-1 text-[0.6rem] relative opacity-50 cursor-pointer active:scale-98 transition-all duration-200 gap-2 rounded-sm items-center justify-center flex",
              item.className,
              selected.title === item.title && "opacity-100"
            )}
          >
            {selected.title === item.title && (
              <motion.div
                layoutId="selected"
                className="absolute inset-0 rounded-[5px] shadow-inner"
              ></motion.div>
            )}
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>

      <div className="bg-neutral-100 p-2 border mt-5 space-y-2  overflow-hidden border-neutral-200  rounded-t-3xl flex-1 max-w-90  w-full mx-auto">
        <Card
          topIcon={selected.icon}
          title={selected.title}
          description={selected.description}
          tags={selected.tags}
          className={selected.className}
        />
      </div>
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  className,
  tags,
}: {
  topIcon: React.ReactNode;
  className?: string;
  title: string;
  description: string;
  tags?: { text: string; icon: React.ReactNode }[];
}) => {
  return (
    <motion.div
      key={title}
      className="p-4 shadow-black/40 flex-col gap-4 ring-1 bg-white flex items-start ring-neutral-400 border border-neutral-300 rounded-2xl"
    >
      <div className="flex items-center  gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "rounded-full shrink-0 size-8    flex items-center p-2 justify-center",
            className
          )}
        >
          {topIcon}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            delay: 0.1,
          }}
          className="text-sm font-bold text-neutral-800"
        >
          {title}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-[0.8rem]  text-neutral-600">Tone Guidelines</p>
        <p className="text-[0.8rem] mt-2 mb-4 text-neutral-600 rounded-sm border border-neutral-200 px-2 py-1 border-dashed">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags &&
            tags.map((tag, index) => (
              <motion.div
                key={tag.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Tag key={tag.text} text={tag.text} icon={tag.icon} />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className=" flex items-center rounded-sm gap-2 px-1 py-0.5 border border-neutral-100 text-sm">
      {icon}
      <p className="text-[0.6rem] text-neutral-500"> {text}</p>
    </div>
  );
};
