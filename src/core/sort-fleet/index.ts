import { FleetNo, FleetShip, Ship, TurnNo } from "../../models/ship";

type SortRange = [from: TurnNo, to: TurnNo, increment: number];
const getSortRange = (from: TurnNo, to: TurnNo): SortRange => {
  if (from < to) return [from + 1, to, -1];
  if (from > to) return [to, from - 1, 1];

  // from === to
  // 不正なソート呼び出し
  throw new Error("Error");
};

/**
 * ソート対象のソート後位置のリストを返す
 */
export const sortFleet = (
  fleet: FleetShip[],
  fleetNo: FleetNo,
  from: TurnNo,
  to: TurnNo
): Ship[] => {
  // ソート対象範囲と移動量(向き)
  const sortRange = getSortRange(from, to);
  // ソート対象の Ship
  const needSort: Ship[] = fleet.filter(
    (v): v is Ship =>
      // EmptyShip でない
      v.no !== null &&
      // ソート対象範囲内
      // 同艦隊かつ
      v.fleetNo === fleetNo &&
      // ソート対象もしくは影響範囲
      (v.turnNo === from ||
        (sortRange[0] <= v.turnNo && v.turnNo <= sortRange[1]))
  );

  const sorted = needSort.map((ship) => {
    if (ship.turnNo === from) return { ...ship, turnNo: to };
    return { ...ship, turnNo: ship.turnNo + sortRange[2] };
  });

  return sorted;
};
