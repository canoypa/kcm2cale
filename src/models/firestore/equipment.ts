import { array, number, object, string } from "zod";

export const EquipDoc = object({
  shipId: string(),
  slotNo: number(),
  no: number(),
});

export const EquipDocs = array(EquipDoc);
