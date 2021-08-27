import { SearchFilters } from "../../../components/fleet/select-fleet-item/types";
import { EquipGroup } from "./types";

export * from "./types";

export const equipGroupFilter: SearchFilters = [
  { value: EquipGroup.MainGun, label: "主砲" },
  { value: EquipGroup.SmallCaliberMainGun, label: "小口径主砲" },
  { value: EquipGroup.MediumCaliberMainGun, label: "中口径主砲" },
  { value: EquipGroup.LargeCaliberMainGun, label: "大口径主砲" },
  { value: EquipGroup.SecondaryGun, label: "副砲" },
  { value: EquipGroup.Torpedo, label: "魚雷" },
  { value: EquipGroup.AntiAircraftGun, label: "機銃" },
  { value: EquipGroup.SmallRadar, label: "電探" },
  { value: EquipGroup.AntiSubmarine, label: "対潜兵装" },
  { value: EquipGroup.CarrierBasedFighterAircraft, label: "艦上戦闘機" },
  { value: EquipGroup.CarrierBasedDiveBomber, label: "艦上爆撃機" },
  { value: EquipGroup.CarrierBasedTorpedoBomber, label: "艦上攻撃機" },
  {
    value: EquipGroup.CarrierBasedReconnaissanceAircraft,
    label: "艦上偵察機",
  },
  { value: EquipGroup.ReconnaissanceSeaplane, label: "水上偵察機" },
  { value: EquipGroup.SeaplaneBomber, label: "水上爆撃機" },
  { value: EquipGroup.SeaplaneFighter, label: "水上戦闘機" },
  { value: EquipGroup.OtherAircraft, label: "その他航空機" },
  { value: EquipGroup.SpecialWeapon, label: "特殊兵装" },
  { value: EquipGroup.ExtraArmor, label: "増設バルジ" },
  { value: EquipGroup.Engine, label: "機関改善" },
  { value: EquipGroup.LandBasedFighter, label: "陸上戦闘機" },
  { value: EquipGroup.LandBasedAttackAircraft, label: "陸上攻撃機" },
];
