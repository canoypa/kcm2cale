import { css } from "@emotion/css";

export const aboutContainer = css({
  padding: 24,

  "*": {
    color: "rgba(0, 0, 0, 0.87)",
  },

  "h1, h2, h3, h4, h5, h6": {
    lineHeight: "2em",
  },

  "h1, h2": {
    borderBottom: "1px solid #e0e0e0",
  },

  "main section": {
    marginBottom: "2em",
  },

  footer: {
    borderTop: "1px solid #e0e0e0",
  },
});
