import { CircularProgress, Container, Grid as Box } from "@material-ui/core";
import { FC, Suspense } from "react";
import { useIsExistFleet } from "../../../core/search/fleet";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useStyles } from "./styles";

export const FleetListArea: FC = () => {
  const isExistFleetList = useIsExistFleet();

  const classes = useStyles();

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
