import { CircularProgress, Grid as Box } from "@material-ui/core";
import { FC } from "react";
import { useFleetList, useIsExistFleet } from "../../../core/search/fleet";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useStyles } from "./styles";

export const FleetListArea: FC = () => {
  const isExistFleetList = useIsExistFleet();
  const fleetList = useFleetList();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {fleetList ? (
          isExistFleetList ? (
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
          )
        ) : (
          <Box
            container
            justify="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <CircularProgress size={24} />
          </Box>
        )}
      </div>
    </div>
  );
};
