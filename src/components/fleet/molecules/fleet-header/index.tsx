import { Box, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { FC, useContext, useState } from "react";
import { FleetIdContext } from "../../fleetIdContext";
import { useFleet } from "../../hooks";
import { Editing } from "./editing";
import { Info } from "./info";
import { Actions } from "./status-bar";

const FleetHeaderSkeleton: FC = () => {
  return (
    <Box display="flex" flexDirection="column" padding={2}>
      <Typography variant="h4" paragraph>
        <Skeleton variant="rect" />
      </Typography>
      <Typography variant="body1" paragraph>
        <Skeleton variant="rect" />
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <Skeleton variant="rect" width={128} />
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Skeleton variant="circle" width={48} height={48} />
      </Box>
    </Box>
  );
};

export const FleetHeader: FC = () => {
  const fleetId = useContext(FleetIdContext);
  const fleet = useFleet(fleetId);

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
