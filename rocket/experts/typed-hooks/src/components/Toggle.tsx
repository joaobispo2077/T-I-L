import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useToggle } from "../hooks/useToggle";

const Toggle = (props: any) => {
  const [savedToggle, setSavedToggle] = useLocalStorage('darkmode', false);
  const [toggled, toggle] = useToggle(savedToggle);


  const handleToggle = () => {
    toggle();
    setSavedToggle(toggled);
    console.log(toggled);
  };

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={handleToggle}>
        ☀
      </button>
      <span className="toggle-control">
        <input
          className="dmcheck"
          id="dmcheck"
          type="checkbox"
          checked={!toggled}
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
