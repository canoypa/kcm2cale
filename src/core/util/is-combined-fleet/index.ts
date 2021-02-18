import { FleetType } from "../../../store/organize/info";

export const isCombinedFleet = (fleetType: FleetType) =>
  fleetType === FleetType.Carrier ||
  fleetType === FleetType.Surface ||
  fleetType === FleetType.Transport;
