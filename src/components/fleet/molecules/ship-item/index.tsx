import { FC, memo } from "react";
import { FleetStateValue } from "../../../../store/organize/ships";
import { MaterialIcon } from "../../../common/icons";
import { Rigging } from "../rigging";
import { ShipContent } from "./ship-content";
import * as styles from "./styles";

type Props = {
  fleetPlace: FleetStateValue;
};
export const ShipItem: FC<Props> = memo(({ fleetPlace }) => (
  <div className={styles.root}>
    {/* data-movable-handle: ドラッグハンドルの指定 */}
    <div className={styles.dragIndicator} data-movable-handle>
      <MaterialIcon icon="drag_indicator" />
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
