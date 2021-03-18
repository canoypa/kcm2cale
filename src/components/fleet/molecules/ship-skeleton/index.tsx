import { FC, useContext } from "react";
import { MaterialIcon } from "../../../common/icons";
import { SwapShipContext } from "../fleet/contexts";
import { CurrentShip } from "../fleet/use-select-ship";
import * as styles from "./styles";

type Props = {
  fleetPlace: CurrentShip;
};
export const ShipSkeleton: FC<Props> = ({ fleetPlace }) => {
  const swapShip = useContext(SwapShipContext);

  const swapShipHandler = () => swapShip(fleetPlace);

  return (
    // role=button: ドラッグを防止
    <div className={styles.root} onClick={swapShipHandler} role="button">
      <div className={styles.icon}>
        <MaterialIcon icon="add" size={24} />
      </div>
    </div>
  );
};
