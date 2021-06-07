import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";
import { FleetNo, FleetState, ShipId, ShipsState, TurnNo } from ".";
import { ShipData } from "../../../models/ship";

export const useSetShip = () => {
  const setFleet = useSetRecoilState(FleetState);
  const setShip = useSetRecoilState(ShipsState);

  return (fleetNo: FleetNo, turnNo: TurnNo, ship: ShipData) => {
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

  return (shipId: ShipId) => {
    setFleet((state) => state.filter((v) => v.shipId !== shipId));
    setShip((state) => state.filter((v) => v.shipId !== shipId));
  };
};
