import makeStyles from "@material-ui/styles/makeStyles";

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
