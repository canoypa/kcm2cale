import { useEffect, useMemo, useState } from "react";

export const useBreakpoint = (type: string, value: string | number) => {
  const ifNumAddUnit = useMemo(
    () => (typeof value === "number" ? `${value}px` : value),
    [value]
  );

  const isMatchMedia = useMemo(
    () => matchMedia(`(${type}${value ? `: ${ifNumAddUnit}` : ""})`),
    [type, value, ifNumAddUnit]
  );

  const [GTWidth, setGTWidth] = useState(isMatchMedia.matches);

  const changeHandler = (e: MediaQueryListEvent) => setGTWidth(e.matches);

  useEffect(() => {
    isMatchMedia.addEventListener("change", changeHandler);
    return () => void isMatchMedia.removeEventListener("change", changeHandler);
  }, [isMatchMedia]);

  return GTWidth;
};
