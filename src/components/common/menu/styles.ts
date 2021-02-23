import { css } from "@emotion/css";
import { Shadow8dp } from "../shadow";

export const container = css(Shadow8dp, {
  position: "fixed",
  display: "inline-flex",
  flexDirection: "column",
  minWidth: 112,
  borderRadius: 4,
  overflow: "hidden",
});

export const scrim = css({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1,
});
