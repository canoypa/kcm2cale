import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      color: theme.palette.primary.main,
    },
  },
}));
