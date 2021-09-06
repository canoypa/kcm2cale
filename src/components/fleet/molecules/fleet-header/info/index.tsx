import { Typography } from "@mui/material";
import { FC, useContext } from "react";
import { FleetType } from "../../../../../models/fleet";
import { LineClamp } from "../../../../common/clamp";
import { FleetIdContext } from "../../../fleetIdContext";
import { useFleet } from "../../../hooks";

const fleetTypeToNameMap: ReadonlyMap<FleetType, string> = new Map([
  [FleetType.Normal, "通常艦隊"],
  [FleetType.Carrier, "空母機動部隊"],
  [FleetType.Surface, "水上打撃部隊"],
  [FleetType.Transport, "輸送護衛部隊"],
  [FleetType.Striking, "遊撃部隊"],
]);

export const Info: FC = () => {
  const fleetId = useContext(FleetIdContext);
  const { data: fleet } = useFleet(fleetId);

  if (!fleet) return null;
  return (
    <div>
      <Typography variant="h4" paragraph>
        <LineClamp count={2}>{fleet.title || "無題の編成"}</LineClamp>
      </Typography>
      <Typography variant="body1" paragraph color="textSecondary">
        <LineClamp count={4}>{fleet.description}</LineClamp>
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {fleetTypeToNameMap.get(fleet.type)}
      </Typography>
    </div>
  );
};
