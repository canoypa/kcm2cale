import { Typography } from "@material-ui/core";
import { FC, useContext } from "react";
import { FleetType } from "../../../../../store/organize/info";
import { LineClamp } from "../../../../common/clamp";
import { FleetContext } from "../../../contexts";

const fleetTypeToNameMap: ReadonlyMap<FleetType, string> = new Map([
  [FleetType.Normal, "通常艦隊"],
  [FleetType.Carrier, "空母機動部隊"],
  [FleetType.Surface, "水上打撃部隊"],
  [FleetType.Transport, "輸送護衛部隊"],
  [FleetType.StrikingForce, "遊撃部隊"],
]);

export const Info: FC = () => {
  const fleet = useContext(FleetContext);

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
