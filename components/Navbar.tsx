"use client";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Product", href: "/product" },
  { title: "Socials", href: "/socials" },
  { title: "Pricing", href: "/pricing" },
];
export default function Navbar() {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex md:hidden px-4 py-2 justify-between">
      <Logo />
      <Button onClick={() => setIsOpen(!isOpen)}>
        <IconLayoutSidebar className="size-4" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(15px)",
              background: "transparent",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              background: "rgba(255, 255, 255, 0.5)",
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 h-full w-full z-50 bg-white px-4 py-2"
          >
            <div className="flex justify-between">
              <Logo />
              <Button
                className="absolute right-2 top-2"
                onClick={() => setIsOpen(false)}
              >
                <IconX className="size-4" />
              </Button>
            </div>
            <div className="flex flex-col gap-6  items-center">
              {navLinks.map((item, index) => (
                <motion.div
                  key={index + item.title}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.2 * index,
                  }}
                  className=""
                >
                  <Link
                    href={item.href}
                    className="text-2xl text-neutral-600 font-medium dark:text-neutral-400"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-end">
                <Link
                  href="login"
                  className="text-sm px-4 py-2 rounded-md  text-neutral-600 dark:text-neutral-400 font-medium"
                >
                  Login
                </Link>
                <Button className="bg-neutral-700 text-white">Signup</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <Container className="py-4 lg:flex hidden items-center justify-between">
      <Logo />
      <div className="flex items-center gap-4">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button className="text-sm px-4 py-2 rounded-md  text-neutral-600 dark:text-neutral-400 font-medium">
          Login
        </Button>
        <Button className="bg-neutral-700 text-white">Signup</Button>
      </div>
    </Container>
  );
};
