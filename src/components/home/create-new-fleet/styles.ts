import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "fixed",
      left: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      padding: 24,
      width: "100%",
      boxSizing: "border-box",

      ["@media (max-width: 719px)"]: {
        padding: 16,
      },
    },

    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);
