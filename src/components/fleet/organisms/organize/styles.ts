import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 1279,
    margin: "0 auto",
  },

  fleetArea: {
    padding: 24,

    ["@media(max-width: 719px)"]: {
      padding: "24px 12px",
    },
  },
}));
