import { FC, memo } from "react";
import { FleetStateValue } from "../../../../store/organize/ships";
import { Rigging } from "../rigging";
import { ShipContent } from "./ship-content";
import * as styles from "./styles";

type Props = {
  fleetPlace: FleetStateValue;
  swapShip: () => void;
};
export const ShipItem: FC<Props> = memo(({ fleetPlace, swapShip }) => (
  <div className={styles.root}>
    <div className={styles.content}>
      <div>
        <ShipContent fleetPlace={fleetPlace} swapShip={swapShip} />
      </div>
      <div className={styles.secondary}>
        <Rigging fleetPlace={fleetPlace} />
      </div>
    </div>
  </div>
));
