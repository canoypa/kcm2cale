import Fuse from "fuse.js";
import {
  atom,
  selector,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { LocalDatabase } from "../../persistence/local-database";
import { LocalFleetDataV1 } from "../../persistence/types";
import { SearchFleetRequest } from "./types";

const dateSortFn = (a: LocalFleetDataV1, b: LocalFleetDataV1): number => {
  const [aDate, bDate] = [a.updatedAt, b.updatedAt];
  const dateOrder = aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
  return dateOrder;
};

// TODO: テスト、書く
class FleetSearch {
  public static search = async (
    request: SearchFleetRequest
  ): Promise<LocalFleetDataV1[]> => {
    // get saved fleet list
    const fleetDataList = await LocalDatabase.getAllFleet();

    if (!request.q) return fleetDataList.sort(dateSortFn);

    // fuse search
    const options: Fuse.IFuseOptions<LocalFleetDataV1> = {
      keys: ["title"],
      sortFn: (a, b) => {
        const [aScore, bScore] = [a.score, b.score];
        const scoreOrder = aScore > bScore ? 1 : aScore < bScore ? -1 : 0;

        const dateOrder = dateSortFn(
          fleetDataList[a.idx],
          fleetDataList[b.idx]
        );

        return scoreOrder || dateOrder;
      },
    };
    const fuse = new Fuse(fleetDataList, options);
    const matchList = fuse.search<LocalFleetDataV1>(request.q || "");

    const result = matchList.map((v) => v.item);

    return result;
  };
}

/**
 * FleetListState 更新用
 */
const FleetListRequestIdState = atom({
  key: "FleetListRequestId",
  default: 0,
});

/**
 * FleetList 検索クエリ
 */
const SearchFleetQueryState = atom({
  key: "SearchFleetQuery",
  default: "",
});

/**
 * 保存された編成が存在するか
 */
const IsExistFleetState = selector({
  key: "IsExistFleet",
  get: async ({ get }) => {
    // refresh query
    get(FleetListRequestIdState);

    return Boolean(await LocalDatabase.fleetLength());
  },
});

/**
 * FleetList
 */
const FleetListState = selector({
  key: "FleetList",
  get: async ({ get }) => {
    // refresh query
    get(FleetListRequestIdState);

    const request = {
      q: get(SearchFleetQueryState),
    };
    return await FleetSearch.search(request);
  },
});

type useRefreshFleetList = () => () => void;
export const useRefreshFleetList: useRefreshFleetList = () => {
  const setRequestId = useSetRecoilState(FleetListRequestIdState);
  return () => setRequestId((id) => id + 1);
};

type useSearchFleetQuery = () => [string, SetterOrUpdater<string>];
export const useSearchFleetQuery: useSearchFleetQuery = () => {
  return useRecoilState(SearchFleetQueryState);
};

type useIsExistFleet = () => boolean;
export const useIsExistFleet: useIsExistFleet = () => {
  return useRecoilValue(IsExistFleetState);
};

type useFleetList = () => LocalFleetDataV1[];
export const useFleetList: useFleetList = () => {
  return useRecoilValue(FleetListState);
};
