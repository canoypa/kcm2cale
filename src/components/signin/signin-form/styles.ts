import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: 56,
    width: "100%",
    padding: 24,

    [theme.breakpoints.up("sm")]: {
      border: "1px solid",
      borderColor: theme.palette.divider,
      padding: 32,
      borderRadius: 4,
      maxWidth: 480,
      boxSizing: "border-box",
    },
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    rowGap: 16,
  },
}));
