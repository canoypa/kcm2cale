import { Box, Typography } from "@material-ui/core";
import { FC } from "react";
import { useStyles } from "./styles";

export const EmptyState: FC = () => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gridGap={2}>
      <Typography variant="h6" className={classes.paragraph}>
        まだ編成がありません
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        <span className={classes.prom}>編成を作成</span>{" "}
        をタップして編成を作成します
      </Typography>
    </Box>
  );
};
