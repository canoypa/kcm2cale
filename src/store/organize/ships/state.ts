import { atom } from "recoil";
import { ShipData } from "../../../models/ship";

export type FleetNo = number;
export type TurnNo = number;
export type ShipId = string;

/**
 * 艦の配備位置
 */
export type FleetPlace = {
  fleetNo: FleetNo;
  turnNo: TurnNo;
};

// Todo: 然るべき場所に...
/**
 * 未配備位置の艦隊データ
 */
export type EmptyFleetShip = FleetPlace & {
  shipId: null;
};

/**
 * 配備済み位置の艦隊データ
 */
export type DeployedFleetShip = FleetPlace & {
  shipId: ShipId;
};

/**
 * 艦隊データ
 */
export type FleetShip = DeployedFleetShip | EmptyFleetShip;

export type ShipStateValue = {
  shipId: ShipId;
  ship: ShipData;
};

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
