import { css } from "@emotion/css";
import { Shadow2dp, Shadow4dp } from "../../shadow";
import { TypographyButton } from "../../typography";

type ButtonType = "text" | "outline" | "contained";

const primaryColor = "#5c6bc0";

type Props = {
  type: ButtonType;
  isDisabled: boolean;
};
export const useStyles = ({ type, isDisabled }: Props) => ({
  container: css([
    {
      // reset
      padding: 0,
      border: "none",
      backgroundColor: "transparent",
      outline: "none",

      height: "48px",
    },
    isDisabled && {
      pointerEvents: "none",
    },
  ]),

  root: css([
    TypographyButton,
    {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      minWidth: "64px",
      height: "36px",
      boxSizing: "border-box",
      borderRadius: "4px",
      verticalAlign: "middle",
      overflow: "hidden",

      transitionProperty:
        "box-shadow, border-color, background-color, color, fill",
      transitionDuration: "0.1s",
      transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",

      ":hover": {
        cursor: "pointer",
      },
    },

    (type === "text" || type === "outline") && [
      {
        color: primaryColor,
        fill: primaryColor,
      },
      isDisabled && {
        color: "rgba(0, 0, 0, 0.37)",
        fill: "rgba(0, 0, 0, 0.37)",
      },
    ],

    type === "text" && {
      padding: "0 8px",
    },

    type === "outline" && [
      {
        padding: "0 15px",
        border: `1px solid ${primaryColor}`,
      },
      isDisabled && {
        borderColor: "rgba(0, 0, 0, 0.12)",
      },
    ],

    type === "contained" && [
      Shadow2dp,
      {
        padding: "0 16px",
        backgroundColor: primaryColor,
        color: "white",
        fill: "white",

        "&:hover": Shadow4dp,
      },
      isDisabled && {
        boxShadow: "none",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
        color: "rgba(0, 0, 0, 0.37)",
        fill: "rgba(0, 0, 0, 0.37)",
      },
    ],
  ]),

  icon: css({
    marginLeft: -4,
    marginRight: 8,
    width: 18,
    height: 18,
  }),

  state: css({
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
      backgroundColor: primaryColor,
      opacity: 0,
    },

    "&:hover::before": {
      opacity: 0.04,
    },
  }),
});
