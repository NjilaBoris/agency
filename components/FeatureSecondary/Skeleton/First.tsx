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

import { motion } from "motion/react";

export const SkeletonOne = () => {
  return (
    <div className="bg-neutral-100 p-2 border mt-5 space-y-2  overflow-hidden border-neutral-200  rounded-t-3xl flex-1 max-w-90  w-full mx-auto">
      <Card
        topIcon={<IconFilePlus className="stroke-white" />}
        title="Connect Data"
        description=" Link CRMs, helpdesks, and APIs to give agents secure, role-based access"
        tags={[
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
        ]}
      />
      <Card
        title="Define Processing Logic"
        description="Create workflows, decision points, and conditional actions for each task"
        topIconClassName="bg-green-500"
        topIcon={<IconSettings className=" stroke-white  size-4" />}
      />
      <Card
        title="Manage Errors"
        description="Add retries, fallback paths, to handle failures automatically"
        topIconClassName="bg-red-500"
        topIcon={
          <IconExclamationCircleFilled className=" stroke-white fill-white  size-4" />
        }
      />
    </div>
  );
};

const Card = ({
  topIcon,
  topIconClassName,
  title,
  description,
  tags,
}: {
  topIconClassName?: string;
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags?: { text: string; icon: React.ReactNode }[];
}) => {
  return (
    <div className="p-4 shadow-black/40 gap-4 ring-1 bg-white flex items-start ring-neutral-400 border border-neutral-300 rounded-2xl">
      <div
        className={cn(
          "rounded-full shrink-0 size-8  bg-blue-500 flex items-center p-2 justify-center",
          topIconClassName
        )}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-sm font-bold text-neutral-800">{title}</p>
        <p className="text-[0.8rem]  text-neutral-600">{description}</p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags &&
            tags.map((tag) => (
              <Tag key={tag.text} text={tag.text} icon={tag.icon} />
            ))}
        </div>
      </div>
    </div>
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
