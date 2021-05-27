import { makeStyles } from "@material-ui/core/styles";

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
