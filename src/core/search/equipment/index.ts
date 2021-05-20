import Fuse from "fuse.js";
import { EquipmentsData } from "../../../data/equipment";
import {
  EquipmentData,
  EquipmentTypeValues,
} from "../../../modules/equipment/types";
import { SearchEquipmentRequest } from "./types";

export * from "./types";

class FuseSearch {
  private options = { keys: ["name"], includeScore: true };
  private index = Fuse.createIndex(this.options.keys, EquipmentsData);

  private matchList: Array<Fuse.FuseResult<EquipmentData>> | null = null;

  public setQuery = (query: string | undefined) => {
    if (query) {
      const fuse = new Fuse(EquipmentsData, this.options, this.index);
      this.matchList = fuse.search<EquipmentData>(query);
    } else {
      this.matchList = null;
    }
  };

  public filter = (ship: EquipmentData) => {
    if (this.matchList === null) return true;
    return this.matchList.some(({ item: { no } }) => no === ship.no);
  };

  public sort = (a: EquipmentData, b: EquipmentData) => {
    if (this.matchList === null) return 0;

    const aScore =
      this.matchList.find(({ item: { no } }) => no === a.no)?.score ?? 1;
    const bScore =
      this.matchList.find(({ item: { no } }) => no === b.no)?.score ?? 1;

    return aScore > bScore ? 1 : aScore < bScore ? -1 : 0;
  };
}

class TypeSearch {
  private type: EquipmentTypeValues[] | null = null;

  public setType = (value: EquipmentTypeValues[] | undefined) => {
    this.type = value ?? null;
  };

  public filter = (ship: EquipmentData) => {
    if (this.type === null) return true;
    return this.type.some((v) => v === ship.type);
  };

  public sort = (a: EquipmentData, b: EquipmentData) => {
    const aType = a.type;
    const bType = b.type;
    return aType > bType ? 1 : aType < bType ? -1 : 0;
  };
}

class EquipmentSearchClass {
  private FuseSearch = new FuseSearch();
  private TypeSearch = new TypeSearch();

  public search = (request: SearchEquipmentRequest) => {
    if (!request) return EquipmentsData;

    this.FuseSearch.setQuery(request.q);
    this.TypeSearch.setType(request.type);

    return EquipmentsData.filter(this.filter).sort(this.sort);
  };

  /**
   * フィルタ
   *
   * @param shipData
   */
  private filter = (shipData: EquipmentData) =>
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
  private sort = (a: EquipmentData, b: EquipmentData) => {
    const result = this.FuseSearch.sort(a, b) || this.TypeSearch.sort(a, b);
    return result;
  };
}

export const EquipmentSearch = new EquipmentSearchClass();
