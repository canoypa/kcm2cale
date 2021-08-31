import {
  CssBaseline,
  PaletteMode,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { createContext, ReactNode, useMemo, VFC } from "react";
import { createTheme } from "../../core/theme";

type ThemeType = PaletteMode | "system";

type Theme = {
  /** 全てのテーマ名 */
  themes: string[];
  /** 現在のテーマ名 */
  theme: string;
  /** "system" を含む保存されたテーマ設定 */
  configuredTheme: string;
  /** テーマを更新 */
  // setTheme: (theme: string) => void;
};
const ThemeContext = createContext<Theme>({
  themes: [],
  theme: "",
  configuredTheme: "",
});

/**
 * 保存されたテーマ設定を取得して返す
 */
const getConfiguredTheme = (): ThemeType => {
  // サーバサイドでは "system" で処理
  if (typeof window === "undefined") return "system";

  // 設定値を読み込んで返す
  // 現在は "system" のみ
  return "system";
};
const configuredTheme = getConfiguredTheme();

type Props = {
  children: ReactNode;
};
export const ThemeProvider: VFC<Props> = ({ children }) => {
  const resolvedTheme = useMediaQuery("(prefers-color-scheme:dark)");
  const mode = useMemo(
    () => (resolvedTheme ? "dark" : "light"),
    [resolvedTheme]
  );
  const themeData = useMemo(() => createTheme(mode), [mode]);

  const themeValue: Theme = {
    themes: ["light", "dark"],
    theme: mode,
    configuredTheme: configuredTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <MuiThemeProvider theme={themeData}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
