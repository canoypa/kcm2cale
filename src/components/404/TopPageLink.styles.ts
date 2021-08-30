import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  main: {
    "& a": {
      color: theme.palette.primary.main,
    },
  },
}));
