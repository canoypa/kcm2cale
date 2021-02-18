import { css } from "@emotion/css";
import { TypographyHeadline6 } from "../typography";

export const container = css({
  position: "sticky",
  top: 0,
  display: "flex",
  backgroundColor: "white",
  zIndex: 4,
});

export const section = css({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  height: 64,

  ["@media (max-width: 599px)"]: {
    padding: "0 8px",
    height: 56,
  },
});

export const sectionAlignStart = css({
  justifyContent: "flex-start",
});
export const sectionAlignEnd = css({
  justifyContent: "flex-end",
});

export const title = css(
  {
    margin: 0,
    paddingLeft: 20,
  },
  TypographyHeadline6
);
