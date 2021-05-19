import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(3),

    ["@media (max-width: 719px)"]: {
      padding: theme.spacing(2),
    },
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
