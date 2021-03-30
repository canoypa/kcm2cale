import { Theme } from "./types";

export const ThemeDark: Theme = {
  label: "dark",

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

    surface: "#121212",
    onSurface: {
      highEmphasis: "rgba(255,255,255,0.87)",
      mediumEmphasis: "rgba(255,255,255,0.60)",
      disable: "rgba(255,255,255,0.38)",
      outline: "rgba(255,255,255,0.32)",
    },

    success: "#4caf50",
    error: "#b00020",

    background: "#121212",
    onBackground: "#ffffff",
  },
};
