import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useToggle } from "../hooks/useToggle";

const Toggle = (props: any) => {
  const [savedToggle, setSavedToggle] = useLocalStorage("@lightmode", false);
  console.log("saved", savedToggle);
  const [toggled, toggle] = useToggle(savedToggle);
  const backgroundColor = useMediaQuery(
    [
      "(min-width: 1500px)",
      "(min-width: 1000px)",
      "(min-width: 768px)",
      "(min-width: 600px)",
    ],
    ["red", "green", "blue", "pink"],
    "white"
  );
console.log('backgroundColor',backgroundColor);
  const handleToggle = () => {
    toggle();
    setSavedToggle(toggled);
    console.log(toggled);
  };

  return (
    <div className="dark-mode-toggle">
      <button type="button" style={{backgroundColor}} onClick={handleToggle}>
        ☀
      </button>
      <span className="toggle-control">
        <input
          className="dmcheck"
          id="dmcheck"
          type="checkbox"
          checked={toggled}
          onChange={handleToggle}
        />
        <label htmlFor="dmcheck" />
      </span>
      <button type="button" onClick={handleToggle}>
        ☾
      </button>
    </div>
  );
};

export default Toggle;
