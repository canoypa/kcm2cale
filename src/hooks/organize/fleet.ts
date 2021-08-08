import { useContext } from "react";
import { FleetIdContext } from "../../components/fleet/fleetIdContext";
import { useFleet, useShips } from "../../components/fleet/hooks";
import { FleetType } from "../../models/fleet";
import { EmptyShip, FleetNo, Ship, TurnNo } from "../../models/ship";
import { range } from "../../util/range";
import { useUser } from "../firebase/auth/useUser";

type Fleet = {
  fleet: Array<Ship | EmptyShip>;
  sort: (oldIndex: TurnNo, newIndex: TurnNo) => void;
} | null;
export const useFleetManager = (fleetNo: FleetNo): Fleet => {
  const fleetId = useContext(FleetIdContext);
  const { data: fleetInfo } = useFleet(fleetId);
  const { data: ships } = useShips(fleetId);

  // Todo
  // const sortFleetShip = useSortFleetShip();
  const sortFleetShip = () => {
    console.log("sort");
  };

  if (!fleetInfo || !ships) return null;

  const fleetLength = fleetInfo.type === FleetType.Striking ? 7 : 6;
  const fleetTemp = range(fleetLength);

  const fleet = fleetTemp.map((turnNo) => {
    const fleetPlace = ships.find(
      (v) => v.fleetNo === fleetNo && v.turnNo === turnNo
    );
    return fleetPlace ?? { fleetNo, turnNo, id: null, no: null };
  });

  return { fleet, sort: sortFleetShip };
};

/**
 * サインインユーザが編成の作成者かどうか
 */
export const useIsFleetOwner = () => {
  const { data: user } = useUser();
  const fleetId = useContext(FleetIdContext);
  const { data: fleet } = useFleet(fleetId);

  if (fleet === undefined) return undefined;
  // Fixme
  return fleet ? fleet.owner === user?.uid : false;
};
