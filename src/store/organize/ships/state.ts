import { atom } from "recoil";
import { ShipData } from "../../../models/ship";

export type ShipId = string;

export type FleetStateValue = {
  fleetNo: number;
  turnNo: number;
  shipId: ShipId;
};

export type ShipsStateValue = {
  shipId: ShipId;
  ship: ShipData;
};

export type FleetState = FleetStateValue[];
export const FleetState = atom<FleetState>({
  key: "FleetState",
  default: [],
});

export type ShipsState = ShipsStateValue[];
export const ShipsState = atom<ShipsState>({
  key: "Ships",
  default: [],
});
