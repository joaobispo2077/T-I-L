import { useEffect, useState } from "react";

export const useMediaQuery = <T>(
  queries: string[],
  values: T[],
  defaultValue: T
) => {
  const mediaQueryList = queries.map((query) => window.matchMedia(query));

  const getValue = () => {
    const index = mediaQueryList.findIndex((mediaQuery) => mediaQuery.matches);

    return values[index] || defaultValue;
  };

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    const handleChange = () => setValue(getValue);

    // trash listener
    mediaQueryList.forEach((mediaQuery) =>
      mediaQuery.addListener(handleChange)
    );

    // clean up
    return () =>
      mediaQueryList.forEach((mediaQuery) =>
        mediaQuery.removeListener(handleChange)
      );
  });

  return value;
};
