import { PaletteMode } from "@material-ui/core";
import { atom, AtomEffect } from "recoil";
import { AppSettings } from "../../core/app-settings";

const getDefaultThemeMode = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const loadConfig: AtomEffect<PaletteMode> = ({ setSelf }) => {
  AppSettings.get("theme").then((value) => {
    if (value === "system") {
      setSelf(getDefaultThemeMode());
    } else {
      setSelf(value);
    }
  });
};

export const PaletteModeState = atom<PaletteMode>({
  key: "PaletteModeState",
  default: "light",
  effects_UNSTABLE: [loadConfig],
});
