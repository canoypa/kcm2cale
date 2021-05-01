import { FC, useContext } from "react";
import { FleetStateValue } from "../../../../../store/organize/ships";
import { SwapShipContext } from "../../fleet/contexts";
import { useShip } from "../hook";
import * as styles from "./styles";

const DUMMY_LEVEL = 99;

type Props = {
  fleetPlace: FleetStateValue;
};
export const ShipContent: FC<Props> = ({ fleetPlace }) => {
  const swapShip = useContext(SwapShipContext);
  const ship = useShip(fleetPlace);

  const swapShipHandler = () => swapShip(fleetPlace);

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <div className={styles.name} onClick={swapShipHandler}>
          {ship.name || "変更"}
        </div>
        <div className={styles.level}>{`${DUMMY_LEVEL} Lv`}</div>
      </div>
    </div>
  );
};
