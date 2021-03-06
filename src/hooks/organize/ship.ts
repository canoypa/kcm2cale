import { useSetRecoilState } from "recoil";
import { generateShipId } from "../../core/util/generate-id";
import { ShipData } from "../../models/ship";
import {
  FleetNo,
  FleetState,
  ShipId,
  ShipsState,
  TurnNo,
} from "../../store/organize/ships";

export const useSetShip = () => {
  const setFleet = useSetRecoilState(FleetState);
  const setShip = useSetRecoilState(ShipsState);

  return (fleetNo: FleetNo, turnNo: TurnNo, ship: ShipData) => {
    const shipId = generateShipId();
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
