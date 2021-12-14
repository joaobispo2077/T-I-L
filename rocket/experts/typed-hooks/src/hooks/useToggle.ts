import { useCallback, useState } from "react";

// type UseToggleReturnType = [boolean, () => void];

export const useToggle = (
  initialToggleState: boolean = false
): [boolean, () => void] => {
  const [isActive, setIsActive] = useState<boolean>(initialToggleState);

  const toggle = useCallback(
    () => setIsActive((previousIsActive) => !previousIsActive),
    []
  );

  return [isActive, toggle];
};
