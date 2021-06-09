import { CircularProgress, Container, Grid as Box } from "@material-ui/core";
import { FC, Suspense } from "react";
import {
  useIsExistFleet,
  useRefreshFleetList,
} from "../../../core/search/fleet";
import { useDidMount } from "../../../util/hooks/lifecycle";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useStyles } from "./styles";

export const FleetListArea: FC = () => {
  const isExistFleetList = useIsExistFleet();
  const refreshFleet = useRefreshFleetList();

  const classes = useStyles();

  // 初回リフレッシュ
  useDidMount(() => {
    refreshFleet();
  });

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
    </Suspense>
  );
};
