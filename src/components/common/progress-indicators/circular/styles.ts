import { css, keyframes } from "@emotion/css";

const rotate = keyframes({
  to: {
    transform: "rotate(378deg)",
  },
});

const fillUnFill = keyframes({
  from: {
    strokeDasharray: "2.83 53.69",
  },

  "50%": {
    strokeDasharray: "42.39 14.13",
    strokeDashoffset: 0,
  },

  to: {
    strokeDasharray: "2.83 53.69",
    strokeDashoffset: -39.69,
  },
});

const rot = keyframes({
  to: {
    transform: "rotate(-360deg)",
  },
});

type Props = {
  determinate: boolean;
};
export const useStyles = ({ determinate }: Props) => ({
  g: css([
    {
      transformOrigin: "center",
    },
    determinate && {
      animation: `${rotate} 1.25s infinite linear`,
    },
  ]),

  path: css([
    {
      fill: "none",
      stroke: "#5c6bc0",
      strokeWidth: 2,

      strokeDasharray: "56.52 0",
      strokeDashoffset: 0,

      transformOrigin: "center",
    },
    !determinate && {
      animation: `${fillUnFill} 1.25s infinite cubic-bezier(0.4, 0, 0.2, 1), ${rot} 5s infinite steps(4)`,
    },
    // determinate && {
    //   strokeDasharray: "_VALUE_ 56.52",
    // },
  ]),
});
