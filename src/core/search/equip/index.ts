import Fuse from "fuse.js";
import { EquipsData } from "../../../data/equip";
import { EquipData, EquipTypeValues } from "../../../models/equip/types";
import { SearchEquipRequest } from "./types";

export * from "./types";

class FuseSearch {
  private options = { keys: ["name"], includeScore: true };
  private index = Fuse.createIndex(this.options.keys, EquipsData);

  private matchList: Array<Fuse.FuseResult<EquipData>> | null = null;

  public setQuery = (query: string | undefined) => {
    if (query) {
      const fuse = new Fuse(EquipsData, this.options, this.index);
      this.matchList = fuse.search<EquipData>(query);
    } else {
      this.matchList = null;
    }
  };

  public filter = (ship: EquipData) => {
    if (this.matchList === null) return true;
    return this.matchList.some(({ item: { no } }) => no === ship.no);
  };

  public sort = (a: EquipData, b: EquipData) => {
    if (this.matchList === null) return 0;

    const aScore =
      this.matchList.find(({ item: { no } }) => no === a.no)?.score ?? 1;
    const bScore =
      this.matchList.find(({ item: { no } }) => no === b.no)?.score ?? 1;

    return aScore > bScore ? 1 : aScore < bScore ? -1 : 0;
  };
}

class TypeSearch {
  private type: EquipTypeValues[] | null = null;

  public setType = (value: EquipTypeValues[] | undefined) => {
    this.type = value ?? null;
  };

  public filter = (ship: EquipData) => {
    if (this.type === null) return true;
    return this.type.some((v) => v === ship.type);
  };

  public sort = (a: EquipData, b: EquipData) => {
    const aType = a.type;
    const bType = b.type;
    return aType > bType ? 1 : aType < bType ? -1 : 0;
  };
}

class EquipSearchClass {
  private FuseSearch = new FuseSearch();
  private TypeSearch = new TypeSearch();

  public search = (request: SearchEquipRequest) => {
    if (!request) return EquipsData;

    this.FuseSearch.setQuery(request.q);
    this.TypeSearch.setType(request.type);

    return EquipsData.filter(this.filter).sort(this.sort);
  };

  /**
   * フィルタ
   *
   * @param shipData
   */
  private filter = (shipData: EquipData) =>
    this.FuseSearch.filter(shipData) && this.TypeSearch.filter(shipData);

  /**
   * ソート
   *
   * 以下の順でソート
   * - 検索スコア
   * - 種類
   * - 図鑑no
   *
   * @param ShipA
   * @param ShipB
   */
  private sort = (a: EquipData, b: EquipData) => {
    const result = this.FuseSearch.sort(a, b) || this.TypeSearch.sort(a, b);
    return result;
  };
}

export const EquipSearch = new EquipSearchClass();
