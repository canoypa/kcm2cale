import { FleetType } from "../../store/organize/info";

// IndexedDB -> Firestore への移行段階での中性データ構造
// いかなる変換処理を加えようと Firestore のデータ構造を優先

export type FireFleet = {
  version: number;

  id: string;
  owner: string;

  title: string;
  description: string;
  type: FleetType;

  createdAt: Date;
  updatedAt: Date;
};

export type EmptyFireShip = {
  id: null;
  fleetNo: number;
  turnNo: number;
  no: null;
};
export type FireShip = {
  id: string;
  fleetNo: number;
  turnNo: number;
  no: string;
};

export type EmptyFireEquipment = {
  id: null;
  shipId: string;
  slotNo: number;
  no: null;
};
export type FireEquipment = {
  id: string;
  shipId: string;
  slotNo: number;
  no: number;
};
