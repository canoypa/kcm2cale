import { PaletteType } from "@material-ui/core";
import { atom, AtomEffect } from "recoil";
import { AppSettings } from "../../core/app-settings";

const getThemeMediaQuery = () => {
  return window.matchMedia("(prefers-color-scheme:dark)");
};

const getDefaultThemeMode = () => {
  return getThemeMediaQuery().matches ? "dark" : "light";
};

const loadConfig: AtomEffect<PaletteType> = ({ setSelf }) => {
  const themeMatchMedia = getThemeMediaQuery();

  const updateWithSystemTheme = () => {
    setSelf(getDefaultThemeMode());
  };

  AppSettings.get("theme").then((value) => {
    if (value === "system") {
      updateWithSystemTheme();
      themeMatchMedia.addEventListener("change", updateWithSystemTheme);
    } else {
      setSelf(value);
    }
  });

  return () => {
    themeMatchMedia.removeEventListener("change", updateWithSystemTheme);
  };
};

export const PaletteModeState = atom<PaletteType>({
  key: "PaletteModeState",
  default: "light",
  effects_UNSTABLE: [loadConfig],
});
