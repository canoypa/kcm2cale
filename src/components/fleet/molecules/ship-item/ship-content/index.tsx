import { FC } from "react";
import { useSelectShip } from "~/components/fleet/hooks/select-ship";
import { ShipsData } from "../../../../../data/ship";
import { Ship } from "../../../../../models/ship";
import { useStyles } from "./styles";

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
    <div className={classes.root}>
      <div className={classes.actions}>
        <div className={classes.name} onClick={swapShipHandler}>
          {ship.name || "変更"}
        </div>
        <div className={classes.level}>{`${DUMMY_LEVEL} Lv`}</div>
      </div>
    </div>
  );
};
