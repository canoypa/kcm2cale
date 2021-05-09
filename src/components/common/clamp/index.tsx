import { FC } from "react";
import { useLineClampStyles } from "./styles";

type Props = {
  clamp?: number;
  children: string;
};
export const LineClamp: FC<Props> = ({ clamp = 4, children }) => {
  const classes = useLineClampStyles({ count: clamp });
  return <span className={classes.root}>{children}</span>;
};
