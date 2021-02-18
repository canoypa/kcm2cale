import { FC } from "react";
import { FleetStateValue } from "../../../../../store/organize/ships";
import { useShip } from "../hook";
import * as styles from "./styles";

const DUMMY_LEVEL = 99;

type Props = {
  fleetPlace: FleetStateValue;
  swapShip: () => void;
};
export const ShipContent: FC<Props> = ({ fleetPlace, swapShip }) => {
  const ship = useShip(fleetPlace);

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <div className={styles.name} onClick={swapShip}>
          {ship.name || "変更"}
        </div>
        <div className={styles.level}>{`${DUMMY_LEVEL} Lv`}</div>
      </div>
    </div>
  );
};
