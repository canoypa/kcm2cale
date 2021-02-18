import { css, cx } from "@emotion/css";
import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import * as shadows from "../../../src/components/common/shadow";
import { ElevationZValueRange } from "../../../src/components/common/shadow";
import { range } from "../../../src/util/range";

export default {
  title: "Common/Shadow",
  argTypes: {
    zIndex: {
      control: { type: "range", min: 0, max: 24 },
    },
  },
} as Meta;

const baseStyle = css({
  display: "inline-grid",
  placeContent: "center",
  width: 128,
  height: 128,
  margin: 24,
});

const Box = ({ zIndex }: { zIndex: ElevationZValueRange }) => {
  const shadowStyle = css(shadows[`Shadow${zIndex}dp`]);
  return <div className={cx(baseStyle, shadowStyle)}>{zIndex}</div>;
};

export const Basic: Story<ComponentProps<typeof Box>> = (props) => (
  <Box {...props} />
);
Basic.args = {
  zIndex: 1,
};

export const All: Story = () => (
  <>
    {range(0, 25, 5).map((row) => (
      <div key={row}>
        {range(0, 5).map((col) => (
          <Box key={row + col} zIndex={(row + col) as ElevationZValueRange} />
        ))}
      </div>
    ))}
  </>
);
