import { CircularProgress, Grid as Box } from "@material-ui/core";
import { FC } from "react";
import { useSigninCheck } from "reactfire";
import { FleetListContainer } from "../fleet-list-container";

export const FleetListArea: FC = () => {
  const {
    status: signInCheckStatus,
    data: signInCheckResult,
  } = useSigninCheck();

  if (signInCheckStatus === "loading" || !signInCheckResult.signedIn) {
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
  }

  return <FleetListContainer />;
};
