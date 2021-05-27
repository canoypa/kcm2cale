import { Typography } from "@material-ui/core";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import {
  FleetDescriptionState,
  FleetNameState,
  FleetType,
  FleetTypeState,
} from "../../../../../store/organize/info";
import { LineClamp } from "../../../../common/clamp";

const fleetTypeToNameMap: ReadonlyMap<FleetType, string> = new Map([
  [FleetType.Normal, "通常艦隊"],
  [FleetType.Carrier, "空母機動部隊"],
  [FleetType.Surface, "水上打撃部隊"],
  [FleetType.Transport, "輸送護衛部隊"],
  [FleetType.StrikingForce, "遊撃部隊"],
]);

export const Info: FC = () => {
  const fleetName = useRecoilValue(FleetNameState);
  const fleetDescription = useRecoilValue(FleetDescriptionState);
  const fleetType = useRecoilValue(FleetTypeState);

  const namedFleetType = fleetTypeToNameMap.get(fleetType);

  return (
    <div>
      <Typography variant="h4" paragraph>
        <LineClamp count={2}>{fleetName || "無題の編成"}</LineClamp>
      </Typography>
      <Typography variant="body1" paragraph color="textSecondary">
        <LineClamp count={4}>{fleetDescription}</LineClamp>
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {namedFleetType}
      </Typography>
    </div>
  );
};
