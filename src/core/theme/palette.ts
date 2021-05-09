import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const PALETTE_BASE: PaletteOptions = {
  primary: {
    main: "#6876bd",
    light: "#6876bd",
    dark: "#6876bd",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
  info: {
    main: "#2196F3",
    light: "#2196F3",
    dark: "#2196F3",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
  warning: {
    main: "#FFEB3B",
    light: "#FFEB3B",
    dark: "#FFEB3B",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
  error: {
    main: "#b00020",
    light: "#b00020",
    dark: "#b00020",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
  success: {
    main: "#4caf50",
    light: "#4caf50",
    dark: "#4caf50",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
};

export const PALETTE_LIGHT: PaletteOptions = {
  ...PALETTE_BASE,

  type: "light",

  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  // Todo: なんの値かわかったら追加して
  //   action: {
  //   },
  background: {
    default: "#ffffff",
  },
  divider: "rgba(0, 0, 0, 0.16)",
};

export const PALETTE_DARK: PaletteOptions = {
  ...PALETTE_BASE,

  type: "dark",

  text: {
    primary: "rgba(255, 255, 255, 0.87)",
    secondary: "rgba(255, 255, 255, 0.6)",
    disabled: "rgba(255, 255, 255, 0.38)",
  },
  // Todo: なんの値かわかったら追加して
  //   action: {
  //   },
  background: {
    default: "#121212",
  },
  divider: "rgba(255, 255, 255, 0.16)",
};
