import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
  },
  accountHeader: {
    display: "flex",
    alignItems: "center",
    columnGap: 16,
  },
}));
