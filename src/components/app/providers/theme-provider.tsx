import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { ReactNode, useMemo, VFC } from "react";
import { createTheme } from "../../../core/theme";

type Props = {
  children: ReactNode;
};
export const ThemeProvider: VFC<Props> = ({ children }) => {
  const theme = useMemo(() => createTheme(), []);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
