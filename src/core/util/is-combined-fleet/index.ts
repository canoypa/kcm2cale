import { FleetType } from '../../../models/fleet'

export const isCombinedFleet = (fleetType: FleetType) =>
  fleetType === FleetType.Carrier ||
  fleetType === FleetType.Surface ||
  fleetType === FleetType.Transport
