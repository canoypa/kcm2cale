import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paragraph: {
      margin: 0,
      color: theme.palette.text.secondary,
    },

    prom: {
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
