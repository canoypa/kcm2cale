import { createInstance } from 'localforage'
import { coerceJson } from '~/util/zod'
import { FleetSchema } from './schema'
import { LocalFleetDataV1 } from './types'

type FleetDataOmitDate = Omit<
  LocalFleetDataV1,
  'version' | 'createdAt' | 'updatedAt'
>

interface LocalDatabase {
  getAllFleet: () => Promise<LocalFleetDataV1[]>
  getFleet: (id: string) => Promise<LocalFleetDataV1 | null>
  setFleet: (id: string, data: FleetDataOmitDate) => Promise<void>
  updateFleet: (id: string, data: Partial<FleetDataOmitDate>) => Promise<void>
  deleteFleet: (id: string) => Promise<void>
}

/** Local Database */
class LocalDatabaseClass implements LocalDatabase {
  private readonly DATABASE_NAME = 'KCM2CALE_LOCAL_PERSISTENCE'
  private readonly FLEET_STORE_NAME = 'fleets'

  private fleetStore = createInstance({
    name: this.DATABASE_NAME,
    storeName: this.FLEET_STORE_NAME,
  })

  public getAllFleet = async () => {
    const result: LocalFleetDataV1[] = []
    await this.fleetStore.iterate<LocalFleetDataV1, unknown>((v) => {
      // 正常に保存されてれば正常にパースできるので、とりあえず良しとする
      const parsed = coerceJson.pipe(FleetSchema).safeParse(v)
      if (parsed.success) {
        result.push(parsed.data)
      }
    })
    return result
  }

  // Todo: ちゃんとした変換処理作れ
  // 変換するので LocalFleetData は圧縮か？
  public getFleet = async (key: string) => {
    const fleetData = await this.fleetStore.getItem<LocalFleetDataV1>(key)

    // 正常に保存されてれば正常にパースできるので、とりあえず良しとする
    const parsed = coerceJson.pipe(FleetSchema).safeParse(fleetData)
    if (parsed.success) {
      return parsed.data
    }

    return null
  }

  public setFleet = async (key: string, data: FleetDataOmitDate) => {
    const date = new Date()
    const newFleetData: LocalFleetDataV1 = {
      ...data,
      version: 1,
      createdAt: date,
      updatedAt: date,
    }
    await this.fleetStore.setItem<LocalFleetDataV1>(key, newFleetData)
  }

  public updateFleet = async (
    key: string,
    data: Partial<FleetDataOmitDate>,
  ) => {
    const date = new Date()

    const preFleetData = await this.fleetStore.getItem<LocalFleetDataV1>(key)
    if (preFleetData === null) {
      throw new Error('Error: 更新対象の艦隊データが存在しない')
    }

    const newFleetData: LocalFleetDataV1 = {
      ...preFleetData,
      ...data,
      updatedAt: date,
    }
    await this.fleetStore.setItem<LocalFleetDataV1>(key, newFleetData)
  }

  public deleteFleet = async (key: string) => {
    await this.fleetStore.removeItem(key)
  }

  public fleetLength = async () => {
    return await this.fleetStore.length()
  }
}
export const LocalDatabase = new LocalDatabaseClass()
