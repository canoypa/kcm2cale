import { css } from "@emotion/css";
import { TypographyHeadline4 } from "../common/typography";

export const wrapper = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

export const container = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 56,
  width: "100%",
  padding: 24,

  [`@media (min-width: 576px)`]: {
    border: "1px solid #e0e0e0",
    padding: 32,
    borderRadius: 4,
    maxWidth: 480,
    boxSizing: "border-box",
  },
});

export const title = css(TypographyHeadline4, {
  textAlign: "center",
});

export const signInButtons = css({
  display: "flex",
  flexDirection: "column",
  rowGap: 16,
});
