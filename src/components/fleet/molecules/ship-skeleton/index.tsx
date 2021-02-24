import { FC, useContext } from "react";
import { IconAdd } from "../../../common/icons";
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
    <div className={styles.root} onClick={swapShipHandler}>
      <div className={styles.icon}>
        <IconAdd size={24} />
      </div>
    </div>
  );
};
