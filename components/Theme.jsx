"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ showLabel = false }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  function toggleTheme() {
    const newTheme = !dark;

    setDark(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light",
    );

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className={
        showLabel
          ? "flex items-center gap-2 nav-link w-full text-left"
          : "theme-btn"
      }
      aria-label="Toggle Theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}

      {showLabel && <span>{dark ? "Light Mode" : "Dark Mode"}</span>}
    </button>
  );
}
