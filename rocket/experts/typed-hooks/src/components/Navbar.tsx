import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import Toggle from "./Toggle";

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="navbar">
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
