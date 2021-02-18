import { Meta, Story } from "@storybook/react";
import { Chip, ChipProps } from "../../../../src/components/common/chip";
import { IconAdd } from "../../../../src/components/common/icons";

export default {
  title: "Common/Chips",
  component: Chip,
} as Meta;

export const Basic: Story<ChipProps> = (props) => (
  <>
    <Chip label={props.label} />
    <Chip label={props.label} icon={<IconAdd />} />
  </>
);
Basic.args = {
  label: "Chip",
};
