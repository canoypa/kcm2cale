import {
  CssBaseline,
  PaletteMode,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { createContext, ReactNode, useMemo, VFC } from "react";
import { createTheme } from "../../core/theme";

type ConfiguredModeType = PaletteMode | "system";

type Theme = {
  /** 全てのテーマ名 */
  modes: string[];
  /** 現在のテーマ名 */
  mode: string;
  /** "system" を含む保存されたテーマ設定 */
  configuredMode: string;
  /** テーマを更新 */
  // setTheme: (theme: string) => void;
};
const ThemeContext = createContext<Theme>({
  modes: [],
  mode: "",
  configuredMode: "",
});

/**
 * 保存されたテーマ設定を取得して返す
 */
const getConfiguredMode = (): ConfiguredModeType => {
  // サーバサイドでは "system" で処理
  if (typeof window === "undefined") return "system";

  // 設定値を読み込んで返す
  // 現在は "system" のみ
  return "system";
};
const configuredMode = getConfiguredMode();

type Props = {
  children: ReactNode;
};
export const ThemeProvider: VFC<Props> = ({ children }) => {
  const isDark = useMediaQuery("(prefers-color-scheme:dark)");
  const resolvedMode = useMemo(() => (isDark ? "dark" : "light"), [isDark]);
  const themeData = useMemo(() => createTheme(resolvedMode), [resolvedMode]);

  const themeValue: Theme = {
    modes: ["light", "dark"],
    mode: resolvedMode,
    configuredMode: configuredMode,
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
