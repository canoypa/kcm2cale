import { PaletteMode } from "@material-ui/core";
import { atom, AtomEffect } from "recoil";
import { AppSettings } from "../../core/app-settings";

const loadConfig: AtomEffect<PaletteMode> = ({ setSelf }) => {
  AppSettings.get("theme").then((value) => {
    setSelf(value);
  });
};

export const ThemeState = atom<PaletteMode>({
  key: "ThemeState",
  default: "light",
  effects_UNSTABLE: [loadConfig],
});
