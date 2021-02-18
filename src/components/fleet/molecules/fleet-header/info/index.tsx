import { FC } from "react";
import { useRecoilValue } from "recoil";
import {
  FleetDescriptionState,
  FleetNameState,
  FleetType,
  FleetTypeState,
} from "../../../../../store/organize/info";
import { LineClamp } from "../../../../common/clamp";
import * as styles from "./styles";

const fleetTypeToNameMap: ReadonlyMap<FleetType, string> = new Map([
  ["Normal", "通常艦隊"],
  ["Carrier", "空母機動部隊"],
  ["Surface", "水上打撃部隊"],
  ["Transport", "輸送護衛部隊"],
  ["StrikingForce", "遊撃部隊"],
]);

export const Info: FC = () => {
  const fleetName = useRecoilValue(FleetNameState);
  const fleetDescription = useRecoilValue(FleetDescriptionState);

  const fleetType = useRecoilValue(FleetTypeState);
  const namedFleetType = fleetTypeToNameMap.get(fleetType);

  return (
    <div>
      <h4 className={styles.title}>
        <LineClamp clamp={2}>{fleetName || "無題の編成"}</LineClamp>
      </h4>
      <div className={styles.description}>
        <LineClamp clamp={4}>{fleetDescription}</LineClamp>
      </div>
      <div className={styles.fleetType}>{namedFleetType}</div>
    </div>
  );
};
