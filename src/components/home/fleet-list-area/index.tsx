import { CircularProgress, Grid as Box } from "@material-ui/core";
import { FC, Suspense } from "react";
import { AuthCheck } from "reactfire";
import { LoadFireFleet, LoadLocalFleet } from "../load-fleet";

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
      <AuthCheck fallback={<LoadLocalFleet />}>
        <LoadFireFleet />
      </AuthCheck>
    </Suspense>
  );
};
