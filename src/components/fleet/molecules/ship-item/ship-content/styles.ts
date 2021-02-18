import { css } from "@emotion/css";

export const root = css({
  display: "flex",
  alignItems: "center",
});

export const actions = css({
  display: "flex",
  alignItems: "center",
  marginLeft: 8,
});

export const name = css({
  fontSize: "1.25em",
  cursor: "pointer",

  ["@media (max-width: 599px)"]: {
    fontSize: "1em",
    maxWidth: "8em",
  },
});

export const level = css({
  marginLeft: 16,
});
