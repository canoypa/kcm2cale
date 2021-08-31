import { styled } from "@material-ui/core";
import { FC } from "react";

type Props = {
  count: number;
  children: string;
};

export const LineClamp = styled<FC<Props>>((props) => <span {...props} />)(
  ({ count }) => ({
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    wordBreak: "break-word",
    overflowWrap: "break-word",

    WebkitLineClamp: count,
  })
);

export const CharClamp = styled<FC<Props>>((props) => <span {...props} />)(
  ({ count }) => ({
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    maxWidth: `${count}em`,
  })
);
