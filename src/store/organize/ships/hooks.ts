import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";
import { ShipData } from "../../../modules/ship";
import { FleetState, ShipsState } from "./state";

export const useSetShip = () => {
  const setFleet = useSetRecoilState(FleetState);
  const setShip = useSetRecoilState(ShipsState);

  return (fleetNo: number, turnNo: number, newShip: ShipData) => {
    const shipId = nanoid(8);
    const newFleet = { fleetNo, turnNo, shipId };

    setFleet((state) => [...state, newFleet]);
    setShip((state) => new Map(state.set(newFleet, newShip)));
  };
};

export const useRemoveShip = () => {
  const setFleet = useSetRecoilState(FleetState);
  const setShip = useSetRecoilState(ShipsState);

  return (shipId: string) => {
    setFleet((state) => state.filter((v) => v.shipId !== shipId));
    setShip(
      (state) =>
        new Map([...state.entries()].filter(([v]) => v.shipId !== shipId))
    );
  };
};
