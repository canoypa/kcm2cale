import { createContext } from "react";
import { FireEquipment, FireFleet, FireShip } from "../../../models/fleet";

export type FleetContextValue = FireFleet | null | undefined;
export type ShipsContextValue = FireShip[] | null | undefined;
export type EquipmentsContextValue = FireEquipment[] | null | undefined;

export const FleetContext = createContext<FleetContextValue>(undefined);
export const ShipsContext = createContext<ShipsContextValue>(undefined);
export const EquipmentsContext = createContext<EquipmentsContextValue>(
  undefined
);
