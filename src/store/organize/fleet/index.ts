import { atom, selector } from "recoil";
import { LocalDatabase } from "../../../core/persistence/local-database";

// IndexedDB の更新検知ができないため
// 編成取得の selector をこの値に依存させ
// 値を更新することで編成を再取得する
/**
 * デバイスに保存された編成の Request Id
 */
export const FleetListRequestIdState = atom({
  key: "FleetListRequestId",
  default: 0,
});

/**
 * 編成の検索クエリ
 */
export const SearchFleetQueryState = atom({
  key: "SearchFleetQuery",
  default: "",
});

/**
 * 編成リスト
 */
export const FleetListState = selector({
  key: "FleetList",
  get: async ({ get }) => {
    // refresh query
    get(FleetListRequestIdState);

    return await LocalDatabase.getAllFleet();
  },
});
