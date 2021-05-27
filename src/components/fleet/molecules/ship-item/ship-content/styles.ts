import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    marginLeft: 8,
  },

  name: {
    fontSize: "1.25em",
    cursor: "pointer",

    ["@media (max-width: 599px)"]: {
      fontSize: "1em",
      maxWidth: "8em",
    },
  },

  level: {
    marginLeft: 16,
  },
}));
