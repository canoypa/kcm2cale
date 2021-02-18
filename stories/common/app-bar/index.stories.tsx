import { Meta, Story } from "@storybook/react";
import {
  TopAppBar,
  TopAppBarProps,
} from "../../../src/components/common/app-bar";

export default {
  title: "Common/TopAppBar",
  component: TopAppBar,
} as Meta;

export const Basic: Story<TopAppBarProps> = (props) => (
  <TopAppBar title={props.title} />
);
Basic.args = {
  title: "Title",
};
