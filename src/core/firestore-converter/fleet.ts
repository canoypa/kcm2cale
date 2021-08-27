import { FirestoreDataConverter } from "firebase/firestore";
import { FleetDoc } from "../../models/firestore/fleet";
import { Fleet } from "../../models/fleet";

export const FirestoreFleetConverter: FirestoreDataConverter<Fleet> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    const data = snapshot.data({ serverTimestamps: "previous" });

    // バリデーション
    const fleet = FleetDoc.check(data);

    const title = data.title;
    const description = data.description;
    const type = data.type;

    return {
      id: snapshot.id,
      owner: data.owner,

      title,
      description,
      type,

      createdAt: fleet.createdAt.toDate(),
      updatedAt: fleet.updatedAt.toDate(),
    };
  },
};
