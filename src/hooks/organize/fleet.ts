import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sortFleet } from "~/core/sort-fleet";
import { FleetState } from "~/store/organize/info";
import { FleetType } from "../../models/fleet";
import { FleetNo, FleetShip, TurnNo } from "../../models/ship";
import { range } from "../../util/range";

const useSortFleetShip = () => {
  const [fleet, setFleet] = useRecoilState(FleetState);
  if (!fleet) throw new Error("編成が存在しない");

  const sort = useCallback(
    (curShips: FleetShip[], fleetNo: FleetNo, from: TurnNo, to: TurnNo) => {
      // 入れ替えなくても呼び出される場合があるため
      if (from === to) return;

      const sortedShips = sortFleet(curShips, fleetNo, from, to);

      setFleet({ ...fleet, ships: sortedShips });
    },
    [fleet]
  );

  return sort;
};

type Fleet = {
  fleet: FleetShip[];
  sort: (
    fleet: FleetShip[],
    fleetNo: FleetNo,
    oldIndex: TurnNo,
    newIndex: TurnNo
  ) => void;
} | null;
export const useFleetManager = (fleetNo: FleetNo): Fleet => {
  const fleet = useRecoilValue(FleetState);

  const sortFleetShip = useSortFleetShip();

  if (!fleet) return null;

  const fleetLength = fleet.type === FleetType.Striking ? 7 : 6;
  const shipsTemp = range(fleetLength);

  const ships = shipsTemp.map((turnNo) => {
    const fleetPlace = fleet.ships.find(
      (v) => v.fleetNo === fleetNo && v.turnNo === turnNo
    );
    return fleetPlace ?? { fleetNo, turnNo, id: null, no: null };
  });

  return { fleet: ships, sort: sortFleetShip };
};
