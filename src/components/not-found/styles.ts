import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& a": {
        color: theme.palette.primary.main,
      },
    },
  })
);
