import { PaletteMode } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
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

export { useTheme } from "./hooks";
