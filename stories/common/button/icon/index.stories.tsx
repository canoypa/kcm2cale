import { Meta, Story } from "@storybook/react";
import {
  Button,
  IconButton,
  IconButtonProps,
} from "../../../../src/components/common/button";
import { IconAdd } from "../../../../src/components/common/icons";

export default {
  title: "Common/Button/Icon",
  component: Button,
} as Meta;

export const Basic: Story<IconButtonProps> = (props) => (
  <IconButton {...props} />
);
Basic.args = {
  icon: <IconAdd />,
};
