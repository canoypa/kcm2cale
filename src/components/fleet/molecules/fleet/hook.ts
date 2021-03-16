import { selector, useRecoilState, useRecoilValue } from "recoil";
import {
  ActiveFleetNoState,
  FleetType,
  FleetTypeState,
} from "../../../../store/organize/info";
import { FleetState } from "../../../../store/organize/ships";
import { range } from "../../../../util/range";

const isStrikingForceSelector = selector({
  key: "IsStrikingForce",
  get: ({ get }) => get(FleetTypeState) === FleetType.StrikingForce,
});

const useSortFleetShip = () => {
  const [fleetState, setFleetState] = useRecoilState(FleetState);

  return (oldIndex: number, newIndex: number) => {
    const newFleet = fleetState.map((v) => {
      const target = fleetState.find(({ turnNo }) => turnNo === oldIndex);

      const start = oldIndex < newIndex ? oldIndex + 1 : newIndex;
      const end = oldIndex < newIndex ? newIndex : oldIndex - 1;
      const move = oldIndex < newIndex ? -1 : 1;

      if (target && v.turnNo === target.turnNo) {
        return { ...v, turnNo: newIndex };
      }

      if (start <= v.turnNo && v.turnNo <= end) {
        return { ...v, turnNo: v.turnNo + move };
      }

      return v;
    });

    setFleetState(newFleet);
  };
};

type Fleet = {
  fleet: Array<{ fleetNo: number; turnNo: number; shipId: string | null }>;
  sort: (oldIndex: number, newIndex: number) => void;
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
