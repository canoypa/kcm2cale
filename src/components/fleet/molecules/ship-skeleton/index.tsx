import { Add } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { FC } from "react";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { EmptyShip, Ship } from "../../../../models/ship";
import { useStartSelectShip } from "../../hooks/select-ship";

type Props = {
  fleetPlace: Ship | EmptyShip;
};
export const ShipSkeleton: FC<Props> = ({ fleetPlace }) => {
  const selectShip = useStartSelectShip();

  const isOwner = useIsFleetOwner();

  const swapShipHandler = () => {
    selectShip(fleetPlace);
  };

  return (
    <Box my={0.5}>
      <Paper variant="outlined">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={64}
          color="text.secondary"
          sx={{ cursor: isOwner ? "pointer" : undefined }}
          onClick={isOwner ? swapShipHandler : undefined}
          // ドラッグを防止
          role="button"
        >
          {isOwner && <Add />}
        </Box>
      </Paper>
    </Box>
  );
};
