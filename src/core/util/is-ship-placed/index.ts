import { FleetStateValue } from "../../../store/organize/ships";

type FleetPlace = {
  fleetNo: number;
  turnNo: number;
  shipId: string | null;
};

export const isShipPlaced = (
  shipPlace: FleetPlace
): shipPlace is FleetStateValue => shipPlace.shipId !== null;
