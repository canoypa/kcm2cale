import { Box, Skeleton, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useRecoilValue } from "recoil";
import { FleetState } from "~/store/organize/info";
import { Editing } from "./editing";
import { Info } from "./info";
import { Actions } from "./status-bar";

const FleetHeaderSkeleton: FC = () => {
  return (
    <Box display="flex" flexDirection="column" padding={2}>
      <Typography variant="h4" paragraph>
        <Skeleton variant="rectangular" />
      </Typography>
      <Typography variant="body1" paragraph>
        <Skeleton variant="rectangular" />
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <Skeleton variant="rectangular" width={128} />
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Skeleton variant="circular" width={48} height={48} />
      </Box>
    </Box>
  );
};

export const FleetHeader: FC = () => {
  const fleet = useRecoilValue(FleetState);

  const [isEditing, setIsEditing] = useState(false);

  const startEdit = () => setIsEditing(true);
  const endEdit = () => setIsEditing(false);

  return fleet ? (
    <>
      <Box padding={2}>
        <Info />
        <Actions startEdit={startEdit} />
      </Box>

      <Editing open={isEditing} onEnd={endEdit} />
    </>
  ) : (
    <FleetHeaderSkeleton />
  );
};
