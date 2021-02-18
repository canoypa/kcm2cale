import { selectorFamily, useRecoilValue } from "recoil";
import { FleetStateValue, ShipsState } from "../../../../store/organize/ships";

const shipSelector = selectorFamily({
  key: "ShipSelector",
  get: (fleetPlace: FleetStateValue) => ({ get }) =>
    get(ShipsState).get(fleetPlace),
});

export const useShip = (fleetPlace: FleetStateValue) => {
  const ship = useRecoilValue(shipSelector(fleetPlace));

  if (!ship) throw new Error("Error: Not found.");
  return ship;
};
