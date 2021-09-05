import { alpha, PaletteOptions } from "@mui/material";
import { common, indigo } from "@mui/material/colors";

export const LightPalette: PaletteOptions = {
  mode: "light",

  primary: { main: indigo[500] },

  text: {
    primary: alpha(common.black, 0.87),
    secondary: alpha(common.black, 0.6),
    disabled: alpha(common.black, 0.38),
  },
};

export const DarkPalette: PaletteOptions = {
  mode: "dark",

  primary: { main: indigo[300] },

  text: {
    primary: alpha(common.white, 0.87),
    secondary: alpha(common.white, 0.6),
    disabled: alpha(common.white, 0.38),
  },
};
