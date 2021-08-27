import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  main: {
    "& a": {
      color: theme.palette.primary.main,
    },
  },
}));
