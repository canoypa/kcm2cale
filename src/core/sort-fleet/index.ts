import { FleetState, FleetStateValue } from "../../store/organize/ships";

export type PartialFleetPlace = Omit<FleetStateValue, "shipId">;

export const sortFleet = (
  fleet: FleetState,
  from: PartialFleetPlace,
  to: PartialFleetPlace
): FleetState => {
  return fleet.map((v) => {
    const fromTurnNo = from.turnNo;
    const toTurnNo = to.turnNo;

    const target = fleet.find(({ turnNo }) => turnNo === fromTurnNo);

    const start = fromTurnNo < toTurnNo ? fromTurnNo + 1 : toTurnNo;
    const end = fromTurnNo < toTurnNo ? toTurnNo : fromTurnNo - 1;
    const move = fromTurnNo < toTurnNo ? -1 : 1;

    if (v.fleetNo === from.fleetNo) {
      if (target && v.turnNo === target.turnNo) {
        return { ...v, turnNo: toTurnNo };
      }

      if (start <= v.turnNo && v.turnNo <= end) {
        return { ...v, turnNo: v.turnNo + move };
      }
    }

    return v;
  });
};
