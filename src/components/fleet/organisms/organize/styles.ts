import { css } from "@emotion/css";

export const container = css({
  maxWidth: 1279,
  margin: "0 auto",
});

export const fleetArea = css({
  padding: 24,

  ["@media(max-width: 719px)"]: {
    padding: "24px 12px",
  },
});
