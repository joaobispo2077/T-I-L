import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useMediaQuery } from "./useMediaQuery";

function usePreferDarkMode() {
  return useMediaQuery<boolean>(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  );
}

export const useDarkMode = () => {
  const [savedDarkmode, setSavedDarkMode] = useLocalStorage(
    "dark-mode-enable",
    false
  );

  const preferDarkMode = usePreferDarkMode();

  const enabled = savedDarkmode ?? preferDarkMode;

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setSavedDarkMode] as const;
};
