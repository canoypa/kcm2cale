import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    padding: 32,

    ["@media(max-width: 719px)"]: {
      padding: 24,
    },
  },
}));
