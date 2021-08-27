import { EnumValues } from "../../util/types";

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

/**
 * 未配備位置の艦隊データ
 */
export type EmptyShip = FleetPlace & {
  id: null;
  no: null;
};

/**
 * 配備済み位置の艦隊データ
 */
export type Ship = FleetPlace & {
  id: string;
  no: string;
};

/**
 * 艦隊データ
 */
export type FleetShip = Ship | EmptyShip;

export const ShipType = {
  /** 戦艦 */
  Battleship: 0,
  /** 高速戦艦 */
  FastBattleship: 1,
  /** 航空戦艦 */
  AviationBattleship: 2,
  /** 正規空母 */
  AircraftCarrier: 3,
  /** 装甲空母 */
  ArmoredAircraftCarrier: 4,
  /** 軽空母 */
  LightAircraftCarrier: 5,
  /** 重巡洋艦 */
  HeavyCruiser: 6,
  /** 航空巡洋艦 */
  AviationCruiser: 7,
  /** 軽巡洋艦 */
  LightCruiser: 8,
  /** 練習巡洋艦 */
  TrainingCruiser: 9,
  /** 重雷装巡洋艦 */
  TorpedoCruiser: 10,
  /** 駆逐艦 */
  Destroyer: 11,
  /** 海防艦 */
  CoastalDefense: 12,
  /** 潜水艦 */
  Submarine: 13,
  /** 潜水空母 */
  SubmarineAircraftCarrier: 14,
  /** 水上機母艦 */
  SeaplaneTender: 15,
  /** 給油艦 */
  Oiler: 16,
  /** 潜水母艦 */
  SubmarineTender: 17,
  /** 揚陸艦 */
  AmphibiousAssault: 18,
  /** 工作艦 */
  Repair: 19,
} as const;
export type ShipTypeValues = EnumValues<typeof ShipType>;

export type ShipData = {
  no: string;
  type: ShipTypeValues;
  name: string;
};
