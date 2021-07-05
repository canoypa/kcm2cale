import * as t from "runtypes";
import { firebase } from "../../core/firebase/app";

const FleetType = t.Union(
  t.Literal("Normal"),
  t.Literal("Carrier"),
  t.Literal("Surface"),
  t.Literal("Transport"),
  t.Literal("StrikingForce")
);

export const FleetDoc = t.Record({
  version: t.Number,

  id: t.String,
  owner: t.String,

  title: t.String,
  description: t.String,
  type: FleetType,

  createdAt: t.InstanceOf(firebase.firestore.Timestamp),
  updatedAt: t.InstanceOf(firebase.firestore.Timestamp),
});

export const FleetColl = t.Array(FleetDoc);
