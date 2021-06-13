import { CircularProgress, Container, Grid as Box } from "@material-ui/core";
import { FC, Suspense } from "react";
import { LocalFleetDataV1 } from "../../../core/persistence/types";
import {
  useFleetList,
  useRefreshFleetList,
} from "../../../hooks/organize/fleet";
import { useDidMount } from "../../../util/hooks/lifecycle";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useStyles } from "./styles";

/**
 * 保存されている編成が存在するか
 */
const checkExistFleetList = (fleets: LocalFleetDataV1[]) => {
  return fleets.length !== 0;
};

const FleetListContainer: FC = () => {
  const refreshFleet = useRefreshFleetList();

  // 保存されている編成をすべて取得
  const fleetList = useFleetList();
  // 保存されている編成が存在するか
  const isExistFleetList = checkExistFleetList(fleetList);

  const classes = useStyles();

  // 初回リフレッシュ
  useDidMount(() => {
    refreshFleet();
  });

  return (
    <Container maxWidth="md" className={classes.root}>
      {isExistFleetList ? (
        <FleetList />
      ) : (
        <Box
          container
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <EmptyState />
        </Box>
      )}
    </Container>
  );
};

export const FleetListArea: FC = () => {
  return (
    <Suspense
      fallback={
        <Box
          container
          justify="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <CircularProgress size={24} />
        </Box>
      }
    >
      <FleetListContainer />
    </Suspense>
  );
};
