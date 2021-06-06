import { selector, useRecoilState, useRecoilValue } from "recoil";
import { sortFleet } from "../../../../core/sort-fleet";
import {
  ActiveFleetNoState,
  FleetType,
  FleetTypeState,
} from "../../../../store/organize/info";
import {
  FleetPlace,
  FleetShip,
  FleetState,
  TurnNo,
} from "../../../../store/organize/ships";
import { range } from "../../../../util/range";

const isStrikingForceSelector = selector({
  key: "IsStrikingForce",
  get: ({ get }) => get(FleetTypeState) === FleetType.StrikingForce,
});

const useSortFleetShip = () => {
  const activeFleetNo = useRecoilValue(ActiveFleetNoState);
  const [fleetState, setFleetState] = useRecoilState(FleetState);

  return (fromTurnNo: number, toTurnNo: number) => {
    const from: FleetPlace = {
      fleetNo: activeFleetNo,
      turnNo: fromTurnNo,
    };
    const to: FleetPlace = {
      fleetNo: activeFleetNo,
      turnNo: toTurnNo,
    };

    const newFleet = sortFleet(fleetState, from, to);
    setFleetState(newFleet);
  };
};

type Fleet = {
  fleet: FleetShip[];
  sort: (oldIndex: TurnNo, newIndex: TurnNo) => void;
};
export const useFleet = (): Fleet => {
  const fleetNo = useRecoilValue(ActiveFleetNoState);
  const fleetState = useRecoilValue(FleetState);
  const isStrikingForce = useRecoilValue(isStrikingForceSelector);

  const sortFleetShip = useSortFleetShip();

  const fleetLength = isStrikingForce ? 7 : 6;
  const fleetTemp = range(fleetLength);

  const fleet = fleetTemp.map((turnNo) => {
    const fleetPlace = fleetState.find(
      (v) => v.fleetNo === fleetNo && v.turnNo === turnNo
    );
    return fleetPlace ?? { fleetNo, turnNo, shipId: null };
  });

  return { fleet, sort: sortFleetShip };
};
