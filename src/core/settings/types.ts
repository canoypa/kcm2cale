import { PaletteMode } from "@material-ui/core";

export type ThemeModeSetting = PaletteMode | "system";

export type AppSettingsScheme = {
  theme: ThemeModeSetting;
};
