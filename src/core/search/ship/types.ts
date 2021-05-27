import { ShipTypeValues } from "../../../models/ship";

/** 検索クエリ */
export type SearchShipQuery = string;
/** 種類 */
export type SearchShipTypes = ShipTypeValues[];

export type SearchShipRequest = Partial<{
  /** 検索クエリ */
  q: SearchShipQuery;

  /** 艦種 */
  type: SearchShipTypes;
}>;
