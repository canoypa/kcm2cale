import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  paragraph: {
    margin: 0,
    color: theme.palette.text.secondary,
  },

  prom: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
