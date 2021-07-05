import { FleetDoc } from "../../models/firestore/fleet";
import { Fleet } from "../../models/fleet";
import { firebase } from "../firebase/app";

export const FirestoreFleetConverter: firebase.firestore.FirestoreDataConverter<Fleet> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data({ serverTimestamps: "previous" });

    // バリデーション
    const fleet = FleetDoc.check(data);

    return {
      ...fleet,

      createdAt: fleet.createdAt.toDate(),
      updatedAt: fleet.updatedAt.toDate(),
    };
  },
};
