import { CircularProgress, Grid as Box } from "@material-ui/core";
import { FC, Suspense } from "react";
import { FleetListContainer } from "../fleet-list-container";

const LoadingFleet: FC = () => {
  return (
    <Box
      container
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <CircularProgress size={24} />
    </Box>
  );
};

export const FleetListArea: FC = () => {
  return (
    <Suspense fallback={<LoadingFleet />}>
      <FleetListContainer />
    </Suspense>
  );
};
