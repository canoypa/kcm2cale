import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FC } from "react";
import { useSelectShip } from "~/components/fleet/hooks/select-ship";
import { ShipsData } from "../../../../../data/ship";
import { Ship } from "../../../../../models/ship";

const useStyles = makeStyles(() => ({
  name: {
    fontSize: "1.25em",
    cursor: "pointer",

    ["@media (max-width: 599px)"]: {
      fontSize: "1em",
      maxWidth: "8em",
    },
  },
}));

const DUMMY_LEVEL = 99;

type Props = {
  fleetPlace: Ship;
};
export const ShipContent: FC<Props> = ({ fleetPlace }) => {
  const { select: selectShip } = useSelectShip();

  const ship = ShipsData.find((v) => v.no === fleetPlace.no);
  if (!ship) throw new Error("Error");

  const classes = useStyles();

  const swapShipHandler = () => {
    selectShip(fleetPlace);
  };

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" marginLeft={1}>
        <div className={classes.name} onClick={swapShipHandler}>
          {ship.name || "変更"}
        </div>
        <Box marginLeft={2}>{`${DUMMY_LEVEL} Lv`}</Box>
      </Box>
    </Box>
  );
};
