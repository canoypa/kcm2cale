import { CssBaseline as MuiCssBaseline, withStyles } from "@material-ui/core";
import { ReactNode, VFC } from "react";

const CssBaseline = withStyles((theme) => ({
  "@global": {
    html: {
      colorScheme: "dark light",
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
