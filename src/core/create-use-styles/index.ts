import { css, CSSInterpolation } from "@emotion/css";
import { useMemo } from "react";
import { useTheme } from "../theme";
import { Theme } from "../theme/types";

type PropsWithTheme<P> = P & { theme: Theme };

type StylesObject<K extends string> = Record<K, CSSInterpolation>;

type CreateStyles<K extends string, P> =
  | StylesObject<K>
  | ((props: PropsWithTheme<P>) => StylesObject<K>);

type Classes<K extends string> = Record<K, string>;

// Fixme: 型の暴力
export const createUseStyles = <Props = unknown, K extends string = string>(
  createStyles: CreateStyles<K, Props>
) => {
  const useStyles = (props: Props = {} as Props): Classes<K> => {
    const theme = useTheme();

    return useMemo(() => {
      const propsWithTheme: PropsWithTheme<Props> = { ...props, theme };
      const stylesObject =
        typeof createStyles === "function"
          ? createStyles(propsWithTheme)
          : createStyles;

      return Object.fromEntries(
        Object.entries(stylesObject).map(([k, v]) => [
          k,
          css(v as CSSInterpolation),
        ])
      ) as Classes<K>;
    }, [props, theme]);
  };

  return useStyles;
};
