import { useFirestore, useFirestoreDocData } from "reactfire";
import { useRecoilValue } from "recoil";
import { FirestoreFleetConverter } from "../../core/firestore-converter";
import { EmptyFireShip, FireFleet, FireShip } from "../../models/fleet";
import { FleetListState } from "../../store/organize/fleet";
import { ActiveFleetNoState } from "../../store/organize/info";
import { TurnNo } from "../../store/organize/ships";
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
 * 保存された編成のリスト
 */
type useFleetList = () => FireFleet[];
export const useFleetList: useFleetList = () => {
  return useRecoilValue(FleetListState);
};
