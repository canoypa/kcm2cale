import { Box, Skeleton } from "@mui/material";
import { FC, useState } from "react";
import { List } from "react-movable";
import { useRecoilValue } from "recoil";
import { FleetState } from "~/store/organize/info";
import { isCombinedFleet } from "../../../../core/util/is-combined-fleet";
import { isShipPlaced } from "../../../../core/util/is-ship-placed";
import { useFleetManager } from "../../../../hooks/organize/fleet";
import { FleetNo } from "../../../../models/ship";
import { range } from "../../../../util/range";
import { ShipItem } from "../ship-item";
import { ShipSkeleton } from "../ship-skeleton";
import { ToggleFleet } from "./toggle-fleet";

const FleetSkeleton: FC = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap={1}>
      {range(6).map((i) => (
        <Skeleton key={i} variant="rectangular" height={64} />
      ))}
    </Box>
  );
};

export const ShipsList: FC = () => {
  // 選択中の艦隊
  const [activeFleetNo, setActiveFleetNo] = useState<FleetNo>(0);

  const fleet = useRecoilValue(FleetState);

  const isCombined = isCombinedFleet(fleet!.type);
  const activeFleet = useFleetManager(isCombined ? activeFleetNo : 0);

  return (
    <div>
      {isCombined && (
        <Box marginBottom={2}>
          <ToggleFleet value={activeFleetNo} onChange={setActiveFleetNo} />
        </Box>
      )}

      {activeFleet ? (
        <List
          values={activeFleet.fleet}
          onChange={({ oldIndex, newIndex }) => {
            activeFleet.sort(
              activeFleet.fleet,
              activeFleetNo,
              oldIndex,
              newIndex
            );
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
    </div>
  );
};
