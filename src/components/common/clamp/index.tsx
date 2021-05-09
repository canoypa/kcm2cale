import { FC } from "react";
import { useLineClampStyles } from "./styles";

type Props = {
  count: number;
  children: string;
};
export const LineClamp: FC<Props> = ({ count, children }) => {
  const classes = useLineClampStyles({ count });
  return <span className={classes.root}>{children}</span>;
};
