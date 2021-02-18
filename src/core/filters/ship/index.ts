import { ShipSearchGroup } from "./types";

export * from "./types";

export const shipGroupFilter = {
  id: "Group",
  title: "艦種",
  filters: [
    { value: ShipSearchGroup.Battleship, label: "戦艦" },
    { value: ShipSearchGroup.AircraftCarrier, label: "空母" },
    { value: ShipSearchGroup.HeavyCruiser, label: "重巡洋艦" },
    { value: ShipSearchGroup.LightCruiser, label: "軽巡洋艦" },
    { value: ShipSearchGroup.Destroyer, label: "駆逐艦" },
    { value: ShipSearchGroup.CoastalDefense, label: "海防艦" },
    { value: ShipSearchGroup.Submarine, label: "潜水艦" },
    { value: ShipSearchGroup.SeaplaneTender, label: "水上機母艦" },
    { value: ShipSearchGroup.Auxiliary, label: "その他" },
  ],
};
