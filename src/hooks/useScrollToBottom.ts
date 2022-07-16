import { useEffect, useRef, RefObject } from "react";

export const useScrollToBottom = (): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return ref;
};
