import { FleetState } from "../../store/organize/ships";

export const sortFleet = (
  fleet: FleetState,
  from: number,
  to: number
): FleetState => {
  return fleet.map((v) => {
    const target = fleet.find(({ turnNo }) => turnNo === from);

    const start = from < to ? from + 1 : to;
    const end = from < to ? to : from - 1;
    const move = from < to ? -1 : 1;

    if (target && v.turnNo === target.turnNo) {
      return { ...v, turnNo: to };
    }

    if (start <= v.turnNo && v.turnNo <= end) {
      return { ...v, turnNo: v.turnNo + move };
    }

    return v;
  });
};
