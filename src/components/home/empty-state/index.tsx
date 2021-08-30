import { Box, Typography } from "@material-ui/core";
import { FC } from "react";
import { useStyles } from "./styles";

export const EmptyState: FC = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" rowGap={1}>
      <Typography variant="h6" color="textSecondary">
        まだ編成がありません
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <span className={classes.prom}>編成を作成</span>{" "}
        をタップして編成を作成します
      </Typography>
    </Box>
  );
};
