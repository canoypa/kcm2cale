import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { ReactNode, useMemo, VFC } from "react";
import { createTheme } from "../../../core/theme";

const DUMMY_PALETTE_MODE = "light";

type Props = {
  children: ReactNode;
};
export const ThemeProvider: VFC<Props> = ({ children }) => {
  const mode = DUMMY_PALETTE_MODE;
  const theme = useMemo(() => createTheme(mode), [mode]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
