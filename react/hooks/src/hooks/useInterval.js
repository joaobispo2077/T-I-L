import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay = 1000) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      savedCallback.current();
    }, delay);

    console.log(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
};
