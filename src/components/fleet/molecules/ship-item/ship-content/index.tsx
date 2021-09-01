import { Box } from "@material-ui/core";
import { FC } from "react";
import { useSelectShip } from "~/components/fleet/hooks/select-ship";
import { ShipsData } from "../../../../../data/ship";
import { Ship } from "../../../../../models/ship";

const DUMMY_LEVEL = 99;

type Props = {
  fleetPlace: Ship;
};
export const ShipContent: FC<Props> = ({ fleetPlace }) => {
  const { select: selectShip } = useSelectShip();

  const ship = ShipsData.find((v) => v.no === fleetPlace.no);
  if (!ship) throw new Error("Error");

  const swapShipHandler = () => {
    selectShip(fleetPlace);
  };

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" marginLeft={1}>
        <Box
          onClick={swapShipHandler}
          maxWidth="8em"
          sx={{
            fontSize: { xs: "1em", sm: "1.25em" },
            cursor: "pointer",
          }}
        >
          {ship.name || "変更"}
        </Box>
        <Box marginLeft={2}>{`${DUMMY_LEVEL} Lv`}</Box>
      </Box>
    </Box>
  );
};
