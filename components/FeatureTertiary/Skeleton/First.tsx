"use client";

import { cn } from "@/lib/utils";
import {
  IconAnalyzeFilled,
  IconChartArea,
  IconClock,
  IconFileSearch,
  IconListSearch,
  IconMail,
  IconPercentage40,
  IconPercentage60,
  IconUserCheck,
} from "@tabler/icons-react";

import { motion } from "motion/react";

export const SkeletonOne = () => {
  const cardItems = [
    {
      icon: <IconMail className="size-3 " />,
      badge: (
        <div className="flex gap-1 px-1 py-0.5 rounded-md border items-center border-neutral-200">
          <IconClock className="size-3 text-neutral-500" />
          <p className="text-[0.51rem] font-bold text-neutral-600">15s</p>
        </div>
      ),

      title: "Personalized Email",
      description: " Personalized Email sent to ..... @gmail.com",
    },
    {
      icon: <IconAnalyzeFilled className="size-3 " />,
      badge: (
        <div className="flex gap-1 px-1 py-0.5 rounded-md border bg-red-100 items-center border-red-200">
          <p className="text-[0.51rem] font-bold text-red-500">FAILED</p>
        </div>
      ),

      title: "Peer Review",
      description:
        "Reviewed and approved 2 outputs from Content drafting agent",
      iconClassName: "bg-purple-500",
    },
    {
      icon: <IconListSearch className="size-3 " />,
      badge: (
        <div className="flex gap-1 px-1 py-0.5 rounded-md border bg-yellow-100 items-center border-orange-200">
          <p className="text-[0.51rem] font-bold text-yellow-500">PROCESSING</p>
        </div>
      ),

      title: "Content Drafting",
      description: "Generate draft campaign brief",
      iconClassName: "bg-orange-500",
    },
    {
      icon: <IconUserCheck className="size-3 " />,
      badge: (
        <div className="flex gap-1 px-1 py-0.5 rounded-md border bg-orange-100 items-center border-orange-200">
          <p className="text-[0.51rem] font-bold text-yellow-500">PROCESSING</p>
        </div>
      ),

      title: "Admin Approval",
      description: "Final approval of marketing copy before publishing",
      iconClassName: "bg-neutral-900",
    },
    {
      icon: <IconPercentage40 className="size-3 " />,
      badge: (
        <div className="flex gap-1 px-1 py-0.5 rounded-md border items-center border-neutral-200">
          <IconClock className="size-3 text-neutral-500" />
          <p className="text-[0.51rem] font-bold text-neutral-600">2s</p>
        </div>
      ),

      title: "Weekly Campaign Report",
      description: "Generate campaign performance report",
      iconClassName: "bg-indigo-500",
    },
    {
      icon: <IconFileSearch className="size-3 " />,
      badge: (
        <div className="flex gap-1 px-1 py-0.5 rounded-md border items-center border-neutral-200">
          <IconClock className="size-3 text-neutral-500" />
          <p className="text-[0.51rem] font-bold text-neutral-600">5s</p>
        </div>
      ),

      title: "SEO AUDIT",
      description: "Checked 50 web pages for SEO compliance",
      iconClassName: "bg-neutral-900",
    },
    {
      icon: <IconChartArea className="size-3 " />,
      badge: (
        <div className="flex gap-1 px-1 py-0.5 rounded-md border bg-red-100 items-center border-red-200">
          <p className="text-[0.51rem] font-bold text-red-500">FAILED</p>
        </div>
      ),
      title: "Price Monitoring Agent",
      description: "Checked competitor prices for top-selling product",
      iconClassName: "bg-blue-500",
    },
    {
      icon: <IconFileSearch className="size-3 " />,
      badge: (
        <div className="flex gap-1 px-1 py-0.5 rounded-md border items-center border-neutral-200">
          <IconClock className="size-3 text-neutral-500" />
          <p className="text-[0.51rem] font-bold text-neutral-600">2s</p>
        </div>
      ),
      title: "Research",
      description: "Searched 25 web pages for industry trends",
      iconClassName: "bg-green-500",
    },
  ];
  return (
    <div className="bg-neutral-100 overflow-hidden p-1.5    border inset-y-0 absolute inset-x-8   flex flex-col  border-neutral-200  rounded-t-3xl flex-1  w-full ">
      <Card>
        {cardItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-full"
          >
            <CardItem
              index={index}
              key={item.title}
              icon={item.icon}
              badge={item.badge}
              iconClassName={item.iconClassName}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};
const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" shadow-black/40 flex-col rounded-tl-2xl items-start  rounded-bl-none  flex-1 w-full  gap-4 flex   ring-1 bg-white  ring-black/10 border border-transparent rounded-2xl">
      <div className="flex items-center border-b w-full py-2  px-4 border-neutral-300  gap-2">
        <IconPercentage60 className="fill-neutral-500/25 stroke-1 size-5" />
        <p className="text-sm font-bold text-neutral-800">Recent Activity</p>
      </div>
      {children}
    </div>
  );
};

const CardItem = ({
  icon,
  title,
  description,
  iconClassName,
  badge,
  index,
}: {
  iconClassName?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="flex relative overflow-hidden w-full justify-between items-center pl-3">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex items-center p-0.5  justify-center rounded-sm bg-blue-500 text-white",
            iconClassName
          )}
        >
          {icon}
        </div>

        <p className="text-[0.52rem] text-neutral-600"> {title}</p>
        {badge}
      </div>
      <motion.p className="text-[0.5rem] flex-nowrap max-w-44 w-full text-right whitespace-nowrap text-neutral-600">
        {description.split("").map((item, idx) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: idx * 0.01 + index * 0.1 }}
            key={idx}
          >
            {item}
          </motion.span>
        ))}
      </motion.p>
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
