import { createStyles, makeStyles, Theme } from "@material-ui/core";

type LineClampProps = {
  count: number;
};
export const useLineClampStyles = makeStyles<Theme, LineClampProps>(
  createStyles({
    root: {
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",

      WebkitLineClamp: (props) => props.count,
    },
  })
);
