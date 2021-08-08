import { PaletteType } from "@material-ui/core";
import { atom, AtomEffect } from "recoil";
import { AppSettings } from "../../core/settings";

const getThemeMediaQuery = () => {
  return window.matchMedia("(prefers-color-scheme:dark)");
};

const getDefaultThemeMode = () => {
  return getThemeMediaQuery().matches ? "dark" : "light";
};

const loadConfig: AtomEffect<PaletteType> = ({ setSelf }) => {
  let unsubscribe: () => void | undefined = undefined;

  if (typeof window !== "undefined") {
    const themeMatchMedia = getThemeMediaQuery();

    const updateWithSystemTheme = () => {
      setSelf(getDefaultThemeMode());
    };

    AppSettings.get("theme").then((value) => {
      if (value === "system") {
        updateWithSystemTheme();
        themeMatchMedia.addEventListener("change", updateWithSystemTheme);
        unsubscribe = () =>
          themeMatchMedia.removeEventListener("change", updateWithSystemTheme);
      } else {
        setSelf(value);
      }
    });
  }

  return () => unsubscribe?.();
};

export const PaletteModeState = atom<PaletteType>({
  key: "PaletteModeState",
  default: "light",
  effects_UNSTABLE: [loadConfig],
});
