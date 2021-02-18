import { css } from "@emotion/css";
import { Shadow6dp } from "../../shadow";
import { TypographyButton } from "../../typography";

export const container = css({
  border: "none",
  padding: 0,
  backgroundColor: "transparent",
  outline: "none",
});

export const root = css(Shadow6dp, TypographyButton, {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#5c6bc0",
  color: "#ffffff",
  fill: "#ffffff",
  cursor: "pointer",
});

export const extended = css({
  height: 48,
  padding: "0 20px",
  borderRadius: 24,
});

export const icon = css({
  display: "inline-block",
  width: 24,
  height: 24,
  marginLeft: -8,
});

export const label = css({
  marginLeft: 12,
});
