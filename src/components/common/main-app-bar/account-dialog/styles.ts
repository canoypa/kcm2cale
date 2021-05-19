import { css } from "@emotion/css";
import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    link: {
      color: theme.palette.text.secondary,
      textDecoration: "none",
    },
  })
);

export const accountHeader = css({
  display: "flex",
  alignItems: "center",
  columnGap: 16,
});

export const promoteSignIn = css({
  display: "flex",
  justifyContent: "center",
});
