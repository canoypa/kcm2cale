import { atom } from "recoil";
import { DeployedFleetShip, ShipStateValue } from "./types";

export type FleetState = DeployedFleetShip[];
export const FleetState = atom<FleetState>({
  key: "FleetState",
  default: [],
});

export type ShipsState = ShipStateValue[];
export const ShipsState = atom<ShipsState>({
  key: "Ships",
  default: [],
});
