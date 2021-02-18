import { FC, ReactChild } from "react";
import { Chip } from ".";
import { classNames } from "../../../util/class-names";
import * as styles from "./styles";

type ChipProps = {
  value: string | number;
  label: ReactChild;
  activated?: boolean;
};

type Props = {
  nowrap?: boolean;
  scroll?: boolean;
  items: ChipProps[];
  onSelect?: (value: string) => void;

  children?: never;
};
export const ChipSet: FC<Props> = ({ items, nowrap, scroll, onSelect }) => {
  const classes = classNames(styles.chipSet, {
    [styles.chipSetNowrap]: (nowrap || scroll) === true,
    [styles.chipSetScrollable]: scroll === true,
  });

  const handlerChipClick = (value: string) => onSelect?.(value);

  return (
    <div className={classes} role="grid">
      {items.map(({ value, label, activated }) => (
        <Chip
          key={value}
          label={label}
          activated={activated}
          onActivated={() => handlerChipClick(value.toString())}
        />
      ))}
    </div>
  );
};
