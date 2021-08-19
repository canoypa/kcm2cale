import { FC, useContext } from "react";
import { Fleet } from "~/models/fleet";
import { FleetError } from "../error";
import { FleetIdContext } from "../fleetIdContext";
import { FleetScreen } from "../FleetScreen";
import { useFleet } from "../hooks";

const existFleet = (fleet: Fleet | null | undefined): fleet is Fleet => {
  return fleet !== null;
};

/**
 * 編成の読み込み状態に応じたコンポーネントの仕分け
 */
export const FleetExistRoute: FC = () => {
  const fleetId = useContext(FleetIdContext);
  const { data: fleet } = useFleet(fleetId);

  return existFleet(fleet) ? <FleetScreen fleet={fleet} /> : <FleetError />;
};
