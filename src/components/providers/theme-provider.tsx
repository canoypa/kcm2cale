import {
  CssBaseline,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
  VFC,
} from "react";
import { createTheme } from "../../core/theme";

const IsDarkMatchMedia = "(prefers-color-scheme:dark)";

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
 * 現在は "system" のみ
 */
const getConfiguredTheme = (): ThemeType => {
  // サーバサイドでは "system" で処理
  if (typeof window === "undefined") return "system";

  return "system";
};

/**
 * 保存されたテーマ設定が "system" の場合、システム設定を解決して返す
 */
const getResolvedTheme = (configuredTheme: ThemeType): PaletteMode => {
  // 設定値が "system" 出ない場合そのまま返す
  if (configuredTheme !== "system") return configuredTheme;

  // サーバサイドでは "light" で処理
  if (typeof window === "undefined") return "light";

  const matchList = window.matchMedia(IsDarkMatchMedia);
  return matchList.matches ? "dark" : "light";
};

type Props = {
  children: ReactNode;
};
export const ThemeProvider: VFC<Props> = ({ children }) => {
  const [configuredTheme] = useState(getConfiguredTheme());
  const [resolvedTheme, setResolvedTheme] = useState(
    getResolvedTheme(configuredTheme)
  );

  /** 設定値が "system" の場合、matchMedia の更新を検知してテーマを更新 */
  useEffect(() => {
    const handler = () => {
      setResolvedTheme(getResolvedTheme(configuredTheme));
    };

    const matchMedia = window.matchMedia(IsDarkMatchMedia);
    if (configuredTheme === "system") {
      matchMedia.addEventListener("change", handler);
    }

    return () => matchMedia.removeEventListener("change", handler);
  }, [configuredTheme]);

  const themeData = useMemo(() => createTheme(resolvedTheme), [resolvedTheme]);

  const themeValue: Theme = {
    themes: ["light", "dark"],
    theme: resolvedTheme,
    configuredTheme: configuredTheme,
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={themeValue}>
        <MuiThemeProvider theme={themeData}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};
