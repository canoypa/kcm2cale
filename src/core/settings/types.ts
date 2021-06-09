import { PaletteType } from "@material-ui/core";

export type ThemeModeSetting = PaletteType | "system";

export type AppSettingsScheme = {
  theme: ThemeModeSetting;
};
