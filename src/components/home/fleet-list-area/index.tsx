import { CircularProgress, Grid as Box } from "@material-ui/core";
import { FC } from "react";
import { useSigninCheck } from "../../../hooks/firebase/auth/useSigninCheck";
import { FleetListContainer } from "../fleet-list-container";

export const FleetListArea: FC = () => {
  const { isValidating: isSignInValidating, data: signInCheckResult } =
    useSigninCheck();

  if (isSignInValidating || !signInCheckResult.signedIn) {
    return (
      <Box
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <CircularProgress size={24} />
      </Box>
    );
  }

  return <FleetListContainer />;
};
