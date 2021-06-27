import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { FC, useContext, useState } from "react";
import { List } from "react-movable";
import { isCombinedFleet } from "../../../../core/util/is-combined-fleet";
import { isShipPlaced } from "../../../../core/util/is-ship-placed";
import { useFleet, useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { EmptyFireShip, FireShip } from "../../../../models/fleet";
import { FleetNo } from "../../../../store/organize/ships";
import { range } from "../../../../util/range";
import { FleetContext } from "../../contexts";
import { SelectShipDialog } from "../../templates/select-ship";
import { ShipItem } from "../ship-item";
import { ShipSkeleton } from "../ship-skeleton";
import { SwapShipContext } from "./contexts";
import { ToggleFleet } from "./toggle-fleet";
import { useSelectShip } from "./use-select-ship";

const FleetSkeleton: FC = () => {
  return (
    <Box display="flex" flexDirection="column" gridRowGap={8}>
      {range(6).map((i) => (
        <Skeleton key={i} variant="rect" height={64} />
      ))}
    </Box>
  );
};

export const Fleet: FC = () => {
  // 選択中の艦隊
  const [activeFleetNo, setActiveFleetNo] = useState<FleetNo>(0);

  const fleetInfo = useContext(FleetContext);
  const isOwner = useIsFleetOwner();
  const isCombined = fleetInfo ? isCombinedFleet(fleetInfo.type) : false;

  const fleet = useFleet(isCombined ? activeFleetNo : 0);

  const [isSelectOpen, selecting] = useSelectShip();

  const swapShipContextValue = (currentShip: FireShip | EmptyFireShip) => {
    selecting.start(currentShip);
  };

  return (
    <>
      <div>
        {isCombined && (
          <Box marginBottom={2}>
            <ToggleFleet value={activeFleetNo} onChange={setActiveFleetNo} />
          </Box>
        )}
        <SwapShipContext.Provider value={swapShipContextValue}>
          {fleet ? (
            isOwner ? (
              <List
                values={fleet.fleet}
                onChange={({ oldIndex, newIndex }) => {
                  fleet.sort(oldIndex, newIndex);
                }}
                renderList={({ children, props }) => (
                  <Box display="flex" flexDirection="column" {...props}>
                    {children}
                  </Box>
                )}
                renderItem={({ value: fleetPlace, props }) => (
                  <div {...props}>
                    {isShipPlaced(fleetPlace) ? (
                      <ShipItem fleetPlace={fleetPlace} />
                    ) : (
                      <ShipSkeleton fleetPlace={fleetPlace} />
                    )}
                  </div>
                )}
              />
            ) : (
              <Box display="flex" flexDirection="column">
                {fleet.fleet.map((fleetPlace) => (
                  <div key={fleetPlace.id}>
                    {isShipPlaced(fleetPlace) ? (
                      <ShipItem fleetPlace={fleetPlace} />
                    ) : (
                      <ShipSkeleton fleetPlace={fleetPlace} />
                    )}
                  </div>
                ))}
              </Box>
            )
          ) : (
            <FleetSkeleton />
          )}
        </SwapShipContext.Provider>
      </div>

      <SelectShipDialog
        open={isSelectOpen}
        onSelect={selecting.onSelect}
        onClose={selecting.end}
      />
    </>
  );
};
