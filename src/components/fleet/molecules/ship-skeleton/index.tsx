import { Box } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FC, useContext } from "react";
import { SwapShipContext } from "../fleet/contexts";
import { CurrentShip } from "../fleet/use-select-ship";

type Props = {
  fleetPlace: CurrentShip;
};
export const ShipSkeleton: FC<Props> = ({ fleetPlace }) => {
  const swapShip = useContext(SwapShipContext);

  const swapShipHandler = () => swapShip(fleetPlace);

  return (
    // role=button: ドラッグを防止
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      border={1}
      borderColor="divider"
      borderRadius={1}
      margin="4px 0"
      height="64px"
      bgcolor="background.default"
      color="text.secondary"
      style={{
        cursor: "pointer",
      }}
      role="button"
      onClick={swapShipHandler}
    >
      <Add />
    </Box>
  );
};
