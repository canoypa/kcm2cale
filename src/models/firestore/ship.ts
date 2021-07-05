import * as t from "runtypes";

export const ShipDoc = t.Record({
  fleetNo: t.Number,
  turnNo: t.Number,
  no: t.String,
  id: t.String,
});

export const ShipColl = t.Array(ShipDoc);
