import { FC } from "react";
import { useRecoilValue } from "recoil";
import { isCombinedFleet } from "../../../../core/util/is-combined-fleet";
import { isShipPlaced } from "../../../../core/util/is-ship-placed";
import { FleetTypeState } from "../../../../store/organize/info";
import { SelectShip } from "../../templates/select-ship";
import { ShipItem } from "../ship-item";
import { ShipSkeleton } from "../ship-skeleton";
import { useFleet } from "./hook";
import * as styles from "./styles";
import { ToggleFleet } from "./toggle-fleet";
import { useSelectShip } from "./use-select-ship";

export const Fleet: FC = () => {
  const fleetState = useFleet();
  const [selectState, selecting] = useSelectShip();
  const fleetType = useRecoilValue(FleetTypeState);
  const isCombined = isCombinedFleet(fleetType);

  return (
    <>
      <div>
        {isCombined && (
          <div className={styles.toggleFleetArea}>
            <ToggleFleet />
          </div>
        )}
        <div className={styles.shipsList}>
          {fleetState.map((fleetPlace) => {
            const swapShip = () => selecting.start(fleetPlace);
            const key = fleetPlace.turnNo;

            return isShipPlaced(fleetPlace) ? (
              <ShipItem key={key} fleetPlace={fleetPlace} swapShip={swapShip} />
            ) : (
              <ShipSkeleton
                key={key}
                fleetPlace={fleetPlace}
                setShip={swapShip}
              />
            );
          })}
        </div>
      </div>

      {selectState.isOpen && (
        <SelectShip
          currentShip={selectState.currentShip}
          onEnd={selecting.end}
        />
      )}
    </>
  );
};
