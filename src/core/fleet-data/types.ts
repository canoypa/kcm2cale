import { FleetType } from "../../store/organize/info";

export interface FleetData {
  /** Fleet Id */
  id: string;

  /** Fleet Type */
  type: FleetType;
  /** Fleet Title */
  title: string;
  /** Fleet description */
  description: string;

  /** Create Date */
  createdAt: Date;
  /** Update Date */
  updatedAt: Date;

  /** Ships */
  ships: Array<{
    /** Fleet No */
    fleetNo: number;
    /** Turn No */
    turnNo: number;
    /** Ship No */
    no: string;
    /** Equipments */
    equipments: Array<{
      /** Slot No */
      slotNo: number;
      /** Equipment No */
      no: number;
    }>;
  }>;
}
