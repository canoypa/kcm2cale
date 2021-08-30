import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: "100%",
  },
}));
