import React from "react";
import { useToggle } from "../hooks/useToggle";

const Toggle = (props: any) => {
  const [toggled, toggle] = useToggle(false);

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={toggle}>
        ☀
      </button>
      <span className="toggle-control">
        <input
          className="dmcheck"
          id="dmcheck"
          type="checkbox"
          checked={toggled}
          onChange={toggle}
        />
        <label htmlFor="dmcheck" />
      </span>
      <button type="button" onClick={toggle}>
        ☾
      </button>
    </div>
  );
};

export default Toggle;
