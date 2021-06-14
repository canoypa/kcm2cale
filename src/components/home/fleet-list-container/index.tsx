import { Container, Grid as Box } from "@material-ui/core";
import { FC } from "react";
import { LocalFleetDataV1 } from "../../../core/persistence/types";
import { EmptyState } from "../empty-state";
import { FleetList } from "../fleet-list";
import { useStyles } from "./styles";

/**
 * 保存されている編成が存在するか
 */
const checkExistFleetList = (fleets: LocalFleetDataV1[]) => {
  return fleets.length !== 0;
};

type Props = {
  fleetList: LocalFleetDataV1[];
};
export const FleetListContainer: FC<Props> = ({ fleetList }) => {
  // 保存されている編成が存在するか
  const isExistFleetList = checkExistFleetList(fleetList);

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      {isExistFleetList ? (
        <FleetList fleetList={fleetList} />
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
