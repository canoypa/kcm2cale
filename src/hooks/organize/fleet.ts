import { doc, writeBatch } from "firebase/firestore";
import { useCallback, useContext } from "react";
import { getFirestore } from "~/core/firebase/sdk/firestore";
import { sortFleet } from "~/core/sort-fleet";
import { FleetIdContext } from "../../components/fleet/fleetIdContext";
import { useFleet, useShips } from "../../components/fleet/hooks";
import { FleetType } from "../../models/fleet";
import { EmptyShip, FleetNo, FleetShip, Ship, TurnNo } from "../../models/ship";
import { range } from "../../util/range";
import { useUser } from "../firebase/auth/useUser";

const useSortFleetShip = () => {
  const firestore = getFirestore();
  const fleetId = useContext(FleetIdContext);

  const sort = useCallback(
    (fleet: FleetShip[], fleetNo: FleetNo, from: TurnNo, to: TurnNo) => {
      const sortedFleet = sortFleet(fleet, fleetNo, from, to);

      const batch = writeBatch(firestore);
      sortedFleet.forEach((v) => {
        // Fixme: doc ref を直接取得しない
        const ref = doc(firestore, `fleets/${fleetId}/ships/${v.id}`);
        batch.update(ref, { turnNo: v.turnNo });
      });
      batch.commit();
    },
    [firestore, fleetId]
  );

  return sort;
};

type Fleet = {
  fleet: Array<Ship | EmptyShip>;
  sort: (
    fleet: FleetShip[],
    fleetNo: FleetNo,
    oldIndex: TurnNo,
    newIndex: TurnNo
  ) => void;
} | null;
export const useFleetManager = (fleetNo: FleetNo): Fleet => {
  const fleetId = useContext(FleetIdContext);
  const { data: fleetInfo } = useFleet(fleetId);
  const { data: ships } = useShips(fleetId);

  const sortFleetShip = useSortFleetShip();

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
