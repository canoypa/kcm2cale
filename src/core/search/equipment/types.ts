import { EquipmentTypeValues } from "../../../models/equipment/types";

/** 検索クエリ */
export type SearchEquipmentQuery = string;
/** 種類 */
export type SearchEquipmentTypes = EquipmentTypeValues[];

export type SearchEquipmentRequest = Partial<{
  /** 検索クエリ */
  q: SearchEquipmentQuery;

  /** 種類 */
  type: SearchEquipmentTypes;
}>;
