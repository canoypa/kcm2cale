import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },

  content: {
    display: "grid",
    rowGap: 16,
    padding: 24,
    width: "100%",
    maxWidth: 1200,
  },
}));
