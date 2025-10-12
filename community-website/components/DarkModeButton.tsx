// Dark mode is made possible using a) react-toggle-dark-mode & b) tailwind-CSS
// Reference: https://github.com/JoseRFelix/react-toggle-dark-mode && https://tailwindcss.com/docs/dark-mode

import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      checked={darkMode}
      onChange={toggleDarkMode}
      size={24}
      sunColor={"white"}
    />
  );
}
