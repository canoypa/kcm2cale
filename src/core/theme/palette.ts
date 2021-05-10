import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const PALETTE_BASE: PaletteOptions = {
  primary: {
    main: "#5c6bc0",
    light: "#5c6bc0",
    dark: "#5c6bc0",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
  info: {
    main: "#03a9f4",
    light: "#03a9f4",
    dark: "#03a9f4",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
  warning: {
    main: "#ffc107",
    light: "#ffc107",
    dark: "#ffc107",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
  error: {
    main: "#f44336",
    light: "#f44336",
    dark: "#f44336",
    contrastText: "rgba(255, 255, 255, 0.87)",
  },
  success: {
    main: "#8bc34a",
    light: "#8bc34a",
    dark: "#8bc34a",
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
