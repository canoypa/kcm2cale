import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
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
