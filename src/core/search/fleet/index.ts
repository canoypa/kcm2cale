import Fuse from "fuse.js";
import { Fleet } from "../../../models/fleet";
import { SearchFleetRequest } from "./types";

const dateSortFn = (a: Fleet, b: Fleet): number => {
  const [aDate, bDate] = [a.updatedAt, b.updatedAt];
  const dateOrder = aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
  return dateOrder;
};

// TODO: テスト、書く
/**
 * 編成リストのフィルタリングとソート
 */
export const searchFleet = (
  fleetDataList: Fleet[],
  request: SearchFleetRequest
): Fleet[] => {
  if (!request.q) return [...fleetDataList].sort(dateSortFn);

  // fuse search
  const options: Fuse.IFuseOptions<Fleet> = {
    keys: ["title"],
    sortFn: (a, b) => {
      const [aScore, bScore] = [a.score, b.score];
      const scoreOrder = aScore > bScore ? 1 : aScore < bScore ? -1 : 0;

      const dateOrder = dateSortFn(fleetDataList[a.idx], fleetDataList[b.idx]);

      return scoreOrder || dateOrder;
    },
  };
  const fuse = new Fuse(fleetDataList, options);
  const matchList = fuse.search<Fleet>(request.q || "");

  const result = matchList.map((v) => v.item);

  return result;
};
