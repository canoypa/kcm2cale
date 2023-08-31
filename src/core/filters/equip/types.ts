import { EquipType, EquipTypeValues } from '../../../models/equip/types'
import { EnumValues } from '../../../util/types'

export const EquipGroupMap: Record<EquipGroupValues, EquipTypeValues[]> = {
  /** 主砲 */
  0: [
    EquipType.SmallCaliberMainGun,
    EquipType.MediumCaliberMainGun,
    EquipType.LargeCaliberMainGun,
  ],
  /** 小口径主砲 */
  1: [EquipType.SmallCaliberMainGun],
  /** 中口径主砲 */
  2: [EquipType.MediumCaliberMainGun],
  /** 大口径主砲 */
  3: [EquipType.LargeCaliberMainGun],

  /** 副砲 */
  4: [EquipType.SecondaryGun],

  /** 魚雷 */
  5: [EquipType.Torpedo, EquipType.SubmarineTorpedo, EquipType.MidgetSubmarine],

  /** 機銃 */
  6: [EquipType.AntiAircraftGun],

  /** 電探 */
  7: [EquipType.SmallRadar, EquipType.LargeRadar],

  /** 対潜兵装 */
  8: [EquipType.Sonar, EquipType.DepthCharge, EquipType.DepthChargeProjector],

  /** 艦上戦闘機 */
  9: [EquipType.CarrierBasedFighter],
  /** 艦上爆撃機 */
  10: [EquipType.CarrierBasedDiveBomber],
  /** 艦上攻撃機 */
  11: [EquipType.CarrierBasedTorpedoBomber],
  /** 艦上偵察機 */
  12: [EquipType.CarrierBasedReconnaissanceAircraft],

  /** 水上偵察機 */
  13: [EquipType.ReconnaissanceSeaplane],
  /** 水上爆撃機 */
  14: [EquipType.SeaplaneBomber],
  /** 水上戦闘機 */
  15: [EquipType.SeaplaneFighter],

  /** その他航空機 */
  16: [EquipType.Autogyro, EquipType.AntiSubmarinePatrolAircraft],

  /** 特殊兵装 */
  17: [
    EquipType.ArmorPiercingShell,
    EquipType.AntiAircraftShell,
    EquipType.AntiAircraftFireDirector,
  ],

  /** 増設バルジ */
  18: [EquipType.MediumExtraArmor, EquipType.LargeExtraArmor],

  /** 機関改善 */
  19: [EquipType.Turbine, EquipType.Boiler],

  /** 陸上戦闘機 */
  20: [EquipType.LandBasedInterceptor, EquipType.LandBasedFighter],
  /** 陸上攻撃機 */
  21: [EquipType.LandBasedAttackAircraft],
}

// Todo 装備グループ分け見直し 大型飛行艇はいずこ
/** 装備グループ */
export const EquipGroup = {
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
} as const
export type EquipGroupValues = EnumValues<typeof EquipGroup>
