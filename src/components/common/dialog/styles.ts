import { css } from "@emotion/css";
import { Shadow24dp } from "../shadow";
import { TypographyBody1, TypographyHeadline6 } from "../typography";

export const isOpen = css();

export const wrapper = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 24,
});

export const container = css(Shadow24dp, {
  minWidth: 280,
  maxWidth: "calc(100vw - 48px)",
  maxHeight: "calc(100vh - 96px)",
  backgroundColor: "#ffffff",
  borderRadius: 4,
  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  overflowY: "auto",

  opacity: 0,
  transform: "scale(0.8)",

  [`.${isOpen} &`]: {
    opacity: 1,
    transform: "scale(1)",
  },
});

export const scrim = css({
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.32)",
  zIndex: -1,
  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",

  opacity: 0,

  [`.${isOpen} &`]: {
    opacity: 1,
  },
});

export const title = css(
  {
    margin: 0,
    padding: 24,
    height: 64,
    boxSizing: "border-box",
  },
  TypographyHeadline6
);

export const content = css(TypographyBody1, {
  padding: 24,
  color: "rgba(0, 0, 0, 0.6)",

  [`.${title} + &`]: {
    paddingTop: 0,
  },
});

export const actions = css({
  display: "flex",
  justifyContent: "flex-end",
  columnGap: 8,
  padding: 8,
});
