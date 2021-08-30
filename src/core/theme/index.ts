import { createTheme as createMuiTheme, PaletteMode } from "@material-ui/core";
import { PALETTE_DARK, PALETTE_LIGHT } from "./palette";

export const createTheme = (mode: PaletteMode) =>
  createMuiTheme({
    palette: mode === "dark" ? PALETTE_DARK : PALETTE_LIGHT,

    typography: {
      button: {
        textTransform: "none",
      },
    },
  });
