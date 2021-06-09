import { ShipType, ShipTypeValues } from "../../../models/ship";
import { EnumValues } from "../../../util/types";

export const ShipSearchGroup = {
  /** 戦艦 */
  Battleship: 0,

  /** 空母 */
  AircraftCarrier: 1,

  /** 重巡洋艦 */
  HeavyCruiser: 2,

  /** 軽巡洋艦 */
  LightCruiser: 3,

  /** 駆逐艦 */
  Destroyer: 4,

  /** 海防艦 */
  CoastalDefense: 5,

  /** 潜水艦 */
  Submarine: 6,

  /** 水上機母艦 */
  SeaplaneTender: 7,

  /** その他 */
  Auxiliary: 8,
} as const;
export type ShipSearchGroupValues = EnumValues<typeof ShipSearchGroup>;

export const ShipSearchGroupMap: Record<
  ShipSearchGroupValues,
  ShipTypeValues[]
> = {
  /** 戦艦 */
  0: [
    ShipType.Battleship,
    ShipType.FastBattleship,
    ShipType.AviationBattleship,
  ],

  /** 空母 */
  1: [
    ShipType.AircraftCarrier,
    ShipType.ArmoredAircraftCarrier,
    ShipType.LightAircraftCarrier,
  ],

  /** 重巡洋艦 */
  2: [ShipType.HeavyCruiser, ShipType.AviationCruiser],

  /** 軽巡洋艦 */
  3: [ShipType.LightCruiser, ShipType.TrainingCruiser, ShipType.TorpedoCruiser],

  /** 駆逐艦 */
  4: [ShipType.Destroyer],

  /** 海防艦 */
  5: [ShipType.CoastalDefense],

  /** 潜水艦 */
  6: [ShipType.Submarine, ShipType.SubmarineAircraftCarrier],

  /** 水上機母艦 */
  7: [ShipType.SeaplaneTender],

  /** その他 */
  8: [
    ShipType.Oiler,
    ShipType.SubmarineTender,
    ShipType.AmphibiousAssault,
    ShipType.Repair,
  ],
};
