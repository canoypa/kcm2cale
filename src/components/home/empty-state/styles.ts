import { css } from "@emotion/css";
import { TypographyBody1, TypographyHeadline6 } from "../../common/typography";

export const container = css({
  display: "grid",
  placeItems: "center",
  rowGap: 16,
});

export const paragraph = css({
  margin: 0,
  color: "rgba(0, 0, 0, 0.6)",
});

export const title = css(TypographyHeadline6);

export const text = css(TypographyBody1);

export const prom = css({
  fontWeight: 500,
});
