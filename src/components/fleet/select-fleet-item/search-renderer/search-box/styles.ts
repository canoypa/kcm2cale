import { css } from "@emotion/css";

export const container = css({
  position: "relative",

  display: "flex",
  border: "1px solid #e0e0e0",
  height: "48px",
  borderRadius: "24px",
  backgroundColor: "#fff",

  /* support for browser autofill style */
  overflow: "hidden",
});

export const input = css({
  flexGrow: 1,
  boxSizing: "border-box",
  border: "none",
  width: "100%",
  height: "100%",
  padding: 0 /* reset */,
  /* icon size + icon left */
  paddingLeft: `${48 + 4}px`,
  backgroundColor: "transparent",
  outline: "none",
});

export const iconLayout = css({
  position: "absolute",
  left: "4px",
  /* search box height - icon size */
  padding: `${(48 - 20) / 2}px`,
});
