"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null); // Start as null

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.theme;
    const dark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(dark);

    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, []);

  // Don't render anything until client loads
  if (isDark === null) return null;

  return (
    <img
      src={isDark ? "/icon-sun.svg" : "/icon-moon.svg"}
      alt="Toggle theme"
      onClick={() => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        const html = document.documentElement;
        if (newTheme) {
          html.classList.add("dark");
          localStorage.theme = "dark";
        } else {
          html.classList.remove("dark");
          localStorage.theme = "light";
        }
      }}
      className="w-[35px] h-[35px] ml-[40px] p-2 bg-[hsl(0_0%_93%)] dark:bg-gray-700 cursor-pointer rounded-full transition-transform duration-200 hover:scale-105"
    />
  );
}
