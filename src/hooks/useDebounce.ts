import { useCallback, useRef } from "react";

export const useDebounce = (callback: Function, delay: number) => {
  const timer = useRef<NodeJS.Timer | null>(null);

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearInterval(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
