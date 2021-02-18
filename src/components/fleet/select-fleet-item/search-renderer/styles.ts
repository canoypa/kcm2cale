import { css } from "@emotion/css";
import { Shadow8dp } from "../../../common/shadow";

export const organizeSelectSearchRenderer = css(
  {
    /* Fixme: fixed layout に依存 */
    position: "fixed",
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
    backgroundColor: "#f5f5f5",
  },
  Shadow8dp
);

export const wrapper = css({
  width: "100%",
  maxWidth: "800px",
});

export const filterArea = css({
  marginTop: "-4px",
  marginBottom: "4px",
});
