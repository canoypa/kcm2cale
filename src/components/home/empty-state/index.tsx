import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const EmptyState: FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" rowGap={1}>
      <Typography variant="h6" color="textSecondary">
        まだ編成がありません
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <Box component="span" fontWeight="fontWeightBold">
          編成を作成
        </Box>
        をタップして編成を作成します
      </Typography>
    </Box>
  );
};
