import { css } from "@emotion/css";

const pxToRem = (px: number) => `${px / 16}rem`;
const letterSpacing = (track: number, fontSize: number) =>
  `${track / fontSize}rem`;

export const FontWeightMap = {
  thin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

type TypographyScales =
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "headline5"
  | "headline6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

type TypographyInfo = {
  size: number;
  weight: number;
  letterSpacing: number;
};
const TypographyMap: Record<TypographyScales, TypographyInfo> = {
  headline1: {
    size: 96,
    weight: FontWeightMap.light,
    letterSpacing: -1.5,
  },
  headline2: {
    size: 60,
    weight: FontWeightMap.light,
    letterSpacing: -0.5,
  },
  headline3: {
    size: 48,
    weight: FontWeightMap.regular,
    letterSpacing: 0,
  },
  headline4: {
    size: 34,
    weight: FontWeightMap.regular,
    letterSpacing: 0.25,
  },
  headline5: {
    size: 24,
    weight: FontWeightMap.regular,
    letterSpacing: 0,
  },
  headline6: {
    size: 20,
    weight: FontWeightMap.medium,
    letterSpacing: 0.15,
  },
  subtitle1: {
    size: 16,
    weight: FontWeightMap.regular,
    letterSpacing: 0.15,
  },
  subtitle2: {
    size: 14,
    weight: FontWeightMap.medium,
    letterSpacing: 0.1,
  },
  body1: {
    size: 16,
    weight: FontWeightMap.regular,
    letterSpacing: 0.5,
  },
  body2: {
    size: 14,
    weight: FontWeightMap.regular,
    letterSpacing: 0.25,
  },
  button: {
    size: 14,
    weight: FontWeightMap.regular,
    letterSpacing: 1.25,
  },
  caption: {
    size: 12,
    weight: FontWeightMap.medium,
    letterSpacing: 0.4,
  },
  overline: {
    size: 10,
    weight: FontWeightMap.medium,
    letterSpacing: 1.5,
  },
};

type TypographyProperty = {
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  letterSpacing: string;
};
const typographyProperty = (scale: TypographyScales): TypographyProperty => {
  const typography = TypographyMap[scale];
  const size = typography.size;
  const weight = typography.weight;
  const spacing = typography.letterSpacing;

  return {
    fontSize: pxToRem(size),
    lineHeight: pxToRem(size),
    fontWeight: weight,
    letterSpacing: letterSpacing(spacing, size),
  };
};

export const TypographyHeadline1 = css(typographyProperty("headline1"));
export const TypographyHeadline2 = css(typographyProperty("headline2"));
export const TypographyHeadline3 = css(typographyProperty("headline3"));
export const TypographyHeadline4 = css(typographyProperty("headline4"));
export const TypographyHeadline5 = css(typographyProperty("headline5"));
export const TypographyHeadline6 = css(typographyProperty("headline6"));
export const TypographySubtitle1 = css(typographyProperty("subtitle1"));
export const TypographySubtitle2 = css(typographyProperty("subtitle2"));
export const TypographyBody1 = css(typographyProperty("body1"));
export const TypographyBody2 = css(typographyProperty("body2"));
export const TypographyButton = css(typographyProperty("button"));
export const TypographyCaption = css(typographyProperty("caption"));
export const TypographyOverline = css(typographyProperty("overline"));
