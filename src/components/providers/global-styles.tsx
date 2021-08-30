import { CssBaseline as MuiCssBaseline } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import { ReactNode, VFC } from "react";

const CssBaseline = withStyles((theme) => ({
  "@global": {
    html: {
      WebkitTapHighlightColor: "transparent",
    },
    body: {
      ...theme.typography.body1,
    },
  },
}))(MuiCssBaseline);

type Props = {
  children: ReactNode;
};
export const GlobalStyles: VFC<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
