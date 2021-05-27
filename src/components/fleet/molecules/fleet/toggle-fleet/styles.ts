import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    "&.MuiToggleButtonGroup-root": {
      display: "flex",
    },

    "& .MuiToggleButton-root": {
      flexGrow: 1,
    },
  },
}));
