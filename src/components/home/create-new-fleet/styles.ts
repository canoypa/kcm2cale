import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
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
