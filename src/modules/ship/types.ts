import { EnumValues } from "../../util/types";

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

export const ShipSpeed = {
  FastA: 0,
  FastB1: 1,
  FastB2: 2,
  FastC: 3,
  SlowA: 4,
  SlowB: 5,
  SlowC: 6,
} as const;
export type ShipSpeedValues = EnumValues<typeof ShipSpeed>;

export const ShipRange = { VeryLong: 0, Long: 1, Medium: 2, Short: 3 };
export type ShipRangeValues = EnumValues<typeof ShipRange>;

/**
 * 現在のステータス / 表示用のステータス
 * 計算結果で書き換えられる
 */
export type CurrentShipStatus = {
  level: number; // レベル

  slotSize: number; // 装備スロット数

  hp: number; // 耐久
  power: number; // 火力
  torpedo: number; // 雷装
  aa: number; // 対空
  asw: number; // 対潜

  armor: number; // 装甲
  evasion: number; // 回避
  los: number; // 索敵
  luck: number; // 運
  aircraft: number[]; // 搭載数 slotに応じ

  speed: ShipSpeedValues; // 速力
  range: ShipRangeValues; // 射程

  consumption: { fuel: number; ammo: number }; // 消費
};

type StatusRange = { min: number; max: number };

/**
 * 不変ステータス
 * ステの変動範囲などを表す
 */
export type ShipStatus = {
  minLevel: number; // 最低レベル

  slotSize: number; // 装備スロット数 増設を除く

  hp: StatusRange; // 耐久 // 特殊改修により固定で +2 ただし上限まで

  power: StatusRange; // 火力
  torpedo: StatusRange; // 雷装
  aa: StatusRange; // 対空
  asw: StatusRange; // 対潜 特殊改修により固定で +9 ただし min:0 は改修不可？

  armor: StatusRange; // 装甲
  evasion: StatusRange; // 回避
  los: StatusRange; // 索敵
  luck: StatusRange; // 運
  aircraft: number[]; // 搭載数 slotに応じ

  speed: ShipSpeedValues; // 速力
  range: ShipRangeValues; // 射程

  consumption: { fuel: number; ammo: number }; // 消費
};

export type ShipData = {
  no: string;
  type: ShipTypeValues;
  name: string;
};
