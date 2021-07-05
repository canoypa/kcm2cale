import * as t from "runtypes";

export const EquipmentDoc = t.Record({
  shipId: t.String,
  slotNo: t.Number,
  no: t.Number,
  id: t.String,
});

export const EquipmentColl = t.Array(EquipmentDoc);
