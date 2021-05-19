import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
  },
  accountHeader: {
    display: "flex",
    alignItems: "center",
    columnGap: 16,
  },

  promoteSignIn: {
    display: "flex",
    justifyContent: "center",
  },
}));
