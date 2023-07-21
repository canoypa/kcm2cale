import { FleetType } from '../../models/fleet'

/** ローカル保存用データ構造 */
export type LocalFleetDataV1 = {
  /** Data Version */
  version: 1
  /** Fleet Id */
  id: string
  /** Fleet Type */
  type: FleetType
  /** Fleet Title */
  title: string
  /** Fleet description */
  description: string
  createdAt: Date
  updatedAt: Date

  /** Ships */
  ships: Array<{
    /** Fleet No */
    fleetNo: number
    /** Turn No */
    turnNo: number
    /** Ship No */
    no: string
    /** Ship Status */
    // status: [
    //   level: number,
    //   hp: number,
    //   power: number,
    //   torpedo: number,
    //   aa: number,
    //   armor: number,
    //   luck: number
    // ];
    /** Equipments */
    equipments: Array<{
      /** Slot No */
      slotNo: number
      /** Equipment No */
      no: number
      /** Equipment Status */
      // status: [proficiency: number, improvement: number];
    }>
  }>
}
