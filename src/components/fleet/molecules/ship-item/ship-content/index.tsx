import { FC, useContext } from "react";
import { DeployedFleetShip } from "../../../../../store/organize/ships";
import { SwapShipContext } from "../../fleet/contexts";
import { useShip } from "../hook";
import { useStyles } from "./styles";

const DUMMY_LEVEL = 99;

type Props = {
  fleetPlace: DeployedFleetShip;
};
export const ShipContent: FC<Props> = ({ fleetPlace }) => {
  const swapShip = useContext(SwapShipContext);
  const ship = useShip(fleetPlace);

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
