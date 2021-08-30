import makeStyles from "@material-ui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  titleFieldMargin: {
    "&.MuiTextField-root": {
      marginTop: theme.spacing(1),
    },
  },
  descriptionFieldMargin: {
    "&.MuiTextField-root": {
      marginTop: theme.spacing(2),
    },
  },
  fleetTypeFieldMargin: {
    "&.MuiTextField-root": {
      marginTop: theme.spacing(4),
    },
  },
}));
