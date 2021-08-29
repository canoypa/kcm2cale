import { Timestamp } from "firebase/firestore";
import {
  array,
  instanceof as zodInstanceof,
  literal,
  object,
  string,
  union,
} from "zod";

const FleetType = union([
  literal("normal"),
  literal("carrier"),
  literal("surface"),
  literal("transport"),
  literal("striking"),
]);

export const FleetDoc = object({
  version: literal(1),

  owner: string(),

  title: string(),
  description: string(),
  type: FleetType,

  createdAt: zodInstanceof(Timestamp),
  updatedAt: zodInstanceof(Timestamp),
});

export const FleetDocs = array(FleetDoc);
