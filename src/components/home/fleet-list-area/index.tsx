import { Box, CircularProgress, Container } from "@mui/material";
import { FC, useState } from "react";
import { useEffectOnce } from "react-use";
import { LocalDatabase } from "~/core/persistence/local-database";
import { LocalFleetDataV1 } from "~/core/persistence/types";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";

/**
 * 保存されている編成が存在するか
 */
const checkExistFleetList = (fleets: LocalFleetDataV1[]) => {
  return fleets.length !== 0;
};

export const FleetListArea: FC = () => {
  // const { data: signInCheckResult } = useSigninCheck();

  // const { data: fleetList, mutate: mutateFleetList } = useFleetList();

  const [fleetList, setFleetList] = useState<LocalFleetDataV1[] | null>(null);

  useEffectOnce(() => {
    LocalDatabase.getAllFleet().then((v) => {
      setFleetList(v);
    });
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
