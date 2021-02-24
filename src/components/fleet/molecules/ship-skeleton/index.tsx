import { FC } from "react";
import { IconAdd } from "../../../common/icons";
import { CurrentShip } from "../fleet/use-select-ship";
import * as styles from "./styles";

type Props = {
  fleetPlace: CurrentShip;

  setShip: () => void;
};
export const ShipSkeleton: FC<Props> = ({ setShip, fleetPlace }) => (
  <div className={styles.root} onClick={setShip}>
    <div className={styles.icon}>
      <IconAdd size={24} />
    </div>
  </div>
);
