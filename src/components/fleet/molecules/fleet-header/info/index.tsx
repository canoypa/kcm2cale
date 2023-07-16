import { Typography } from "@mui/material";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { FleetState } from "~/store/organize/info";
import { FleetType } from "../../../../../models/fleet";
import { LineClamp } from "../../../../common/clamp";

const fleetTypeToNameMap: ReadonlyMap<FleetType, string> = new Map([
  [FleetType.Normal, "通常艦隊"],
  [FleetType.Carrier, "空母機動部隊"],
  [FleetType.Surface, "水上打撃部隊"],
  [FleetType.Transport, "輸送護衛部隊"],
  [FleetType.Striking, "遊撃部隊"],
]);

export const Info: FC = () => {
  const fleet = useRecoilValue(FleetState);

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
