import { Box, CircularProgress, Container } from "@mui/material";
import { FC } from "react";
import { useEffectOnce } from "react-use";
import { Fleet } from "~/models/fleet";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useFleetList } from "../hooks";

/**
 * 保存されている編成が存在するか
 */
const checkExistFleetList = (fleets: Fleet[]) => {
  return fleets.length !== 0;
};

export const FleetListArea: FC = () => {
  // const { data: signInCheckResult } = useSigninCheck();

  const { data: fleetList, mutate: mutateFleetList } = useFleetList();

  useEffectOnce(() => {
    mutateFleetList([]);
  });

  if (!fleetList) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress size={24} />
      </Box>
    );
  }

  // 保存されている編成が存在するか
  const isExistFleetList = checkExistFleetList(fleetList);

  // if (!signInCheckResult.signedIn) {
  //   return (
  //     <Box container justifyContent="center" alignItems="center" height="100%">
  //       <CircularProgress size={24} />
  //     </Box>
  //   );
  // }

  return (
    <Container maxWidth="md" sx={{ height: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        paddingTop={3}
        paddingBottom={3}
        height="100%"
      >
        {isExistFleetList ? (
          <FleetList fleetList={fleetList} />
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <EmptyState />
          </Box>
        )}
      </Box>
    </Container>
  );
};
