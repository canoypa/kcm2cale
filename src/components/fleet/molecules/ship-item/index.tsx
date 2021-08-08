import { Box } from "@material-ui/core";
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
    <Box
      display="flex"
      alignItems="center"
      border={1}
      borderColor="divider"
      borderRadius={1}
      padding={`${16 - 1}px 0` /* - border width */}
      margin="4px 0"
      bgcolor="background.default"
    >
      {/* data-movable-handle: ドラッグハンドルの指定 */}
      {isOwner && (
        <Box
          margin="0 4px"
          width={24}
          height={24}
          color="text.secondary"
          style={{
            cursor: "grab",
          }}
          data-movable-handle
        >
          <DragIndicator />
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="column"
        marginLeft={1}
        minWidth={0} /* flexbox バグ対策 */
      >
        <div>
          <ShipContent fleetPlace={fleetPlace} />
        </div>
        {/* marginLeft = avator + radius */}
        <Box marginTop={1} marginLeft={1} marginRight={2}>
          <Rigging fleetPlace={fleetPlace} />
        </Box>
      </Box>
    </Box>
  );
});
