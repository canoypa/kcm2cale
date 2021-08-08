import { createTheme as createMuiTheme, PaletteType } from "@material-ui/core";
import { PALETTE_DARK, PALETTE_LIGHT } from "./palette";

export const createTheme = (mode: PaletteType) =>
  createMuiTheme({
    palette: mode === "dark" ? PALETTE_DARK : PALETTE_LIGHT,

    typography: {
      button: {
        textTransform: "none",
      },
    },
  });
