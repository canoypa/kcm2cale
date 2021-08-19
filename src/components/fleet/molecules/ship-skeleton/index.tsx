import { Box } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FC, useContext } from "react";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { EmptyShip, Ship } from "../../../../models/ship";
import { SwapShipContext } from "../ShipsList/contexts";

type Props = {
  fleetPlace: Ship | EmptyShip;
};
export const ShipSkeleton: FC<Props> = ({ fleetPlace }) => {
  const swapShip = useContext(SwapShipContext);
  const isOwner = useIsFleetOwner();

  const swapShipHandler = () => swapShip(fleetPlace);

  return (
    // role=button: ドラッグを防止
    isOwner ? (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        border={1}
        borderColor="divider"
        borderRadius={1}
        margin="4px 0"
        height={64}
        color="text.secondary"
        style={{
          cursor: "pointer",
        }}
        role="button"
        onClick={swapShipHandler}
      >
        <Add />
      </Box>
    ) : (
      <Box
        border={1}
        borderColor="divider"
        borderRadius={1}
        margin="4px 0"
        height={64}
        role="button"
      />
    )
  );
};
