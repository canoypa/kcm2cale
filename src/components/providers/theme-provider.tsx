import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import { ReactNode, useMemo, VFC } from "react";
import { useRecoilValue } from "recoil";
import { createTheme } from "../../core/theme";
import { PaletteModeState } from "../../store/general/theme";

type Props = {
  children: ReactNode;
};
export const ThemeProvider: VFC<Props> = ({ children }) => {
  const mode = useRecoilValue(PaletteModeState);
  const theme = useMemo(() => createTheme(mode), [mode]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
