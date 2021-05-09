import { CssBaseline, makeStyles, Theme } from "@material-ui/core";
import { ReactNode, VFC } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    body: {
      WebkitTapHighlightColor: "transparent",
    },
  },
}));

type Props = {
  children: ReactNode;
};
export const GlobalStyles: VFC<Props> = ({ children }) => {
  useStyles();

  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
