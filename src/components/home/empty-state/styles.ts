import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      placeItems: "center",
      rowGap: 16,
    },

    paragraph: {
      margin: 0,
      color: theme.palette.text.secondary,
    },

    prom: {
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);
