import {
  FleetNo,
  FleetStateValue,
  ShipId,
  TurnNo,
} from "../../../store/organize/ships";

type FleetPlace = {
  fleetNo: FleetNo;
  turnNo: TurnNo;
  shipId: ShipId | null;
};

export const isShipPlaced = (
  shipPlace: FleetPlace
): shipPlace is FleetStateValue => shipPlace.shipId !== null;
