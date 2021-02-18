import { EquipmentGroup } from "./types";

export * from "./types";

export const equipmentGroupFilter = {
  id: "Group",
  title: "種類",
  filters: [
    { value: EquipmentGroup.MainGun, label: "主砲" },
    { value: EquipmentGroup.SmallCaliberMainGun, label: "小口径主砲" },
    { value: EquipmentGroup.MediumCaliberMainGun, label: "中口径主砲" },
    { value: EquipmentGroup.LargeCaliberMainGun, label: "大口径主砲" },
    { value: EquipmentGroup.SecondaryGun, label: "副砲" },
    { value: EquipmentGroup.Torpedo, label: "魚雷" },
    { value: EquipmentGroup.AntiAircraftGun, label: "機銃" },
    { value: EquipmentGroup.SmallRadar, label: "電探" },
    { value: EquipmentGroup.AntiSubmarine, label: "対潜兵装" },
    { value: EquipmentGroup.CarrierBasedFighterAircraft, label: "艦上戦闘機" },
    { value: EquipmentGroup.CarrierBasedDiveBomber, label: "艦上爆撃機" },
    { value: EquipmentGroup.CarrierBasedTorpedoBomber, label: "艦上攻撃機" },
    {
      value: EquipmentGroup.CarrierBasedReconnaissanceAircraft,
      label: "艦上偵察機",
    },
    { value: EquipmentGroup.ReconnaissanceSeaplane, label: "水上偵察機" },
    { value: EquipmentGroup.SeaplaneBomber, label: "水上爆撃機" },
    { value: EquipmentGroup.SeaplaneFighter, label: "水上戦闘機" },
    { value: EquipmentGroup.OtherAircraft, label: "その他航空機" },
    { value: EquipmentGroup.SpecialWeapon, label: "特殊兵装" },
    { value: EquipmentGroup.ExtraArmor, label: "増設バルジ" },
    { value: EquipmentGroup.Engine, label: "機関改善" },
    { value: EquipmentGroup.LandBasedFighter, label: "陸上戦闘機" },
    { value: EquipmentGroup.LandBasedAttackAircraft, label: "陸上攻撃機" },
  ],
};
