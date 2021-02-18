import { useEffect, useState } from "react";

export const useBreakpoint = (type: string, value: string | number) => {
  const ifNumAddUnit = typeof value === "number" ? `${value}px` : value;

  const isMatchMedia = matchMedia(
    `(${type}${value ? `: ${ifNumAddUnit}` : ""})`
  );

  const [GTWidth, setGTWidth] = useState(isMatchMedia.matches);

  const changeHandler = (e: MediaQueryListEvent) => setGTWidth(e.matches);

  useEffect(() => {
    isMatchMedia.addEventListener("change", changeHandler);
    return () => void isMatchMedia.removeEventListener("change", changeHandler);
  }, []);

  return GTWidth;
};
