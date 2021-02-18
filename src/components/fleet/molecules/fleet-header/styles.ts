import { css } from "@emotion/css";

export const container = css({
  padding: 32,

  ["@media(max-width: 719px)"]: {
    padding: 24,
  },
});
