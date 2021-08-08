import { FC, ReactNode } from "react";
import { useStyles } from "./MarkdownStyle.styles";

type Props = {
  children: ReactNode;
};
export const MarkdownStyle: FC<Props> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
