import { FleetType } from '../../../models/fleet'

export const isFleetType = (v: string): v is FleetType =>
  Object.values(FleetType).some((type) => type === v)
