import { css } from "@emotion/css";
import { TypographyButton } from "../../common/typography";

export const container = css(TypographyButton, {
  display: "flex",
  columnGap: 16,
  alignItems: "center",
  border: "1px solid #e0e0e0",
  borderRadius: 4,
  padding: "0 16px",
  height: 48,
  backgroundColor: "#ffffff",
  outline: "none",
  cursor: "pointer",
});

export const providerIcon = css({
  width: 32,
  height: 32,
});
