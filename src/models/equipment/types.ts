import { EnumValues } from "../../util/types";
import { ShipId, ShipTypeValues } from "../ship";

export type SlotNo = number;
export type EquipmentId = string;

/**
 * 装備の配備位置
 */
export type RiggingPlace = {
  shipId: ShipId;
  slotNo: SlotNo;
};

/**
 * 未配備位置の装備データ
 */
export type EmptyEquipment = RiggingPlace & {
  id: null;
  no: null;
};

/**
 * 配備済み位置の装備データ
 */
export type Equipment = RiggingPlace & {
  id: string;
  no: number;
};

/**
 * 装備データ
 */
export type ShipEquipment = Equipment | EmptyEquipment;

/**
 * 装備の種類
 */
export const EquipmentType = {
  /** 小口径主砲 */
  SmallCaliberMainGun: 0,
  /** 中口径主砲 */
  MediumCaliberMainGun: 1,
  /** 大口径主砲 */
  LargeCaliberMainGun: 2,
  /** 副砲 */
  SecondaryGun: 3,
  /** 機銃 */
  AntiAircraftGun: 4,

  /** 魚雷 */
  Torpedo: 5,
  /** 潜水艦魚雷 */
  SubmarineTorpedo: 6,
  /** 特殊潜航艇 */
  MidgetSubmarine: 7,

  /** 小型水上電探 */
  SmallRadar: 8,
  /** 大型水上電探 */
  LargeRadar: 9,
  /** 潜水艦電探 */
  SubmarineRadar: 10,

  /** ソナー */
  Sonar: 11,
  /** 爆雷投射機 */
  DepthChargeProjector: 12,
  /** 爆雷 */
  DepthCharge: 13,

  /** 艦上戦闘機 */
  CarrierBasedFighter: 14,
  /** 艦上爆撃機 */
  CarrierBasedDiveBomber: 15,
  /** 艦上攻撃機 */
  CarrierBasedTorpedoBomber: 16,
  /** 艦上偵察機 */
  CarrierBasedReconnaissanceAircraft: 17,
  /** 噴式戦闘爆撃機 */
  JetPoweredFighterBomber: 18,

  /** 水上偵察機 */
  ReconnaissanceSeaplane: 19,
  /** 水上爆撃機 */
  SeaplaneBomber: 20,
  /** 水上戦闘機 */
  SeaplaneFighter: 21,

  /** オートジャイロ */
  Autogyro: 22,
  /** 対潜哨戒機 */
  AntiSubmarinePatrolAircraft: 23,

  /** 徹甲弾 */
  ArmorPiercingShell: 24,
  /** 対空用特殊砲弾 */
  AntiAircraftShell: 25,

  /** 高射装置 */
  AntiAircraftFireDirector: 26,

  /** タービン */
  Turbine: 27,
  /** 缶 */
  Boiler: 28,

  /** 中型増設バルジ */
  MediumExtraArmor: 29,
  /** 大型増設バルジ */
  LargeExtraArmor: 30,

  /** 対地装備 */
  AntiGroundEquipment: 31,

  /** 上陸用舟艇 */
  LandingCraft: 32,
  /** 特型内火艇 */
  SpecialAmphibiousTank: 33,

  /** 探照灯 */
  Searchlight: 34,
  /** 大型探照灯 */
  LargeSearchlight: 35,
  /** 照明弾 */
  StarShell: 36,

  /** 司令部施設 */
  CommandFacility: 37,
  /** 修理施設 */
  RepairFacility: 38,

  /** 修理要員 */
  RepairPersonnel: 39,
  /** 水上艦要員 */
  ShipPersonnel: 40,
  /** 航空要員 */
  AviationPersonnel: 41,

  /** 戦闘糧食 */
  CombatRation: 42,
  /** 補給物資 */
  Supplies: 43,
  /** 輸送装備 */
  SupplyTransport: 44,
  /** 輸送機材 */
  TransportationMaterial: 45,

  /** 陸上攻撃機 */
  LandBasedAttackAircraft: 46,
  /** 局地戦闘機 */
  LandBasedInterceptor: 47,
  /** 陸軍戦闘機 */
  LandBasedFighter: 48,
  /** 陸上偵察機 */
  LandBasedReconnaissanceAircraft: 49,
  /** 大型陸上機 */
  LandBasedLargeAircraft: 50,
  /** 大型飛行艇 */
  LargeFlyingBoat: 51,
} as const;
export type EquipmentTypeValues = EnumValues<typeof EquipmentType>;

export const EquipmentRange = { VeryLong: 0, Long: 1, Medium: 2, Short: 3 };
export type EquipmentRangeValues = EnumValues<typeof EquipmentRange>;

export type CurrentEquipmentStatus = Omit<
  EquipmentStatus,
  "validProficiency" | "validImprovement"
> &
  Partial<{
    proficiency: number;
    improvement: number;
  }>;

export type EquipmentStatus = Partial<{
  power: number;
  torpedo: number;
  aa: number;
  asw: number;
  bombing: number;

  armour: number;
  evasion: number;
  los: number;
  accuracy: number;
  range: EquipmentRangeValues;

  antiBomb: number;
  interceptor: number;
  combatRadius: number;
}> & {
  validProficiency: boolean;
  validImprovement: boolean;
};

export type Fittable = {
  type: ShipTypeValues[];
  include?: string[];
  exclude?: string[];
};

export type EquipmentData = {
  no: number;
  type: EquipmentTypeValues;
  name: string;
};
