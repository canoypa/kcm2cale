import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
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
