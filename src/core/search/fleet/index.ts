import Fuse from "fuse.js";
import { LocalDatabase } from "../../persistence/local-database";
import { LocalFleetDataV1 } from "../../persistence/types";
import { SearchFleetRequest } from "./types";

const dateSortFn = (a: LocalFleetDataV1, b: LocalFleetDataV1): number => {
  const [aDate, bDate] = [a.updatedAt, b.updatedAt];
  const dateOrder = aDate < bDate ? 1 : aDate > bDate ? -1 : 0;
  return dateOrder;
};

// TODO: テスト、書く
export class FleetSearch {
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
