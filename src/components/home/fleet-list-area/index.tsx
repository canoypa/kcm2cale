import { CircularProgress, Grid as Box } from "@mui/material";
import { FC } from "react";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";
import { FleetListContainer } from "../fleet-list-container";

export const FleetListArea: FC = () => {
  const { data: signInCheckResult } = useSigninCheck();

  if (!signInCheckResult.signedIn) {
    return (
      <Box container justifyContent="center" alignItems="center" height="100%">
        <CircularProgress size={24} />
      </Box>
    );
  }

  return <FleetListContainer />;
};
