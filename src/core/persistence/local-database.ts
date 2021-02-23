import { createInstance } from "localforage";
import { LocalFleetData_v1 } from "./types";

/** Local Database */
class LocalDatabaseClass {
  private readonly DATABASE_NAME = "KCM2CALE_LOCAL_PERSISTENCE";
  private readonly FLEET_STORE_NAME = "fleets";

  private fleetStore = createInstance({
    name: this.DATABASE_NAME,
    storeName: this.FLEET_STORE_NAME,
  });

  public getAllFleet = async () => {
    const result: LocalFleetData_v1[] = [];
    await this.fleetStore.iterate<LocalFleetData_v1, unknown>((v) => {
      result.push(v);
    });
    return result;
  };

  public getFleet = (key: string) =>
    this.fleetStore.getItem<LocalFleetData_v1>(key);

  public setFleet = (key: string, data: LocalFleetData_v1) =>
    this.fleetStore.setItem(key, data);

  public updateFleet = async (
    key: string,
    data: Partial<LocalFleetData_v1>
  ) => {
    const preFleetData = await this.fleetStore.getItem<LocalFleetData_v1>(key);
    if (preFleetData === null) {
      throw new Error("Error: 更新対象の艦隊データが存在しない");
    }

    const newFleetData: LocalFleetData_v1 = { ...preFleetData, ...data };
    return this.fleetStore.setItem<LocalFleetData_v1>(key, newFleetData);
  };

  public deleteFleet = (key: string) => this.fleetStore.removeItem(key);
}
export const LocalDatabase = new LocalDatabaseClass();
