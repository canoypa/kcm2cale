import { Box, Container } from "@material-ui/core";
import { FC } from "react";
import { Fleet } from "../../molecules/fleet";
import { FleetHeader } from "../../molecules/fleet-header";

export const Organize: FC = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" gridRowGap={16} paddingY={3}>
        <FleetHeader />
        <Fleet />
      </Box>
    </Container>
  );
};
