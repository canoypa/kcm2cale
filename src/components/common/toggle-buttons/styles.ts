import { css } from "@emotion/css";

export const toggleButtons = css({
  display: "flex",
  justifyContent: "center",
});

export const toggleButtonItem = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "240px",
  maxWidth: "100%",
  height: "32px",
  padding: "8px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#ffffff",
  color: "#202124",
  outline: "none",
  cursor: "pointer",

  transitionProperty: "color, background-color",
  transitionDuration: "0.1s",
  transitionTimingFunction: "ease-out",

  "&:hover, &:focus": {
    color: "#5c6bc0",
  },

  "&:focus": {
    border: "1px solid #5c6bc0",
  },
});

export const selected = css({
  color: "#5c6bc0",
  backgroundColor: "rgba(92, 107, 192, 0.1)",
});
