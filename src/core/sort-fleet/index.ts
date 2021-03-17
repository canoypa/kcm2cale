import { FleetState, FleetStateValue } from "../../store/organize/ships";

export type PartialFleetPlace = Omit<FleetStateValue, "shipId">;

export const sortFleet = (
  fleet: FleetState,
  from: PartialFleetPlace,
  to: PartialFleetPlace
): FleetState => {
  return fleet.map((fleetShip) => {
    const fromTurnNo = from.turnNo;
    const toTurnNo = to.turnNo;

    // ドラッグ対象の艦
    const target = fleet.find(({ turnNo }) => turnNo === fromTurnNo);
    if (!target) throw new Error("Error: ドラッグ対象のデータが見つからない");

    // ドラッグの影響を受ける艦の範囲
    // fromTurnNo は ドラッグ対象のため +1/-1
    const start = fromTurnNo < toTurnNo ? fromTurnNo + 1 : toTurnNo;
    const end = fromTurnNo < toTurnNo ? toTurnNo : fromTurnNo - 1;
    // ドラッグの影響を受ける艦の移動向き
    const move = fromTurnNo < toTurnNo ? -1 : 1;

    // 同じ艦隊内のみ
    if (fleetShip.fleetNo === from.fleetNo) {
      // ドラッグ対象はドロップ位置へ移動
      if (fleetShip.turnNo === target.turnNo) {
        return { ...fleetShip, turnNo: toTurnNo };
      }

      // それ以外の from~to 間の艦を移動
      if (start <= fleetShip.turnNo && fleetShip.turnNo <= end) {
        return { ...fleetShip, turnNo: fleetShip.turnNo + move };
      }
    }

    return fleetShip;
  });
};
