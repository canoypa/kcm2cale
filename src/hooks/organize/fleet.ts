import { useFirestore, useFirestoreDocData } from "reactfire";
import {
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { FirestoreFleetConverter } from "../../core/firestore-converter";
import { sortFleet } from "../../core/sort-fleet";
import { EmptyFireShip, FireFleet, FireShip } from "../../models/fleet";
import {
  FleetListRequestIdState,
  FleetListState,
} from "../../store/organize/fleet";
import {
  ActiveFleetNoState,
  FleetType,
  FleetTypeState,
} from "../../store/organize/info";
import { FleetPlace, FleetState, TurnNo } from "../../store/organize/ships";
import { range } from "../../util/range";
import { useFireFleetShips } from "./ship";

/**
 * Firestore から編成情報を取得
 */
export const useFireFleet = (fleetId: string) => {
  const docRef = useFirestore()
    .doc(`fleets/${fleetId}`)
    .withConverter(FirestoreFleetConverter);

  const { data } = useFirestoreDocData<FireFleet>(docRef);

  return data;
};

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
  fleet: Array<FireShip | EmptyFireShip>;
  sort: (oldIndex: TurnNo, newIndex: TurnNo) => void;
};
export const useFleet = (fleetId: string): Fleet => {
  const fleetNo = useRecoilValue(ActiveFleetNoState);

  const fleetInfo = useFireFleet(fleetId);
  const ships = useFireFleetShips(fleetId, fleetNo);

  // Todo
  // const sortFleetShip = useSortFleetShip();
  const sortFleetShip = () => {
    console.log("sort");
  };

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
type useFleetList = () => FireFleet[];
export const useFleetList: useFleetList = () => {
  return useRecoilValue(FleetListState);
};
