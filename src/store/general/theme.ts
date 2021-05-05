import { atom, AtomEffect } from "recoil";
import { AppSettings } from "../../core/app-settings";
import { ThemeDark } from "../../core/theme/theme-dark";
import { ThemeLight } from "../../core/theme/theme-light";
import { Theme, ThemeType } from "../../core/theme/types";

const getTheme = (type: ThemeType) => {
  if (type === "dark") return ThemeDark;
  if (type === "light") return ThemeLight;
  throw new Error("Error: Invalid theme type");
};

const loadConfig: AtomEffect<Theme> = ({ setSelf }) => {
  AppSettings.get("theme").then((value) => {
    const theme = getTheme(value);
    setSelf(theme);
  });
};

export const ThemeState = atom<Theme>({
  key: "ThemeState",
  default: ThemeLight,
  effects_UNSTABLE: [loadConfig],
});
