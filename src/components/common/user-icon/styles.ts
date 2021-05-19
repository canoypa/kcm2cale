import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    display: "inline-flex",
    borderRadius: 16,
    overflow: "hidden",
  },
}));
