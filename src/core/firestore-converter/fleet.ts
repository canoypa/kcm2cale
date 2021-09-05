import { FirestoreDataConverter } from "firebase/firestore";
import { Fleet } from "~/models/fleet/types";
import { FleetDoc } from "../../models/firestore/fleet";

export const FirestoreFleetConverter: FirestoreDataConverter<Fleet> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data({ serverTimestamps: "previous" });

    // バリデーション
    const fleet = FleetDoc.transform((v) => ({
      ...v,
      id: snapshot.id,
      createdAt: v.createdAt.toDate(),
      updatedAt: v.updatedAt.toDate(),
    })).parse(data);

    return fleet;
  },
};
