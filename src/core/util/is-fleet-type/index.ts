import { FleetType } from "../../../store/organize/info";

export const isFleetType = (v: string): v is FleetType =>
  Object.values(FleetType).some((type) => type === v);
