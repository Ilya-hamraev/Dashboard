import { useState, useEffect, useRef, RefObject } from "react";

type useOutsideType = {
  isOutside: boolean;
  setIsOutside: (value: boolean) => void;
  ref: RefObject<HTMLDivElement>;
};

export const useOutsideClick = (): useOutsideType => {
  const [isOutside, setIsOutside] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (ref && !ref.current?.contains(target)) {
      return setIsOutside(true);
    }

    setIsOutside(false);
  };

  useEffect(() => {
    document.addEventListener("click", onClick);

    return () => document.removeEventListener("click", onClick);
  }, []);

  return { isOutside, setIsOutside, ref };
};
