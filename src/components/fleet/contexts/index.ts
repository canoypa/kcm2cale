import { createContext } from "react";
import { Equipment } from "../../../models/equipment";
import { Fleet } from "../../../models/fleet";
import { Ship } from "../../../models/ship";

export type FleetContextValue = Fleet | null | undefined;
export type ShipsContextValue = Ship[] | null | undefined;
export type EquipmentsContextValue = Equipment[] | null | undefined;

export const FleetContext = createContext<FleetContextValue>(undefined);
export const ShipsContext = createContext<ShipsContextValue>(undefined);
export const EquipmentsContext = createContext<EquipmentsContextValue>(
  undefined
);
