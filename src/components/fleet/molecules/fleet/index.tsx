import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { FC } from "react";
import { List } from "react-movable";
import { useRecoilValue } from "recoil";
import { isCombinedFleet } from "../../../../core/util/is-combined-fleet";
import { isShipPlaced } from "../../../../core/util/is-ship-placed";
import { useFleet } from "../../../../hooks/organize/fleet";
import { EmptyFireShip, FireShip } from "../../../../models/fleet";
import { FleetTypeState } from "../../../../store/organize/info";
import { range } from "../../../../util/range";
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
  const fleet = useFleet();

  const [isSelectOpen, selecting] = useSelectShip();
  const fleetType = useRecoilValue(FleetTypeState);
  const isCombined = isCombinedFleet(fleetType);

  const swapShipContextValue = (currentShip: FireShip | EmptyFireShip) => {
    selecting.start(currentShip);
  };

  return (
    <>
      <div>
        {isCombined && (
          <Box marginBottom={2}>
            <ToggleFleet />
          </Box>
        )}
        <SwapShipContext.Provider value={swapShipContextValue}>
          {fleet ? (
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
