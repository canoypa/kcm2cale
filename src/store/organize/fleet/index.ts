import { atom, selector } from "recoil";
import { LocalDatabase } from "../../../core/persistence/local-database";
import { FleetSearch } from "../../../core/search/fleet";

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
 * 保存された編成が存在するか
 */
export const IsExistFleetState = selector({
  key: "IsExistFleet",
  get: async ({ get }) => {
    // refresh query
    get(FleetListRequestIdState);

    return Boolean(await LocalDatabase.fleetLength());
  },
});

/**
 * 編成リスト
 */
export const FleetListState = selector({
  key: "FleetList",
  get: async ({ get }) => {
    // refresh query
    get(FleetListRequestIdState);

    // get saved fleet list
    const fleets = await LocalDatabase.getAllFleet();

    const request = {
      q: get(SearchFleetQueryState),
    };
    return await FleetSearch.search(fleets, request);
  },
});
