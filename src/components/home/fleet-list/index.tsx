import { Box, Container } from "@material-ui/core";
import { FC } from "react";
import { LocalFleetData_v1 } from "../../../core/persistence/types";
import { FleetCard } from "../fleet-card";

type Props = {
  fleetList: LocalFleetData_v1[];
};
export const FleetList: FC<Props> = ({ fleetList }) => {
  return (
    <Container maxWidth="md">
      <Box display="grid" gridRowGap={16} paddingTop={3} paddingBottom={3}>
        {fleetList.map((v) => (
          <FleetCard key={v.id} fleetData={v} />
        ))}
      </Box>
    </Container>
  );
};
