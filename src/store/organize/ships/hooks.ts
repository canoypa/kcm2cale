import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";
import { ShipData } from "../../../modules/ship";
import { FleetState, ShipsState } from "./state";

export const useSetShip = () => {
  const setFleet = useSetRecoilState(FleetState);
  const setShip = useSetRecoilState(ShipsState);

  return (fleetNo: number, turnNo: number, ship: ShipData) => {
    const shipId = nanoid(8);
    const newFleet = { fleetNo, turnNo, shipId };
    const newShip = { shipId, ship };

    setFleet((state) => [...state, newFleet]);
    setShip((state) => [...state, newShip]);
  };
};

export const useRemoveShip = () => {
  const setFleet = useSetRecoilState(FleetState);
  const setShip = useSetRecoilState(ShipsState);

  return (shipId: string) => {
    setFleet((state) => state.filter((v) => v.shipId !== shipId));
    setShip((state) => state.filter((v) => v.shipId !== shipId));
  };
};
