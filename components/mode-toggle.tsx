"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  const SWITCH = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
      case "system": {
        setTheme(systemTheme === "light" ? "dark" : "light");
        return;
      }
      default: {
        return;
      }
    }
  };
  return (
    <button
      onClick={SWITCH}
      className="size-10 flex cursor-pointer transition-all items-center relative justify-center"
    >
      <SunIcon
        className="rotate-0 scale-100 absolute inset-0 duration-200 transition-all dark:rotate-90 dark:scale-0"
        size={14}
      />
      <MoonIcon
        className="rotate-90 absolute inset-0 scale-0 duration-200 transition-all dark:rotate-0 dark:scale-100"
        size={14}
      />
    </button>
  );
};

export default ModeToggle;
