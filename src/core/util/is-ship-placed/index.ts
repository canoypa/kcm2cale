import { FleetShip, Ship } from "../../../models/ship";

export const isShipPlaced = (shipPlace: FleetShip): shipPlace is Ship =>
  shipPlace.id !== null;
