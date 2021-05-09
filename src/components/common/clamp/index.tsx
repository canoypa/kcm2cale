import { VFC } from "react";
import { useCharClampStyles, useLineClampStyles } from "./styles";

type LineClampProps = {
  count: number;
  children: string;
};
export const LineClamp: VFC<LineClampProps> = ({ count, children }) => {
  const classes = useLineClampStyles({ count });
  return <span className={classes.root}>{children}</span>;
};

type CharClampProps = {
  count: number;
  children: string;
};
export const CharClamp: VFC<CharClampProps> = ({ count, children }) => {
  const classes = useCharClampStyles({ count });
  return <span className={classes.root}>{children}</span>;
};
