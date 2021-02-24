import { FC, memo } from "react";
import { FleetStateValue } from "../../../../store/organize/ships";
import { IconDragIndicator } from "../../../common/icons";
import { Rigging } from "../rigging";
import { ShipContent } from "./ship-content";
import * as styles from "./styles";

type Props = {
  fleetPlace: FleetStateValue;
};
export const ShipItem: FC<Props> = memo(({ fleetPlace }) => (
  <div className={styles.root}>
    <div className={styles.dragIndicator}>
      <IconDragIndicator />
    </div>
    <div className={styles.content}>
      <div>
        <ShipContent fleetPlace={fleetPlace} />
      </div>
      <div className={styles.secondary}>
        <Rigging fleetPlace={fleetPlace} />
      </div>
    </div>
  </div>
));
