import { FC, useContext } from "react";
import { ShipsData } from "../../../../../data/ship";
import { FireShip } from "../../../../../models/fleet";
import { SwapShipContext } from "../../fleet/contexts";
import { useStyles } from "./styles";

const DUMMY_LEVEL = 99;

type Props = {
  fleetPlace: FireShip;
};
export const ShipContent: FC<Props> = ({ fleetPlace }) => {
  const swapShip = useContext(SwapShipContext);
  const ship = ShipsData.find((v) => v.no === fleetPlace.no);
  if (!ship) throw new Error("Error");

  const classes = useStyles();

  const swapShipHandler = () => swapShip(fleetPlace);

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
