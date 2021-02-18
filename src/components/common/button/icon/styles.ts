import { css } from "@emotion/css";

export const root = css({
  position: "relative",
  border: "none",
  borderRadius: "50%",
  padding: "12px",
  width: "48px",
  height: "48px",
  overflow: "hidden",
  backgroundColor: "transparent",
  outline: "none",

  "&:hover": {
    cursor: "pointer",
  },

  "&:disabled": {
    color: "rgba(0, 0, 0, 0.37)",
    fill: "rgba(0, 0, 0, 0.37)",
    pointerEvents: "none",
  },
});

export const state = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    opacity: 0,
  },

  "&:hover::before": {
    opacity: 0.04,
  },
});
