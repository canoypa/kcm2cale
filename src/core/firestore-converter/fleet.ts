import { FirestoreDataConverter } from "firebase/firestore";
import { Fleet } from "../../models/fleet";

export const FirestoreFleetConverter: FirestoreDataConverter<Fleet> = {
  toFirestore: () => ({}),
  fromFirestore: (snapshot) => {
    // Todo: バリデーション
    const data = snapshot.data({ serverTimestamps: "estimate" });

    const title = data.title;
    const description = data.description;
    const type = data.type;

    const createdAt = data.createdAt.toDate();
    const updatedAt = data.updatedAt.toDate();

    return {
      id: snapshot.id,
      owner: data.owner,

      title,
      description,
      type,

      createdAt,
      updatedAt,
    };
  },
};
