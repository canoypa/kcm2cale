import { Typography } from "@material-ui/core";
import { FC } from "react";
import { useStyles } from "./styles";

export const EmptyState: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.paragraph}>
        まだ編成がありません
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        <span className={classes.prom}>編成を作成</span>{" "}
        をタップして編成を作成します
      </Typography>
    </div>
  );
};
