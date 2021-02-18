import { css } from "@emotion/css";
import { TypographyBody1 } from "../typography";

// states
export const focusing = css();
export const hasValue = css();
export const fullWidth = css();

export const wrapper = css({
  display: "inline-flex",
  padding: 8,
  minWidth: 280,
  boxSizing: "border-box",

  [`&.${fullWidth}`]: {
    minWidth: "100%",
  },
});

export const container = css({
  position: "relative",
  width: "100%",
  backgroundColor: "#ffffff",
});

export const label = css(TypographyBody1, {
  position: "absolute",
  top: 0,
  left: 16,
  lineHeight: "56px",
  fontFamily: "Noto Sans",
  color: "rgba(0, 0, 0, 60%)",
  transition: "transform 100ms cubic-bezier(0.4, 0.0, 0.2, 1)",
  transformOrigin: "left",
  pointerEvents: "none",
  userSelect: "none",

  [`.${focusing} &, .${hasValue} &`]: {
    transform: "translateY(-1.75em) scale(0.75)",
  },

  [`.${focusing} &`]: {
    color: "#5C6BC0",
  },
});

export const outlineContainer = css({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  pointerEvents: "none",
});
export const outline = css({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#e0e0e0",
  transition:
    "border-width 100ms cubic-bezier(0.4, 0.0, 0.2, 1), border-color 100ms cubic-bezier(0.4, 0.0, 0.2, 1)",

  [`.${focusing} &`]: {
    borderWidth: 2,
    borderColor: "#5C6BC0",
  },
});
export const outlineStart = css({
  width: 16 - 4, // input padding - label padding
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  borderRight: "none",
});
export const outlineCenter = css({
  borderLeft: "none",
  borderRight: "none",

  [`.${focusing} &, .${hasValue} &`]: {
    borderTopColor: "transparent",
  },
});
export const outlineEnd = css({
  flexGrow: 1,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  borderLeft: "none",
});

export const labelSizing = css({
  fontSize: 16 * 0.75,
  padding: 4,
  visibility: "hidden",
});

export const textInput = css(TypographyBody1, {
  border: "none",
  padding: "0 16px",
  height: 56,
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  fontFamily: "Noto Sans",
});

export const textarea = css(TypographyBody1, {
  position: "absolute",
  width: "100%",
  height: "100%",
  border: "none",
  padding: `${(56 - 16) / 2}px 16px`,
  boxSizing: "border-box",
  fontFamily: "Noto Sans",
  outline: "none",
  resize: "none",
});
export const sizer = css(TypographyBody1, {
  padding: `${(56 - 16) / 2}px 16px`,
  minHeight: 56 * 2,
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "Noto Sans",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  overflow: "hidden",
  visibility: "hidden",
});

export const select = css(TypographyBody1, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
  height: 56,
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  fontFamily: "Noto Sans",
});
export const options = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
  margin: 0,
  padding: 0,
  opacity: 0,
});
