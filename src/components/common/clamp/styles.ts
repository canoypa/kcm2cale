import { makeStyles, Theme } from "@material-ui/core";

type LineClampProps = {
  count: number;
};
export const useLineClampStyles = makeStyles<Theme, LineClampProps>({
  root: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    wordBreak: "break-word",
    overflowWrap: "break-word",

    WebkitLineClamp: (props) => props.count,
  },
});

type CharClampProps = {
  count: number;
};
export const useCharClampStyles = makeStyles<Theme, CharClampProps>({
  root: {
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    maxWidth: (props) => `${props.count}em`,
  },
});
