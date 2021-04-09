import { css } from "@emotion/css";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../../../../src/components/common/button";
import { MaterialIcon } from "../../../../src/components/common/icons";

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
    <Button icon={<MaterialIcon icon="add" />} {...props} />
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
      <Button type="text" icon={<MaterialIcon icon="add" />} label="Button" />
      <Button
        type="outline"
        icon={<MaterialIcon icon="add" />}
        label="Button"
      />
      <Button
        type="contained"
        icon={<MaterialIcon icon="add" />}
        label="Button"
      />
    </div>
  </>
);
