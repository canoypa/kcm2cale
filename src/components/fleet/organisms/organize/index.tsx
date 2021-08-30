import { Box, Container } from "@material-ui/core";
import { FC } from "react";
import { FleetHeader } from "../../molecules/fleet-header";
import { ShipsList } from "../../molecules/ShipsList";

export const Organize: FC = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" rowGap={2} paddingY={3}>
        <FleetHeader />
        <ShipsList />
      </Box>
    </Container>
  );
};
