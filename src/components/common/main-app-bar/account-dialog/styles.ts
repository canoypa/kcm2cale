import { makeStyles } from "@material-ui/core";

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
