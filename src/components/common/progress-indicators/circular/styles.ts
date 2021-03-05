import { css, keyframes } from "@emotion/css";

const rotate = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const rota = keyframes({
  to: {
    transform: "rotate(18deg)",
  },
});

const fillUnFill = keyframes({
  from: {
    strokeDashoffset: 39.6,
  },

  "50%": {
    strokeDashoffset: 0,
  },

  to: {
    strokeDashoffset: -39.6,
  },
});

const rot = keyframes({
  to: {
    transform: "rotate(-360deg)",
  },
});

export const useStyles = () => ({
  svg: css({
    transformOrigin: "center",
    animation: `${rotate} 1.25s infinite linear`,
  }),

  g: css({
    transformOrigin: "center",
    animation: `${rota} 1.25s infinite linear`,
  }),

  path: css({
    fill: "none",
    stroke: "#5c6bc0",
    strokeWidth: 2,

    strokeDasharray: 42.4,
    strokeDashoffset: 39.6,

    transformOrigin: "center",
    animation: `${fillUnFill} 1.25s infinite cubic-bezier(0.4, 0, 0.2, 1), ${rot} 5s infinite steps(4)`,
  }),
});
