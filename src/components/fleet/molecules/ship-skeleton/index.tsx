import { Box } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FC } from "react";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { EmptyShip, Ship } from "../../../../models/ship";
import { useSelectShip } from "../../hooks/select-ship";

type Props = {
  fleetPlace: Ship | EmptyShip;
};
export const ShipSkeleton: FC<Props> = ({ fleetPlace }) => {
  const { select: selectShip } = useSelectShip();

  const isOwner = useIsFleetOwner();

  const swapShipHandler = () => {
    selectShip(fleetPlace);
  };

  return (
    // role=button: ドラッグを防止
    isOwner ? (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        border={1}
        borderColor="divider"
        borderRadius="1px"
        margin="4px 0"
        height={64}
        color="text.secondary"
        sx={{ cursor: "pointer" }}
        role="button"
        onClick={swapShipHandler}
      >
        <Add />
      </Box>
    ) : (
      <Box
        border={1}
        borderColor="divider"
        borderRadius="1px"
        margin="4px 0"
        height={64}
        role="button"
      />
    )
  );
};
