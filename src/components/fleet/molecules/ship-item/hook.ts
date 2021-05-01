import { selectorFamily, useRecoilValue } from "recoil";
import { FleetStateValue, ShipsState } from "../../../../store/organize/ships";

const shipSelector = selectorFamily({
  key: "ShipSelector",
  get: ({ shipId }: FleetStateValue) => ({ get }) =>
    get(ShipsState).find((v) => v.shipId === shipId)?.ship,
});

export const useShip = (fleetPlace: FleetStateValue) => {
  const ship = useRecoilValue(shipSelector(fleetPlace));

  if (!ship) throw new Error("Error: Not found.");
  return ship;
};
