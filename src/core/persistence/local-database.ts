import { createInstance } from "localforage";
import { FleetData } from "../fleet-data/types";
import { LocalFleetData_v1 } from "./types";

type FleetDataOmitDate = Omit<FleetData, "createdAt" | "updatedAt">;

interface LocalDatabase {
  getAllFleet: () => Promise<FleetData[]>;
  getFleet: (id: string) => Promise<FleetData | null>;
  setFleet: (id: string, data: FleetDataOmitDate) => Promise<void>;
  updateFleet: (id: string, data: Partial<FleetDataOmitDate>) => Promise<void>;
  deleteFleet: (id: string) => Promise<void>;
}

/** Local Database */
class LocalDatabaseClass implements LocalDatabase {
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

  // Todo: ちゃんとした変換処理作れ
  // 変換するので LocalFleetData は圧縮か？
  public getFleet = async (key: string) => {
    const fleet = await this.fleetStore.getItem<LocalFleetData_v1>(key);
    if (!fleet) return null;

    const { version, ...fleetData } = fleet;

    return fleetData;
  };

  public setFleet = async (key: string, data: FleetDataOmitDate) => {
    const date = new Date();
    const newFleetData: LocalFleetData_v1 = {
      version: 1,
      createdAt: date,
      updatedAt: date,
      ...data,
    };
    await this.fleetStore.setItem<LocalFleetData_v1>(key, newFleetData);
  };

  public updateFleet = async (
    key: string,
    data: Partial<FleetDataOmitDate>
  ) => {
    const date = new Date();

    const preFleetData = await this.fleetStore.getItem<LocalFleetData_v1>(key);
    if (preFleetData === null) {
      throw new Error("Error: 更新対象の艦隊データが存在しない");
    }

    const newFleetData: LocalFleetData_v1 = {
      ...preFleetData,
      ...data,
      updatedAt: date,
    };
    await this.fleetStore.setItem<LocalFleetData_v1>(key, newFleetData);
  };

  public deleteFleet = async (key: string) => {
    await this.fleetStore.removeItem(key);
  };

  public fleetLength = async () => {
    return await this.fleetStore.length();
  };
}
export const LocalDatabase = new LocalDatabaseClass();
