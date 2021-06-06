import { atom } from "recoil";
import { ShipData } from "../../../models/ship";

export type FleetNo = number;
export type TurnNo = number;
export type ShipId = string;

export type FleetStateValue = {
  fleetNo: FleetNo;
  turnNo: TurnNo;
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
