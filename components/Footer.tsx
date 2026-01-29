import React from "react";
import Container from "./Container";
import Logo, { LogoIcon } from "./Logo";
import SubHeading from "./SubHeading";
import { Button } from "./ui/button";
import Link from "next/link";
import { IconSend } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const product = [
    {
      title: "Agent Simulator",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/",
    },
    {
      title: "API Reference",
      href: "/",
    },
    {
      title: "Pricing",
      href: "/",
    },
    {
      title: "Changelog",
      href: "/",
    },
    {
      title: "Contact",
      href: "/",
    },
  ];
  const company = [
    {
      title: "About",
      href: "/",
    },
    {
      title: "Blog",
      href: "/",
    },
    {
      title: "Careers",
      href: "/",
    },
    {
      title: "Press",
      href: "/",
    },
    {
      title: "Partners",
      href: "/",
    },
  ];

  return (
    <footer className="border-t perspective-distant overflow-hidden relative border-neutral-200 dark:border-neutral-800 py-10 md:py-20 lg:py-10">
      <Container className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-20">
        <div className="col-span-2 flex flex-col gap-4 items-start">
          <Logo />
          <SubHeading>Safe, observable, outcome-driven AI </SubHeading>
          <Button className="bg-foreground  text-white shadow-brand">
            Start a 30-day trial
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Product</h4>
          <ul className="list-none *:text-[0.88rem] flex flex-col gap-2">
            {product.map((item, index) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 hover:text-black transition duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Company</h4>
          <ul className="list-none *:text-[0.88rem] flex flex-col gap-2">
            {company.map((item, index) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-neutral-600 hover:text-black transition duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col flex-wrap gap-4 w-full">
          <h4 className="text-base font-medium text-neutral-400">Newsletter</h4>
          <div className="border items-center p-px justify-center flex  border-neutral-100 bg-neutral-100 rounded-md">
            <input
              className=" outline-none px-4 text-sm py-2 placeholder-neutral-400 text-neutral-600 caret-neutral-400"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="px-4 py-2 rounded-sm bg-black">
              <IconSend className="text-white size-4" />
            </button>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col sm:flex-row justify-between mt-10 relative z-20">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Agencyforce AI. All rights reserved.
        </p>
        <div className="flex items-center gap-4 *:text-sm *:text-neutral-500">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </Container>
      <div
        className={cn(
          "flex items-center justify-center gap-20 h-[200%]",
          "mask-radial-from-50%",
          "absolute -inset-x-[150%] -inset-y-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-700)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-700)_1px,transparent_1px)]"
        )}
        style={{
          transform: " rotateX(60deg) ",
        }}
      />
    </footer>
  );
};

export default Footer;
