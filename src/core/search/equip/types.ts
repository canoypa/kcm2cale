import { EquipTypeValues } from "../../../models/equip/types";

/** 検索クエリ */
export type SearchEquipQuery = string;
/** 種類 */
export type SearchEquipTypes = EquipTypeValues[];

export type SearchEquipRequest = Partial<{
  /** 検索クエリ */
  q: SearchEquipQuery;

  /** 種類 */
  type: SearchEquipTypes;
}>;
