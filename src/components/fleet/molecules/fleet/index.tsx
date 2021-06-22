import { Box } from "@material-ui/core";
import { FC } from "react";
import { List } from "react-movable";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { isCombinedFleet } from "../../../../core/util/is-combined-fleet";
import { isShipPlaced } from "../../../../core/util/is-ship-placed";
import { useFleet } from "../../../../hooks/organize/fleet";
import { EmptyFireShip, FireShip } from "../../../../models/fleet";
import { FleetTypeState } from "../../../../store/organize/info";
import { SelectShipDialog } from "../../templates/select-ship";
import { ShipItem } from "../ship-item";
import { ShipSkeleton } from "../ship-skeleton";
import { SwapShipContext } from "./contexts";
import { ToggleFleet } from "./toggle-fleet";
import { useSelectShip } from "./use-select-ship";

export const Fleet: FC = () => {
  // Todo: useParams 使用箇所
  const { fleetId } = useParams<{ fleetId: string }>();

  const { fleet: fleetState, sort } = useFleet(fleetId);

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
          <List
            values={fleetState}
            onChange={({ oldIndex, newIndex }) => {
              sort(oldIndex, newIndex);
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
