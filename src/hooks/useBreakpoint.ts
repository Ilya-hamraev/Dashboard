import { useEffect, useState } from "react";

const BREAKPOINT_LG = 1024;

export const useBreakpoint = (): boolean => {
  const [isBigWidth, setIsBigWidth] = useState<boolean>(false);

  const onChangeWidth = (e: Event) => {
    const window = e.target as Window;

    if (window.innerWidth >= BREAKPOINT_LG) {
      return setIsBigWidth(true);
    }

    return setIsBigWidth(false);
  };

  useEffect(() => {
    window.addEventListener("resize", onChangeWidth);

    return () => {
      window.removeEventListener("resize", onChangeWidth);
    };
  });

  return isBigWidth;
};
