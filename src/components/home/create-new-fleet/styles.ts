import { css } from "@emotion/css";

export const container = css({
  position: "fixed",
  left: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  padding: 24,
  width: "100%",
  boxSizing: "border-box",

  ["@media (max-width: 719px)"]: {
    padding: 16,
  },
});
