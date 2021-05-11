import { css } from "@emotion/css";
import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    cardContent: {
      display: "grid",
      gridTemplateRows: "auto auto auto",
      gridTemplateColumns: "1fr auto",
    },
    overline: {
      gridArea: "1/1",
    },
    title: {
      gridArea: "2/1",
    },
    description: {
      gridArea: "3/1",
    },
    menuArea: {
      gridArea: "1/2/4/3",
    },
  })
);

export const container = css({
  color: "initial",
  textDecoration: "none",
});
