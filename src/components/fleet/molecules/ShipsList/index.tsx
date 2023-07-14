import { Box, Skeleton } from "@mui/material";
import { FC, useContext, useState } from "react";
import { List } from "react-movable";
import { isCombinedFleet } from "../../../../core/util/is-combined-fleet";
import { isShipPlaced } from "../../../../core/util/is-ship-placed";
import { useFleetManager } from "../../../../hooks/organize/fleet";
import { FleetNo } from "../../../../models/ship";
import { range } from "../../../../util/range";
import { FleetIdContext } from "../../fleetIdContext";
import { useFleet } from "../../hooks";
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

  const fleetId = useContext(FleetIdContext);
  const { data: fleetInfo } = useFleet(fleetId);
  // const isOwner = useIsFleetOwner();
  const isCombined = fleetInfo ? isCombinedFleet(fleetInfo.type) : false;

  const fleet = useFleetManager(isCombined ? activeFleetNo : 0);

  return (
    <div>
      {isCombined && (
        <Box marginBottom={2}>
          <ToggleFleet value={activeFleetNo} onChange={setActiveFleetNo} />
        </Box>
      )}

      {fleet ? (
        // isOwner ? (
        <List
          values={fleet.fleet}
          onChange={({ oldIndex, newIndex }) => {
            fleet.sort(fleet.fleet, activeFleetNo, oldIndex, newIndex);
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
        // ) : (
        //   <Box display="flex" flexDirection="column">
        //     {fleet.fleet.map((fleetPlace) => (
        //       <div key={fleetPlace.turnNo}>
        //         {isShipPlaced(fleetPlace) ? (
        //           <ShipItem fleetPlace={fleetPlace} />
        //         ) : (
        //           <ShipSkeleton fleetPlace={fleetPlace} />
        //         )}
        //       </div>
        //     ))}
        //   </Box>
        // )
        <FleetSkeleton />
      )}
    </div>
  );
};
