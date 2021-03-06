import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  cardContent: {
    display: "grid",
    gridTemplateRows: "auto auto auto",
    gridTemplateColumns: "1fr auto",
  },
  overline: {
    gridArea: "1/1",
  },
  title: {
    gridArea: "2/1",
  },
  description: {
    gridArea: "3/1",
  },
  menuArea: {
    gridArea: "1/2/4/3",
  },

  container: {
    color: "initial",
    textDecoration: "none",
  },
}));
