import { css } from "@emotion/css";

export const list = css({
  margin: 0,
  padding: "8px 0",
  backgroundColor: "#ffffff",
});

export const listItem = css({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "48px",
  padding: "0 16px",
  listStyleType: "none",
  outline: "none",

  "&:hover": {
    cursor: "pointer",
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
