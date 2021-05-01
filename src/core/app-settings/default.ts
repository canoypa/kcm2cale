import { AppSettingsScheme } from "./types";

const defaultTheme: AppSettingsScheme["theme"] = window.matchMedia(
  "(prefers-color-scheme:dark)"
).matches
  ? "dark"
  : "light";

export const defaultSettings: AppSettingsScheme = {
  theme: defaultTheme,
};
