import { EmptyFireShip, FireShip } from "../../../models/fleet";

export const isShipPlaced = (
  shipPlace: FireShip | EmptyFireShip
): shipPlace is FireShip => shipPlace.id !== null;
