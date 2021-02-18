import { selector, useRecoilValue } from "recoil";
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

type Fleet = Array<{ fleetNo: number; turnNo: number; shipId: string | null }>;
export const useFleet = (): Fleet => {
  const fleetNo = useRecoilValue(ActiveFleetNoState);
  const fleetState = useRecoilValue(FleetState);
  const isStrikingForce = useRecoilValue(isStrikingForceSelector);

  const fleetLength = isStrikingForce ? 7 : 6;
  const fleetTemp = range(fleetLength);

  const fleet = fleetTemp.map((turnNo) => {
    const fleetPlace = fleetState.find(
      (v) => v.fleetNo === fleetNo && v.turnNo === turnNo
    );
    return fleetPlace ?? { fleetNo, turnNo, shipId: null };
  });

  return fleet;
};
