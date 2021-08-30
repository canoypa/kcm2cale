import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
  root: {
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));
