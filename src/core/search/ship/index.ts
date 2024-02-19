import Fuse, { type FuseResult } from 'fuse.js'
import { ShipsData } from '../../../data/ship'
import { ShipData, ShipTypeValues } from '../../../models/ship'
import { SearchShipRequest } from './types'

export * from './types'

class FuseSearch {
  private options = { keys: ['name'], includeScore: true }
  private index = Fuse.createIndex(this.options.keys, ShipsData)

  private matchList: Array<FuseResult<ShipData>> | null = null

  public setQuery = (query: string | undefined) => {
    if (query) {
      const fuse = new Fuse(ShipsData, this.options, this.index)
      this.matchList = fuse.search<ShipData>(query)
    } else {
      this.matchList = null
    }
  }

  public filter = (ship: ShipData) => {
    if (this.matchList === null) return true
    return this.matchList.some(({ item: { no } }) => no === ship.no)
  }

  public sort = (a: ShipData, b: ShipData) => {
    if (this.matchList === null) return 0

    const aScore =
      this.matchList.find(({ item: { no } }) => no === a.no)?.score ?? 1
    const bScore =
      this.matchList.find(({ item: { no } }) => no === b.no)?.score ?? 1

    return aScore > bScore ? 1 : aScore < bScore ? -1 : 0
  }
}

class TypeSearch {
  private type: ShipTypeValues[] | null = null

  public setType = (value: ShipTypeValues[] | undefined) => {
    this.type = value ?? null
  }

  public filter = (ship: ShipData) => {
    if (this.type === null) return true
    return this.type.some((v) => v === ship.type)
  }

  public sort = (a: ShipData, b: ShipData) => {
    const aType = a.type
    const bType = b.type
    return aType > bType ? 1 : aType < bType ? -1 : 0
  }
}

class ShipSearchClass {
  private FuseSearch = new FuseSearch()
  private TypeSearch = new TypeSearch()

  public search = (request: SearchShipRequest) => {
    if (!request) return ShipsData

    this.FuseSearch.setQuery(request.q)
    this.TypeSearch.setType(request.type)

    return ShipsData.filter(this.filter).sort(this.sort)
  }

  /**
   * フィルタ
   *
   * @param shipData
   */
  private filter = (shipData: ShipData) =>
    this.FuseSearch.filter(shipData) && this.TypeSearch.filter(shipData)

  /**
   * ソート
   *
   * 以下の順でソート
   * - 検索スコア
   * - 艦種
   * - 国籍
   * - クラス
   * - 姉妹順
   *
   * @param ShipA
   * @param ShipB
   */
  private sort = (a: ShipData, b: ShipData) =>
    this.FuseSearch.sort(a, b) || this.TypeSearch.sort(a, b)
}

export const ShipSearch = new ShipSearchClass()
