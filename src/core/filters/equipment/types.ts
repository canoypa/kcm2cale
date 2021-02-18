import {
  EquipmentType,
  EquipmentTypeValues,
} from "../../../modules/equipment/types";
import { EnumValues } from "../../../util/types";

export const EquipmentGroupMap: Record<
  EquipmentGroupValues,
  EquipmentTypeValues[]
> = {
  /** 主砲 */
  0: [
    EquipmentType.SmallCaliberMainGun,
    EquipmentType.MediumCaliberMainGun,
    EquipmentType.LargeCaliberMainGun,
  ],
  /** 小口径主砲 */
  1: [EquipmentType.SmallCaliberMainGun],
  /** 中口径主砲 */
  2: [EquipmentType.MediumCaliberMainGun],
  /** 大口径主砲 */
  3: [EquipmentType.LargeCaliberMainGun],

  /** 副砲 */
  4: [EquipmentType.SecondaryGun],

  /** 魚雷 */
  5: [
    EquipmentType.Torpedo,
    EquipmentType.SubmarineTorpedo,
    EquipmentType.MidgetSubmarine,
  ],

  /** 機銃 */
  6: [EquipmentType.AntiAircraftGun],

  /** 電探 */
  7: [EquipmentType.SmallRadar, EquipmentType.LargeRadar],

  /** 対潜兵装 */
  8: [
    EquipmentType.Sonar,
    EquipmentType.DepthCharge,
    EquipmentType.DepthChargeProjector,
  ],

  /** 艦上戦闘機 */
  9: [EquipmentType.CarrierBasedFighter],
  /** 艦上爆撃機 */
  10: [EquipmentType.CarrierBasedDiveBomber],
  /** 艦上攻撃機 */
  11: [EquipmentType.CarrierBasedTorpedoBomber],
  /** 艦上偵察機 */
  12: [EquipmentType.CarrierBasedReconnaissanceAircraft],

  /** 水上偵察機 */
  13: [EquipmentType.ReconnaissanceSeaplane],
  /** 水上爆撃機 */
  14: [EquipmentType.SeaplaneBomber],
  /** 水上戦闘機 */
  15: [EquipmentType.SeaplaneFighter],

  /** その他航空機 */
  16: [EquipmentType.Autogyro, EquipmentType.AntiSubmarinePatrolAircraft],

  /** 特殊兵装 */
  17: [
    EquipmentType.ArmorPiercingShell,
    EquipmentType.AntiAircraftShell,
    EquipmentType.AntiAircraftFireDirector,
  ],

  /** 増設バルジ */
  18: [EquipmentType.MediumExtraArmor, EquipmentType.LargeExtraArmor],

  /** 機関改善 */
  19: [EquipmentType.Turbine, EquipmentType.Boiler],

  /** 陸上戦闘機 */
  20: [EquipmentType.LandBasedInterceptor, EquipmentType.LandBasedFighter],
  /** 陸上攻撃機 */
  21: [EquipmentType.LandBasedAttackAircraft],
};

// Todo 装備グループ分け見直し 大型飛行艇はいずこ
/** 装備グループ */
export const EquipmentGroup = {
  /** 主砲 */
  MainGun: 0,
  /** 小口径主砲 */
  SmallCaliberMainGun: 1,
  /** 中口径主砲 */
  MediumCaliberMainGun: 2,
  /** 大口径主砲 */
  LargeCaliberMainGun: 3,

  /** 副砲 */
  SecondaryGun: 4,

  /** 魚雷 */
  Torpedo: 5,

  /** 機銃 */
  AntiAircraftGun: 6,

  /** 電探 */
  SmallRadar: 7,

  /** 対潜兵装 */
  AntiSubmarine: 8,

  /** 艦上戦闘機 */
  CarrierBasedFighterAircraft: 9,
  /** 艦上爆撃機 */
  CarrierBasedDiveBomber: 10,
  /** 艦上攻撃機 */
  CarrierBasedTorpedoBomber: 11,
  /** 艦上偵察機 */
  CarrierBasedReconnaissanceAircraft: 12,

  /** 水上偵察機 */
  ReconnaissanceSeaplane: 13,
  /** 水上爆撃機 */
  SeaplaneBomber: 14,
  /** 水上戦闘機 */
  SeaplaneFighter: 15,

  /** その他航空機 */
  OtherAircraft: 16,

  /** 特殊兵装 */
  SpecialWeapon: 17,

  /** 増設バルジ */
  ExtraArmor: 18,

  /** 機関改善 */
  Engine: 19,

  /** 陸上戦闘機 */
  LandBasedFighter: 20,
  /** 陸上攻撃機 */
  LandBasedAttackAircraft: 21,
} as const;
export type EquipmentGroupValues = EnumValues<typeof EquipmentGroup>;
