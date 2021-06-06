import { DeployedFleetShip, FleetShip } from "../../../store/organize/ships";

export const isShipPlaced = (
  shipPlace: FleetShip
): shipPlace is DeployedFleetShip => shipPlace.shipId !== null;
