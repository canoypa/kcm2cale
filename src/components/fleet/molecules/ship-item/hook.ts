import { selectorFamily, useRecoilValue } from "recoil";
import {
  DeployedFleetShip,
  ShipsState,
} from "../../../../store/organize/ships";

const shipSelector = selectorFamily({
  key: "ShipSelector",
  get: ({ shipId }: DeployedFleetShip) => ({ get }) =>
    get(ShipsState).find((v) => v.shipId === shipId)?.ship,
});

export const useShip = (fleetPlace: DeployedFleetShip) => {
  const ship = useRecoilValue(shipSelector(fleetPlace));

  if (!ship) throw new Error("Error: Not found.");
  return ship;
};
