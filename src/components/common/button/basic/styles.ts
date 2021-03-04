import { css } from "@emotion/css";
import { Shadow2dp, Shadow4dp } from "../../shadow";
import { TypographyButton } from "../../typography";

type ButtonType = "text" | "outline" | "contained";

const primaryColor = "#5c6bc0";

type Props = {
  type: ButtonType;
};
export const useStyles = ({ type }: Props) => ({
  container: css({
    // reset
    padding: 0,
    border: "none",
    backgroundColor: "transparent",
    outline: "none",

    height: "48px",

    "&:disabled": {
      pointerEvents: "none",
    },
  }),

  root: css(
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
      letterSpacing: "0.075rem",
      overflow: "hidden",

      "&:disabled": {
        color: "rgba(0, 0, 0, 0.37)",
      },

      "&:not(:disabled):hover": {
        cursor: "pointer",
      },
    },

    type === "text" && {
      padding: "0 8px",
      color: primaryColor,
      fill: primaryColor,
    },

    type === "outline" && {
      padding: "0 15px",
      color: primaryColor,
      fill: primaryColor,
      border: `1px solid ${primaryColor}`,

      "&:disabled": {
        borderColor: "rgba(0, 0, 0, 0.12)",
      },
    },

    type === "contained" && {
      ...Shadow2dp,

      padding: "0 16px",
      backgroundColor: primaryColor,
      color: "white",
      fill: "white",
      transition: "box-shadow 0.1s cubic-bezier(0.4, 0, 0.2, 1)",

      "&:disabled": {
        boxShadow: "none",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
      },

      "&:hover": Shadow4dp,
    }
  ),

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
