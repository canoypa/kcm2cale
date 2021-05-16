import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(3),
    height: "100%",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 1200,
  },

  searchBoxArea: {
    marginBottom: theme.spacing(2),
  },
}));
