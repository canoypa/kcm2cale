import { Box } from "@material-ui/core";
import { FC } from "react";
import { useSelectShip } from "~/components/fleet/hooks/select-ship";
import { useIsFleetOwner } from "~/hooks/organize/fleet";
import { ShipsData } from "../../../../../data/ship";
import { Ship } from "../../../../../models/ship";

const DUMMY_LEVEL = 99;

type Props = {
  fleetPlace: Ship;
};
export const ShipContent: FC<Props> = ({ fleetPlace }) => {
  const { select: selectShip } = useSelectShip();
  const isOwner = useIsFleetOwner();

  const ship = ShipsData.find((v) => v.no === fleetPlace.no);
  if (!ship) throw new Error("Error");

  const swapShipHandler = () => {
    selectShip(fleetPlace);
  };

  return (
    <Box display="flex" alignItems="center">
      <Box
        onClick={isOwner ? swapShipHandler : undefined}
        maxWidth="8em"
        mr={2}
        sx={{
          fontSize: { xs: "1em", sm: "1.25em" },
          cursor: "pointer",
        }}
      >
        {ship.name || "変更"}
      </Box>
      <div>{`${DUMMY_LEVEL} Lv`}</div>
    </Box>
  );
};
