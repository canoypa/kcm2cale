import { css } from "@emotion/css";
import { Shadow8dp } from "../shadow";

export const root = css(
  Shadow8dp,
  `
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  height: 56px;
  background-color: #fff;
`
);

export const item = css(`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px 12px;
  min-width: 80px;
  max-width: 168px;
  box-sizing: border-box;
`);

export const icon = css(`
  width: 24px;
  height: 24px;
`);

export const label = css(`
  font-size: 14px;
`);

export const bottomNavigationAdjust = css({
  marginBottom: 56,
});
