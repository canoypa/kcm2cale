import { Theme } from "./types";

export const ThemeLight: Theme = {
  label: "light",

  palette: {
    primary: {
      main: "#5C6BC0",
      light: "#9FA8DA",
      dark: "#3949AB",
    },
    onPrimary: {
      highEmphasis: "#ffffff",
      mediumEmphasis: "rgba(255,255,255,0.74)",
      disable: "rgba(255,255,255,0.38)",
    },

    surface: "#ffffff",
    onSurface: {
      highEmphasis: "rgba(0,0,0,0.87)",
      mediumEmphasis: "rgba(0,0,0,0.60)",
      disable: "rgba(0,0,0,0.38)",
      outline: "rgba(0,0,0,0.12)",
    },

    success: "#4caf50",
    error: "#b00020",

    background: "#ffffff",
    onBackground: "#000000",
  },
};
