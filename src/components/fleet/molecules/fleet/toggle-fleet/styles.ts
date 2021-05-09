import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "&.MuiToggleButtonGroup-root": {
        display: "flex",
      },

      "& .MuiToggleButton-root": {
        flexGrow: 1,
      },
    },
  })
);
