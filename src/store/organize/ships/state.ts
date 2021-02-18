import { atom } from "recoil";
import { ShipData } from "../../../modules/ship";

export type FleetStateValue = {
  fleetNo: number;
  turnNo: number;
  shipId: string;
};

export type FleetState = FleetStateValue[];
export const FleetState = atom<FleetState>({
  key: "FleetState",
  default: [],
});

export type ShipsState = Map<FleetStateValue, ShipData>;
export const ShipsState = atom<ShipsState>({
  key: "Ships",
  default: new Map(),
});
