import { useContext } from "react";
import { useRecoilValue } from "recoil";
import { FleetContext, ShipsContext } from "../../components/fleet/contexts";
import { EmptyFireShip, FireShip } from "../../models/fleet";
import { ActiveFleetNoState } from "../../store/organize/info";
import { TurnNo } from "../../store/organize/ships";
import { range } from "../../util/range";

type Fleet = {
  fleet: Array<FireShip | EmptyFireShip>;
  sort: (oldIndex: TurnNo, newIndex: TurnNo) => void;
} | null;
export const useFleet = (): Fleet => {
  const fleetNo = useRecoilValue(ActiveFleetNoState);

  const fleetInfo = useContext(FleetContext);
  const ships = useContext(ShipsContext);

  // Todo
  // const sortFleetShip = useSortFleetShip();
  const sortFleetShip = () => {
    console.log("sort");
  };

  if (!fleetInfo || !ships) return null;

  const fleetLength = fleetInfo.type === "StrikingForce" ? 7 : 6;
  const fleetTemp = range(fleetLength);

  const fleet = fleetTemp.map((turnNo) => {
    const fleetPlace = ships.find(
      (v) => v.fleetNo === fleetNo && v.turnNo === turnNo
    );
    return fleetPlace ?? { fleetNo, turnNo, id: null, no: null };
  });

  return { fleet, sort: sortFleetShip };
};
