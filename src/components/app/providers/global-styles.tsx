import { makeStyles, Theme } from "@material-ui/core";
import { ReactNode, VFC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      WebkitTapHighlightColor: "transparent",
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  },
}));

type Props = {
  children: ReactNode;
};
export const GlobalStyles: VFC<Props> = ({ children }) => {
  useStyles();

  return <>{children}</>;
};
