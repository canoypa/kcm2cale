import { css } from "@emotion/css";

export const root = css({
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
  margin: "4px",
  padding: "0 7px",
  height: "32px",
  borderRadius: "16px",
  border: "1px solid #e0e0e0",
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.87)",
  font: "400 0.875rem sans-serif",
  lineHeight: "1.25rem",
  verticalAlign: "middle",
  letterSpacing: "0.015rem",
  outline: "none",
  overflow: "hidden",

  "&:hover": {
    cursor: "pointer",
  },
});

export const active = css({
  color: "#5c6bc0",
});

export const icon = css({
  width: "20px",
  height: "20px",
  color: "rgba(0, 0, 0, 0.64)",
  fill: "rgba(0, 0, 0, 0.64)",
});

export const label = css({
  padding: "0 4px",
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

export const stateActive = css({
  "::before": {
    backgroundColor: "#5c6bc0",
    opacity: 0.12,
  },
});

export const chipSet = css({
  display: "flex",
  flexWrap: "wrap",
});

export const chipSetNowrap = css({
  flexWrap: "nowrap",
});

export const chipSetScrollable = css({
  overflowX: "scroll",

  /* hide scrollbar */
  scrollbarWidth: "none" /* firefox */,

  "&::-webkit-scrollbar": {
    display: "none" /* webkit (chrome, edge, safari) */,
  },
});
