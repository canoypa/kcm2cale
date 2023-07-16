import { FC } from "react";
import { useRecoilValue } from "recoil";
import { LocalFleetDataV1 } from "~/core/persistence/types";
import { FleetState } from "~/store/organize/info";
import { FleetScreen } from "../FleetScreen";
import { FleetError } from "../error";

const existFleet = (
  fleet: LocalFleetDataV1 | null | undefined
): fleet is LocalFleetDataV1 | undefined => {
  return fleet !== null;
};

/**
 * 編成の読み込み状態に応じたコンポーネントの仕分け
 */
export const FleetExistRoute: FC = () => {
  const fleet = useRecoilValue(FleetState);

  return existFleet(fleet) ? <FleetScreen fleet={fleet} /> : <FleetError />;
};
