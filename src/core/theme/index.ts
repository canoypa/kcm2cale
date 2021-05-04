import { createMuiTheme } from "@material-ui/core/styles";

export const createTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: "#6876bd",
        light: "#6876bd",
        dark: "#6876bd",
        contrastText: "rgba(255, 255, 255, 0.87)",
      },
    },

    typography: {
      button: {
        textTransform: "none",
      },
    },
  });
