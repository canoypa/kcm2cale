import { css, cx } from "@emotion/css";
import { Meta, Story } from "@storybook/react";
import {
  TypographyBody1,
  TypographyBody2,
  TypographyButton,
  TypographyCaption,
  TypographyHeadline1,
  TypographyHeadline2,
  TypographyHeadline3,
  TypographyHeadline4,
  TypographyHeadline5,
  TypographyHeadline6,
  TypographyOverline,
  TypographySubtitle1,
  TypographySubtitle2,
} from "../../../src/components/common/typography";

export default {
  title: "Common/Typography",
} as Meta;

const lineStyle = css({
  margin: "24px 0",
});

export const All: Story = () => (
  <>
    <div className={cx(lineStyle, TypographyHeadline1)}>Headlines 1</div>
    <div className={cx(lineStyle, TypographyHeadline2)}>Headlines 2</div>
    <div className={cx(lineStyle, TypographyHeadline3)}>Headlines 3</div>
    <div className={cx(lineStyle, TypographyHeadline4)}>Headlines 4</div>
    <div className={cx(lineStyle, TypographyHeadline5)}>Headlines 5</div>
    <div className={cx(lineStyle, TypographyHeadline6)}>Headlines 6</div>
    <div className={cx(lineStyle, TypographySubtitle1)}>Subtitle 1</div>
    <div className={cx(lineStyle, TypographySubtitle2)}>Subtitle 2</div>
    <div className={cx(lineStyle, TypographyBody1)}>Body 1</div>
    <div className={cx(lineStyle, TypographyBody2)}>Body 2</div>
    <div className={cx(lineStyle, TypographyButton)}>Button</div>
    <div className={cx(lineStyle, TypographyCaption)}>Caption</div>
    <div className={cx(lineStyle, TypographyOverline)}>Overline</div>
  </>
);
