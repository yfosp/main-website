import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }      
}, [darkMode])

  const toggleDarkMode = (checked: boolean) => {
    if (checked) {
      // Dark mode
      localStorage.setItem("theme", "dark");
      setDarkMode(checked);
    } else {
      // Light mode
      localStorage.setItem("theme", "light");
      setDarkMode(checked);
    }
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