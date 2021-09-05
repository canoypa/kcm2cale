import { array, literal, number, object, string, union } from "zod";

export const ShipDoc = object({
  fleetNo: union([literal(0), literal(1)]),
  turnNo: number().min(0).max(6),
  no: string(),
});

export const ShipDocs = array(ShipDoc);
