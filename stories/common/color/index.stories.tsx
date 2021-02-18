import { css, cx } from "@emotion/css";
import { Meta, Story } from "@storybook/react";
import * as colors from "../../../src/components/common/color";

const palette = [
  ...Object.entries(colors)
    .reduce((pre, [colorName, colorValue]) => {
      const match = /Color(?<name>[A-Za-z]+[a-z])(?<label>[A-Z]?\d+)?/.exec(
        colorName
      );
      const groupName = match.groups.name;
      const label = match.groups.label ?? 0;

      return pre.set(groupName, [
        ...(pre.get(groupName) ?? []),
        [label, colorValue],
      ]);
    }, new Map())
    .entries(),
];

export default {
  title: "Common/Color",
} as Meta;

const wrapperStyle = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 256px)",
  columnGap: 24,
  justifyContent: "center",

  "> div > div": {
    width: 256,
    border: "1px solid #e0e0e0",
  },
});

const baseStyle = css({
  display: "flex",
  justifyContent: "space-between",
  height: 48,
  padding: 12,
  boxSizing: "border-box",
});

const Box = ({ label, color }: { label: string; color: string }) => {
  const backColorStyle = css({ backgroundColor: color });
  return (
    <div className={cx(baseStyle, backColorStyle)}>
      <span>{label}</span>
      <span>{color}</span>
    </div>
  );
};

export const All: Story = () => (
  <div className={wrapperStyle}>
    {palette.map(([name, colors]) => (
      <div key={name}>
        <h3>{name}</h3>
        <div>
          {colors.map(([label, color]) => (
            <Box key={color} label={label} color={color} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
