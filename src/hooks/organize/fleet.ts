import {
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { LocalFleetDataV1 } from "../../core/persistence/types";
import { sortFleet } from "../../core/sort-fleet";
import {
  FleetListRequestIdState,
  FleetListState,
} from "../../store/organize/fleet";
import {
  ActiveFleetNoState,
  FleetType,
  FleetTypeState,
} from "../../store/organize/info";
import {
  FleetPlace,
  FleetShip,
  FleetState,
  TurnNo,
} from "../../store/organize/ships";
import { range } from "../../util/range";

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

/**
 * ローカル保存された編成を再取得するよう Request Id を更新
 */
type useRefreshFleetList = () => () => void;
export const useRefreshFleetList: useRefreshFleetList = () => {
  const setRequestId = useSetRecoilState(FleetListRequestIdState);
  return () => setRequestId((id) => id + 1);
};

/**
 * 保存された編成のリスト
 */
type useFleetList = () => LocalFleetDataV1[];
export const useFleetList: useFleetList = () => {
  return useRecoilValue(FleetListState);
};
