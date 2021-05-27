import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: "100%",
  },
}));
