import { css } from "@emotion/css";
import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  })
);

export const root = css({
  display: "flex",
  overflowX: "auto",
});

export const addEquipmentButtonArea = css({
  flexShrink: 0,
});
