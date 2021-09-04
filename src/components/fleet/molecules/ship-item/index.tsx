import { Box, Paper } from "@material-ui/core";
import { DragIndicator } from "@material-ui/icons";
import { FC, memo } from "react";
import { useIsFleetOwner } from "../../../../hooks/organize/fleet";
import { Ship } from "../../../../models/ship";
import { Rigging } from "../rigging";
import { ShipContent } from "./ship-content";

type Props = {
  fleetPlace: Ship;
};
export const ShipItem: FC<Props> = memo(({ fleetPlace }) => {
  const isOwner = useIsFleetOwner();
  return (
    <Box my={0.5}>
      <Paper variant="outlined">
        <Box display="flex" alignItems="center" py={2}>
          {isOwner && (
            <Box
              width={24}
              height={24}
              color="text.secondary"
              sx={{ cursor: "grab" }}
              // ドラッグハンドルの指定
              data-movable-handle
            >
              <DragIndicator />
            </Box>
          )}
          <Box
            display="flex"
            flexDirection="column"
            mx={2}
            // flexbox バグ対策
            minWidth={0}
          >
            <div>
              <ShipContent fleetPlace={fleetPlace} />
            </div>
            <Box mt={1}>
              <Rigging fleetPlace={fleetPlace} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
});
