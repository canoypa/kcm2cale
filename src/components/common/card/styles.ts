import { css } from "@emotion/css";
import {
  TypographyHeadline6,
  TypographyOverline,
  TypographySubtitle2,
} from "../typography";

export const container = css({
  border: "1px solid #e0e0e0",
  borderRadius: 4,
  color: "initial",
  textDecoration: "none",
});

export const header = css({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  padding: 16,
});

export const overflowMenu = css({
  gridArea: "1 / 3 / span 3",
});

export const overline = css(TypographyOverline, {
  lineHeight: "1rem",
  gridArea: "1 / 2",
});

export const title = css(TypographyHeadline6, {
  margin: 0,
  lineHeight: "2rem",
  gridArea: "2 / 2",
});

export const subtitle = css(TypographySubtitle2, {
  color: "rgba(0, 0, 0, 0.6)",
  lineHeight: "1.25rem",
  gridArea: "3 / 2",
});

export const body = css({
  padding: 16,

  [`.${header} + &`]: {
    paddingTop: 0,
  },
});
