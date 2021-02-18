import { css } from "@emotion/css";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../../../../src/components/common/button";
import { IconAdd } from "../../../../src/components/common/icons";

export default {
  title: "Common/Button/Basic",
  component: Button,
} as Meta;

const buttonListStyle = css({
  button: {
    margin: "0 4px",
  },
});

export const Basic: Story<Props> = (props) => (
  <div className={buttonListStyle}>
    <Button {...props} />
    <Button icon={<IconAdd />} {...props} />
  </div>
);
Basic.args = {
  label: "Button",
};

export const All: Story<Props> = () => (
  <>
    <div className={buttonListStyle}>
      <Button type="text" label="Button" />
      <Button type="outline" label="Button" />
      <Button type="contained" label="Button" />
    </div>
    <div className={buttonListStyle}>
      <Button type="text" icon={<IconAdd />} label="Button" />
      <Button type="outline" icon={<IconAdd />} label="Button" />
      <Button type="contained" icon={<IconAdd />} label="Button" />
    </div>
  </>
);
