import { css } from "@emotion/css";
import { Shadow2dp, Shadow4dp } from "../../shadow";
import { TypographyButton } from "../../typography";

const primaryColor = "#5c6bc0";

export const container = css({
  // reset
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  outline: "none",

  height: "48px",

  "&:disabled": {
    pointerEvents: "none",
  },
});

export const root = css(
  `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 64px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 4px;
  vertical-align: middle;
  letter-spacing: 0.075rem;
  overflow: hidden;

  &:disabled {
    color: rgba(0, 0, 0, 0.37);
  }

  &:not(:disabled):hover {
    cursor: pointer;
  }
`,
  TypographyButton
);

export const text = css(`
  padding: 0 8px;
  color: ${primaryColor};
  fill: ${primaryColor};
`);

export const outline = css(`
  padding: 0 15px;
  color: ${primaryColor};
  fill: ${primaryColor};
  border: 1px solid ${primaryColor};

  &:disabled {
    border-color: rgba(0, 0, 0, 0.12);
  }
`);

export const contained = css(
  `
  padding: 0 16px;
  background-color: ${primaryColor};
  color: white;
  fill: white;
  transition: box-shadow 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:disabled {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
`,
  Shadow2dp,
  { "&:hover": Shadow4dp }
);

export const icon = css(`
  margin-left: -4px;
  margin-right: 8px;
  width: 18px;
  height: 18px;
`);

export const state = css(`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${primaryColor};
    opacity: 0;
  }

  &:hover::before {
    opacity: 0.04;
  }
`);
